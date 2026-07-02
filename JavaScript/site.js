document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setExpanded = (button, expanded) => {
    button.setAttribute("aria-expanded", String(expanded));
    button.classList.toggle("is-open", expanded);
    const icon = button.querySelector("i");

    if (!icon) {
      return;
    }

    icon.classList.toggle("fa-bars", !expanded);
    icon.classList.toggle("fa-xmark", expanded);
  };

  const setupHeaderMenu = () => {
    const legacyToggle = document.querySelector(".mobile-menu-toggle");
    const legacyNav = document.querySelector(".main-nav");
    const drawerToggle = document.getElementById("menu-btn");
    const drawerMenu = document.getElementById("mobile-menu");

    if (legacyToggle && legacyNav) {
      legacyToggle.setAttribute("aria-label", "Toggle navigation");
      legacyToggle.setAttribute("aria-expanded", "false");
      legacyToggle.addEventListener("click", () => {
        const isOpen = legacyNav.classList.toggle("active");
        setExpanded(legacyToggle, isOpen);
      });
    }

    if (drawerToggle && drawerMenu) {
      drawerToggle.setAttribute("aria-expanded", "false");
      drawerToggle.addEventListener("click", () => {
        const isOpen = drawerMenu.classList.toggle("hidden") === false;
        setExpanded(drawerToggle, isOpen);
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (legacyToggle && legacyNav?.classList.contains("active")) {
        legacyNav.classList.remove("active");
        setExpanded(legacyToggle, false);
      }

      if (drawerToggle && drawerMenu && !drawerMenu.classList.contains("hidden")) {
        drawerMenu.classList.add("hidden");
        setExpanded(drawerToggle, false);
      }
    });
  };

  const markActiveNavigation = () => {
    const normalizeRoute = (value) => {
      if (!value || value.startsWith("#")) {
        return "";
      }

      try {
        const url = new URL(value, window.location.origin);

        if (url.origin !== window.location.origin) {
          return "";
        }

        const route = url.pathname.replace(/\/+$/, "").replace(/\.html$/, "");

        return !route || route === "/index" ? "/" : route;
      } catch (_error) {
        const route = value
          .split("#")[0]
          .split("?")[0]
          .replace(/^\.\//, "")
          .replace(/\/+$/, "")
          .replace(/\.html$/, "");

        if (!route || route === "index" || route === "/index") {
          return "/";
        }

        return route.startsWith("/") ? route : `/${route}`;
      }
    };

    const currentRoute = normalizeRoute(window.location.pathname) || "/";

    document
      .querySelectorAll(".main-nav a, .desktop-nav a, .nav-links a, .mobile-nav a")
      .forEach((link) => {
        const linkRoute = normalizeRoute(link.getAttribute("href"));

        if (!linkRoute) {
          return;
        }

        if (linkRoute === currentRoute) {
          link.setAttribute("aria-current", "page");
        }
      });
  };

  const improveImages = () => {
    document.querySelectorAll("img").forEach((image) => {
      const isBrand = image.closest("header") || image.closest(".hero-section, .page-hero, .case-hero");

      if (!image.hasAttribute("decoding")) {
        image.setAttribute("decoding", "async");
      }

      if (!isBrand && !image.hasAttribute("loading")) {
        image.setAttribute("loading", "lazy");
      }
    });
  };

  const setupServiceMarquee = () => {
    const servicesGrid = document.querySelector(".home-page .services-grid");

    if (!servicesGrid || servicesGrid.dataset.marqueeReady === "true" || prefersReducedMotion) {
      return;
    }

    const cards = Array.from(servicesGrid.children);

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("a, button, input, select, textarea").forEach((focusable) => {
        focusable.setAttribute("tabindex", "-1");
      });
      servicesGrid.appendChild(clone);
    });

    servicesGrid.dataset.marqueeReady = "true";
  };

  const setupScrollTracks = () => {
    if (prefersReducedMotion) {
      return;
    }

    const tracks = document.querySelectorAll(".industries-track");

    tracks.forEach((track) => {
      if (track.scrollWidth <= track.clientWidth) {
        return;
      }

      let isPaused = false;
      const pause = () => {
        isPaused = true;
      };
      const resume = () => {
        isPaused = false;
      };

      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", resume);
      track.addEventListener("focusin", pause);
      track.addEventListener("focusout", resume);
      track.addEventListener("touchstart", pause, { passive: true });
      track.addEventListener("touchend", resume, { passive: true });

      const autoScroll = () => {
        if (!isPaused) {
          track.scrollLeft += 0.35;
        }

        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
          track.scrollLeft = 0;
        }

        window.requestAnimationFrame(autoScroll);
      };

      window.requestAnimationFrame(autoScroll);
    });
  };

  const setupRevealAnimation = () => {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const revealTargets = document.querySelectorAll(
      ".service-card, .about-service-card, .roadmap-card, .product-item, .product-card, .industry-item, .industry-card, .benefit-card, .process-step, .case-card, .impact-card, .value-card, .timeline-card, .cta-banner, .section-header",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealTargets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
      observer.observe(target);
    });
  };

  setupHeaderMenu();
  markActiveNavigation();
  improveImages();
  setupServiceMarquee();
  setupScrollTracks();
  setupRevealAnimation();
});
