// src/components/TechCard.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

// ★ をレベルに応じて生成
const renderStars = (level) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      style={{
        color: i < level ? "#66c0f4" : "#3a4b5a",
        fontSize: "20px",
        textShadow: i < level ? "0 0 6px #66c0f4" : "none"
      }}
    >
      ★
    </span>
  ));
};

export default function TechCard({ name, icon, level, experienceYears, description }) {
  return (
<Box
  sx={{
    background: "linear-gradient(180deg, #1b2838 0%, #0b1a26 100%)",
    border: "1px solid #2a475e",
    borderRadius: "6px",
    p: 2,
    // width: 240,  ←削除
    height: 260,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    transition: "0.2s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
    "&:hover": {
      borderColor: "#66c0f4",
      boxShadow: "0 0 15px #66c0f4aa",
      transform: "translateY(-6px)"
    }
  }}
>

      {/* アイコン */}
      <img
        src={icon}
        alt={name}
        style={{
          width: 60,
          height: 60,
          marginBottom: 10,
          opacity: 0.9
        }}
      />

      {/* 名称 */}
      <Typography sx={{ color: "#c7d5e0", fontWeight: 700, fontSize: 17 }}>
        {name}
      </Typography>

      {/* ★ レベル */}
      <Box sx={{ mt: 1, mb: 1 }}>
        {renderStars(level)}
      </Box>

      {/* 使用年数 */}
      <Typography sx={{ color: "#89a5b8", fontSize: 13 }}>
        使用歴：{experienceYears}年
      </Typography>

      {/* 説明 */}
      <Typography
        sx={{
          mt: 1,
          color: "#c7d5e0",
          fontSize: 13,
          lineHeight: 1.4,
          opacity: 0.85
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}