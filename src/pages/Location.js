import React from "react";
import LocationCards from "../components/LocationCards";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import { useFindLocation } from "../hooks/useFindLocation";
import { Button, Container, Typography } from "@mui/material";
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
          <Button startIcon={<ArrowBackIcon />} variant="outlined">
            Back to location
          </Button>
        </Link>
        <LocationCards />
      </Container>
      <Footer />
    </div>
  );
};

export default Location;
