import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setAboutMeState, selectAboutMeState } from "../../app/appSlice";

export default function AboutMe() {
  const aboutMeState = useAppSelector(selectAboutMeState);

  const content =
    <div className="about-me">
      <h1 className="about-me__heading">About Me</h1>
      <section className="about-me__text">
        <p>Hi there! My name is Jimmy, your friendly neighborhood software engineer.</p>
        <p>
          I've been a naturally curious tinkerer and problem solver since my days of youthful splendor. Yes, I was that guy who everyone came to with technical issues.
          &#40;Someone once asked me to hack a FaceBook account. Needless to say, I definitely didn't take the request.&#41;
        </p>
        <p>
          My journey in tech began when I was an IT Specialist at a cloud-based PaaS company, deploying and maintaining servers at the on-site data center.
          It was there that I got to rub elbows with bright minded software engineers and gained inspiration to deepen my understanding of software. After heavy deliberation,
          I enrolled in an intensive 14-week software engineering program, laying a solid foundation in full stack web development.
        </p>
        <p>
          Since graduating, I have continued a relentless pursuit to expand my skills and intimate understanding of software by constructing mobile-responsive web applications,
          reading technical books, and staying up to date with modern web development with podcasts and newsletters.
        </p>
        <p>Whenever I'm not writing or consuming code, you can catch me reading Brandon Sanderson novels, writing fiction, lifting weights, or messing around with electronics.</p>
        <p>I hope you enjoy exploring my little corner of the web. Please feel free to contact me through my LinkedIn, Twitter, or just like how they did it back in the 90s by sending
          an email to <a style={{color: 'blue'}} href="mailto:contact@jimmyvu.co">contact@jimmyvu.co</a>!
        </p>

        <p>- Jimmy</p>
      </section>
    </div>;

  return (
    <WindowFrame
      title="About Me"
      icon="src/assets/about-me-icon.png"
      content={content}
      state={aboutMeState}
      setFunc={setAboutMeState}
    />
  );
}
