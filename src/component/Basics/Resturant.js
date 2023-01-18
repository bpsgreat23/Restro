import React,{ useState} from 'react';
import "./style.css";
import Menu from '../../menuApi';
import MenuCard from '../../MenuCard';
import Navbar from '../Navbar';

// use of props:-
// Props are used to store data that can be accessed by the children of a React component. They are part of the concept of reusability. Props take the place of class attributes and allow you to create consistent interfaces across the component hierarchy
    // To loop the data inside the component so that we dont have to repeat the code of that component
    // we will use map method in array to get the value of menuData
    // To pass  props , we pass data as attribute inside the Component(eg- <MenuCard menuData/>)
    // It is used to pass data from parent to the child and also the hierarchy should be maintained
const Resturant = () => {
    // For inline css
    // const myStyle = {color : "red"}

//     useState Hooks:- 
        // Its use is to get hold of the data and manages the data
        // But instead of this also redux is preferred
//     The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.
// We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:

// The current state.
// A function that updates the state.

 const [menuData, setMenuData] = useState(Menu);
 //  ways to use useState Hooks:- 1.Use React.useState() and 2. use React,{useState} alongside import 
 //  console.log(menuData);
 //  returns array of two elements 
 // Should be just below the function name , doesnt work if written under return 
 // menuData is state variable , setMenuData is updated data ; the data inside the useState parenthesis is the current data () which is menuData
 
 const uniqueList = [
     // We have created uniqueList so that if in the future ,if we have to add certain data 
     // in the api 
     ...new Set
     (Menu.map((curElem)=>{
         return curElem.category;
        })
        ),
        "All",
    ];
    //  Below useState is used for not repeating the buttons
    // Important :- First use variable in useState then define it like below;
    const [menuList,setMenuList] = useState(uniqueList);
    // [] is for making object entities into array 
    // it is only showing objects but we have to make these entries into array and 
    // we have use new Set(S should be capital) so that elements in category dont repeat themselves
    console.log(uniqueList);
    const filterItem = (category)=>{
        if (category==="All") {

            setMenuData(Menu);
            return;
        }
    const updatedList = Menu.filter((curElem)=>{
        return curElem.category===category
    });
    // setMenuData will get the value of updatedList and it will also change the data of state variable menuData
    return setMenuData(updatedList);
}
// Menu has the whole data of our Api , filter functions just same as map used earlier
// If the value of curElem matches the value of category then we return category 


  return (
   
    <>
    <Navbar filterItem = {filterItem} menuList = {menuList}/>
     <MenuCard menuData={menuData}/>
    </>
    // These divs are first made in Resturant then they are copied into MenuCard
    // <div className='card-container'>
    //    <div className="card">
    //     <div className="card-body">
    //     <span className="card-number card-circle subtle">1</span>
    //     <span className="card-author subtle" >Breakfast</span>
    //     <h2 className="card-title">Maggi</h2>
    //     <span className="card-description subtle">
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eligendi repellat eaque obcaecati vitae quos.
    //     </span>
    //     <div className="card-read">Read</div>
    //     {/* <img src={image} alt="images" className='card-media' /> */}
    //     <span className="card-tag subtle">Order Now</span>
    //     {/* For inline css => */}
    //     {/* <span className="card-author subtle" style={{color :"red"}}>Breakfast</span> */}
    //     {/* <span className="card-author subtle" style={myStyle}>Breakfast</span> */}
    //     </div> 
    //     </div>
    //      </div>
  )
}

export default Resturant

// if default is not used =>
//  export const Resturant = () => {
//   return (
//     <div> Hello Resturant</div>
//   )
// }
