import React from "react";

const LangugeModal = ({ handleChangeLanguage, languageRef }) => {
  return (
    <div className="language-menu" ref={languageRef}>
      <ul>
        <li onClick={() => handleChangeLanguage("1", "Arm")}>Arm</li>
        <li onClick={() => handleChangeLanguage("2", "En")}>En</li>
        <li onClick={() => handleChangeLanguage("3", "RU")}>Ru</li>
      </ul>
    </div>
  );
};

export default LangugeModal;
