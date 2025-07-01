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
        <a href="view-post.html?id=${
          post.id
        }" class="read-more-btn">Read More</a>
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
const srctitle = document.getElementById("srctitle");
const suggestionBox = document.getElementById("title-suggestions");

srctitle.addEventListener("input", () => {
  const query = srctitle.value.toLowerCase().trim();

  if (!query) {
    suggestionBox.innerHTML = "";
    return;
  }

  const matches = postsArray
    .filter((post) => post.title.toLowerCase().includes(query))
    .slice(0, 5);

  suggestionBox.innerHTML = matches
    .map((post) => `<li>${post.title}</li>`)
    .join("");

  document.querySelectorAll("#title-suggestions li").forEach((item) => {
    item.addEventListener("click", () => {
      srctitle.value = item.textContent;
      suggestionBox.innerHTML = "";
      applyFilters();
    });
  });
});

document.addEventListener("click", (e) => {
  if (!srctitle.contains(e.target) && !suggestionBox.contains(e.target)) {
    suggestionBox.innerHTML = "";
  }
});

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

  const commentsList = document.getElementById("modal-comments");
  commentsList.innerHTML = "<li>Loading comments...</li>";

  fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((res) => res.json())
    .then((comments) => {
      if (comments.length === 0) {
        commentsList.innerHTML = "<li>No comments found.</li>";
        return;
      }

      commentsList.innerHTML = comments
        .map(
          (comment) => `
        <li>
          <strong>${comment.name}</strong><br/>
          <em>${comment.email}</em><br/>
          ${comment.body}
        </li>
      `
        )
        .join("");
    })
    .catch(() => {
      commentsList.innerHTML = "<li>Error loading comments.</li>";
    });
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
