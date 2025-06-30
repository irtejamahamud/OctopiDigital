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

document.getElementById("srctitle").addEventListener("input", applyFilters);

document.getElementById("src_uid").addEventListener("input", applyFilters);

document.getElementById("src_pid").addEventListener("input", applyFilters);

function applyFilters() {
  const titleQuery = document.getElementById("srctitle").value.toLowerCase();
  const userIdQuery = document.getElementById("src_uid").value;
  const postIdQuery = document.getElementById("src_pid").value;

  const filtered = postsArray.filter((post) => {
    const matchTitle = post.title.toLowerCase().includes(titleQuery);
    const matchUser = userIdQuery ? post.userId == userIdQuery : true;
    const matchPost = postIdQuery ? post.id == postIdQuery : true;
    return matchTitle && matchUser && matchPost;
  });

  displayPosts(filtered);
}

document.getElementById("srcbyboth").addEventListener("input", () => {
  const query = document.getElementById("srcbyboth").value.toLowerCase().trim();
  const filtered = postsArray.filter((post) => {
    return (
      post.title.toLowerCase().includes(query) ||
      post.userId.toString() === query
    );
  });

  displayPosts(filtered);
});

function resetFilters() {
  document.getElementById("srctitle").value = "";
  document.getElementById("src_uid").value = "";
  document.getElementById("src_pid").value = "";
  document.getElementById("srcbyboth").value = "";
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
