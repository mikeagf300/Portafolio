import { useEffect, useRef } from "react";

interface Wave {
  x: number;
  y: number;
  startTime: number;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waves = useRef<Wave[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animationFrame: number;

    // Ajustar tamaño
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Capturar movimiento del mouse
    window.addEventListener("mousemove", (e) => {
      waves.current.push({
        x: e.clientX,
        y: e.clientY,
        startTime: performance.now(),
      });
    });

    // Dibujar
    const draw = (time: number) => {
      const { width, height } = canvas;

      // Fondo negro sólido
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // Dibujar ondas
      waves.current = waves.current.filter((wave) => {
        const elapsed = (time - wave.startTime) / 1000; // segundos
        const radius = Math.max(elapsed * 30, 1); // velocidad de expansión
        const alpha = Math.max(1 - elapsed * 0.7, 0); // se desvanece más lento

        if (alpha <= 0) return false;

        const hue = (time / 20 + wave.x + wave.y) % 360;

        // Gradiente iridiscente
        const gradient = ctx.createRadialGradient(
          wave.x,
          wave.y,
          0,
          wave.x,
          wave.y,
          radius
        );

        gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, ${alpha})`);
        gradient.addColorStop(
          0.4,
          `hsla(${(hue + 90) % 360}, 100%, 60%, ${alpha * 0.8})`
        );
        gradient.addColorStop(
          0.8,
          `hsla(${(hue + 180) % 360}, 100%, 40%, ${alpha * 0.5})`
        );
        gradient.addColorStop(1, `rgba(0,0,0,0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, radius, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 w-full h-full"
    />
  );
}
