import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Movies(props) {

  const style1 ={
    display: "flex";
    justifyContent: "space-around";
  }

  const styleColumn= {
    display: "flex";
    flex-direction:"column";
    align-items: "center";
  }


let[moveS, setMovieS] = useState([])



const axio = axios.get('url')
      .then(res => {
        console.log

      })

useEffect(() => {axio}, []) 





  const showMovies = () => {
    Array.map(eachElemen => {
      <div></div>
    })
  }
  return (
    <div>
        <div style={style1}>
        <div styleColumn>

        </div>
          <div sytle={{width:"230px", height:"350px"}}>
            <img src={eachElemen.image} alt="picture movie"/>
            <div>
              <p>{eachElement.title}</p>
            </div>
            <div>
              <Link to='/movieInfo'>See more</Link>
            </div>
          </div>
        </div>


        <div style={{display="flex",justifyContent="space-around"}} >

        </div>
    </div>
  );
}

export default Movies;