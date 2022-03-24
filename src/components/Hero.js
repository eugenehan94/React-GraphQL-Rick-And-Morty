import React from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
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
          Rick & Morty GraphQL Album
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Rick and Morty is an American adult animated science fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's
          nighttime programming block, Adult Swim. The series follows the
          misadventures of cynical mad scientist Rick Sanchez and his
          good-hearted, but fretful grandson Morty Smith, who split their time
          between domestic life and interdimensional adventures.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Link to="/" style={{textDecoration: "none"}}>
            <Button variant="contained" size="large">Characters</Button>
          </Link>
          <Link to="/locations" style={{textDecoration: "none"}}>
            <Button variant="contained" size="large">Locations</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
