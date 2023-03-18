import React, {useState} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const CommentBox = () => {

    const [comments, setComments] = useState([
        {
            id: 1,
            author: "John Harper",
            text: "React is such a great framework!"
          },
          {
            id: 2,
            author: "Jarrod Bennie",
            text: "I'm dreaming in React..."
          }
    ]);

    function addComment(newComment) {
        const newComments = [...comments, newComment];
        setComments(newComments);
    }

    return (
    <>
        <h1>Comments</h1>
        <CommentList comments={comments}/>
        <CommentForm handleSubmit={addComment}/>
    </>
    )
}


export default CommentBox;