import React from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { HERO_TITLE, HERO_DESC, BUTTON } from "../_helper/constants";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {HERO_TITLE}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {HERO_DESC}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large">
              {BUTTON.CHARACTERS}
            </Button>
          </Link>
          <Link to="/locations" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large">
              {BUTTON.LOCATIONS}
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
