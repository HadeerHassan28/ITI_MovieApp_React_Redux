import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { connect, useDispatch } from "react-redux";
import {
  delateMovie,
  setMovies,
  detailsOfMoive,
} from "../redux/action/actionCreatoer";
import { Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImgMediaCard = ({ poster_path, title, id }) => {
  const dispatch = useDispatch();
  const handleSubmilt = () => {
    setMovies();
  };
  const handleDelate = () => {
    delateMovie(id, dispatch);
  };

  const navigate = useNavigate();
  const detailMovie = (id) => {
    detailsOfMoive(id);
    navigate(`/detail/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="ms-5" onSubmit={handleSubmilt}>
      <CardMedia
        component="img"
        alt="poster of the movie"
        height="600"
        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" onClick={handleDelate}>
          Delete
        </Button>
        <Button variant="contained" color="success" onClick={detailMovie}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (id) => dispatch(delateMovie(id)),
    // setNewMovie: (movie) => dispatch(setNewMovie(movie)),
  };
};

export default connect(null, mapDispatchToProps)(ImgMediaCard);
