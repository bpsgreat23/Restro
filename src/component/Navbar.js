import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <> <nav className="navbar">
    <div className="btn-group">
        {
             menuList.map((curElem)=>{
                return(
                    
                    // <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={()=>filterItem(curElem)}>{curElem}</button>
                )
             })
        }
        {/* // <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
        // <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
        // <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
        // <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button> */}
        {/* dont give space after dinner or anything b/c it will not run  */}
        {/* <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button> */}
        {/* For all items */}
    </div>
</nav>
    </>
  )
}

export default Navbar