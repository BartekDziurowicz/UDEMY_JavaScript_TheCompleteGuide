const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

// promysifing
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";

    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const postId = Math.random();
  const post = {
    title: title,
    content: content,
    userId: userId
  }

  sendHttpRequest('POST', "https://jsonplaceholder.typicode.com/posts", post);
}

fetchPosts();
createPost('DUMMY', 'A dummy post')
