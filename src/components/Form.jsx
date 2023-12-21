import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    courses: "",
    term: false,
    gender: "",
  });

  //  input change func

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  //   form handling

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        type="text"
        onChange={handleChange}
        value={inputs.name}
        variant="outlined"
        placeholder="enter name"
        sx={{ margin: "20px" }}
      />
      <TextField
        name="email"
        type="email"
        onChange={handleChange}
        value={inputs.email}
        variant="outlined"
        placeholder="enter email"
        sx={{ margin: "20px" }}
      />
      <TextField
        name="password"
        type="password"
        onChange={handleChange}
        value={inputs.password}
        variant="outlined"
        placeholder="enter password"
        sx={{ margin: "20px" }}
      />

      <FormControl fullWidth>
        <InputLabel id="menu">Courese</InputLabel>
        <Select
          labelId="courses"
          value={inputs.courses}
          onChange={handleChange}
          name="courses"
        >
          <MenuItem value={"mongodb"}>Mongodb</MenuItem>
          <MenuItem value={"express"}>Express</MenuItem>
          <MenuItem value={"node"}>Node</MenuItem>
          <MenuItem value={"react"}>React</MenuItem>
        </Select>
      </FormControl>
      <br />

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup name="gender" defaultValue={"male"} onChange={handleChange}>
          <FormControlLabel value={"male"} label="male" control={<Radio />} />
          <FormControlLabel
            value={"female"}
            label="female"
            control={<Radio />}
          />
          <FormControlLabel value={"other"} label="other" control={<Radio />} />
        </RadioGroup>
      </FormControl>

      <FormGroup sx={{ margin: "20px" }}>
        <FormControlLabel
          label="I Agree T&C"
          control={
            <Checkbox
              onChange={() =>
                setInputs((prevState) => ({
                  ...prevState,
                  term: !inputs.term,
                }))
              }
            />
          }
        />
      </FormGroup>
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ margin: "20px" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
