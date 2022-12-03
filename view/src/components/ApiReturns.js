import React,{ useEffect, useState }  from "react"
import axios from 'axios';

console.log(axios.isCancel('something'));

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
        Users
        {post.map((item, i) => {
          return (
            <div key={i}>
              <p>{item?.first_name}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Users;