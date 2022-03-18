import React from "react";
import { useParams } from "react-router-dom";
import { useFindCharacter } from "../hooks/useFindCharacter";
import { Grid, Typography } from "@mui/material";
const Character = () => {
  const params = useParams();
  const { data, loading } = useFindCharacter(params.characterId);
  console.log("params data: ", data);

  if (loading) {
    return <></>;
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <img src={data.character.image} alt={data.character.name} />
        </Grid>
        <Grid item xs={8}>
            <Typography>{data.character.name}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
