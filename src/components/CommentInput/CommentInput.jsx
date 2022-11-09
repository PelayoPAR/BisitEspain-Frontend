import React, { useState } from "react";
import commentService from "../../services/comment.service";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./CommentInput.css";

function CommentInput({
  setEditing,
  updateMode,
  itemInfo,
  message = "",
  setComments,
  commentId,
  setDisplayComment,
}) {
  const isLandmark = itemInfo?.contentType === "Landmark";
  const _id = itemInfo?._id;
  const touristicItem = { _id, isLandmark };
  const defaultRating = 5;
  const [form, setForm] = useState({
    message,
    rating: defaultRating,
    isLandmark,
    _id,
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (updateMode) {
      await commentService
        .updateOneComment({ ...form, commentId })
        .catch((error) => {
          console.error(error);
        });
    } else {
      await commentService.createComment(form).catch((error) => {
        console.error(error);
      });
      setDisplayComment(true);
    }

    const response = await commentService.getComments(touristicItem);
    isLandmark
      ? setComments(response.data.comments)
      : setComments(response.data.properties.comments);
    if (updateMode) {
      setEditing(false);
    }
  }

  if (updateMode) {
    return (
      <div className="createEditCommentWrapper">
        <form className="commentInputForm" onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "70%" }}
            name="message"
            onChange={handleChange}
            value={form.message}
            id="standard-basic"
            label="Edit Comment"
            variant="standard"
          />

          <FormControl>
            <InputLabel id="addCommentRatingLabel">Rating</InputLabel>
            <Select
              sx={{ minWidth: "70px" }}
              labelId="addCommentRatingLabel"
              label="rating"
              name="rating"
              id="rating"
              defaultValue={defaultRating}
              onChange={handleChange}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" type="submit">
            Edit Comment
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="createEditCommentWrapper">
        <form className="commentInputForm" onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "70%" }}
            name="message"
            onChange={handleChange}
            value={form.message}
            id="standard-basic"
            label="Leave a Comment"
            variant="standard"
          />

          <FormControl>
            <InputLabel id="addCommentRatingLabel">Rating</InputLabel>
            <Select
              sx={{ minWidth: "70px" }}
              labelId="addCommentRatingLabel"
              label="rating"
              name="rating"
              id="rating"
              defaultValue={defaultRating}
              onChange={handleChange}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" type="submit">
            Add Comment
          </Button>
        </form>
      </div>
    );
  }
}

export default CommentInput;
