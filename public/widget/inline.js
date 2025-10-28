(() => {
  const APP_ORIGIN = "https://taskforge-inline.vercel.app"; // change to your live domain
  const script = document.currentScript;

  // Read attributes
  const requestId = script.getAttribute("data-request-id");
  const targetId = script.getAttribute("data-target-id");
  const width = script.getAttribute("data-width") || "100%";
  const height = script.getAttribute("data-height") || "100%";

  if (!requestId) {
    console.error("❌ Missing 'data-request-id' in embed script tag.");
    return;
  }

  // Determine where to place the iframe
  let container;
  if (targetId) {
    container = document.getElementById(targetId);
    if (!container) {
      console.error(`❌ Element with id '${targetId}' not found.`);
      return;
    }
  } else {
    container = document.createElement("div");
    container.style.width = width;
    container.style.height = height;
    script.parentNode.insertBefore(container, script.nextSibling);
  }

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = `${APP_ORIGIN}/application/request/${requestId}`;
  iframe.style.width = width;
  iframe.style.height = height;
  iframe.style.border = "none";
  iframe.style.display = "block";
  iframe.style.borderRadius = "8px";
  iframe.style.transition = "height 0.3s ease";
  iframe.allow = "clipboard-write; fullscreen";
  iframe.id = `embedded-form-frame-${requestId}`;

  // Add loader text
  const loader = document.createElement("div");
  loader.innerText = "Loading form...";
  loader.style.textAlign = "center";
  loader.style.padding = "1rem";
  loader.style.fontFamily = "sans-serif";
  loader.style.color = "#666";

  container.appendChild(loader);
  container.appendChild(iframe);

  iframe.addEventListener("load", () => loader.remove());

  // Listen for resize message from inside iframe
  window.addEventListener("message", (event) => {
    // if (event.origin !== APP_ORIGIN) return;
    const { type, height: newHeight } = event.data || {};

    if (type === "resize" && newHeight) {
      iframe.style.height = `${newHeight}px`;
    }
    if (type === "close-iframe") {
      iframe.remove();
    }
  });
})();
