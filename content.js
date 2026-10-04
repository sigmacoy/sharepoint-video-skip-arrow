(() => {
  // SVG path definitions provided
  const FORWARD_PATH = "M17 3.5a.5.5 0 1 0-1 0v2.2A8 8 0 0 0 2.84 7.45";
  const BACKWARD_PATH = "M3 3.5a.5.5 0 1 1 1 0v2.2a8 8 0 0 1 13.16 1.75";

  function clickButtonBySvgPath(pathSnippet) {
    const paths = document.querySelectorAll("svg path");
    for (const path of paths) {
      const d = path.getAttribute("d") || "";
      if (d.startsWith(pathSnippet)) {
        const button = path.closest("button");
        if (button) {
          button.click();
          return true;
        }
      }
    }
    return false;
  }

  window.addEventListener("keydown", (e) => {
    // Avoid triggering while typing in inputs or contenteditable fields
    const tag = e.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) {
      return;
    }

    if (e.key === "ArrowRight") {
      if (clickButtonBySvgPath(FORWARD_PATH)) {
        e.preventDefault();
      }
    } else if (e.key === "ArrowLeft") {
      if (clickButtonBySvgPath(BACKWARD_PATH)) {
        e.preventDefault();
      }
    }
  });
})();