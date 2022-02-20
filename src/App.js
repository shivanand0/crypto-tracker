import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Alert from './Components/Alert';

function App() {

  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor: '#222831',
      color: '#fff',
      minHeight: '100vh',
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.App} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coins/:id" element={<CoinPage />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Alert />
      </Router>
    </div>
  );
}

export default App;
