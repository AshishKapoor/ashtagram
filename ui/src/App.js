import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";

export const BASE_URL = "http://127.0.0.1:8000/";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + "post/all")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        // return data.reverse();
        const result = data.sort((a,b) => {
          // 2022-06-15T11:18:59.014091
          const t_a = a.timestamp.split(/[-T:]/);
          const t_b = b.timestamp.split(/[-T:]/);
          const date_a = new Date(Date.UTC(t_a[0], t_a[1]-1, t_a[2], t_a[3], t_a[4], t_a[5]))
          const date_b = new Date(Date.UTC(t_b[0], t_b[1]-1, t_b[2], t_b[3], t_b[4], t_b[5]))
          return date_b - date_a;
        })
        return result;
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
