import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { deleteMovie, setNewMovie } from "../actions";
import { Button, CardActions } from "@mui/material";

const ImgMediaCard = ({
  poster_path,
  title,
  overview,
  id,
  deleteMovie,
  setNewMovie,
  navigate,
}) => {
  const delateMovie = () => {
    deleteMovie(id);
  };

  const detailMovie = () => {
    const movie = { poster_path, title, overview, id };
    setNewMovie(movie);
    navigate(`/detail/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="ms-5">
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
        <Button variant="contained" color="error" onClick={delateMovie}>
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
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    setNewMovie: (movie) => dispatch(setNewMovie(movie)),
  };
};

export default connect(null, mapDispatchToProps)(ImgMediaCard);
