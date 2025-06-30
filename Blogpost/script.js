let postsArray = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    postsArray = posts;
    displayPosts(postsArray);
  })
  .catch((error) => console.error("Error fetching posts:", error));

function displayPosts(posts) {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <small><strong>User ID:</strong> ${post.userId} | <strong>Post ID:</strong> ${post.id}</small>
    `;

    container.appendChild(card);
  });
}

document.getElementById("search-input").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = postsArray.filter((post) =>
    post.title.toLowerCase().includes(query)
  );
  displayPosts(filtered);
});

document.getElementById("user-filter").addEventListener("change", (e) => {
  const userId = e.target.value;
  const filtered = userId
    ? postsArray.filter((p) => p.userId == userId)
    : postsArray;
  displayPosts(filtered);
});

function sortByTitle() {
  const sorted = [...postsArray].sort((a, b) => a.title.localeCompare(b.title));
  displayPosts(sorted);
}

function sortById() {
  const sorted = [...postsArray].sort((a, b) => a.id - b.id);
  displayPosts(sorted);
}
