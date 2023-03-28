import ePub from "epubjs";

const viewerElement = document.getElementById("viewer");
const book = ePub("/path/to/your/epub/file");
const rendition = book.renderTo(viewerElement, { method: "default", width: "100%", height: "100%" });
const displayed = rendition.display();

viewerElement.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    console.log("Selected text:", selectedText);
    sendSelectedTextToBackend(selectedText);
  }
});

async function sendSelectedTextToBackend(text: string): Promise<void> {
  try {
    const response = await fetch("/selected-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Error sending selected text to backend");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

const fileInput = document.getElementById("file-input") as HTMLInputElement;

fileInput.addEventListener("change", async (event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    const file = files[0];
    const fileUrl = URL.createObjectURL(file);
    await loadEpub(fileUrl);
  }
});

async function loadEpub(url: string): Promise<void> {
  const book = ePub(url);
  const rendition = book.renderTo(viewerElement, { method: "default", width: "100%", height: "100%" });
  await rendition.display();
}


const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
  rendition.prev();
});

nextButton.addEventListener("click", () => {
  rendition.next();
});
