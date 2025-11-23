import { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardContent, Avatar, Link } from "@mui/material";
import Header from "../components/Header"; // Header コンポーネントをインポート

// ▼ 開発経験用コンポーネント
function ExperienceItem({ subtitle, text }) {
    return (
        <Box>
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: 700,
                    marginBottom: 0.5,
                    color: "#66c0f4",
                }}
            >
                {subtitle}
            </Typography>
            <Typography
                sx={{
                    whiteSpace: "pre-line",
                    marginBottom: 1.5,
                    color: "#a0c4f7",
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}

export default function About() {
    const sections = [
        {
            title: "自己紹介",
            content: `SGと申します。大学生です。
Unityをメインにゲーム開発・ツール制作・設計を行っています。
特にアーキテクチャ、設計にこだわった開発が好きです。
`,
        },
        {
            title: "経歴",
            isRich: true,
            items: [
                { year: "2020", text: "日本学園高等学校 入学" },
                { year: "2023", text: "日本学園高等学校 卒業 / 東京電機大学 入学" },
                {
                    year: "2024",
                    text: "",
                    links: [
                        {
                            label: "SEGA 1Day アプリケーションインターンシップ",
                            url: "https://www.sega.co.jp/recruit/fresh/internship/college_pgm02.html",
                        },{
                            label: "Game Speed Hackathon atum",
                            url: "https://www.cyberagent.co.jp/careers/students/career_event/detail/id=31823",
                        },
                        {
                            label: "Game Client College ~設計編~",
                            url: "https://cyberagent.snar.jp/jobboard/detail.aspx?id=7_JPiwMNVF0fjyHeEnyy7g",
                        },
                    ],
                },
                {
                    year: "2025",
                    text: "",
                    links: [
                        {
                            label: "SEGA 1Day アプリケーションインターンシップ",
                            url: "https://www.sega.co.jp/recruit/fresh/internship/college_pgm02.html",
                        },
                        {
                            label: "Aiming アルバイト型インターンシップ（現場配属）",
                            url: "https://recruit.aiming-inc.com/graduate/internship/",
                        },
                        {
                            label: "バンダイナムコ C++ 新人研修体験",
                            url: "https://bandainamcostudios.snar.jp/jobboard/detail.aspx?id=i2gMrdXUNQVpvoPkGjo03A",
                        },
                        {
                            label: "楽天 夏のプロトタイプ開発（Application Engineer）",
                            url: "https://corp.rakuten.co.jp/careers/graduates/event/natsunojin/",
                        },
                        {
                            label: "Ca Tech Lounge",
                            url: "https://www.cyberagent.co.jp/careers/special/students/tech_lounge/",
                        }
                    ],
                },
            ],
        },
        {
            title: "開発経験",
            isRich: true,
            items: [
                { subtitle: "開発年数", text: "約4年(個人開発 + チーム開発)" },
                {
                    subtitle: "主な担当",
                    text: `プログラム/ゲームクライアント / 設計 / ツール開発 / リファクタリング/コードレビュー`,
                },
                {
                    subtitle: "使用技術",
                    text: `Unity / C# / FastAPI / Python / React / JavaScript / C++ / Git`,
                },
                {
                    subtitle: "開発",
                    text: `個人開発から小規模7名のチーム開発、中規模13名のチーム開発を経験`,
                },
                {
                    subtitle: "技術的な工夫",
                    text: `オブジェクト指向プログラミングに則った保守性、拡張性を重視した設計を実践。  
Unityエディタ拡張を用いて開発の効率化を意識した実装  
C#以外にもPythonを用いたツール開発や、バックエンドの開発も経験`,
                },
            ],
        },
        {
            title: "得意分野",
            isRich: true,
            items: [
                { subtitle: "Unity", text: `エディタ拡張 /  UniTask・R3 / NUnit\n複数人によるチーム開発` },
                { subtitle: "C#", text: `SOLID 原則をベースにした OOP 設計/ PureC#を用いたゲーム開発\n可読性・保守性の高い設計 / リファクタリング` },
                { subtitle: "Python", text: `Seleniumを用いた自動化 / FastAPIを用いたバックエンドの開発` },
                { subtitle: "設計・技術", text: `SOLID原則 / Dry・WET原則 / クリーンアーキテクチャ\n単体テスト / チーム開発でのレビュー・設計相談` },
            ],
        },
        {
            title: "技術活動",
            isRich: true,
            items: [
                {
                    subtitle: "GitHub",
                    text: (
                        <Link
                            href="https://github.com/44yyp9"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#66c0f4", textDecoration: "underline" }}
                        >
                            https://github.com/44yyp9
                        </Link>
                    ),
                },
                {
                    subtitle: "Qiita",
                    text: (
                        <Link
                            href="https://qiita.com/_SG_"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#66c0f4", textDecoration: "underline" }}
                        >
                            https://qiita.com/_SG_
                        </Link>
                    ),
                },
            ],
        },
        {
            title: "趣味",
            content: `・ゲーム制作  
・ビジュアルノベルゲームなど  
・インディーズゲーム  
・技術調査、設計研究  
`,
        },
    ];

    // --- スクロールフェード ---
    const refList = useRef([]);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const handler = () => {
            const updated = refList.current.map((el) => {
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top < window.innerHeight - 100;
            });
            setVisible(updated);
        };
        window.addEventListener("scroll", handler);
        handler();
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div>
            {/* Header */}
            <Header />

            <Box
                sx={{
                    minHeight: "100vh",
                    padding: "40px 20px",
                    paddingTop: "120px",
                    background: "linear-gradient(180deg, #1b2838, #0e1a27)",
                    color: "#c7d5e0",
                }}
            >
                {/* タイトル「ABOUT ME」だけ光らせる */}
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
                    ABOUT ME
                </Typography>

                {/* アイコン */}
                <Box sx={{ textAlign: "center", marginBottom: 4 }}>
                    <Avatar
                        src={process.env.PUBLIC_URL + "/img/icons/myIcon.png"}
                        sx={{
                            width: 120,
                            height: 120,
                            margin: "auto",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                        }}
                    />
                </Box>

                {/* セクション */}
                <Box
                    sx={{
                        maxWidth: 900,
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >
                    {sections.map((sec, i) => (
                        <Card
                            key={i}
                            ref={(el) => (refList.current[i] = el)}
                            sx={{
                                background: "rgba(42, 71, 94, 0.55)",
                                backdropFilter: "blur(6px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                opacity: visible[i] ? 1 : 0,
                                transform: visible[i] ? "translateY(0px)" : "translateY(40px)",
                                transition: "all 0.7s ease",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        marginBottom: 2,
                                        borderBottom: "2px solid #66c0f4",
                                        paddingBottom: "4px",
                                        color: "#66c0f4",
                                    }}
                                >
                                    {sec.title}
                                </Typography>

                                {/* 通常テキスト */}
                                {!sec.isRich && (
                                    <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.8, color: "#a0c4f7" }}>
                                        {sec.content}
                                    </Typography>
                                )}

                                {/* リッチ UI */}
                                {sec.isRich && (
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                        {sec.items.map((item, idx) => (
                                            <Box key={idx}>
                                                {/* 年表示 */}
                                                {item.year && (
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{ fontWeight: 700, marginBottom: 0.5, color: "#8ab4f8" }}
                                                    >
                                                        {item.year}
                                                    </Typography>
                                                )}

                                                {/* subtitle がある場合は ExperienceItem */}
                                                {item.subtitle ? (
                                                    <ExperienceItem subtitle={item.subtitle} text={item.text} />
                                                ) : (
                                                    item.text && (
                                                        <Typography sx={{ whiteSpace: "pre-line", marginBottom: 1.5, color: "#a0c4f7" }}>
                                                            {item.text}
                                                        </Typography>
                                                    )
                                                )}

                                                {/* リンク */}
                                                {item.links && (
                                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                        {item.links.map((l, k) => (
                                                            <Link
                                                                key={k}
                                                                href={l.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                sx={{
                                                                    color: "#66c0f4",
                                                                    textDecoration: "underline",
                                                                    marginBottom: "6px",
                                                                }}
                                                            >
                                                                ・{l.label}
                                                            </Link>
                                                        ))}
                                                    </Box>
                                                )}
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
}