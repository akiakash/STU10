import React from "react";
import { useState } from "react";

import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Autocomplete from "@mui/material/Autocomplete";

function AddImages() {
  const [albumImage, setAlbumImage] = useState("");

  function addImages() {
    axios
      .post("http://localhost:4000/imagesmanagement/", {
        images: albumImage,
      })
      .then((res) => {
        console.log(res);
        alert("Successfully Added");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Card
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          height: "400px",
        }}
      >
        <a href="/viewmarks">
          <Button
            variant="contained"
            style={{ marginLeft: "85%", marginTop: "3%" }}
          >
            View Marks
          </Button>{" "}
        </a>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ marginLeft: "15%", marginTop: "2%" }}
        >
          <h1 style={{ marginBottom: "15px" }}> ADD Album</h1>
          <div>
            <TextField
              label="Album Images"
              onChange={(e) => setAlbumImage(e.target.value)}
            />
          </div>

          <Button
            variant="contained"
            style={{ marginLeft: "38%", marginTop: "40px" }}
            onClick={addImages}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default AddImages;
