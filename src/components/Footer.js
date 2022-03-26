import React from "react";
import { Box, Typography, Link } from "@mui/material";
const Footer = () => {
  const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://eugenehan.netlify.app/" target="_blank">
          Eugene Han
        </Link>
        {" "}{new Date().getFullYear()}
      </Typography>
    );
  };
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        This is the end
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        View more of my other projects
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
