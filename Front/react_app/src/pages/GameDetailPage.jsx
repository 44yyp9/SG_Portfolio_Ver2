import { useParams, useNavigate } from "react-router-dom";
import games from "../data/games.json";
import Header from "../components/Header";
import { Box, Button, Chip, Typography } from "@mui/material";
import GameCarousel from "../components/GameCarousel";
import { useInView } from "react-intersection-observer";

// 開発詳細用のコンポーネント
const DetailSection = ({ title, content }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s ease-out",
        mb: 4,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        backgroundColor: "#2a3a50"
      }}
    >
      <Box sx={{ backgroundColor: "#1b2838", px: 2, py: 1.5 }}>
        <Typography variant="h6" sx={{ color: "#66c0f4", fontWeight: 700 }}>
          {title}
        </Typography>
      </Box>

      <Box sx={{ px: 3, py: 2 }}>
        {typeof content === "object" && !Array.isArray(content) ? (
          <Box sx={{ ml: 1 }}>
            {Object.entries(content).map(([subKey, subVal], idx2) => (
              <Typography key={idx2} variant="body1" sx={{ mb: 0.8 }}>
                <strong>{subKey}:</strong> {subVal}
              </Typography>
            ))}
          </Box>
        ) : Array.isArray(content) ? (
          <Box component="ul" sx={{ ml: 2, mb: 0 }}>
            {content.map((v, i) => <li key={i}>{v}</li>)}
          </Box>
        ) : (
          <Typography sx={{ ml: 1 }}>{content}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default function GameDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === Number(id));

  if (!game)
    return (
      <Box sx={{ minHeight: "100vh", backgroundColor: "#1b2838", color: "white" }}>
        <Header />
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>ゲームが見つかりません</Typography>
          <Button variant="contained" onClick={() => navigate("/")}>ホームに戻る</Button>
        </Box>
      </Box>
    );

  const dev = game.development;

  return (
    <Box sx={{ backgroundColor: "#1b2838", minHeight: "100vh", color: "white", pb: 10 }}>
      <Header />

      {/* 上部：カルーセル + 簡単説明 */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          px: { xs: 3, md: 10 },
          py: 5,
          justifyContent: "center",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 300, maxWidth: 600, borderRadius: 2, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <GameCarousel images={[game.thumbnail, ...(game.screenshots || [])]} height={400} />
        </Box>

        <Box sx={{ flex: 1, minWidth: 300, maxWidth: 600, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: "#66c0f4", textShadow: "0 0 10px #1b8ed8aa" }}>
            {game.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{game.description}</Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {game.tags.map((tag, idx) => (
              <Chip key={idx} label={tag} color="primary" sx={{ fontWeight: 500 }} />
            ))}
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>¥{game.price}</Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {game.playUrl && (
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: 600 }}
                onClick={() => window.open(game.playUrl, "_blank")}
              >
                プレイする
              </Button>
            )}
            <Button variant="outlined" sx={{ fontWeight: 600 }} onClick={() => navigate("/")}>
              ホームに戻る
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 下部：開発詳細 */}
      <Box sx={{ px: { xs: 3, md: 10 }, maxWidth: 900, mx: "auto", mt: 6, mb: 10 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "#66c0f4",
            textShadow: "0 0 8px #1b8ed8aa",
            textAlign: "center"
          }}
        >
          開発詳細
        </Typography>

        {Object.entries(dev).map(([key, value], idx) => (
          <DetailSection key={idx} title={key} content={value} />
        ))}
      </Box>
    </Box>
  );
}