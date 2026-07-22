import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";

const RESUME_URL = "/Mallikarjun_Kadagoudra.pdf";
const DOWNLOAD_URL = "/Mallikarjun_Kadagoudra.pdf";
const PREVIEW_URL = "/Mallikarjun_Kadagoudra.pdf";

function ResumeButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="large"
        sx={{
          color: "var(--orange-yellow-crayola)",
          width: { xs: "100%", md: "15rem" },
          margin: "0 0 2rem 0",
          fontWeight: "bold",
          textTransform: "capitalize",
          borderRadius: "1rem",
          cursor: "pointer",
          border: "1px solid var(--orange-yellow-crayola)",
          "&:hover": {
            backgroundColor: "var(--bg-gradient-jet)",
            borderColor: "var(--orange-yellow-crayola)",
          }
        }}
      >
        View Resume
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            borderRadius: "1.2rem",
            background: "var(--bg-gradient-onyx)",
            backdropFilter: "blur(20px)",
            overflow: "hidden",
            boxShadow: "var(--shadow-2)",
          },
        }}
        BackdropProps={{
          style: {
            backdropFilter: "blur(4px)",
            backgroundColor: "var(--jet)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.2,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
            <Typography
              sx={{
                color: "var(--white-2)",
                fontWeight: "bold",
                fontFamily: "poppins",
                fontSize: "1.2rem",
              }}
            >
              Resume
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Tooltip title="Download">
                <IconButton
                  component="a"
                  href={DOWNLOAD_URL}
                  download="Mallikarjun_Kadagoudra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "var(--orange-yellow-crayola)" }}
                >
                <DownloadIcon />
              </IconButton>
            </Tooltip>
              <Tooltip title="Open in new tab">
                <IconButton
                  component="a"
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "var(--orange-yellow-crayola)" }}
                >
                  <OpenInNewIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Close">
                <IconButton onClick={() => setOpen(false)} sx={{ color: "var(--light-gray)" }}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
          </Box>
        </Box>

        <DialogContent
          sx={{ p: 0, height: { xs: "70vh", md: "80vh" }, background: "#0d0d0d" }}
        >
          <iframe
            src={PREVIEW_URL}
            title="Mallikarjun Kadagoudra Resume"
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="autoplay"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ResumeButton;
