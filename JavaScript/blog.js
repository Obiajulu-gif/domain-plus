window.redirectToBlog = (index) => {
    localStorage.setItem("currentBlog", String(index));
    setTimeout(() => {
        window.location.replace("/blogTest");
    }, 10);
};

const categoryToggle = document.querySelector("[data-category-toggle]");
const categoryList = document.getElementById("cateList");

if (categoryToggle && categoryList) {
    categoryToggle.addEventListener("click", () => {
        categoryList.hidden = !categoryList.hidden;
    });
}

document.querySelectorAll("[data-blog-index]").forEach((button) => {
    button.addEventListener("click", () => {
        window.redirectToBlog(button.dataset.blogIndex);
    });
});
