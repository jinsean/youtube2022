import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { Box } from "@mui/material";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Box>Home</Box>
        <Box>Home</Box>
      </div>
    </div>
  );
};

export default Home;
