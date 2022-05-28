import { Box, Container, Link, Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Copyright from "../components/Copyright";
import TopMenu from "../components/TopMenu";
import AboutPage from "../pages/AboutPage";

import HomePage from "../pages/Home";
import PagesPage from "../pages/PagesPage";
import SinglePage from "../pages/SinglePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Stack
        direction={"column"}
        sx={{
          minHeight: "100vh",
        }}
      >
        <header style={{ marginBottom: "20px" }} className="app-header sticky">
          <TopMenu pageName="Categories"></TopMenu>
        </header>

        <Container className="app-content">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="pages">
                <Route index element={<PagesPage />} />
                <Route path=":pageId" element={<SinglePage />} />
              </Route>
              <Route path="about" element={<AboutPage />} />
            </Route>
          </Routes>
        </Container>

        <footer
          style={{ marginTop: "20px" }}
          className="app-footer sticky bottom-0"
        >
          <Copyright>
            <Link color="inherit" href="mailto:peter.stanko0@gmail.com">
              by Peter Stanko (peter.stanko0@gmail.com)
            </Link>
          </Copyright>
        </footer>
      </Stack>
    </BrowserRouter>
  );
}
