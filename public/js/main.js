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

/* Populate hidden page_loaded timestamp for spam timing check */
(function () {
  document.querySelectorAll('input[name="page_loaded"]').forEach(function (el) {
    el.value = Date.now();
  });
})();

/* Contact & Referral form validation — conditional preventDefault */
(function () {
  var forms = document.querySelectorAll('form.form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      clearErrors(form);

      if (!form.checkValidity()) {
        event.preventDefault();
        showErrors(form);
      }
      // If valid, do nothing here — the native POST proceeds to the form's action URL.
    });
  });

  function clearErrors(form) {
    form.querySelectorAll('.form__error').forEach(function (el) { el.remove(); });
    form.querySelectorAll('[aria-invalid="true"]').forEach(function (el) {
      el.removeAttribute('aria-invalid');
    });
  }

  function showErrors(form) {
    var invalidFields = Array.prototype.filter.call(form.elements, function (el) {
      return typeof el.checkValidity === 'function' && !el.checkValidity() && el.type !== 'hidden';
    });

    invalidFields.forEach(function (field) {
      field.setAttribute('aria-invalid', 'true');

      var errorId = field.id + '-error';
      var error = document.createElement('p');
      error.className = 'form__error';
      error.id = errorId;
      error.textContent = errorMessage(field);

      var describedBy = field.getAttribute('aria-describedby');
      field.setAttribute('aria-describedby', describedBy ? describedBy + ' ' + errorId : errorId);

      field.insertAdjacentElement('afterend', error);
    });

    if (invalidFields.length) {
      invalidFields[0].focus();
    }
  }

  function errorMessage(field) {
    if (field.validity.valueMissing) {
      if (field.type === 'checkbox') return 'Please confirm this before continuing.';
      return 'This field is required.';
    }
    if ((field.validity.typeMismatch || field.validity.patternMismatch) && field.type === 'email') {
      return 'Please enter a valid email address, including a domain (e.g. name@example.com).';
    }
    if ((field.validity.typeMismatch || field.validity.patternMismatch) && field.type === 'tel') {
      return 'Please enter a valid phone number (at least 8 digits).';
    }
    return 'Please check this field.';
  }
})();
