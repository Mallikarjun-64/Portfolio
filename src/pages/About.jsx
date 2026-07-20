import { useEffect } from "react";
import TimeLine from "../components/TimeLine";
import { educationData } from "../data/education";
import { experienceData } from "../data/experience";
import ServiceItems from "../components/ServiceItems";
import { servicesData } from "../data/serviceItems";
import ResumeButton from "../components/ResumeButton";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Software Engineer with experience in web, app development and
          Cybersecurity, skilled in building scalable and secured solutions and
          solving real-world problems. Passionate about learning new technologies
          and delivering impactful results. Multiple-time national-level
          hackathon and coding event winner with hands-on experience in secure
          coding, vulnerability assessment, and full-stack development.
        </p>
      </section>

      <ResumeButton />

      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <ServiceItems servicesData={servicesData} />
        </ul>
      </section>

      {/* Education */}
      <TimeLine title="Education" data={educationData} />

      {/* Experience */}
      <TimeLine title="Experience" data={experienceData} />
    </article>
  );
}

export default About;
