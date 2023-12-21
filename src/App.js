import "./App.css";
import { Typography } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" sx={{ color: "red", margin: "10px" }}>
        FORM BY REACT
      </Typography>
      <Form></Form>
      <div>
        <h1>React Material</h1>
        {/* <Button color="primary">Click me</Button>
        <Button color="primary" variant="contained">
          Click me
        </Button>
        <Button color="primary" variant="outline">
          Click me
        </Button>
        <Button variant="text" sx={{ padding: "10px", margin: "20px" }}>
          Click me
        </Button> */}

        {/* Text in material ui */}

        {/* <TextField
          type="text"
          placeholder="name"
          variant="outlined"
          sx={{ margin: "30px" }}
        />
        <TextField
          type="text"
          placeholder="name"
          variant="standard"
          sx={{ margin: "30px" }}
        />
        <TextField
          type="text"
          placeholder="name"
          variant="filled"
          sx={{ margin: "30px" }}
        /> */}
      </div>
    </div>
  );
}

export default App;
