import React from "react";
import CommentItem from "./CommentItem";

const CommentContainer = ({ commentList }) => {
  if (!commentList.length) {
    return <h1>No comments available</h1>;
  }
  return (
    <>
      {commentList.map((comment) => (
        <CommentItem key={comment.node.id} comment={comment.node} />
      ))}
    </>
  );
};

export default CommentContainer;
