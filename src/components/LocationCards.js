import React from "react";
import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useFindLocation } from "../hooks/useFindLocation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MORE_INFO } from "../_helper/constants";
const LocationCards = () => {
  const params = useParams();
  const { data} = useFindLocation(params.locationId);
  return (
    <Grid container spacing={4} sx={{ mt: 1 }}>
      {data.location.residents.map((result) => (
        <Grid item xs={12} sm={6} md={4} key={result.id}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia component="img" image={result.image} alt={result.name} />
            <Grid container spacing={2}>
              <Grid item>
                <Typography>Name: </Typography>
                <Typography>Species: </Typography>
                <Typography>Gender: </Typography>
                <Typography>Status: </Typography>
              </Grid>
              <Grid item>
                <Typography>{result.name}</Typography>
                <Typography>{result.species}</Typography>
                <Typography>{result.gender}</Typography>
                <Typography>{result.status}</Typography>
              </Grid>
            </Grid>
            <Link
              to={`/character/${result.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button fullWidth endIcon={<ArrowForwardIosIcon />} size="large">
                {MORE_INFO}
              </Button>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LocationCards;
