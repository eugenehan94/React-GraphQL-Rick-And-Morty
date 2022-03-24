import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useFindLocations } from "../hooks/useFindLocations";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
        <Grid container spacing={3}>
          {data.locations.results.map((location) => (
            <Grid item xs={12} sm={6} md={3} key={location.id}>
              <Card variant="outlined">
              <CardContent>
                <Typography align="center">{location.name}</Typography>
                <Typography align="center">{location.dimension}</Typography>
                <Typography align="center">{location.type}</Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/location/${location.id}`} style={{textDecoration: "none"}}>
                  <Button size="small" endIcon={<ArrowForwardIosIcon/>}>Who Lives Here</Button>
                </Link>
              </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default Locations;
