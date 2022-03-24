import React from "react";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import { useFindLocation } from "../hooks/useFindLocation";
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Location = () => {
  const params = useParams();
  const { data, loading } = useFindLocation(params.locationId);
  if (loading) {
    return <></>;
  }

  return (
    <div>
      <Typography align="center" component="h1" variant="h2">
        Residents of:
      </Typography>
      <Typography align="center" component="h1" variant="h2">
        {data.location.name}
      </Typography>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Link to="/locations" style={{ textDecoration: "none" }}>
          <Button startIcon={<ArrowBackIcon />} variant="outlined">Back to location</Button>
        </Link>

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
                <CardMedia
                  component="img"
                  image={result.image}
                  alt={result.name}
                />
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Location;
