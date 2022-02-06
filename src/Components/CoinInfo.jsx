import React, { useEffect, useState } from "react";
import axios from "axios";
import { HistoricalChart } from "../Config/api";
// import { Line } from 'react-chartjs-2';
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { CryptoState } from "../CryptoContext";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [flag, setflag] = useState(false);

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));
  const classes = useStyles();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };

  //   console.log(coin);
  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
          {/* chart */}
        {
            !historicData ? (
                <CircularProgress
                    style={{ color: "gold" }}
                    size={250}
                    thickness={1}
                />
            ) : 
            (
                <>
                chart*
                    {/* <Line /> */}
                </>
            )
        }
          {/* buttons */}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
