window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const ArticleNavBar = document.getElementById("ArticleNavbar");

    if (scrollTop > 450) {
        ArticleNavBar.classList.remove("NavBarBackgroundTransparent");
        ArticleNavBar.classList.add("NavBarBackground");
    } else {
        ArticleNavBar.classList.remove("NavBarBackground");
        ArticleNavBar.classList.add("NavBarBackgroundTransparent");
    }
});
