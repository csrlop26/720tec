import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 72;
const MAX_LINK_DIST  = 140;   // max distance to draw connection line
const MOUSE_RADIUS   = 160;   // radius of cursor attraction
const BASE_SPEED     = 0.15;  // slower drift
const MAX_SPEED      = 0.7;   // softer cap
const DAMPING        = 0.994; // high damping = very smooth deceleration

export const ParticlesBg = () => {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    // ── Resize ──────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Mouse ────────────────────────────────────────────────
    const onMouse = e => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('mouseleave', onLeave);

    // ── Particles ────────────────────────────────────────────
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * BASE_SPEED * 2,
      vy: (Math.random() - 0.5) * BASE_SPEED * 2,
      r:  Math.random() * 1.5 + 0.8,
    }));

    // ── Loop ─────────────────────────────────────────────────
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const m = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Cursor attraction — very gentle, smooth pull
        const mdx  = m.x - p.x;
        const mdy  = m.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_RADIUS && mdist > 1) {
          const force = (1 - mdist / MOUSE_RADIUS) * 0.006;  // very soft
          p.vx += mdx * force;
          p.vy += mdy * force;
        }

        // Tiny organic noise so movement feels alive
        p.vx += (Math.random() - 0.5) * 0.012;
        p.vy += (Math.random() - 0.5) * 0.012;

        // Speed cap
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) { p.vx = p.vx / spd * MAX_SPEED; p.vy = p.vy / spd * MAX_SPEED; }

        // Damping
        p.vx *= DAMPING;
        p.vy *= DAMPING;

        // Minimum drift — imperceptible nudge so they never fully freeze
        if (spd < 0.05) {
          p.vx += (Math.random() - 0.5) * 0.04;
          p.vy += (Math.random() - 0.5) * 0.04;
        }

        // Move + wrap
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,245,255,0.55)';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q   = particles[j];
          const dx  = p.x - q.x;
          const dy  = p.y - q.y;
          const d   = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_LINK_DIST) {
            const alpha = (1 - d / MAX_LINK_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,245,255,${alpha.toFixed(3)})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      {/* Interactive canvas */}
      <canvas
        ref={canvasRef}
        style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }}
      />
      {/* Depth glow orbs behind canvas */}
      <div style={{ position:'fixed', width:'600px', height:'600px', top:'-20%', left:'-10%', background:'radial-gradient(circle, #006166 0%, transparent 70%)', filter:'blur(100px)', opacity:0.2, pointerEvents:'none', zIndex:0 }} />
      <div style={{ position:'fixed', width:'400px', height:'400px', top:'40%',  right:'-8%', background:'radial-gradient(circle, #006166 0%, transparent 70%)', filter:'blur(90px)',  opacity:0.15, pointerEvents:'none', zIndex:0 }} />
      <div style={{ position:'fixed', width:'350px', height:'350px', bottom:'-10%', left:'35%', background:'radial-gradient(circle, #1a006e 0%, transparent 70%)', filter:'blur(90px)',  opacity:0.2,  pointerEvents:'none', zIndex:0 }} />
    </>
  );
};
