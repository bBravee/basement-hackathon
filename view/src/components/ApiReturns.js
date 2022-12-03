import React,{ useEffect, useState }  from "react"
import axios from 'axios';

console.log(axios.isCancel('something'));

console.log("Players");
axios.get('http://localhost:5000/api/v1/player')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

<<<<<<< Updated upstream
  console.log("Tournament");
=======
  
>>>>>>> Stashed changes
  axios.get('http://localhost:5000/api/v1/tournament')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
const tournament_id ="1"

  axios.get(`http://localhost:5000/api/v1/game/${tournament_id}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  

  const baseURL = "http://localhost:5000/api/v1/player";

  function Users() {
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/v1/player").then((data) => {
        console.log(data);
        setPost(data?.data);
      });
    }, []);
  
    return (
      <div>
        Database : Player, found data:
        {post.map((item, i) => {
          return (
            <div key={i}>
              <p>First name : {item?.first_name}   FOR ID  {item?._id}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Users;