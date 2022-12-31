const commentsContainer = document.querySelector("#comments");
instaForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const commentInput = instaForm.elements.comment;
  addComment(commentInput.value);

  commentInput.value = "";
});

const addComment = (comment) => {
    const newComment = document.createElement("li");
    newComment.append(`- ${comment}`);
    commentsContainer.append(newComment);
};

let moveToTop = function () {
    document.body.scrollIntoView({ behavior: "smooth" });
};

