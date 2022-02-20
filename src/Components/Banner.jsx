import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import React from "react";
import Carousel from '../Components/Carousel';

const Banner = () => {
  
  const useStyles = makeStyles(() => ({
    banner: {
      backgroundImage: "url(./img/bannerimg.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    bannerContent: {
      height: 400,
      display: "flex",
      flexDirection: "column",
      paddingTop: 0,
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0.5)"
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.banner}>
        <Container className={classes.bannerContent}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Container>
        <Carousel />
      </div>
    </>
  );
};

export default Banner;
