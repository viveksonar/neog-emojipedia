import React, { useState } from "react";
import "./styles.css";

var emojiList = {
  "😄": "Smiling",
  "😯": "Disbelife",
  "😟": "Sad",
  "❤️": "Love",
  "🗑️": "Takeout box",
  "😩": "Annoyed"
};

var emojiWeKnow = Object.keys(emojiList);

export default function App() {
  const [meaning, setmeaning] = useState("");

  const emojiInputHandler = (event) => {
    var userInput = event.target.value;
    var meaning = emojiList[userInput];
    if (meaning === undefined) {
      meaning = "We dont have that value in our dictionary write now";
    }
    setmeaning(meaning);
  };

  const emojiclickHandler = (emoji) => {
    console.log(emoji);
    var meaning = emojiList[emoji];
    setmeaning(meaning);
  };
  return (
    <div className="App">
      <h1>Inside OUT!!!</h1>
      {/** print the list below */}
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>

      <h3> Emoji we Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{
              fontSize: "2rem",
              paddingTop: "0.5rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 *  for (var i=0; i< array.length; i++){
 *   shoppingList[i]
 * }
 */
