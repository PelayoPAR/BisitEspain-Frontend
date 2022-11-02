import React, { useState } from "react"
import commentService from "../../services/comment.service"

function CreateComment({ itemInfo, comments, setComments }) {
  const isLandmark = itemInfo.contentType === "Landmark"
  const { _id } = itemInfo
  const touristicItem = { _id, isLandmark }
  const defaultRating = 5
  const [form, setForm] = useState({
    message: "",
    rating: defaultRating,
    isLandmark,
    _id,
  })

  function handleChange(evt) {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await commentService
      .createComment(form)

      .catch((error) => {
        console.error(error)
      })
    const response = await commentService.getComments(touristicItem)
    setComments(response.data.comments)
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
          <select
            name="rating"
            id="rating"
            defaultValue={defaultRating}
            onChange={handleChange}
          >
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
  )
}

export default CreateComment
