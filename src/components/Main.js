import React,{Component} from 'react';

//setting up a loop through all grid spaces 
const grid = ['1','2','3','4','5']

// A more dynamic set up 
// Main file
// return (
//   <Grid2 />
//   <Grid3 />
//   <Grid4 />
//   <Grid5 />
// )
//setting up jsx variable
 let g1s = <div className="top">
  <h6 className="topText1">The Natural Spotlight</h6>
  <h1 className="topTex2">WHY THE LAWS OF PHYSICS ARE INEVITABLE</h1>
  <button className="topB"type="button">READ NOW</button> 
  </div>

// main function to export 
// main function to export 
function Main() {
 
    return (
      // grid container 
      <div className="gridContainer">
          <h1>{g1s}</h1>
      </div>
    );
  }
 


export default Main;