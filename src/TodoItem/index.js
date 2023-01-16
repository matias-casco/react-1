import React from 'react';
import './TodoItem.css';
import { RxCircle, RxCheckCircled, RxCross2 } from "react-icons/rx";

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <RxCircle className='Circle'/><RxCheckCircled className='CheckCircle' />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <RxCross2 className='Cross' />
      </span>
    </li>
  );
}

export { TodoItem };
