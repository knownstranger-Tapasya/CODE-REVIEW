import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState('');

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    console.log("Review button clicked");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ai/get-review`,
        { code }
      );

      console.log("Response from backend:", response.data);
      setReview(response.data.data);
    } catch (error) {
      setReview("❌ Error contacting the backend. Please try again later.");
      console.error(error);
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <div
          onClick={reviewCode}
          className="review"
        >
          Review
        </div>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {typeof review === 'string' ? review : ''}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
