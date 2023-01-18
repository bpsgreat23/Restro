import React from 'react'

// Parameter passed should be inside the curly braces always
const MenuCard = ({menuData}) => {
        // console.log(menuData);
  return (
    // {menuData.map(()=>{})}
   <> 
   <section className="main-card--container">
   {menuData.map((curElem)=>{
    const { id, name, category, image , description } = curElem;
    // We have use the above destructing so that we dont have to use curElem in each div and span 
    // (for eg:- curElem.id)
    return (
        <>
        {/* key should also be passed if map is used  */}
        {/* Below div tag was for showing ids  */}
        {/* <div className='card-container' key={curElem.id}> */}
        <div className='card-container' key={id}>
        <div className="card">
         <div className="card-body">
         {/* <span className="card-number card-circle subtle">{curElem.id}</span> */}
         <span className="card-number card-circle subtle">{id}</span>
         {/* {curElem.name} is used for changing the names instead of the numbers used in title ; id and name are from menuApi */}
         {/* <span className="card-author subtle" >{curElem.name}</span> */}
         <span className="card-author subtle" style={{color:"red"}} >{category}</span>
         {/* <h2 className="card-title">{curElem.name}</h2> */}
         <h2 className="card-title">{name}</h2>
         <span className="card-description subtle">
          {description}
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eligendi repellat eaque obcaecati vitae quos.
         </span>
         <div className="card-read">Read</div>
         {/* <img src={curElem.image} alt="images" className='card-media' /> */}
         <img src={image} alt="images" className='card-media' />
         <span className="card-tag subtle">Order Now</span>
        {/* For inline css => */}
         {/* <span className="card-author subtle" style={{color :"red"}}>Breakfast</span> */}
         {/* <span className="card-author subtle" style={myStyle}>Breakfast</span> */}
         </div> 
         </div>
         </div>
         </>
    ) 
})} 

   </section>
   
   </>
  )
}

export default MenuCard;