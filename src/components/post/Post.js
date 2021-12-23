import "./post.css";
import { useState }  from 'react'
import axios from "axios";

export default function Post(props) {
  const [ showEdit, setShowEdit ] = useState(false)
  const [ title, setTitle] = useState('')
  const [ description, setDescription ] = useState('')

  const handleEdit = (e, id) => {
    e.preventDefault()
    try {
      axios.put(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`,
      {title: title, description: description})
      .then((response)=>{setShowEdit(false)})
      .then(props.fetchPosts())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="post">
      { showEdit ?
        <form onSubmit={(e)=>handleEdit(e, props.id)}>
          <label htmlFor='title'>Title:</label>
          <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <label htmlFor='description'>Description:</label>
          <input type='textarea' name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
          <input type='submit' value='Edit' />
        <input type='button' value='Cancel' onClick={()=>{setShowEdit(false)}}/>
        </form>
        :
        <input type='button' value='Edit' onClick={()=>{setShowEdit(true)}}/>
      }
    </div>
  );
}
