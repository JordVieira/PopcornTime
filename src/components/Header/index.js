import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <AppBar
      style={{ backgroundColor: "#363636", padding: "5px" }}
      postition="static"
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        maxWidth="x1"
      >
        <Button
          href="/"
          style={{ color: "#FEC601", display: "flex", alignItems: "center" }}
        >
          <Logo style={{ height: "2rem", marginRight: "0.5rem" }} />
          <Typography
            variant="body"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POPCORNTIME
          </Typography>
        </Button>
        <Tooltip title="Configurações">
          <IconButton href="\profile" sx={{ p: 0 }}>
            <Avatar
              style={{ height: "2rem", width: "2rem" }}
              alt="Vitor"
              src="/static/images/avatar/2.jpg"
            />
          </IconButton>
        </Tooltip>
      </Container>
    </AppBar>
  );
};
export default Header;
