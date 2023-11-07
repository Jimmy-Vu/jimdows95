import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setAboutMeOpenState, setAboutMeMaxState, selectAboutMeOpenState, selectAboutMeMaxState } from "../../app/appSlice";
import ZIndexCheck from "./lib/ZIndexCheck";
import aboutMeIcon from "/src/assets/about-me-icon.png";

export default function AboutMe() {
  const aboutMeOpenState = useAppSelector(selectAboutMeOpenState);
  const aboutMeMaxState = useAppSelector(selectAboutMeMaxState);
  const zIdx = ZIndexCheck('aboutMe');

  const content =
    <div className="about-me">
      <h1 className="about-me__heading">About Me</h1>
      <section className="about-me__text">
        <p>Hey there! I'm Jimmy, your friendly neighborhood software engineer, and all-around tech enthusiast.</p>
        <p>
          From my days of youthful curiosity to the present, I've always been a bit of a tech wizard.
          I have been the go-to person for solving technical problems for most of my life
          &#40;though don't ask me to hack your ex's Facebook account because I already turned down that request once already&#41;.
        </p>
        <p>
          My tech journey officially kicked off when I became an IT Specialist at a cloud-based PaaS company. There,
          I was knee-deep in servers and data centers, rubbing elbows with bright software developing minds.
          Their finesse and brilliance inspired me to dive deeper into the world of software.
          So, I made a pivotal decision to enroll in a software development program,
          laying the foundation for my full-stack web development skills.
        </p>
        <p>
          Since then, I've been on a relentless quest to expand my tech prowess.
          I've built mobile-responsive web applications, devoured technical books,
          and stayed up to date with the latest web development trends through podcasts and newsletters.
        </p>
        <p>
          When I'm not immersed in lines of code, you'll find me lost in the pages of Brandon Sanderson's novels,
          crafting my own fiction, pumping iron at the gym, or tinkering with electronics.
        </p>
        <p>
          I invite you to explore my corner of the web and get in touch through
          LinkedIn, Twitter, or how the pioneers used to do in the 90s: good ol' email.
        </p>
        <p>
          Thanks for stopping by!
          <br />
          - Jimmy
        </p>
      </section>
    </div>;

  return (
    <WindowFrame
      title="About Me"
      id="aboutMe"
      zIdx={zIdx}
      icon={aboutMeIcon}
      content={content}
      defaultSize={{ width: 700, height: 500 }}
      state={{ openState: aboutMeOpenState, maxState: aboutMeMaxState }}
      setOpenFunc={setAboutMeOpenState}
      setMaxFunc={setAboutMeMaxState}
    />
  );
}
