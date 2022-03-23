import React from "react";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import { useFindLocation } from "../hooks/useFindLocation";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
const Location = () => {
  const params = useParams();
  const { data, loading } = useFindLocation(params.locationId);
  console.log(data);
  if (loading) {
    return <></>;
  }

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography>Residents of: </Typography>
        <Typography>{data.location.name}</Typography>
        <Link to ="/locations">
        <Button>Back to location</Button>
        </Link>
        <Grid container spacing={4}>
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
                  sx={
                    {
                      // 16:9
                      // pt: "56.25%",
                    }
                  }
                  image={result.image}
                  alt={result.name}
                />
                <Typography>{result.name}</Typography>
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
