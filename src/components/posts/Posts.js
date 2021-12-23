import axios from "axios";
import Post from "../post/Post";
import "./posts.css";

export default function Posts(props) {
  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`)
    .then(props.fetchPosts())
  }
  return (
    <div className="posts">
      {props.posts.map((post, i) => {
        return (
          <div key={i}>
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.id}</div>
            <input type='button' value='Delete' onClick={(e)=>{handleDelete(post.id)}}/>
            <Post id={post.id} fetchPosts={props.fetchPosts}/>
          </div>
        )
      }
      )}
    </div>
  );
}
