// Write your code here
import React from 'react'
import './index.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleLike} = props
  const {id, name, comment, date, isLiked} = commentDetails

  const onDelete = () => {
    deleteComment(id)
  }

  const onToggleLike = () => {
    toggleLike(id)
  }

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-item">
      <div className="comment-header">
        <p className="name">{name}</p>
        <p className="time">{formatDistanceToNow(new Date(date))} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="actions">
        <button type="button" className="like-button" onClick={onToggleLike}>
          <img src={likeImage} alt="like" className="like-image" />
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
