import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Form1 = () => {
  const [name, setName] = useState("");
  const [url, setMemeUrl] = useState("");
  const [caption, setCaption] = useState("");

  const postMeme = () => {
    let data = {
      name,
      url,
      caption,
    };
    alert("DATA : ", name);
    axios
      .post("https://memesbygaurav.herokuapp.com/memes", data)
      .then((response) => {
        const data = response.data;
        this.setState({ messageID: data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const nameHandler = (e) => {
    console.log("e : ", e.nativeEvent.data);
    setName(name + e.nativeEvent.data);
  };

  const urlHandler = (e) => {
    setMemeUrl(url + e.nativeEvent.data);
  };

  const captionHandler = (e) => {
    setCaption(caption + e.nativeEvent.data);
  };

  return (
    <Form onSubmit={postMeme}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          onChange={nameHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="caption">Caption</Label>
        <Input
          type="text"
          name="caption"
          id="caption"
          placeholder="Enter Caption"
          onChange={captionHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="url">URL</Label>
        <Input
          type="text"
          name="url"
          id="url"
          placeholder="Enter URL"
          onChange={urlHandler}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default Form1;
