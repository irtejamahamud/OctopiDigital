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

document.getElementById("search-input").addEventListener("input", applyFilters);

document
  .getElementById("search-user-id")
  .addEventListener("input", applyFilters);

document
  .getElementById("search-post-id")
  .addEventListener("input", applyFilters);

function applyFilters() {
  const titleQuery = document
    .getElementById("search-input")
    .value.toLowerCase();
  const userIdQuery = document.getElementById("search-user-id").value;
  const postIdQuery = document.getElementById("search-post-id").value;

  const filtered = postsArray.filter((post) => {
    const matchTitle = post.title.toLowerCase().includes(titleQuery);
    const matchUser = userIdQuery ? post.userId == userIdQuery : true;
    const matchPost = postIdQuery ? post.id == postIdQuery : true;
    return matchTitle && matchUser && matchPost;
  });

  displayPosts(filtered);
}

function resetFilters() {
  document.getElementById("search-input").value = "";
  document.getElementById("search-user-id").value = "";
  document.getElementById("search-post-id").value = "";
  displayPosts(postsArray);
}

function sortByTitle() {
  const sorted = [...postsArray].sort((a, b) => a.title.localeCompare(b.title));
  displayPosts(sorted);
}

function sortById() {
  const sorted = [...postsArray].sort((a, b) => a.userId - b.userId);
  displayPosts(sorted);
}

function sortByUserId() {
  const sorted = [...postsArray].sort((a, b) => a.id - b.id);
  displayPosts(sorted);
}
