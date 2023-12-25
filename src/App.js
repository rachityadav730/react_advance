import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function a(c){
  return c
}
const b= 'rachit'

function App() {
  return (
    <div className="App">
      <h1>
        Hello React tut {a(b)}
      </h1>
      <div id= 'test1'>
      </div>
    </div>
  );
}
const para = document.createElement("div");
const node = document.createTextNode("This is new.");
para.setAttribute("id", "myParagraph1");

para.appendChild(node);


const element = document.getElementById("root1");
element.appendChild(para);

const root = ReactDOM.createRoot(document.getElementById('myParagraph1'));
root.render(
  <h1>Hello Moto</h1>
);

export default App;
