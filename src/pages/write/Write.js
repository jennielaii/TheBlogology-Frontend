import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";

export default function Write() {
  let history = useHistory();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const {userState} = useContext(UserContext);
  const [user, setUser] = userState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/post", {userid: user.id, title: title, description: description})
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            value={description}
            onChange={e=>setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
