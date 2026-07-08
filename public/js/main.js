/**
 * Next Wave Cancer Rehab — main JavaScript
 */

/*Mobile navigation toggle*/
(function () {
  const toggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!toggle || !mobileNav) {
    return;
  }

  const srOnly = toggle.querySelector(".sr-only");
  const openLabel = "Open menu";
  const closeLabel = "Close menu";

  function setMenuOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    mobileNav.classList.toggle("is-open", isOpen);
    mobileNav.hidden = !isOpen;

    if (srOnly) {
      srOnly.textContent = isOpen ? closeLabel : openLabel;
    }
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 64rem)").addEventListener("change", function (event) {
    if (event.matches) {
      setMenuOpen(false);
    }
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });
})();

/* Return to top — auto-attaches on every page, independent of anchor-list links */
(function () {
  var btn = document.querySelector(".return-to-top");

  if (!btn) {
    btn = document.createElement("a");
    btn.href = "#main-content";
    btn.className = "return-to-top";
    btn.innerHTML =
      '<svg class="return-to-top__icon" aria-hidden="true" focusable="false"' +
      ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">' +
      '<path d="M10 15V5M5 10l5-5 5 5" stroke="currentColor"' +
      ' stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>" +
      "Back to top";
    document.body.appendChild(btn);
  }

  function show() {
    btn.classList.add("return-to-top--visible");
  }

  function hide() {
    btn.classList.remove("return-to-top--visible");
  }

  var trigger = document.querySelector(".page-hero");

  if (trigger) {
    var updateVisibility = function () {
      var rect = trigger.getBoundingClientRect();
      if (rect.bottom < 0) {
        show();
      } else {
        hide();
      }
    };

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function () {
        updateVisibility();
      });
      observer.observe(trigger);
      updateVisibility();
    } else {
      window.addEventListener("scroll", updateVisibility, { passive: true });
      updateVisibility();
    }
  } else {
    var SCROLL_THRESHOLD = 400;
    var updateVisibilityByScroll = function () {
      if (window.scrollY > SCROLL_THRESHOLD) {
        show();
      } else {
        hide();
      }
    };

    window.addEventListener("scroll", updateVisibilityByScroll, { passive: true });
    updateVisibilityByScroll();
  }

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.getElementById("main-content");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.addEventListener("blur", function () {
        target.removeAttribute("tabindex");
      }, { once: true });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
})();
