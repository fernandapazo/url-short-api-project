import React, { useState } from "react";

function Form() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with text:", inputText);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center mt-4"
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text"
        className="form-control mb-3"
        style={{ maxWidth: "400px" }}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
