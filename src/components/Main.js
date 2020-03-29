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
function Main() {
 
    return (
      // grid container 
      <div className="gridContainer">
        {
          // maping through the different areas
        grid.map(section => {

          if(section === '2'){
            return <div className={`grid${section}`}>
              <GridTwoSection />
            </div>
          
          }
    
          return <div className={`grid${section}`}>{section}</div>

        })
        }
      </div>
    );
  }

  // putting content into arr[obj]
const asideData = [
    {
      heading: 'ISSUE 079',
      subheading: 'CATALYSTS',
      paragraph: 'What generate a new theroy in science? ...'
    },
    {
      heading: 'CHAPTER ONE',
      subheading: 'Art',
      paragraph: ''
    },
    {
      heading: 'CHAPTER TWO',
      subheading: 'Mind',
      paragraph: 'Coming December 12'
    },
    {
      heading: 'CHAPTER THREE',
      subheading: 'Energy',
      paragraph: 'Coming December 19'
    },
    {
      heading: 'CHAPTER FOUR',
      subheading: 'Stars',
      paragraph: 'Coming December 26'
    }
  ]
  
  const GridTwoSection = () => {
    return (
      <div className="grid2Con">
        {
          asideData.map(data =>{
            return (
              <div className="grid2Smallbox">
                <div className="sec2H">{data.heading}</div>
                <div className="sec2Sub">{data.subheading}</div>
                <div className="sec2Par">{data.paragraph}</div>
                
              </div>
  
  
            )
          })
        }
      </div>
  
    );
  }
    
 


export default Main;