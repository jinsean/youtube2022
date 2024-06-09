import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./test1.scss";
import { Box } from "@mui/material";


const Test1 = () => {
  return (
    <div className="test1">
      <Sidebar />
      <div className="test1Container">
        <Navbar />
        <Box>test1</Box>
        <Box>test1</Box>
      </div>
    </div>
  );
};

export default Test1;
