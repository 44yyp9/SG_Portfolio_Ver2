// src/pages/Tech.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import TechCard from "../components/TechCard";
import techData from "../data/techStack.json";

export default function Tech() {
    return (
        <div>
            <Header />

            <Box
                sx={{
                    minHeight: "100vh",
                    px: { xs: 3, md: 10 },
                    py: 12,
                    background: "linear-gradient(180deg, #0f1b28 0%, #0b141d 100%)",
                }}
            >
                {/* 大見出し */}
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        color: "#66c0f4",
                        mb: 8,
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textShadow: "0 0 10px #1b8ed8aa",
                    }}
                >
                    Tech Stack
                </Typography>

                <Box sx={{ maxWidth: 1200, mx: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
                    {/* === Category Block === */}
                    {[
                        { title: "Languages", items: techData.languages },
                        { title: "Frameworks", items: techData.frameworks },
                        { title: "Libraries", items: techData.libraries }, // ← 追加
                        { title: "Tools", items: techData.tools },
                    ].map((section, idx) => (
                        <Box key={idx}>
                            {/* セクションタイトル */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                                <Box sx={{ width: 40, height: 3, background: "#1b8ed8" }} />
                                <Typography sx={{ color: "#c7d5e0", fontWeight: 700, fontSize: 20 }}>
                                    {section.title}
                                </Typography>
                            </Box>

                            {/* グリッド */}
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                                    gap: 3,
                                }}
                            >
                                {section.items.map((t, i) => (
                                    <TechCard
                                        key={i}
                                        name={t.name}
                                        icon={t.icon}
                                        level={t.level}
                                        experienceYears={t.experienceYears}
                                        description={t.description}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    );
}