import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import SlideCard from "../components/LTCard";
import ltData from "../data/ltData.json";

export default function Talks() {
  return (
    <div>
      <Header />

      <Box
        sx={{
          minHeight: "100vh",
          padding: "40px 20px",
          background: "linear-gradient(180deg, #1b2838, #0e1a27)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: 6,
            textAlign: "center",
            fontWeight: 700,
            color: "#66c0f4",
          }}
        >
          LT資料
        </Typography>

        <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
          {ltData.map((talk) => (
            <SlideCard key={talk.id} talk={talk} />
          ))}
        </Box>
      </Box>
    </div>
  );
}