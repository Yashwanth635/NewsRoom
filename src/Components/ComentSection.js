// CommentSection.js
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <Form onSubmit={handleCommentSubmit}>
        <Form.Group controlId="commentForm">
          <Form.Label>Add a Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Comment
        </Button>
      </Form>

      <ListGroup className="mt-3">
        {comments.map((comment, index) => (
          <ListGroup.Item key={index}>{comment}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentSection;
