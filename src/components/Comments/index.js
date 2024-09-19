const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    if (name && comment) {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        date: new Date(),
        isLiked: false,
      }

      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(comment => {
        if (comment.id === id) {
          return {...comment, isLiked: !comment.isLiked}
        }
        return comment
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const commentsCount = commentsList.length

    return (
      <div className="app-container">
        <h1 className="app-title">Comments</h1>
        <form className="comment-form" onSubmit={this.onAddComment}>
          <input
            type="text"
            className="input"
            placeholder="Your Name"
            value={name}
            onChange={this.onChangeName}
          />
          <textarea
            className="textarea"
            placeholder="Your Comment"
            value={comment}
            onChange={this.onChangeComment}
          />
          <button type="submit" className="add-button">
            Add Comment
          </button>
          <div>
            <img alt="comments" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" />
          </div>
        </form>
        <p className="comments-count">{commentsCount} Comments</p>
        <p>Say Something about 4.0 Technologies</p>
        <ul className="comments-list">
          {commentsList.map(comment => (
            <CommentItem
              key={comment.id}
              commentDetails={comment}
              deleteComment={this.deleteComment}
              toggleLike={this.toggleLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
