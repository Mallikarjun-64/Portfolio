import { useEffect } from "react";
import {
  backendSkillsData,
  devopsSkillsData,
  frontendSkillsData,
  programmingLangSkillsData,
  cybersecuritySkillsData,
} from "../data/skills";
import SkillsItems from "../components/SkillsItems";

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <article className="skills active" data-page="skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      <SkillsItems title="Frontend" skillsData={frontendSkillsData} />
      <SkillsItems title="Backend & Databases" skillsData={backendSkillsData} />
      <SkillsItems title="Cybersecurity" skillsData={cybersecuritySkillsData} />
      <SkillsItems title="Tools & DevOps" skillsData={devopsSkillsData} />
      <SkillsItems
        title="Programming Languages"
        skillsData={programmingLangSkillsData}
      />
    </article>
  );
}

export default Skills;
