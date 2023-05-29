import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { detailsOfMoive } from "../redux/action/actionCreatoer";
const ImgMediaCardDetail = ({ poster_path, title, overview }) => {
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
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    detailMoive: (id) => dispatch(detailsOfMoive(id)),
  };
};

export default connect(mapDispatchToProps)(ImgMediaCardDetail);
//export default ImgMediaCardDetail;
