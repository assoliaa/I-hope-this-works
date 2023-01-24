import React, { useState } from 'react';
import './App.css';

function App() {
  const newDigits = ()=>{
    const digits : any[] = [];
    for(let i=0; i<=9; i++){
      digits.push(<button onClick={()=>updateC(i.toString())} >{i}</button>)
    }
    return digits;
  }
  const[calcul, setcalcul] =useState("");
  const[result, setresult] =useState("");
  const ops =["-","*","/","+","="]
  const calculate =()=>{
    setcalcul(eval(calcul).toString());
  }
  const clear =()=>{
    setcalcul("")
    return;
  }

  const updateC =(value: string)=>{
    if(ops.includes(value) && calcul ==='' ||
    ops.includes(value) && ops.includes(calcul.slice(-1)))
    return;
    setcalcul(calcul+value);
    if(!ops.includes(value)){
      setresult(eval(calcul+value).toString());
    }

  }
     return (
    <div className="application">
      <div className="mycalculator">
         <div className="display">
         {result ? <span></span>:""}{calcul ||"0"}
         </div>
         <div className="digits">
          <button onClick={clear}>clear</button>
          {newDigits()}
          <button onClick={()=>updateC('/')}>:</button>
          <button onClick={()=>updateC('*')}>x</button>
          <button onClick={()=>updateC('+')}>+</button>
          <button onClick={()=>updateC('-')}>-</button>
          <button onClick={calculate}>=</button>
         </div>
      </div>
    </div>
  );
}

const ThisIt =() =>{
  return <div className ="exactly">
  This is it
  </div>
}

/*function MyFun (){
  return (
    <div className="function1">
      <header className="header-zero">
        <h1>React react react</h1>
        <img src="https://avatars.mds.yandex.net/i?id=ecff4cda24d93c1949d4c68143406b77-5661278-images-thumbs&n=13" />
        <p>
          <a href="https://create-react-app.dev/docs/getting-started/">React docs</a>
        </p>
      </header>
    </div>)
}*/

export default App;

/*function setdate(arg0: string) {
  throw new Error('Function not implemented.');
}*/

