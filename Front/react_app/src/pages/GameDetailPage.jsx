import { useParams, useNavigate } from "react-router-dom";
import games from "../data/games.json";
import Header from "../components/Header";
import { Button, Chip, Typography, Divider } from "@mui/material";
import GameCarousel from "../components/GameCarousel";
import { useInView } from "react-intersection-observer";

export default function GameDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === Number(id));

  if (!game) return (
    <div>
      <Header />
      <div style={{ padding: 20, color: "white" }}>
        <h2>ゲームが見つかりません</h2>
        <Button variant="contained" onClick={() => navigate("/")}>
          ホームに戻る
        </Button>
      </div>
    </div>
  );

  const dev = game.development;

  // アニメーション用コンポーネント
  const DetailItem = ({ title, content }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
          marginBottom: "30px"
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ borderBottom: "1px solid #555", paddingBottom: "4px" }}>
          {title}
        </Typography>
        {typeof content === "object" && !Array.isArray(content) ? (
          <div style={{ marginLeft: "10px" }}>
            {Object.entries(content).map(([subKey, subVal], idx) => (
              <Typography key={idx} variant="body1">
                <strong>{subKey}:</strong> {subVal}
              </Typography>
            ))}
          </div>
        ) : Array.isArray(content) ? (
          <ul style={{ marginLeft: "20px" }}>
            {content.map((v, i) => <li key={i}>{v}</li>)}
          </ul>
        ) : (
          <Typography variant="body1" sx={{ marginLeft: "10px" }}>{content}</Typography>
        )}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#1b2838", minHeight: "100vh", color: "white" }}>
      <Header />

      {/* 上部：カルーセル + 簡単説明 */}
      <div style={{ display: "flex", gap: "40px", padding: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <GameCarousel images={[game.thumbnail, ...(game.screenshots || [])]} />
        </div>

        <div style={{ flex: 1, minWidth: 300 }}>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "10px 0" }}>
            {game.tags.map((tag, idx) => (
              <Chip key={idx} label={tag} color="primary" />
            ))}
          </div>
          <h2>¥{game.price}</h2>
          {game.playUrl && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginRight: 1 }}
              onClick={() => window.open(game.playUrl, "_blank")}
            >
              プレイする
            </Button>
          )}
          <Button variant="outlined" onClick={() => navigate("/")}>
            ホームに戻る
          </Button>
        </div>
      </div>

      {/* 下部：開発詳細（見出し形式 + スクロールでフェード表示） */}
      <div style={{ padding: "20px 20px 60px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h3 style={{ marginBottom: 20 }}>開発詳細</h3>
        {Object.entries(dev).map(([key, value], idx) => (
          <DetailItem key={idx} title={key} content={value} />
        ))}
      </div>
    </div>
  );
}
