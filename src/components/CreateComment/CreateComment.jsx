import React, { useState } from "react";
import commentService from "../../services/comment.service";

function CreateComment() {
  const [form, setForm] = useState({ message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    commentService
      .createComment(form)
      .then((response) => {
        setResponseMessage(response.data.message);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }

  return (
    <div>
      <h1>Create Comment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Message
          <input
            type="text"
            name="message"
            onChange={handleChange}
            value={form.message}
            rows="5"
            cols="5"
          />
        </label>
        <br />
        <label>
          Rating
          <select name="rating" id="rating" onChange={handleChange}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          {/* <input
            type="number"
            name="rating"
            onChange={handleChange}
            value={form.rating}
            min={0}
            max={5}
          /> */}
        </label>
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CreateComment;
