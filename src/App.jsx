import { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState("");
  const [activity, setActivity] = useState("");
  const [style, setStyle] = useState("");
  const [mood, setMood] = useState("");
  const [showResult, setShowResult] = useState(false);

  function findOutfit() {
    setShowResult(true);
  }

  function chooseAgain() {
    setShowResult(false);
  }

  let outfit = ["👕", "👖", "👟"];
  let clothes = ["T-Shirt", "Celana Panjang", "Sneakers"];
  let title = "Campus Casual";
  let description = "Outfit nyaman untuk aktivitas kampus.";

  if (activity === "presentasi") {
    outfit = ["👔", "👖", "👞"];
    clothes = ["Kemeja", "Celana Bahan", "Sepatu"];
    title = "Presentation Ready";
    description = "Gaya rapi untuk tampil percaya diri di depan kelas.";
  }

  if (activity === "praktikum") {
    outfit = ["👕", "👖", "👟"];
    clothes = ["T-Shirt", "Celana Panjang", "Sneakers"];
    title = "Practical Day";
    description = "Outfit nyaman untuk aktivitas praktikum.";
  }

  if (activity === "nongkrong") {
    outfit = ["👕", "👖", "👟"];
    clothes = ["T-Shirt", "Jeans", "Sneakers"];
    title = "Campus Hangout";
    description = "Santai dan cocok untuk nongkrong setelah kuliah.";
  }

  if (weather === "hujan") {
    outfit = ["🧥", "👖", "👟"];
    clothes = ["Jaket", "Celana Panjang", "Sneakers"];
    title = "Rainy Campus";
    description = "Siap untuk aktivitas kampus saat hujan.";
  }

  if (style === "smart") {
    outfit = ["👔", "👖", "👞"];
    clothes = ["Kemeja", "Celana Panjang", "Sepatu"];
    title = "Smart Campus";
    description = "Gaya rapi tetapi tetap nyaman untuk kuliah.";
  }

  if (style === "simple") {
    outfit = ["👕", "👖", "👟"];
    clothes = ["T-Shirt Polos", "Celana Panjang", "Sneakers"];
    title = "Simple Campus";
    description = "Simple, praktis, dan mudah dipadukan.";
  }

  if (mood === "mager") {
    outfit = ["👕", "👖", "👟"];
    clothes = ["T-Shirt Nyaman", "Celana Santai", "Sneakers"];
    title = "Mager but Ready";
    description = "Tetap nyaman walaupun mood sedang ingin rebahan.";
  }

  if (mood === "telat") {
    outfit = ["👕", "👖", "👟"];
    clothes = ["T-Shirt", "Jeans", "Sneakers"];
    title = "Emergency Outfit";
    description = "Waktu mepet? Pilih outfit simpel dan langsung berangkat!";
  }

  if (showResult) {
    return (
      <div className="result-page">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

        <p className="mini-title">CAMPUSFIT • YOUR DAILY LOOK</p>

        <div className="result-card">
          <p className="result-label">YOUR OUTFIT FOR TOMORROW</p>

          <div className="outfit">
            <span>{outfit[0]}</span>
            <span>{outfit[1]}</span>
            <span>{outfit[2]}</span>
          </div>

          <h1>{title}</h1>

          <h2>
            {clothes[0]} <b>+</b> {clothes[1]} <b>+</b> {clothes[2]}
          </h2>

          <p className="description">{description}</p>

          <div className="tip">
            ✦ Mix it, match it, make it yours.
          </div>

          <button onClick={chooseAgain}>
            ↻ PILIH LAGI
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="hero">
        <p className="brand">CAMPUSFIT</p>

        <span className="small-text">YOUR DAILY CAMPUS OUTFIT</span>

        <h1>
          Besok
          <br />
          <i>pakai apa?</i>
        </h1>

        <p className="intro">
          Pilih suasana harimu dan temukan outfit
          <br />
          yang cocok untuk menemani aktivitas kampusmu.
        </p>
      </div>

      <div className="form">
        <div className="section">
          <div className="section-title">
            <span>01</span>
            <h3>🌤️ Cuaca</h3>
          </div>

          <button onClick={() => setWeather("cerah")}>
            ☀️ Cerah
          </button>

          <button onClick={() => setWeather("mendung")}>
            ☁️ Mendung
          </button>

          <button onClick={() => setWeather("hujan")}>
            🌧️ Hujan
          </button>
        </div>

        <div className="section">
          <div className="section-title">
            <span>02</span>
            <h3>📚 Aktivitas</h3>
          </div>

          <button onClick={() => setActivity("kuliah")}>
            📖 Kuliah
          </button>

          <button onClick={() => setActivity("praktikum")}>
            💻 Praktikum
          </button>

          <button onClick={() => setActivity("presentasi")}>
            🎤 Presentasi
          </button>

          <button onClick={() => setActivity("nongkrong")}>
            ☕ Nongkrong
          </button>
        </div>

        <div className="section">
          <div className="section-title">
            <span>03</span>
            <h3>🎨 Style</h3>
          </div>

          <button onClick={() => setStyle("casual")}>
            👕 Casual
          </button>

          <button onClick={() => setStyle("smart")}>
            ✨ Smart Casual
          </button>

          <button onClick={() => setStyle("simple")}>
            🖤 Simple
          </button>
        </div>

        <div className="section">
          <div className="section-title">
            <span>04</span>
            <h3>😴 Mood</h3>
          </div>

          <button onClick={() => setMood("santai")}>
            😎 Santai
          </button>

          <button onClick={() => setMood("semangat")}>
            🔥 Semangat
          </button>

          <button onClick={() => setMood("mager")}>
            😴 Mager
          </button>

          <button onClick={() => setMood("telat")}>
            😭 Telat Bangun
          </button>
        </div>

        <button
          className="find"
          onClick={findOutfit}
          disabled={!weather || !activity || !style || !mood}
        >
          TEMUKAN OUTFIT <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default App;