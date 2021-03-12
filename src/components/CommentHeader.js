import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import dateTransformer from "../helpers/dateTransformer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));
const formTitle = (name, createdAt) =>
  (name || "unknown") + "  " + dateTransformer(createdAt);
const CommentHeader = ({ avatarUrl, name, createdAt }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Avatar" src={avatarUrl} className={classes.small} />
      <Typography variant="subtitle1">{formTitle(name, createdAt)}</Typography>
    </div>
  );
};

export default CommentHeader;
