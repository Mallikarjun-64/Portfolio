import { useEffect } from "react";
import AchievementItem from "../components/AchievementItem";
import { achievementData } from "../data/achievementsData";
function Achievements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {achievementData.map((data) => (
          <div key={data.title}>
            <AchievementItem
              images={data.images}
              title={data.title}
              date={data.date}
              desc={data.desc}
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default Achievements;
