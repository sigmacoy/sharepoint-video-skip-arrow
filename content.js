(() => {
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

  function isInputActive(target) {
    if (!target) return false;
    const tag = target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (target.isContentEditable || target.closest('[contenteditable="true"]')) return true;
    
    // Catch custom ARIA widgets (sliders, rich textboxes, search inputs)
    const role = target.getAttribute("role");
    if (role === "textbox" || role === "slider" || role === "combobox" || role === "searchbox") {
      return true;
    }
    return false;
  }

  window.addEventListener("keydown", (e) => {
    // 1. Ignore if holding modifier keys (Shift, Ctrl, Alt, Cmd)
    if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
      return;
    }

    // 2. Ignore if focused on any input or editable context
    if (isInputActive(e.target)) {
      return;
    }

    // 3. Trigger video skip
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