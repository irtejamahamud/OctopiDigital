const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
