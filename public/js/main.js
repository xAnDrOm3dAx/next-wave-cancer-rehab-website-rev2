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
  var forms = document.querySelectorAll("form.form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      clearErrors(form);
      syncReasonValidity(form);

      if (!form.checkValidity()) {
        showErrors(form);
        return;
      }

      submitViaFetch(form);
    });
  });

  function syncReasonValidity(form) {
    var reasonCheckboxes = form.querySelectorAll('input[name="reason[]"]');
    if (!reasonCheckboxes.length) return;
    var anyChecked = Array.prototype.some.call(reasonCheckboxes, function (cb) { return cb.checked; });
    reasonCheckboxes[0].setCustomValidity(anyChecked ? '' : 'Please select at least one reason for referral.');
  }

  function submitViaFetch(form) {
    var button = form.querySelector('button[type="submit"]');
    var originalText = button ? button.textContent : '';

    if (button) {
      button.disabled = true;
      button.textContent = 'Sending…';
    }

    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 15000);

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      signal: controller.signal,
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        clearTimeout(timeout);
        if (result && result.success) {
          window.location.href = 'thank-you.html';
        } else {
          throw new Error(result && result.error ? result.error : 'Submission failed');
        }
      })
      .catch(function () {
        clearTimeout(timeout);
        showSubmitError(form);
        if (button) {
          button.disabled = false;
          button.textContent = originalText;
        }
      });
  }

  function showSubmitError(form) {
    var existing = form.querySelector('.form__submit-error');
    if (existing) existing.remove();

    var error = document.createElement('p');
    error.className = 'form__error form__submit-error';
    error.textContent = 'Something went wrong sending your submission. Please try again, or contact us directly by phone on 0493 007 436.';
    form.insertBefore(error, form.firstChild);
    error.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function clearErrors(form) {
    form.querySelectorAll(".form__error").forEach(function (el) {
      el.remove();
    });
    form.querySelectorAll('[aria-invalid="true"]').forEach(function (el) {
      el.removeAttribute("aria-invalid");
    });
  }

  function showErrors(form) {
    var invalidFields = Array.prototype.filter.call(form.elements, function (el) {
      return typeof el.checkValidity === "function" && !el.checkValidity() && el.type !== "hidden";
    });

    var shownGroups = {};
    var focusTarget = null;

    invalidFields.forEach(function (field) {
      field.setAttribute("aria-invalid", "true");

      var groupKey = field.type === "radio" ? field.name : field.id;

      if (shownGroups[groupKey]) {
        var existingId = shownGroups[groupKey];
        var describedByExisting = field.getAttribute("aria-describedby");
        field.setAttribute("aria-describedby", describedByExisting ? describedByExisting + " " + existingId : existingId);
        return;
      }

      var errorId = (field.id || field.name) + "-error";
      var error = document.createElement("p");
      error.className = "form__error";
      error.id = errorId;
      error.textContent = errorMessage(field);

      var describedBy = field.getAttribute("aria-describedby");
      field.setAttribute("aria-describedby", describedBy ? describedBy + " " + errorId : errorId);

      var insertAfterEl = field.type === "radio" ? (field.closest("fieldset") || field) : field;
      insertAfterEl.insertAdjacentElement("afterend", error);

      shownGroups[groupKey] = errorId;

      if (!focusTarget) focusTarget = field;
    });

    if (focusTarget) {
      focusTarget.focus();
    }
  }

  function errorMessage(field) {
    if (field.validity.customError) {
      return field.validationMessage;
    }
    if (field.validity.valueMissing) {
      if (field.type === "checkbox") return "Please confirm this before continuing.";
      if (field.type === "radio") return "Please select an option.";
      return "This field is required.";
    }
    if ((field.validity.typeMismatch || field.validity.patternMismatch) && field.type === "email") {
      return "Please enter a valid email address, including a domain (e.g. name@example.com).";
    }
    if ((field.validity.typeMismatch || field.validity.patternMismatch) && field.type === "tel") {
      return "Please enter a valid phone number (at least 8 digits).";
    }
    return "Please check this field.";
  }
})();
