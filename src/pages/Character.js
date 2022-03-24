import React from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useFindCharacter } from "../hooks/useFindCharacter";
import { Grid, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Character = () => {
  const params = useParams();
  const { data, loading } = useFindCharacter(params.characterId);
  console.log("params data: ", data);

  if (loading) {
    return <></>;
  }

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <img
            src={data.character.image}
            alt={data.character.name}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <Grid container spacing={2}>
            <Grid item>
              <Typography>Name: </Typography>
              <Typography>Gender: </Typography>
              <Typography>Species: </Typography>
              <Typography>Status: </Typography>
            </Grid>
            <Grid item>
              <Typography> {data.character.name}</Typography>
              <Typography>{data.character.gender}</Typography>
              <Typography>{data.character.species}</Typography>
              <Typography>{data.character.status}</Typography>
            </Grid>
          </Grid>
          <Link to="/" style={{textDecoration: "none"}}>
            <Button fullWidth startIcon={<ArrowBackIcon />} variant="outlined" sx={{marginTop: "10px"}}>
              Back To Home Page
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h2" sx={{ textAlign: { xs: "center", sm: "left" } }}>
            Episodes
          </Typography>
          {data.character.episode.map((episode) => (
            <Paper
              elevation={3}
              square
              sx={{ marginTop: "10px", borderLeft: "15px solid rgba(255,0,0,0.8)", paddingLeft: "10px", paddingTop: "5px", paddingBottom: "5px" }}
            >
              <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
                {episode.episode}
              </Typography>
              <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
                {episode.name}
              </Typography>
              <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
                {episode.air_date}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Character;
