import React, {useState} from "react";

const CommentForm = ({ handleSubmit }) => {
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        console.log(author);
        console.log(comment);
        const newComment = {
            id: Date.now(),
            author: author,
            text: comment,
        }
        handleSubmit(newComment);
        setAuthor('');
        setComment('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Author:</label>
            <input id="author" type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />

            <label htmlFor="">Comment:</label>
            <input id="comment"type="text" value={comment} onChange={(event) => setComment(event.target.value)} />

            <input type="submit" />
        </form>
    );
};


export default CommentForm;