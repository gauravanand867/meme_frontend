import React from "react";
import axios from "axios";
import MemeCard from "../MemeCard/index";

import "./style.css";

class MemeBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
    };
  }

  getMeme = () => {
    axios
      .get("https://memesbygaurav.herokuapp.com/memes")
      .then((response) => {
        const data = response.data;
        this.setState({ memes: data });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  componentDidMount() {
    this.getMeme();
  }
  render = () => {
    return (
      <div className="container">
        <p className="title">------ Meme Gallery--------</p>

        <div className="show-area">
          {this.state.memes.map((memes) => {
            return (
              <MemeCard
                key={memes.id}
                picUrl={memes.url}
                Name={memes.name}
                caption={memes.caption}
              />
            );
          })}
        </div>
      </div>
    );
  };
}

export default MemeBoard;
