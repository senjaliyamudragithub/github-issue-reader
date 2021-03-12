import React from "react";
import Typography from "@material-ui/core/Typography";
import CommentHeader from "./CommentHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    color: theme.palette.grey[700],
  },
  main: {
    marginTop: theme.spacing(3),
  },
}));
const CommentItem = ({ comment }) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <CommentHeader
        avatarUrl={comment.author.avatarUrl}
        name={comment.author.name}
        createdAt={comment.createdAt}
      />
      <Typography className={classes.body}>{comment.body}</Typography>
    </div>
  );
};

export default CommentItem;
