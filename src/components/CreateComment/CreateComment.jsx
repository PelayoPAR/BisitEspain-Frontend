import React, { useState } from "react";
import commentService from "../../services/comment.service";

function CreateComment({ props }) {
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const isLandmark = props.contentType === "Landmark";
  const { _id } = props;
  const [form, setForm] = useState({ message: "", isLandmark, _id });

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
        console.log(responseMessage);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.log(errorMessage);
      });
  }

  return (
    <div>
      <h3>Create Comment</h3>
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
        </label>
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CreateComment;
