import React, { useContext } from "react";
import { Bar } from "../App";
const Add = () => {
  const { sidebar, setSidebar, setEditedata } = useContext(Bar);
  const click = () => {
    setSidebar(!sidebar);
    setEditedata(null);
  };
  return (
    <svg
      onClick={() => click()}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 427 427"
    >
      <g clipPath="url(#clip0)">
        <path
          fill="#fff"
          d="M405.332 192H234.668V21.332C234.668 9.559 225.109 0 213.332 0 201.559 0 192 9.559 192 21.332V192H21.332C9.559 192 0 201.559 0 213.332c0 11.777 9.559 21.336 21.332 21.336H192v170.664c0 11.777 9.559 21.336 21.332 21.336 11.777 0 21.336-9.559 21.336-21.336V234.668h170.664c11.777 0 21.336-9.559 21.336-21.336 0-11.773-9.559-21.332-21.336-21.332z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H426.667V426.667H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Add;
