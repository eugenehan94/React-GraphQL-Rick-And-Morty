import React from "react";
import Hero from "../components/Hero";
import { useFindLocations } from "../hooks/useFindLocations";
import {
  Container,
  CardContent,
  CardActions,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const Locations = () => {
  const { data, loading } = useFindLocations();
  console.log("Locations data: ", data);

  if (loading) {
    return <></>;
  }

  return (
    <div>
      <Hero />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container>
          {data.locations.results.map((location) => (
            <Grid item xs={12} sm={6} md={3} key={location.id}>
              <CardContent>
                <Typography align="center">{location.name}</Typography>
                <Typography align="center">{location.dimension}</Typography>
                <Typography align="center">{location.type}</Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/location/${location.id}`}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Locations;
