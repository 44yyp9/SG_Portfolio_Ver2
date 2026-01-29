// src/pages/HomePage.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import games from "../data/games.json";
import GameCard from "../components/GameCard";
import GameCarousel from "../components/GameCarousel";

export default function HomePage() {
  // GameCarousel 側で PUBLIC_URL を付与するため、ここでは生パスを渡す
  const bannerImages = games.map((g) => g.thumbnail);

  return (
    <div>
      <Header />

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #0f1b28 0%, #0b141d 100%)",
          px: { xs: 2, md: 10 },
          py: 5,
        }}
      >
        {/* カルーセル */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            mb: 8,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <GameCarousel images={bannerImages} height={400} />
        </Box>

        {/* 人気のゲーム */}
        <Typography
          variant="h3"
          sx={{
            color: "#66c0f4",
            fontWeight: 700,
            letterSpacing: "1px",
            textAlign: "center",
            mb: 5,
            textShadow: "0 0 10px #1b8ed8aa",
          }}
        >
          人気のゲーム
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {games.map((g) => (
            <Box
              key={g.id}
              sx={{
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                },
              }}
            >
              <GameCard
                game={g}
                width={250}
                height={350}
                shadow="0 10px 20px rgba(0,0,0,0.5)"
                borderRadius={2}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}