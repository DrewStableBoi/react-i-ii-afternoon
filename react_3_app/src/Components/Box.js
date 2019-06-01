import React from 'react';

function Box(props) {

  const nameStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#6AB8DF'
  }

    return (
      <div className = "box">

              <div className = "counterCorner"> {props.displayCounter}/25 </div>

      <h1 className = "name" style = {nameStyle} >Name: {props.person.name.first} {props.person.name.last}</h1>


            <p className = "description"> From: {props.person.city}, {props.person.country}</p>
            <p className = "description"> Job Title: {props.person.title}</p>
            <p className = "description"> Employer: {props.person.employer}</p>


            <h2 className = "movieFavs"> Favorite Movies:</h2>
            
                        <li>{props.person.favoriteMovies[0]}</li>
                        <li>{props.person.favoriteMovies[1]}</li>
                        <li>{props.person.favoriteMovies[2]}</li>
      </div>  
      
    )
  }

export default Box;