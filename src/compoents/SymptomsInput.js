import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { TypeAnimation } from "react-type-animation";

function SymptomsInput({ setPred }) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  const fetchData = async () => {
    const response = await fetch("api/data");
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(value);

  const handlePredict = async () => {
    const predictData = {
      symptoms: value, // Assuming 'value' contains the array of symptoms
    };
    try {
      const response = await fetch("api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(predictData),
      });

      if (!response.ok) {
        throw new Error("Failed to send prediction data");
      }

      const responseData = await response.json();
      setPred(responseData);
      // console.log(responseData);
      // console.log(pred); // Log response data from the server
    } catch (error) {
      console.error("Error sending prediction data:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center mt-5">
      <Autocomplete
        className="w-6/12"
        multiple
        limitTags={4}
        id="multiple-limit-tags"
        options={data}
        value={value}
        renderInput={(params) => (
          <TextField {...params} key={data.map((e, i) => i)} label="Symptoms" />
        )}
        onChange={(event, newInput) => setValue(newInput)}
      />
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1>"Empower your diagnosis journey—drop your symptoms above!"</h1>
        <h1>
          We will provide you with the{" "}
          <TypeAnimation
            className="text-lg text-orange-800"
            sequence={[
              "Medications!",
              1000,
              "Precautions!",
              1000,
              "Diet!",
              1000,
              "Workouts!",
              1000,
            ]}
            wrapper="span"
            speed={80}
            repeat={Infinity}
            cursor={true}
          />
        </h1>
      </div>

      <Button
        className=""
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handlePredict}
      >
        Predict
      </Button>
    </div>
  );
}

export default SymptomsInput;
