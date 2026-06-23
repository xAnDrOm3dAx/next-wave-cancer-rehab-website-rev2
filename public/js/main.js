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

/* Return to top */
(function () {
  var anchorList = document.querySelector(".page-hero .anchor-list");
  var btn = document.querySelector(".return-to-top");

  if (!anchorList || !btn) {
    return;
  }

  function show() {
    btn.classList.add("return-to-top--visible");
  }

  function hide() {
    btn.classList.remove("return-to-top--visible");
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          hide();
        } else {
          show();
        }
      });
    });
    observer.observe(anchorList);
  } else {
    function onScroll() {
      var rect = anchorList.getBoundingClientRect();
      if (rect.bottom < 0) {
        show();
      } else {
        hide();
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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
