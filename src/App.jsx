import TodoList from "./TodoList.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Cart from "./Cart.jsx";
import Post from "./LikeDislikePost.jsx";

function App() {
  const posts = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <TodoList />
      <hr />
      <ColorPicker />
      <hr />
      <Cart />
      <hr />
      <h2>Bài 4: Like/Dislike Post</h2>
      {posts.map((text, index) => (
        <Post key={index} text={text} />
      ))}
    </div>
  );
}

export default App;
