import React, { useState } from "react"
import commentService from "../../services/comment.service"

function CommentInput({
  setEditing,
  updateMode,
  itemInfo,
  message = "",
  setComments,
  commentId,
}) {
  // console.log("commentId at CommentInput ", commentId)
  const isLandmark = itemInfo?.contentType === "Landmark"
  const _id = itemInfo?._id
  const touristicItem = { _id, isLandmark }
  console.log("log for the sakes of console", touristicItem)
  const defaultRating = 5
  const [form, setForm] = useState({
    message,
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
    if (updateMode) {
      const updatedComment = await commentService
        .updateOneComment({ ...form, commentId })
        .catch((error) => {
          console.error(error)
        })
      console.log(updatedComment)
    } else {
      await commentService.createComment(form).catch((error) => {
        console.error(error)
      })
    }

    const response = await commentService.getComments(touristicItem)
    console.log("CommentInput response", response)
    isLandmark
      ? setComments(response.data.comments)
      : setComments(response.data.properties.comments)
    if (updateMode) {
      setEditing(false)
    }
  }

  if (updateMode) {
    return (
      <div>
        <h3>Modify Comment</h3>
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
              defaultValue={form.rating}
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

          <button type="submit">Edit Comment</button>
        </form>
      </div>
    )
  } else {
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

  // return (
  //   <div>
  //     <h3>Create Comment</h3>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Message
  //         <input
  //           type="text"
  //           name="message"
  //           onChange={handleChange}
  //           value={form.message}
  //           rows="5"
  //           cols="5"
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Rating
  //         <select
  //           name="rating"
  //           id="rating"
  //           defaultValue={defaultRating}
  //           onChange={handleChange}
  //         >
  //           <option value={0}>0</option>
  //           <option value={1}>1</option>
  //           <option value={2}>2</option>
  //           <option value={3}>3</option>
  //           <option value={4}>4</option>
  //           <option value={5}>5</option>
  //         </select>
  //       </label>
  //       <br />

  //       <button type="submit">Add Comment</button>
  //     </form>
  //   </div>
  // )
}

export default CommentInput
