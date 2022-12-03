import React, { useState } from "react";
import "./styles/testing.css";
import {Tournament} from "react-tournament-ready";

export default function Testing() {
  
  const [score, setScore] = useState(null)

const handleSetNewScore = () => {

    setScore({
        score : 8
    })
}

  return (
    
    <div className="App123">

      <Tournament
        team={{
          name: "gracz1",
          id: "1"
        }}
        teams={[
          {
            name: "gracz1",
            id: "1"
          },
          {
            name: "gracz2",
            id: "2"
          },
          {
            name: "gracz3",
            id: "3"
          },
          {
            name: "gracz4",
            id: "4"
          },
        ]}
        insertScore={score}
      />
<button onClick={handleSetNewScore}>Add score</button>
    </div>
  );
}
