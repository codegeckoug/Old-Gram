const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postWrapper = document.getElementById("posts-wrapper");
for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  // Create a div for the post content
  const postElement = document.createElement("div");
  postElement.classList.add("post"); // Add a class for styling

  // Add HTML content dynamically

  postElement.innerHTML = `
  <div class="post-header">
    <div class="header">
      <img src="${post.avatar}" class="profiles-img" alt="User Avatar" />
      <div class="post-one">
        <strong>${post.name}</strong>
        <span class="location">${post.location}</span>
      </div>
    </div>
    <div>
      <img src="${post.post}" class="image" alt="Post Image" />
    </div>
    <div class="post-actions">
    <img src="./images/icon-heart.png" alt="Like" class="reaction" id="like-icon-${i}" />
      <img src="./images/icon-comment.png" alt="Comment" class="reaction" />
      <img src="./images/icon-dm.png" alt="Direct Message" class="reaction" />
      <p class="post-likes"  id="like-count-${i}">${post.likes} Likes</p>
      <p class="post-comment"><b>${post.username}</b> ${post.comment}</p>
    </div>
  </div>
`;

  // Append the post to the container
  postWrapper.appendChild(postElement);
  const likeIcon = document.getElementById(`like-icon-${i}`);
  const likeCount = document.getElementById(`like-count-${i}`);
  let hasLiked = false;
  likeIcon.addEventListener("dblclick", function () {
    if (!hasLiked) {
      // Check if the heart is not liked yet
      likeIcon.classList.add("liked"); // Add red background (liked)
      post.likes += 1; // Increase the like count
      likeCount.textContent = `${post.likes} Likes`; // Update the like count display
      hasLiked = true; // Mark as liked
    } else {
      // If it's already liked, remove the 'liked' class
      likeIcon.classList.remove("liked"); // Remove red background
      post.likes -= 1; // Decrease the like count
      likeCount.textContent = `${post.likes} Likes`; // Update the like count in HTML
      hasLiked = false; // Mark as unliked
    }
  });
}

console.log(postWrapper);
