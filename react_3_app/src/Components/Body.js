import React from 'react'
import Box from './Box';

function Body(props) {
    
    const nextAndPreviousStyle = {
        color: 'white',
        borderRadius: '20px',
        fontWeight: 'bold',
        backgroundColor: '#34A5DA',
        width: '10vw',
        height: '30px',
        textAlign: 'inline-block'
    }

    const otherButtonStyle = {
        backgroundColor: 'white',
        height: '5vh'
    }
    

    return ( 
     <div className = "masterStyle">  
        <div className = "body">
                <Box person = {props.person}
                     counter = {props.counter}
                     displayCounter = {props.displayCounter}/>
                <h1 className = "fixButtons">
                    <button className = "button" onClick = {props.handleClickPrevious} style = {nextAndPreviousStyle}> {'<'} Previous </button>
                    <button className = "button" onClick = {props.handleClickEdit} style = {otherButtonStyle}> Edit</button>
                    <button className = "button" onClick = {props.handleClickDelete} style = {otherButtonStyle}> Delete</button>
                    <button className = "button" onClick = {props.handleClickDelete} style = {otherButtonStyle}> New</button>
                    <button className = "button" onClick = {props.handleClickNext} style = {nextAndPreviousStyle}> Next {'>'} </button>
                </h1>
        </div>
    
    </div> 
    )
  };

  export default Body;