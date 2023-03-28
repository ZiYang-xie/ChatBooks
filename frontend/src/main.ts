import { viewerElement, loadEpub } from "./components/epub_viewer";
import { initFileUpload } from "./components/file_upload";
import { initNavigation } from "./components/navigation";

function init() {
    if (viewerElement) {
      initFileUpload(viewerElement, loadEpub);
      initNavigation();
    } else {
      console.error("Error: viewerElement not found");
    }
  }
  

document.addEventListener("DOMContentLoaded", init);
