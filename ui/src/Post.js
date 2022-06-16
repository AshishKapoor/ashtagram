import { useEffect, useState } from "react";
import "./Post.css";
import { BASE_URL } from "./App";

function Post({ post }) {
  const { image_url, image_url_type } = post;
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (image_url_type === "absolute") {
      setImageUrl(image_url);
    } else {
      setImageUrl(BASE_URL + image_url);
    }
  }, [image_url, image_url_type]);

  return (
    <div className="post">
      <img className="post_image" src={imageUrl} alt="post" />
    </div>
  );
}

export default Post;
