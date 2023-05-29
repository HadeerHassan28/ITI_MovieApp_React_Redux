import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { detailsOfMoive } from "../redux/action/actionCreatoer";
import ImgMediaCardDetail from "./CardInfoDetail";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailOfMovie = useSelector((state) => state.detailMovie);

  useEffect(() => {
    detailsOfMoive(id, dispatch);
  }, []);

  return (
    <div>{detailOfMovie && <ImgMediaCardDetail {...detailOfMovie} />}</div>
  );
};

export default Detail;
