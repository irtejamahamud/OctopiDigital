import React, { useEffect, useRef } from "react";

const ParticlesCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null };

    const particleCount = 120; // ⬅️ More particles = denser visuals
    const maxDistance = 100;
    const repulsionRadius = 100;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = 2;
        this.maxSpeed = 1.2; // ⬅️ Limit max speed
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= width) this.vx *= -1;
        if (this.y <= 0 || this.y >= height) this.vy *= -1;

        // Repel from mouse
        if (mouse.x && mouse.y) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repulsionRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (repulsionRadius - dist) / repulsionRadius;

            const burstPower = 50.5; // 🔥 higher value for faster "escape" motion
            const repelX = Math.cos(angle) * force * burstPower;
            const repelY = Math.sin(angle) * force * burstPower;

            this.vx += repelX;
            this.vy += repelY;
          }
        }

        // ✅ Clamp velocity
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > this.maxSpeed) {
          const scale = this.maxSpeed / speed;
          this.vx *= scale;
          this.vy *= scale;
        }
      }
    }

    const particles = Array.from(
      { length: particleCount },
      () => new Particle()
    );

    const drawLines = (p1, p2) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDistance) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)"; // ⬅️ increased opacity
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          drawLines(p, particles[j]);
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10, // ✅ ensure it's above bg image, but below overlay and text
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesCanvas;
