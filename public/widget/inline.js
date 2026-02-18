(function () {
  const SCRIPT = document.currentScript;
  if (!SCRIPT) return;

  const REQUEST_ID = SCRIPT.getAttribute("data-request-id");
  const TARGET_ID = SCRIPT.getAttribute("data-target-id");
  const WIDTH = SCRIPT.getAttribute("data-width") || "100%";
  const HEIGHT = SCRIPT.getAttribute("data-height") || "700px";

  const EMBED_ORIGIN = "https://tforms.dev.thetaskforge.co";

  if (!REQUEST_ID) {
    console.error("❌ Missing 'data-request-id' in embed script.");
    return;
  }

  let container;

  // Use target container if provided
  if (TARGET_ID) {
    container = document.getElementById(TARGET_ID);
    if (!container) {
      console.error(`❌ Element with id '${TARGET_ID}' not found.`);
      return;
    }
  } else {
    container = document.createElement("div");
    SCRIPT.parentNode.insertBefore(container, SCRIPT.nextSibling);
  }

  container.style.width = WIDTH;
  container.style.maxWidth = "100%";
  container.style.position = "relative";

  // Loading indicator
  const loader = document.createElement("div");
  loader.textContent = "Loading form...";
  loader.style.textAlign = "center";
  loader.style.padding = "1rem";
  loader.style.fontFamily = "system-ui, sans-serif";
  loader.style.color = "#666";

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = `${EMBED_ORIGIN}/application/request/${REQUEST_ID}?is_embed=true`;
  iframe.style.width = "100%";
  iframe.style.height = HEIGHT;
  iframe.style.border = "none";
  iframe.style.display = "block";
  iframe.style.borderRadius = "8px";
  iframe.style.transition = "height 0.3s ease";
  iframe.allow = "clipboard-write; fullscreen";
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  iframe.setAttribute("title", "Taskforge Embedded Form");
  iframe.setAttribute("aria-label", "Taskforge Form");
  iframe.id = `taskforge-embedded-form-${REQUEST_ID}`;

  container.appendChild(loader);
  container.appendChild(iframe);

  iframe.addEventListener("load", () => {
    loader.remove();
  });

  // Secure postMessage handling
  function handleMessage(event) {
    if (event.origin !== EMBED_ORIGIN) return;

    const { type, height } = event.data || {};

    if (type === "resize" && height && !isNaN(height)) {
      iframe.style.height = `${height}px`;
    }

    if (type === "close-iframe") {
      iframe.remove();
      window.removeEventListener("message", handleMessage);
    }
  }

  window.addEventListener("message", handleMessage);
})();
