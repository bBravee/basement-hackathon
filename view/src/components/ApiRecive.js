import React,{ useEffect, useState }  from "react"
import './styles/tableTournament.css';
import axios from 'axios';

function ApiRecive() {
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/v1/tournament").then((data) => {
        console.log(data);
        setPost(data?.data);
      });
    }, []);
  
    return (
      <div>
 
        {post.map((item, i) => {
          return (
            <div key={i}>
        <tr>

            <td>{item?.name} </td>
            <td>{item?.amount_of_players}</td>
            <td>{item?.start_date}</td>
            <td><button className='joinTurnamentBtn'>Dołącz do trunieju</button></td>
        </tr>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default ApiRecive;