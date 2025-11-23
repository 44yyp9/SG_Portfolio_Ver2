// src/components/ContactDialog.jsx
import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    IconButton,
    Typography,
    Box
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";

export default function ContactDialog({ open, onClose }) {
    const [message, setMessage] = useState("");

    const receiverEmail = "sg932g643@gmail.com";

    const sendMail = () => {
        const subject = encodeURIComponent("お問い合わせ");
        const body = encodeURIComponent(message);
        window.location.href = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(receiverEmail);
        alert("メールアドレスをコピーしました！");
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    background: "linear-gradient(180deg, #1b2838 0%, #0b1a26 100%)",
                    color: "#c7d5e0",
                    border: "1px solid #2a475e",
                    width: 430
                }
            }}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #2a475e"
                }}
            >
                <Typography sx={{ fontWeight: 700, color: "#c7d5e0" }}>Contact</Typography>
                <IconButton onClick={onClose} sx={{ color: "#c7d5e0" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ mt: 2 }}>
                {/* メールアドレス */}
                <Typography sx={{ mb: 1, fontWeight: 600, color: "#66c0f4" }}>📧 Email</Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        background: "#0d1b27",
                        p: 1,
                        borderRadius: "4px",
                        border: "1px solid #2a475e"
                    }}
                >
                    {/* ここでテキスト色を指定 */}
                    <Typography sx={{ flexGrow: 1, color: "#c7d5e0" }}>{receiverEmail}</Typography>
                    <IconButton size="small" onClick={copyEmail} sx={{ color: "#66c0f4" }}>
                        <ContentCopyIcon />
                    </IconButton>
                </Box>

                {/* メッセージ */}
                <TextField
                    fullWidth
                    label="メッセージ"
                    variant="filled"
                    multiline
                    minRows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                        mb: 3,
                        background: "#0d1b27",
                        borderRadius: "4px",
                        // filled variant の入力テキストに対して色を指定
                        '& .MuiFilledInput-input': { color: "#ffffff" }
                    }}
                    InputLabelProps={{ style: { color: "#89a5b8" } }}
                />
            </DialogContent>

            <DialogActions sx={{ borderTop: "1px solid #2a475e", p: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={sendMail}
                    sx={{
                        background: "#66c0f4",
                        color: "#0b1a26",
                        fontWeight: 700,
                        "&:hover": { background: "#8fd4ff" }
                    }}
                >
                    送信する
                </Button>
            </DialogActions>
        </Dialog>
    );
}
