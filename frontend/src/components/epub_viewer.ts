import ePub, { Rendition } from "epubjs";

const viewerElement = document.getElementById("viewer");
// Check if the viewer element exists, throw error
if (!viewerElement)
    throw new Error("Error: viewerElement not found");

viewerElement.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    if (selection) {
        const selectedText = selection.toString().trim();
        if (selectedText.length > 0) {
        console.log("Selected text:", selectedText);
        sendSelectedTextToBackend(selectedText);
        }
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

export let rendition: Rendition;

async function loadEpub(url: string): Promise<void> {
    if (!viewerElement)
        throw new Error("Error: viewerElement not found");
  
        const book = ePub(url);
  rendition = book.renderTo(viewerElement, { width: "100%", height: "100%" });
  await rendition.display();
}

export { viewerElement, loadEpub };
