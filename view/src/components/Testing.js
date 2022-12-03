import React, { useState } from "react";
import "./styles/testing.css";
import {Tournament} from "react-tournament-ready";

export default function Testing() {

  const [score, setScore] = useState(null)

const handleSetNewScore = () => {



    setScore({
<<<<<<< Updated upstream
      score: 100
    });
=======
        score : 8
    })
>>>>>>> Stashed changes

    //score is an object with 1 key ('score')
}

  const [form, setForm] = useState({name: '', id: ''});

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
<<<<<<< Updated upstream
      <input></input>

      <button onClick={handleSetNewScore}>Set Score</button>
=======
<button onClick={handleSetNewScore}>Add score</button>
>>>>>>> Stashed changes
    </div>
  );
}
