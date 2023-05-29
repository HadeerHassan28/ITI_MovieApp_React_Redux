import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgMediaCard from "./CardInfo";
import { setMovies } from "../redux/action/actionCreatoer";

const HomePage = () => {
  const dataArr = useSelector((state) => state.dataArr);
  const dispatch = useDispatch();

  // console.log(dataArr);
  useEffect(() => {
    setMovies(dispatch);
  }, []);
  return (
    <div>
      {/* {dataArr && dataArr.map((ele) => <div>{ele.title}</div>)} */}
      <Typography variant="h1" fontSize="2rem" sx={{ margin: "20px" }}>
        <Box sx={{ color: "error.main" }}>Movies</Box>
      </Typography>
      <Grid container spacing={2}>
        {dataArr &&
          dataArr.map((movie) => {
            return (
              <Grid item xs={4}>
                <ImgMediaCard {...movie}></ImgMediaCard>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default HomePage;
