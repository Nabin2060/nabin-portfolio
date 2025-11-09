import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import {
  VscRemote,
  VscError,
  VscWarning,
  VscBell,
  VscFeedback,
  VscCheck,
} from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";

export default function Footer() {
  return (
    <Box
      component={Paper}
      square
      elevation={0}
      sx={{ height: "20px", color: "white" }}
      display="flex"
    >
      <Grid container>
        <Grid
          item
          sx={{
            width: { xs: 35, sm: 35 },
            backgroundColor: "#2E8461",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#329171",
            },
          }}
          display="flex"
        >
          <VscRemote fontSize="0.9rem" />
        </Grid>

        <Grid
          item
          sx={{ backgroundColor: "#3279CB", width: { xs: 120, sm: 200 } }}
          display="flex"
        >
          <Stack direction="row" spacing={0.5} sx={{ pl: 1 }}>
            <Box
              component={Link}
              href="https://github.com/noworneverev/react-vscode-portfolio"
              underline="none"
              color="white"
              target="_blank"
              display="flex"
              sx={{
                px: 0.5,
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#1f8ad2",
                },
              }}
            >
              <IoIosGitBranch fontSize="0.9rem" />
              <Typography
                sx={{
                  marginLeft: "2px",
                  fontSize: { xs: "0.6rem", md: "0.7rem" },
                }}
              >
                main
              </Typography>
            </Box>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                px: 0.5,
                cursor: "pointer",
                "&:hover": {
                  background: "#1f8ad2",
                },
              }}
            >
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                }}
              >
                <VscError fontSize="0.9rem" />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", md: "0.7rem" },
                    marginLeft: "2px",
                  }}
                >
                  0
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                }}
              >
                <VscWarning fontSize="0.9rem" />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", md: "0.7rem" },
                    marginLeft: "2px",
                  }}
                >
                  0
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          sx={{ backgroundColor: "#3279CB", flex: 1, minWidth: 0 }}
          display="flex"
          justifyContent="flex-end"
        >
          <Box display="flex" justifyContent="flex-end">
            <Stack
              justifyContent="end"
              direction="row"
              spacing={0.8}
              sx={{ pr: 1.5 }}
            >
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <VscCheck fontSize="0.9rem" />
                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", md: "0.7rem" },
                    marginLeft: "3px",
                  }}
                >
                  Prettier
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <VscFeedback fontSize="0.9rem" />
              </Box>
              <Box
                display="flex"
                sx={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <VscBell fontSize="0.9rem" />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
