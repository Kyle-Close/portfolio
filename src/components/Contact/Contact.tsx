import React from 'react';
import { links } from '../../data/siteData';
import Section, { Reveal } from '../Section';
import { GitHubIcon, LinkedInIcon, MailIcon, SendIcon } from '../Icons';
import './Contact.css';

const FORMSPREE_URL = 'https://formspree.io/f/xwvnlqwp';

type Field = 'name' | 'email' | 'message';
type SubmitStatus = 'idle' | 'submitting' | 'submitted' | 'error';

const initForm: Record<Field, string> = { name: '', email: '', message: '' };

const validators: Record<Field, (v: string) => string | null> = {
  name: (v) => (/^[A-Za-z ]{1,30}$/.test(v) ? null : 'must contain only letters & spaces'),
  email: (v) => (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v) ? null : 'must be a valid email'),
  message: (v) => (v.trim().length > 0 ? null : 'cannot be blank'),
};

const channels = [
  { label: 'email', value: links.email, href: `mailto:${links.email}`, Icon: MailIcon, external: true },
  { label: 'linkedin', value: 'in/kyle-close', href: links.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'github', value: 'Kyle-Close', href: links.github, Icon: GitHubIcon, external: true },
];

function Contact() {
  const [form, setForm] = React.useState(initForm);
  const [errors, setErrors] = React.useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = React.useState<SubmitStatus>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as Field;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === 'error') setStatus('idle');
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Partial<Record<Field, string>> = {};
    (Object.keys(validators) as Field[]).forEach((f) => {
      const err = validators[f](form[f]);
      if (err) nextErrors[f] = err;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('submitted');
        setForm(initForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const disabled = status === 'submitting';

  const field = (name: Field, label: string, multiline = false) => (
    <div className={`cf-field${errors[name] ? ' has-error' : ''}`}>
      <label htmlFor={`cf-${name}`} className="cf-label mono">
        <span className="cf-q">?</span> {label} <span className="cf-arrow">›</span>
      </label>
      {multiline ? (
        <textarea
          id={`cf-${name}`}
          name={name}
          rows={5}
          value={form[name]}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
          placeholder="Hi Kyle, ..."
        />
      ) : (
        <input
          id={`cf-${name}`}
          name={name}
          type={name === 'email' ? 'email' : 'text'}
          autoComplete={name === 'email' ? 'email' : 'name'}
          value={form[name]}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
        />
      )}
      {errors[name] && (
        <span id={`cf-${name}-err`} className="cf-error mono">
          ✗ {label}: {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <Section id="contact" index="03" file="contact.sh" caption="/* say hello — my inbox is open */">
      <div className="contact-grid">
        <Reveal className="contact-copy">
          <p className="contact-lead">
            Get in touch! Whether it's an opportunity or just to chat, I'd love to hear from you.
          </p>
          <ul className="contact-channels">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="channel"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="channel-icon">
                    <Icon />
                  </span>
                  <span className="channel-text mono">
                    <span className="channel-label">{label}</span>
                    <span className="channel-value">{value}</span>
                  </span>
                  <span className="channel-go mono" aria-hidden>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="contact-form-wrap">
          <div className="window">
            <div className="window-bar">
              <span className="window-dots" aria-hidden>
                <i />
                <i />
                <i />
              </span>
              <span className="window-title mono">./contact.sh --interactive</span>
              <span className="window-dots-spacer" />
            </div>

            {status === 'submitted' ? (
              <div className="cf-done mono" role="status">
                <p>
                  <span className="term-user">✓</span> message sent <span className="tok-comment">(200 OK)</span>
                </p>
                <p className="term-dim">Thanks for reaching out! I'll get back to you soon.</p>
                <button type="button" className="btn" onClick={() => setStatus('idle')}>
                  send another
                </button>
              </div>
            ) : (
              <form className="cf" onSubmit={onSubmit} noValidate>
                {field('name', 'name')}
                {field('email', 'email')}
                {field('message', 'message', true)}

                {status === 'error' && (
                  <p className="cf-error cf-error-banner mono" role="alert">
                    ✗ error: something went wrong. please try again.
                  </p>
                )}

                <button type="submit" className="btn btn-primary cf-submit" disabled={disabled}>
                  {disabled ? <span className="spinner" aria-hidden /> : <SendIcon />}
                  {disabled ? 'sending…' : 'send_message()'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
