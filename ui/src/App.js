import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";

export const BASE_URL = "http://127.0.0.1:8000/";

function App() {
  const [posts, setPosts] = useState([]);
  console.log("posts: ", posts);
  useEffect(() => {
    fetch(BASE_URL + "post/all")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }, []);
  return (
    <div className="app_posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
