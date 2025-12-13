import React, { useRef, useEffect } from "react";

// Simple bar visualizer using dummy audio data
export default function AudioVisualizer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barCount = 32;
      const barWidth = canvas.width / barCount;
      for (let i = 0; i < barCount; i++) {
        // Generate dummy data with a wave effect
        const amplitude = 40 + 30 * Math.sin(Date.now() / 400 + i);
        ctx.fillStyle = `hsl(${180 + i * 5}, 80%, 60%)`;
        ctx.fillRect(
          i * barWidth + 2,
          canvas.height - amplitude,
          barWidth - 4,
          amplitude
        );
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <canvas
        ref={canvasRef}
        width={320}
        height={80}
        style={{ width: "100%", maxWidth: 400, height: 80, background: "rgba(0,0,0,0.2)", borderRadius: 12 }}
        aria-label="Audio visualizer animation"
      />
    </div>
  );
}
