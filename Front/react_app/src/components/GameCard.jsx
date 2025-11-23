import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/game/${game.id}`)}
      sx={{
        width: 220,
        cursor: "pointer",
        background: "#2a475e",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={game.thumbnail}
      />
      <CardContent>
        <Typography variant="h6">{game.title}</Typography>
        <Typography>¥{game.price}</Typography>
      </CardContent>
    </Card>
  );
}