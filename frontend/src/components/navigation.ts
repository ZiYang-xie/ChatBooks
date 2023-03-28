import { rendition } from "./epub_viewer";

function initNavigation(): void {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    // Check if the buttons exist
    if (!prevButton || !nextButton) {
        console.error("Error: prevButton or nextButton not found");
        return;
    }
    
    prevButton.addEventListener("click", () => {
        rendition.prev();
    });

    nextButton.addEventListener("click", () => {
        rendition.next();
    });
}

export { initNavigation };
