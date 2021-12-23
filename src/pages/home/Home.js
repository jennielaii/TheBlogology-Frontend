import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();


  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3001/post");
    console.log(res.data.blogs)
    setPosts(res.data.blogs);
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);
  
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} fetchPosts={fetchPosts}/>
        <Sidebar />
      </div>
    </>
  );
}
