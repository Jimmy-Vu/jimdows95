import WindowFrame from "./WindowFrame";

export default function AboutMe() {
  const content =
    <div className="about-me">
      <h1 className="about-me__heading">About Me</h1>
      <section className="about-me__text">
        <p>Hi there! My name is Jimmy.</p>
        <p>I've been a naturally curious tinkerer since my days of youthful splendor. From being the guy who everyone came to with technical issues.
          &#40;Someone once asked me to hack a FaceBook account. Needless to say, I definitely didn't.&#41; </p>
        <p>My journey in tech began when I was an IT Specialist at a cloud-based PaaS company.</p>
        <p>Whenever I'm not writing or consuming code, you can catch me reading Brandon Sanderson novels, lifting weights, or messing around with electronics.</p>
      </section>
    </div>;

  return (
    <WindowFrame
      title="About Me"
      icon="src/assets/about-me-icon.png"
      content={content}
    />
  );
}
