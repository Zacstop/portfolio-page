import { profile } from "@/data/profile";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-profile">
        <div className="hero-profile-inner">{profile.initials}</div>
      </div>
      <div className="hero-status">
        <span className="dot" />
        {profile.hero.statusLine}
      </div>
      <div className="hero-pre">
        <span className="accent">&gt;</span> {profile.hero.preLine}
      </div>
      <h1>{profile.name}</h1>
      <p
        className="hero-sub"
        dangerouslySetInnerHTML={{ __html: profile.hero.sublineHTML }}
      />
      <div className="hero-stats">
        {profile.stats.map((stat, i) => (
          <div className="hero-stat" key={i}>
            <div className="hero-stat-number">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="hero-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-dot" />
      </div>
    </section>
  );
}
