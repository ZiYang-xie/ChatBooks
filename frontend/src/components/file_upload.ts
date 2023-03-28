import { viewerElement, loadEpub } from "./epub_viewer";

function initFileUpload(viewerElement: HTMLElement, loadEpub: (url: string) => Promise<void>): void {
  const fileInput = document.getElementById("file-input") as HTMLInputElement;

  fileInput.addEventListener("change", async (event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      await loadEpub(fileUrl);
    }
  });
}

export { initFileUpload };
