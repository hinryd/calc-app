import React, { useState } from 'react';
import './App.css';
import NumBtns from './components/NumBtns';
import ModBtns from './components/ModBtns';
import OpBtns from './components/OpBtns';

export default function App() {
  const [mem, setMem] = useState('');
  const [input, setInput] = useState('');
  const [ops, setOps] = useState('');
  const numInput = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const modInput = ['Clear', 'AC'];
  const opInput = ['+', '-', '*', '/', '='];

  return (
    <div className='main'>
      <div className='mem'>{mem}</div>
      <div className='input'>{input}</div>
      <div className='num subgrid'>
        {numInput.map((num, index) => {
          return <NumBtns key={index} num={num} setInput={setInput} />;
        })}
      </div>
      <div className='mod subgrid'>
        {modInput.map((mod, index) => {
          return <ModBtns key={index} mod={mod} setInput={setInput} />;
        })}
      </div>
      <div className='ops subgrid'>
        {opInput.map((op, index) => {
          return (
            <OpBtns
              key={index}
              op={op}
              setMem={setMem}
              currentMem={mem}
              setInput={setInput}
              currentInput={input}
              setOps={setOps}
              currentOps={ops}
            />
          );
        })}
      </div>
    </div>
  );
}
