import React, { Component } from "react";
import { LoremIpsum as LI } from "lorem-ipsum";
import "../css/LoremIpsum.css";

class LoremIpsum extends Component {
  constructor(props) {
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

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
    const paragraphs = [...Array(numberOfParagraph).keys()].map(
      n => "\t" + lorem.generateParagraphs(1) + "\n\n"
    );
    return paragraphs;
  }

  copyToClipboard() {
    const copyText = document.getElementById("lorem").textContent;
    const textArea = document.createElement("textarea");
    textArea.setAttribute("type", "hidden");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div className="lorem scroll" id="lorem" ref={this.textArea}>
        <input
          type="button"
          value="copy"
          onClick={this.copyToClipboard}
          id="copyToClipboard"
        />
        {this.loremIpsum(this.props.numberOfParagraph)}
      </div>
    );
  }
}

export default LoremIpsum;
