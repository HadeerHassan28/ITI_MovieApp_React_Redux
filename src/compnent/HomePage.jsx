import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgMediaCard from "./CardInfo";

const HomePage = () => {
  const dataArr = useSelector((state) => state.movie.dataArr);
  const dispatch = useDispatch();

  const handleSubmilt = () => {
    dispatch();
  };
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
