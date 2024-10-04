import React from 'react';


//created a new folder and added the contents of App.js
const Content = () => {
  return (
    //added the hello world and locale time string again
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;