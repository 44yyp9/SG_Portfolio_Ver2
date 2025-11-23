import { Box, Typography } from "@mui/material";

export default function SlideCard({ talk }) {
  return (
    <Box
      sx={{
        marginBottom: 6,
        background: "rgba(42, 71, 94, 0.6)",
        backdropFilter: "blur(6px)",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ color: "#66c0f4", fontWeight: 700, mb: 1 }}>
        {talk.title}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "#a0cfff", mb: 2 }}>
        {talk.event} - {talk.month}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 500 },
          "& iframe": {
            width: "100%",
            height: "100%",
            border: 0,
          },
        }}
      >
        <iframe
          src={talk.embedUrl}
          allowFullScreen
          title={talk.title}
        ></iframe>
      </Box>
    </Box>
  );
}