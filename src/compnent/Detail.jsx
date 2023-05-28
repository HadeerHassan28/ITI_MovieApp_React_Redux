import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { setNewMovie } from "../actions";
import ImgMediaCardDetail from "./CardInfoDetail";

const Detail = ({ newMovie, handleDetail }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleDetail(id, navigate);
  }, [handleDetail, id, navigate]);

  return <div>{newMovie && <ImgMediaCardDetail {...newMovie} />}</div>;
};

const mapStateToProps = (state) => {
  return {
    newMovie: state.movie.newMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDetail: (id, navigate) => {
      axios
        .get(`http://localhost:3000/results/${id}`)
        .then((response) => {
          const movie = response.data;
          dispatch(setNewMovie(movie));
          navigate(`/detail/${id}`);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
