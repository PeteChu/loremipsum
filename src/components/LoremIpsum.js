import React, { Component } from "react";
import { LoremIpsum as LI } from "lorem-ipsum";
import "../css/LoremIpsum.css";

class LoremIpsum extends Component {
  loremIpsum(numberOfParagraph) {
    const lorem = new LI(
      {
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      },
      "plain",
      "\n"
    );
    var paragraphs = [...Array(numberOfParagraph).keys()].map(n => (
      <p className="lorem-text" key={n}>
        {lorem.generateParagraphs(1)}
      </p>
    ));
    return paragraphs;
  }
  render() {
    return (
      <div className="lorem scroll" id="lorem">
        {this.loremIpsum(this.props.numberOfParagraph)}
      </div>
    );
  }
}

export default LoremIpsum;
