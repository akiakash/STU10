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

function ImagesManagement() {
  const [featuredImage, setFeaturedImage] = useState("");
  const [albumImage, setAlbumImage] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumTag, setAlbumTag] = useState("");
  const [result, setResult] = useState("");

  const [data, setData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    input12: "",
    input13: "",
    input14: "",
    input15: "",
    input16: "",
    input17: "",
    input18: "",
    input19: "",
    input20: "",
    input21: "",
    input22: "",
    input23: "",
    input24: "",
    input25: "",
    input26: "",
    input27: "",
    input28: "",
    input29: "",
    input30: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  function addAlbum() {
    axios
      .post("http://localhost:4000/imagesmanagement/", {
        featuredimage: featuredImage,
        albumName: albumName,
        albumTag: albumTag,
        images: data,
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
          height: "100%",
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
              label="Album Name"
              onChange={(e) => setAlbumName(e.target.value)}
            />
            <TextField
              label="Album Tag"
              onChange={(e) => setAlbumTag(e.target.value)}
            />
            <TextField
              label="Featured Image"
              onChange={(e) => setFeaturedImage(e.target.value)}
            />

            {/* <TextField
              label="Album Images"
              onChange={(e) => setAlbumImage(e.target.value)}
            />
            <TextField
              label="Album Images"
              onChange={(e) => setAlbumImage(e.target.value)}
            /> */}
            <TextField
              label="Album Images"
              name="input1"
              value={data.input1}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input2"
              value={data.input2}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input3"
              value={data.input3}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input4"
              value={data.input4}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input5"
              value={data.input5}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input6"
              value={data.input6}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input7"
              value={data.input7}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input8"
              value={data.input8}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input9"
              value={data.input9}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input10"
              value={data.input10}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input11"
              value={data.input11}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input12"
              value={data.input12}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input13"
              value={data.input13}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input14"
              value={data.input14}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input15"
              value={data.input15}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input16"
              value={data.input16}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input17"
              value={data.input17}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input18"
              value={data.input18}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input19"
              value={data.input19}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input20"
              value={data.input20}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input21"
              value={data.input21}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input22"
              value={data.input22}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input23"
              value={data.input23}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input24"
              value={data.input23}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input25"
              value={data.input25}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input26"
              value={data.input26}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input27"
              value={data.input27}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input28"
              value={data.input28}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input29"
              value={data.input29}
              onChange={handleChange}
            />
            <TextField
              label="Album Images"
              name="input30"
              value={data.input30}
              onChange={handleChange}
            />
          </div>

          <Button
            variant="contained"
            style={{ marginLeft: "38%", marginTop: "40px" }}
            onClick={addAlbum}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default ImagesManagement;
