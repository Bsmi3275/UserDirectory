import React from 'react';
//start above

function EmpTable (props) {

return (
//creating 100 tables with 4 columns
//props, through REACT, takes API Info starting in body
<table className = "table">
    <thead>
    <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>        
        {props.filteredResults.map(result => (
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    <tr>
        <td><img alt="user_img" src={result.picture.thumbnail} /></td>
        <td><{result.name.first}  {result.name.last} /></td>
        <td><{result.phone} /></td>
        <td><{result.email} /></td>
    </tr>
    ))}
    </tbody>
</table>

);
}

//end below
export default EmpTable;