import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./finance.scss";
import { useState } from "react";
import axios from "axios";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const Finance = ({inputs}) => {
  const defaultTheme = createTheme();
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  
  const handleChange = (e) => {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
      try {
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/ddo9vanle/image/upload", data);
  
        const { url } = uploadRes.data;

        const createProject = {
          ...info,
          photos: url,
        };
        //send api request
        await axios.post("/projects/create", createProject);
      } catch (err) {
        console.log(err);
      }
    };

return (
  <div className="finance">
    <Sidebar />
    <div className="Container">
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                  sx={{
                      marginTop: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
                  >
                  <Typography component="h1" variant="h5">
                      Project Submission
                  </Typography>
                  {inputs.map((input) => (
                      <TextField
                      key={input.id}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id={input.id}
                      label={input.label}
                      name={input.name}
                      onChange={handleChange}
                      />
                  ))}
                  <Box>
                    <div className="formInput">
                      <label htmlFor="file" >
                        <DriveFolderUploadOutlinedIcon className="icon" fontSize="large"/>
                      </label>
                      <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                    </div>
                  </Box>
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClick}
                  >
                  Sumbit
                  </Button>                                
              </Box>
          </Container>
      </ThemeProvider>        
    </div>
  </div>
);
};

export default Finance;

// <TextField
// variant="outlined"
// margin="normal"
// required
// fullWidth
// id="username"
// label="Username"
// name="username"
// autoComplete="username"
// autoFocus
// onChange={handleChange}
// />  
