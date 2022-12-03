import React,{ useEffect, useState }  from "react"

import './styles/tableTournament.css';
import ApiRecive from './ApiRecive';
import axios from 'axios';











const TableElement = () => {
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/v1/tournament").then((data) => {
        console.log(data);
        setPost(data?.data);
      });
    }, []);
    return ( 
        <>
         {/* <tr>
             <td>1</td>
            <td>2</td>
            <td>3</td>
             <td><button className='joinTurnamentBtn'>Dołącz do trunieju</button></td>
         </tr> */}
        

 
 {post.map((item, i) => {
   return (

 <tr key={i}>
     <td>{item?.name} </td>
     <td>{item?.start_date}</td>
     <td>{item?.amount_of_players}</td>
     <td><button className='joinTurnamentBtn'>Dołącz do trunieju</button></td>
 </tr>

   );
 })}

    </>
       // <ApiRecive/>
     );
}
 
export default TableElement;