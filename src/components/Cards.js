import React from "react";
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
import { useCharacter } from "../hooks/useFindCharacters";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {MORE_INFO} from "../_helper/constants";
const Cards = () => {
  const { data } = useCharacter();
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {data.characters.results.map((results) => (
          <Grid item xs={12} sm={6} md={4} key={results.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={results.image}
                alt={results.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {results.name}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item>
                  <Typography>Gender: </Typography>
                  <Typography>Species: </Typography>
                  <Typography>Status: </Typography>
                  </Grid>
                  <Grid item>
                <Typography>{results.gender}</Typography>
                <Typography>{results.species}</Typography>
                <Typography>{results.status}</Typography>
                </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Link to={`character/${results.id}`} style={{textDecoration: "none"}}>
                  <Button fullWidth size="large" endIcon={<ArrowForwardIosIcon/>}>{MORE_INFO}</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
