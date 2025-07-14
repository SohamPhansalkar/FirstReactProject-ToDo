import '../App.css'
import React, { useState } from 'react';


function AddBtn({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = () => {
    onAdd(text);
    setText('');
  };

  return (
    <>
      <input
        type="text"
        name="task"
        id="task"
        className="adder"
        onChange={handleChange}
        value={text}
        placeholder="Add a new task"
      />
      <button className="btn adder" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}

export default AddBtn;