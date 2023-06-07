import { useState } from "react";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import "./UserForm.css";

const UserForm = (props) => {
  const { addUserData } = props;
  const [name, setName] = useState("");
  const [dob, setdob] = useState(moment().format("dd/mm/yy"));
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [college, setcollege] = useState("");


  const submitUserData = () => {
    console.log("name", name);
    console.log("dob", dob.format('DD/MMM/YY'));
    console.log("age",age);
    console.log("gender", gender);
    console.log("college", college);

    addUserData({
      name: name,
      dob: dob.format('DD/MMM/YY'),
      age: age,
      gender: gender,
      college: college
    })
    
  };
  return (
    <div className="user-form">
      <Stack spacing={2} className="stack-form">
        <p>User Form</p>

        <TextField
          id="user-name"
          label="Name"
          variant="filled"
          className="width100"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="Controlled picker"
              value={dob}
              onChange={(newValue) => {
                console.log('newValue',newValue)
                setdob(newValue)
                setage(moment().subtract(7, 'years').format('YY'))
              }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          id="user-age"
          label="age"
          variant="filled"
          className="width100"
          value={age}

        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={gender}
            onChange={(event) => {
              setgender(event.target.value)
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <TextField
          id="outlined-multiline-flexible"
          label="College Name"
          className="width100"
          multiline
          maxRows={4}
          value={college}
          onChange={event => setcollege(event.target.value)}
        />

        <Button variant="contained" color="success" onClick={submitUserData}>
          Submit
        </Button>
      </Stack>
    </div>
  );
};

export default UserForm;
