import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home-section">
      <h1 className="home-title fade-in-1">
  Hi, I'm Tsehaynesh Biruh
</h1>
<p className="home-subtitle fade-in-2">
  I am FullStack / DevOps / UI / UX Developer
</p>

      
      <div className="home-links fade-in-3">
        <a href="https://github.com/tsi1221" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="btn">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="btn">
          LinkedIn
        </a>
        <a href="https://t.me/ts_e_ha_y_nesh" target="_blank" rel="noreferrer" aria-label="Telegram Profile" className="btn">
          Telegram
        </a>
        <a href="https://hub.docker.com/u/tbiruh1221" target="_blank" rel="noreferrer" aria-label="Docker Hub Profile" className="btn docker-btn">
          🐳 Docker Hub
</a>

      </div>
    </section>
  );
}
