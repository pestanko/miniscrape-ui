import { Box, Link, Stack, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";

export default function AboutPage() {
  return (
    <Box>
      <PageTitle>About the Web Page</PageTitle>
      <Stack>
        <Typography>Author: Peter Stanko</Typography>
        <Typography>
          Backend Repository:{" "}
          <Link target={"_blank"} href="https://github.com/pestanko/miniscrape">
            https://github.com/pestanko/miniscrape
          </Link>
        </Typography>
        <Typography>
          Frontend Repository:{" "}
          <Link target={"_blank"} href="https://github.com/pestanko/miniscrape-ui">
            https://github.com/pestanko/miniscrape-ui
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
