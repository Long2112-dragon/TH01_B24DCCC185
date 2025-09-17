import { useState } from "react";

function Post({ text }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div style={{ marginBottom: "10px" }}>
      <p>{text}</p>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>{" "}
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

export default Post;
