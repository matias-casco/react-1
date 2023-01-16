import React from 'react';
import './TodoItem.css';
import { RxPencil1, RxCheckCircled, RxCross2 } from "react-icons/rx";

function TodoItem(props) {

  return (
    <li className="TodoItem">   
      <RxCheckCircled className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}/>

      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <RxPencil1 className="Icon Icon-edit"
        onClick={ () => props.onClickEdit(props.id)}/>

      <RxCross2 className="Icon Icon-delete"
        onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
