"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("PAGE ERROR BOUNDARY CAUGHT ERROR:", error);
  }, [error]);

  return (
    <div style={{ padding: "40px", fontFamily: "monospace", color: "red", backgroundColor: "black", minHeight: "100vh" }}>
      <h2>FATAL PAGE ERROR CAUGHT!</h2>
      <p><strong>Message:</strong> {error.message}</p>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>{error.stack}</pre>
      <button onClick={() => reset()} style={{ padding: "10px", marginTop: "20px", background: "white", color: "black" }}>Try again</button>
    </div>
  );
}
