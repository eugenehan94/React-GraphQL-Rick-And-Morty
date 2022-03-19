import React from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useFindCharacter } from "../hooks/useFindCharacter";
import {Grid, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
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
            <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>Name: {data.character.name}</Typography>
            <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>Gender: {data.character.gender}</Typography>
            <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>Species: {data.character.species}</Typography>
            <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>Status: {data.character.status}</Typography>
          <Link to="/">
            <Button fullWidth>Back To Home Page</Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>Episodes</Typography>
          {data.character.episode.map((episode) => (
            <Paper elevation={3} square sx={{marginTop: "10px", borderLeft: "10px solid red"}}>
              <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>{episode.episode}</Typography>
              <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>{episode.name}</Typography>
              <Typography sx={{textAlign: {xs:"center", sm: "left" }}}>{episode.air_date}</Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Character;
