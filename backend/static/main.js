var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
System.register("components/epub_viewer", ["epubjs"], function (exports_1, context_1) {
    "use strict";
    var epubjs_1, viewerElement, rendition;
    var __moduleName = context_1 && context_1.id;
    function sendSelectedTextToBackend(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("/selected-text", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text }),
                });
                if (!response.ok) {
                    throw new Error("Error sending selected text to backend");
                }
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
    function loadEpub(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!viewerElement)
                throw new Error("Error: viewerElement not found");
            const book = epubjs_1.default(url);
            exports_1("rendition", rendition = book.renderTo(viewerElement, { width: "100%", height: "100%" }));
            yield rendition.display();
        });
    }
    exports_1("loadEpub", loadEpub);
    return {
        setters: [
            function (epubjs_1_1) {
                epubjs_1 = epubjs_1_1;
            }
        ],
        execute: function () {
            viewerElement = document.getElementById("viewer");
            exports_1("viewerElement", viewerElement);
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
        }
    };
});
System.register("components/file_upload", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function initFileUpload(viewerElement, loadEpub) {
        const fileInput = document.getElementById("file-input");
        fileInput.addEventListener("change", (event) => __awaiter(this, void 0, void 0, function* () {
            const files = event.target.files;
            if (files && files.length > 0) {
                const file = files[0];
                const fileUrl = URL.createObjectURL(file);
                yield loadEpub(fileUrl);
            }
        }));
    }
    exports_2("initFileUpload", initFileUpload);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("components/navigation", ["components/epub_viewer"], function (exports_3, context_3) {
    "use strict";
    var epub_viewer_1;
    var __moduleName = context_3 && context_3.id;
    function initNavigation() {
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");
        // Check if the buttons exist
        if (!prevButton || !nextButton) {
            console.error("Error: prevButton or nextButton not found");
            return;
        }
        prevButton.addEventListener("click", () => {
            epub_viewer_1.rendition.prev();
        });
        nextButton.addEventListener("click", () => {
            epub_viewer_1.rendition.next();
        });
    }
    exports_3("initNavigation", initNavigation);
    return {
        setters: [
            function (epub_viewer_1_1) {
                epub_viewer_1 = epub_viewer_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("main", ["components/epub_viewer", "components/file_upload", "components/navigation"], function (exports_4, context_4) {
    "use strict";
    var epub_viewer_2, file_upload_1, navigation_1;
    var __moduleName = context_4 && context_4.id;
    function init() {
        if (epub_viewer_2.viewerElement) {
            file_upload_1.initFileUpload(epub_viewer_2.viewerElement, epub_viewer_2.loadEpub);
            navigation_1.initNavigation();
        }
        else {
            console.error("Error: viewerElement not found");
        }
    }
    return {
        setters: [
            function (epub_viewer_2_1) {
                epub_viewer_2 = epub_viewer_2_1;
            },
            function (file_upload_1_1) {
                file_upload_1 = file_upload_1_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            }
        ],
        execute: function () {
            document.addEventListener("DOMContentLoaded", init);
        }
    };
});
