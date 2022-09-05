import React from "react";

function textField({ callback }) {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    callback(value);
  };

  return <input type="text" value={text} onChange={handleChange} />;
}

export default textField;
