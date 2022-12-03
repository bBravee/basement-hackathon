import React, { useState } from "react";
import "./styles/testing.css";
import {Tournament} from "react-tournament-ready";

export default function Testing() {
  const [score, setScore] = useState();

  const handleSetNewScore = () => {
    setScore({
      score: 26
    });

    //score is an object with 1 key ('score')
  };

  return (
    <div className="App123">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <Tournament
        team={{
          name: "team2",
          id: "team2ID"
        }}
        teams={[
          {
            name: "team1",
            id: "team1ID"
          },
          {
            name: "team2",
            id: "team2ID"
          },
          {
            name: "team3",
            id: "team3ID"
          },
          {
            name: "team4",
            id: "team4ID"
          },
          {
            name: "team5",
            id: "team5ID"
          },
          {
            name: "team6",
            id: "team6ID"
          },
          {
            name: "team7",
            id: "team7ID"
          },
          {
            name: "team8",
            id: "team8ID"
          }
        ]}
        insertScore={score}
      />

      <button onClick={handleSetNewScore}>Set Score</button>
    </div>
  );
}
