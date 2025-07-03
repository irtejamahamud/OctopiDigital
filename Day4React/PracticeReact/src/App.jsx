import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // Runs only once on load
  useEffect(() => {
    alert("Counter Initialized");
  }, []);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  if (loading) return <p className="text-center mt-4">Loading posts...</p>;

  return (
    <div className="container">
      <div className="counter">
        <h1>Counter</h1>
        <h2>Count: {count}</h2>
        <div className="buttons">
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>

      <div className="posts">
        <h1>Blog Posts</h1>
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
