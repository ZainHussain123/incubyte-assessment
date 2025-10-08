import { useState } from "react";
import { add } from "./utils/stringCalculator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleCalculate = () => {
    try {
      const result = add(input);

      toast.success(`✅ Result: ${result}`, {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (e) {
      toast.error(`❌ ${e.message}`, {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          width: "400px",
          maxWidth: "90%",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#2A7959",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          String Calculator
        </h2>

        <input
          type="text"
          placeholder="Enter string"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            outline: "none",
          }}
        />

        <button
          onClick={handleCalculate}
          style={{
            background: "#2A7959",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#256c4f")}
          onMouseOut={(e) => (e.target.style.background = "#2A7959")}
        >
          Calculate
        </button>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
