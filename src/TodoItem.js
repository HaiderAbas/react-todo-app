import React from "react";

const TodoItem = ({
  item,
  deleteTodoItem,
  id,
  editTodos,
}) => {
  return (
    <>
      <div className="liContainer">
        <div className="child-li">
        <li>
          {item.value}
        </li>
        </div>
        <div className="btn-child" >
        <button
            className="editBtn"
            onClick={ ()=> {
              editTodos();
            }}
          >
            Edit
          </button>
          <i
            className="far fa-trash-alt"
            onClick={() => deleteTodoItem(id)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
