import React from "react";
import Arr from "../notes";

function Note()
{
  return(
  Arr.map(obj =>
  {
    return (  
  <div key={obj.key} className="note">
      <h1>{obj.title}</h1>
      <p>{obj.content}</p>
    </div>)
  }))
}

export default Note;
