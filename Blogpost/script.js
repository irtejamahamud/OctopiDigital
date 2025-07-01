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
  <button class="eye-btn" onclick='openModal(${JSON.stringify(post)})'>
    <img src="eye-svgrepo-com.svg" alt="View" class="eye-icon" />
  </button>

  <div class="card-content">
    <h3>${post.title}</h3>
    <p>${post.body.slice(0, 20)}...</p>
  </div>

  <div class="card-footer">
    <div class="id-meta">
  <span><label>User:</label> ${post.userId}</span>
  <span><label>Post:</label> ${post.id}</span>
</div>
 
    <a href="view-post.html?id=${post.id}" class="read-more-btn">Read More</a>
  </div>
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
  const sorted = [...postsArray].sort((a, b) => a.id - b.id);
  displayPosts(sorted);
}

function sortByUserId() {
  const sorted = [...postsArray].sort((a, b) => a.userId - b.userId);
  displayPosts(sorted);
}

function openModal(post) {
  document.getElementById("modal-title").textContent = post.title;
  document.getElementById("modal-body").textContent = post.body;
  document.getElementById(
    "modal-meta"
  ).textContent = `User ID: ${post.userId} | Post ID: ${post.id}`;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    closeModal();
  }
};
