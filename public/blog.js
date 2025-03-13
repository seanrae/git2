document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.getElementById("blog-container");

            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");

                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><strong>By:</strong> ${post.author} | <em>${post.date}</em></p>
                    <img src="${post.image}" alt="${post.title}" style="max-width:100%; height:auto;">
                    <p>${post.content}</p>
                    <hr>
                `;
                
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching blog posts:", error));
});
