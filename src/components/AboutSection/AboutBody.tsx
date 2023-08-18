import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

function AboutBody() {
  return (
    <>
      <Typography variant="body1" style={{ margin: "0" }}>
        Hello, my name is Kyle. I’m a computer engineering graduate currently
        working as a software developer in Canada. Although my professional work
        involves a broader range of software development, I've always been
        particularly interested in web development.
      </Typography>
      <Typography variant="body1">
        After graduating, I was eager to deepen my knowledge about the web.
        That's when I discovered{" "}
        <Link href="https://www.theodinproject.com">The Odin Project,</Link> an
        open-source, self-guided course that resonated with my desire for a
        comprehensive, project-based learning experience.
      </Typography>
      <Typography variant="body1">
        The Odin Project has guided me in my self-learning journey. In the next
        section you can find projects that I’ve built throughout the course, as
        well as personal passion projects.
      </Typography>
    </>
  );
}

export default AboutBody;
