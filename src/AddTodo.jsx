import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/actions';
import { v1 as uuid } from 'uuid';

const AddTodo = () => {

  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const onTextChanged = (e) => {
    setInputText(e.target.value);
  }

  const onSubmitClicked = () => {
    dispatch(addTodo({
      id: uuid(),
      name: inputText
    }))
    setInputText('');
  }

  return (
    <div>
      <form>
        <input value={inputText} onChange={onTextChanged} />
        <button type="submit" onClick={onSubmitClicked}>
          Add Todo
        </button>
      </form>
    </div>
  )
}


export default AddTodo;