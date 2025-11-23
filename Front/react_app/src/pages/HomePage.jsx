import Header from "../components/Header";
import games from "../data/games.json";
import GameCard from "../components/GameCard";
import GameCarousel from "../components/GameCarousel";

export default function HomePage() {
  const bannerImages = games.map(g => g.thumbnail); 
  // ← ここに注目：画像が増えても自動で反映される！！

  return (
    <div>
      <Header />

      {/* カルーセル */}
      <div style={{ margin: "20px 0" }}>
        <GameCarousel images={bannerImages} />
      </div>

      {/* ゲーム一覧 */}
      <div style={{ padding: 20 }}>
        <h2>人気のゲーム</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </div>
    </div>
  );
}