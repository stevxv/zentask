import React from "react";

import "./TaskCard.css";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tag">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <button
          className="task_delete"
          onClick={() => handleDelete(index)}
          title="Completado"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
            className="delete_icon"
            alt="delete-button"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
