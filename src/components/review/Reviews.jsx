import { React, useState } from "react";
import Movie from "./Movie";
import TV from "./TV";

class Reviews extends React.Component {
  //if view blank then nothing
  //loop through movies.json if view movies
  //loop through tv if view tv
  constructor(props) {
    super(props);
    this.state = {
      view: "movies",
      letter: ""
    };
  }

  render() {
    return (
      <div className="Reviews">
        <div className="Review-Header"></div>
        <main className="Review-Main">
          {this.state.view === "movies" ? <Movie /> : <TV />}
        </main>
      </div>
    );
  }
}

export default Reviews;
