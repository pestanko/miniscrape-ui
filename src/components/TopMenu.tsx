import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

interface TopMenuProps {
  pageName: string;
}

export default function TopMenu({}: TopMenuProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
          <Button
            component={Link}
            to="/pages"
            variant="contained"
            color="primary"
          >
            Pages
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
          >
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
