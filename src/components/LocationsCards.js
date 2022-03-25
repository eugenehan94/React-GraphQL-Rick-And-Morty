import React from "react"
import {
    Container,
    Card,
    CardContent,
    CardActions,
    Grid,
    Button,
    Typography,
  } from "@mui/material";
  import { BUTTON } from "../_helper/constants";
  import { Link } from "react-router-dom";
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  import { useFindLocations } from "../hooks/useFindLocations";
const LocationsCards = () => {
    const { data, loading } = useFindLocations();
    if (loading) {
        return <></>;
      }
    return(
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
                  <Button size="small" endIcon={<ArrowForwardIosIcon/>}>{BUTTON.WHO_LIVES_HERE}</Button>
                </Link>
              </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}

export default LocationsCards;