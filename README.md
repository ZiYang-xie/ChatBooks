# ChatBooks 📚
![Develop Time: 30min](https://img.shields.io/badge/Develop%20Time-42min-green)

Welcome to **ChatBooks** - the interactive web-based EPUB viewer that integrates with ChatGPT to allow users to read and interact with their favorite books. ChatBooks lets readers chat with the content of the book using ChatGPT, providing a unique and engaging reading experience.

## Something Interesting

*This project is fully developed and debug with chatgpt and I only write minimal code, I hope I can finish this project within 5 hours to verify if it is possible to integrate chatgpt into developer's workflow and maximize our productivity*

*I'm currently reaching the usage limit of GPT-4, having a rest~*

## Features

- Easy-to-use web interface for EPUB reading
- File upload functionality to read your own EPUB files
- Responsive design for a seamless reading experience on various devices
- ChatGPT integration for interactive conversations with the book content
- Modular frontend and backend structure for scalability and easy maintenance

## Technologies

- Frontend: TypeScript, Epub.js, HTML, and CSS
- Backend: Python Flask
- AI Integration: ChatGPT by OpenAI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your_username/ChatBooks.git
cd ChatBooks
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Compile TypeScript files:

```bash
tsc main.ts --outFile main.js
```

4. Install backend dependencies:

```bash
cd ../backend
pip install -r requirements.txt
```

### Running the Application
1. Start the backend server:

```bash
cd backend
python app.py
```

2. Open your browser and navigate to http://127.0.0.1:5000 to see the ChatBooks EPUB viewer in action and start chatting with your book.


### Contributing 
We welcome contributions from the community! Feel free to submit issues, feature requests, or pull requests.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
