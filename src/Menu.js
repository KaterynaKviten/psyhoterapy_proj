import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// const pages = ["Про мене", "Послуги", "Контакти"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function Logotyp(props) {
  return (
    <img src="./logo for psihoter proj.png" alt="logotyp" width="60px"></img>
  );
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="topMenu" position="static">
      <Container maxWidth="xl" sx={{ width: "80%" }}>
        <Toolbar disableGutters>
          <Logotyp />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              component="a"
              variant="outlined"
              href="#aboutmePage"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                borderColor: "white",
                marginLeft: "15px",
              }}
            >
              Про мене
            </Button>

            <Button
              component="a"
              variant="outlined"
              href="#servisePage"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                borderColor: "white",
                marginLeft: "15px",
              }}
            >
              Послуги
            </Button>

            <Button
              component="a"
              variant="outlined"
              href="#contactPage"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                borderColor: "white",
                marginLeft: "15px",
              }}
            >
              Контакти
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <span className="tel" style={{ color: "#fff", display: "block" }}>
              +8050 770 07 77
            </span>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
