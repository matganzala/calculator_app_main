import React from "react";

export function Button({ element, functionButton }) {
  const stylesNumber = {
    DEL: "m-1 rounded-lg border-b-4 border-[#424D72] text-[20px] bg-[#63719B] text-[#E9E3DB]",
    RESET:
      "m-1 col-span-2 rounded-lg border-b-4 border-[#8D8485] bg-[#E9E3DB] text-[#434957]",
    default:
      "m-1 rounded-lg border-b-4 border-[#8D8485] bg-[#e9e3db] text-[#434957]",
    RESULT:
      "m-1 col-span-2 rounded-lg border-b-4 border-[#9e3024] bg-[#D04031] text-[#E9E3DB]",
  };

  const classNameStyle = stylesNumber[element] || stylesNumber.default;

  return (
    <button
      onClick={functionButton}
      className={`${classNameStyle} p-2 text-[30px] font-leaguespartan`}
    >
      {element !== "RESULT" ? element : "="}
    </button>
  );
}

export default Button;
