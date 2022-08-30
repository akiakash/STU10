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

function TeamManagement() {
  const [postImage, setPostImage] = useState({ myFile: "" });
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  function addTeam() {
    axios
      .post("http://localhost:4000/teammanagement/", {
        image: postImage.myFile,
        name: name,
        position: position,
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
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ myFile: base64 });
    console.log(base64);
  };
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
          <h1 style={{ marginBottom: "15px" }}> ADD Team Member</h1>
          <div>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}></Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="file"
                  label="Image"
                  name="myFile"
                  onChange={(e) => handleFileUpload(e)}
                />
              </Col>
            </Form.Group>
            <TextField label="Name" onChange={(e) => setName(e.target.value)} />

            <TextField
              label="Position"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>

          <Button
            variant="contained"
            style={{ marginLeft: "38%", marginTop: "40px" }}
            onClick={addTeam}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default TeamManagement;
