window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ArticleNavBar = document.getElementById("ArticleNavbar");
    const NavProgressBar = document.getElementById("NavBarProgressBar");

    NavProgressBar.style.width = `${(scrollTop / docHeight) * 100}vw`;

    if (scrollTop > 450) {
        ArticleNavBar.classList.remove("NavBarBackgroundTransparent");
        ArticleNavBar.classList.add("NavBarBackground");
    } else {
        ArticleNavBar.classList.remove("NavBarBackground");
        ArticleNavBar.classList.add("NavBarBackgroundTransparent");
    }
});
