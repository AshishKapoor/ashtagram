import { useEffect, useState } from "react";
import "./Post.css";
import { BASE_URL } from "./App";

function Post({ post }) {
  const { image_url, image_url_type } = post;
  const [imageUrl, setImageUrl] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (image_url_type === "absolute") {
      setImageUrl(image_url);
    } else {
      setImageUrl(BASE_URL + image_url);
    }
  }, [image_url, image_url_type]);

  useEffect(() => {
    setComments(post.comments);
  }, [])

  return (
    <div className="post">
      <img className="post_image" src={imageUrl} alt="post" />
      <h4 className="post_text">{post.caption}</h4>
    </div>
  );
}

export default Post;
