/**
 * handleScrollSpy - Updates the active navigation link based on
 * which section is currently most visible in the viewport.
 *
 * Special logic is applied to "education" and "contact" sections:
 * - If both are fully visible, "contact" is active.
 * - If only "education" is fully visible, "education" is active.
 */
export function handleScrollSpy() {
  // Select all sections that have an ID (used to link nav)
  const sections = document.querySelectorAll('section[id]');
  // Select all navigation links inside <nav> with class "navigation"
  const navLinks = document.querySelectorAll('nav .navigation a');

  /**
   * Calculate how many pixels of an element are visible in the viewport.
   * @param {Element} el - The DOM element to check.
   * @returns {number} Visible height in pixels (0 if not visible).
   */
  function getVisiblePixels(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate visible top and bottom relative to viewport
    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, windowHeight);
    const visibleHeight = visibleBottom - visibleTop;

    // If element is out of viewport or has no visible height, return 0
    if (visibleHeight <= 0 || rect.top >= windowHeight || rect.bottom <= 0) {
      return 0;
    }

    return visibleHeight;
  }

  /**
   * Check if an element is fully visible inside the viewport.
   * @param {Element} el - The DOM element to check.
   * @returns {boolean} True if fully in viewport, false otherwise.
   */
  function isFullyInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  /**
   * Activates the navigation link that corresponds to the given section ID.
   * @param {string} sectionId - The ID of the section to activate.
   */
  function activateSection(sectionId) {
    navLinks.forEach(link => {
      // Add 'active' class only to the link that matches the section ID
      link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
    });
  }

  // Variables to track which section has the most visible pixels
  let maxVisiblePixels = 0;
  let activeId = null;

  // Flags to check if "education" and "contact" sections are fully visible
  let educationFullyVisible = false;
  let contactFullyVisible = false;

  // Loop through all sections to determine visibility and active section
  for (const section of sections) {
    const visiblePixels = getVisiblePixels(section);

    // Keep track of the section with the greatest visible height
    if (visiblePixels > 0) {
      if (visiblePixels > maxVisiblePixels) {
        maxVisiblePixels = visiblePixels;
        activeId = section.id;
      }
    }

    // Special check for "education" section full visibility
    if (section.id === 'education') {
      educationFullyVisible = isFullyInViewport(section);
    }

    // Special check for "contact" section full visibility
    if (section.id === 'contact') {
      contactFullyVisible = isFullyInViewport(section);
    }
  }

  // Custom logic for education and contact:
  // If education is fully visible:
  //   - If contact is also fully visible, activate contact.
  //   - Else activate education.
  if (educationFullyVisible) {
    if (contactFullyVisible) {
      activeId = 'contact';
    } else {
      activeId = 'education';
    }
  }

  // If we found an active section, update navigation accordingly
  if (activeId) {
    activateSection(activeId);
  }
}
