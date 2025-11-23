import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Tech Stack", path: "/tech" },
    { label: "LT資料", path: "/talks" },
    // Contact は特別扱い（path 無し）
    { label: "Contact", path: null }
  ];

  return (
    <>
      <AppBar 
        position="static" 
        sx={{
          background: "linear-gradient(90deg, #1b2838, #0e1a27)",
          padding: "4px 0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* 左ロゴ */}
          <Typography 
            variant="h5" 
            sx={{
              fontWeight: 700,
              color: "#c7d5e0",
              cursor: "pointer",
              textShadow: "0px 0px 4px rgba(0,0,0,0.6)"
            }}
            component={Link}
            to="/"
          >
            SG Portfolio
          </Typography>

          {/* メニュー */}
          <div>
            {navItems.map((item) =>
              item.path ? (
                // 通常ページリンク
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#c7d5e0",
                    marginLeft: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      color: "#66c0f4",
                      backgroundColor: "rgba(255,255,255,0.05)"
                    }
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                // Contact ボタンクリック → ダイアログ展開
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => setContactOpen(true)}
                  sx={{
                    color: "#c7d5e0",
                    marginLeft: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      color: "#66c0f4",
                      backgroundColor: "rgba(255,255,255,0.05)"
                    }
                  }}
                >
                  {item.label}
                </Button>
              )
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* Contact Dialog */}
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}