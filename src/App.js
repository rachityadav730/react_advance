import './App.css';
import React,{Suspense} from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import BigComponent from './Component/BigComponent'
// import ClassComponent from './Component/classComponent'
// const ClassComponent = React.lazy(() => import('./Component/classComponent'));
// const BigComponent = React.lazy(() => import('./Component/BigComponent'));


function a(c){
  return c
}
const b= 'rachit'

function App() {

  useEffect(() => {
    const t0 = performance.now();
    import('./Component/BigComponent').then(() => {
      const t1 = performance.now();
      console.log(`Lazy loading took ${t1 - t0} milliseconds.`,t1,t0);
    });
  }, []);

  return (
    <div className="App">
      <h1>
        Hello React tut {a(b)}
      </h1>
      <div id= 'test1'>
      </div>
      <Suspense fallback={<div>....loading</div>}> 
      <BigComponent/>
      </Suspense>
     
      
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
