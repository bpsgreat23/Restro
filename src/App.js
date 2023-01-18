import React from 'react'
import Resturant from './component/Basics/Resturant'
// import {Resturant} from './component/Basics/Resturant' in case of not using default

// Important Notes:-
// 1. className should be used instead of class
// 2. If default is not used then we have to use Resturant in curly braces




const App = () => {
  return (
    <>
    <Resturant /> 
    </>
  )
}
// function hond(){
//   return <h1> hello world </h1>
// }

// const Fung = () => {
//   return <h1>My name is Bhanu Pratap Singh</h1>
// }


// const App = () => {
//   return React.createElement(h1,{}, "hello world");
//   // There will be error showing h1 is not defined as we have to use import react
// }



// If we dont want to use another function then we have to use this method -->

// const App = () => {
//   return React.createElement(
//     "div",{},React.createElement("h1",{},"hello world")
//   )
// }



export default App
