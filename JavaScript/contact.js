const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const loadingModal = document.getElementById("loadingModal");
const successModal = document.getElementById("successModal");
const scrollToTopBtn = document.getElementById("scrollToTop");

if (contactForm && loadingModal && successModal) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            loadingModal.classList.add("active");
            await new Promise((resolve) => setTimeout(resolve, 2000));

            loadingModal.classList.remove("active");
            successModal.classList.add("active");
            contactForm.reset();

            setTimeout(() => {
                successModal.classList.remove("active");
                window.location.href = "/";
            }, 3000);
        } catch (_error) {
            loadingModal.classList.remove("active");

            if (formMessage) {
                formMessage.innerHTML =
                    '<div class="form-message error">An error occurred. Please try again.</div>';
            }
        }
    });
}

if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
        scrollToTopBtn.classList.toggle("active", window.pageYOffset > 300);
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
