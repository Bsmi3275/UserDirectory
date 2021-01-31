import React from "react";
//start above

const searchBar = ({ handleChange}) => {
    console.log(handleChange);
    return (
        <div className= "handling">
            <form className= "small">
            <input className="form-control" onChange={(e) => handleChange(e)} type="text" placeholder="Search" />
            </form>
        </div>
    );
};

//end below
export default searchBar;