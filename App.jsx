import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { T } from './src/tokens';
import { ParticlesBg }    from './src/components/ParticlesBg';
import { NavBar }         from './src/components/NavBar';
import { Panel }          from './src/components/Panel';
import { Landing }        from './src/components/Landing';
import { PanelNosotros }  from './src/components/PanelNosotros';
import { PanelServicios } from './src/components/PanelServicios';
import { PanelSocios }       from './src/components/PanelSocios';
import { PanelContacto }     from './src/components/PanelContacto';
import { PanelLocalizacion } from './src/components/PanelLocalizacion';
import { PanelSoporte }     from './src/components/PanelSoporte';

// Panel registry — add new panels here without touching App
const PANELS = {
  nosotros:     () => <PanelNosotros />,
  servicios:    ({ onNav }) => <PanelServicios onContact={() => onNav('contacto')} />,
  socios:       () => <PanelSocios />,
  contacto:     () => <PanelContacto />,
  localizacion: () => <PanelLocalizacion />,
  soporte:      () => <PanelSoporte />,
};

// ── Global CSS injected once ──────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #0a0a10; }
  ::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.2); border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(0,245,255,0.4); }

  /* ── Shimmer gradient text ── */
  .shimmer-text {
    background: linear-gradient(90deg,
      #00F5FF 0%, #7efcff 20%, #0099bb 40%,
      #00F5FF 60%, #7efcff 80%, #0099bb 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: textShimmer 5s linear infinite;
  }
  @keyframes textShimmer {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  /* ── Badge pulse dot ── */
  .pulse-dot {
    animation: pulseDot 2.5s ease-in-out infinite;
  }
  @keyframes pulseDot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,245,255,0.6); opacity:1; }
    50%       { box-shadow: 0 0 0 5px rgba(0,245,255,0); opacity:0.7; }
  }

  /* ── Card scan line sweep on hover ── */
  .scan-card { position: relative; overflow: hidden; }
  .scan-card::after {
    content: '';
    position: absolute; top: 0; left: -100%;
    width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0,245,255,0.06), transparent);
    pointer-events: none;
  }
  .scan-card:hover::after {
    animation: scanSlide 0.7s ease forwards;
  }
  @keyframes scanSlide {
    from { left: -60%; }
    to   { left: 115%; }
  }

  /* ── Glow border on focus inputs ── */
  .glow-input:focus {
    outline: none;
    border-color: rgba(0,245,255,0.5) !important;
    box-shadow: 0 0 0 3px rgba(0,245,255,0.08), 0 0 20px rgba(0,245,255,0.1);
  }

  /* ── Animated gradient border ── */
  .animated-border {
    background: linear-gradient(#0a0a10, #0a0a10) padding-box,
                linear-gradient(135deg, rgba(0,245,255,0.6), rgba(0,153,187,0.2), rgba(0,245,255,0.6)) border-box;
    border: 1px solid transparent;
    animation: borderSpin 4s linear infinite;
    background-size: 200%;
  }
  @keyframes borderSpin {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* ── Float bob for cards ── */
  @keyframes floatBob {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-7px); }
  }

  /* ── Glow pulse for orbs ── */
  @keyframes glowPulse {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(1.08); }
  }

  /* ── Underline slide ── */
  .underline-slide {
    position: relative;
    display: inline-block;
  }
  .underline-slide::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: #00F5FF;
    transition: width 0.3s ease;
  }
  .underline-slide:hover::after { width: 100%; }

  /* ── GlowBtn shine sweep ── */
  @keyframes shineSweep {
    0%   { left: -75%; }
    60%  { left: 125%; }
    100% { left: 125%; }
  }

  /* ── Infinite Marquee ── */
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    background: rgba(0,245,255,0.015);
    border-top: 1px solid rgba(0,245,255,0.08);
    border-bottom: 1px solid rgba(0,245,255,0.08);
  }
  .marquee-container::before,
  .marquee-container::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }
  .marquee-container::before {
    left: 0;
    background: linear-gradient(to right, #0a0a10 10%, transparent 100%);
  }
  .marquee-container::after {
    right: 0;
    background: linear-gradient(to left, #0a0a10 10%, transparent 100%);
  }
  .marquee-content {
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: marquee 35s linear infinite;
  }

  /* ══════════════════════════════════════════════════════════════════
     RESPONSIVE — Tablet (≤ 1024px)
  ══════════════════════════════════════════════════════════════════ */
  @media (max-width: 1024px) {
    .nav-items-desktop { display: none !important; }
    .nav-cta-desktop   { display: none !important; }
    .nav-hamburger     { display: flex !important; }

    .panel-inner {
      padding-left: 2rem !important;
      padding-right: 2rem !important;
    }

    .landing-about-grid {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
    }

    .grid-contact-resp {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
  }

  /* ══════════════════════════════════════════════════════════════════
     RESPONSIVE — Mobile (≤ 640px)
  ══════════════════════════════════════════════════════════════════ */
  @media (max-width: 640px) {
    .nav-hamburger     { display: flex !important; }
    .nav-items-desktop { display: none !important; }
    .nav-cta-desktop   { display: none !important; }

    .panel-inner {
      padding-left: 1.25rem !important;
      padding-right: 1.25rem !important;
      padding-top: 3.5rem !important;
      padding-bottom: 4rem !important;
    }

    .hero-section {
      padding-top: 8rem !important;
      padding-left: 1.25rem !important;
      padding-right: 1.25rem !important;
      padding-bottom: 4rem !important;
    }

    .hero-badge {
      font-size: 0.6rem !important;
      letter-spacing: 2px !important;
      padding: 0.4rem 0.9rem !important;
    }

    .hero-cta-row {
      flex-direction: column !important;
      align-items: stretch !important;
    }
    .hero-cta-row button { width: 100% !important; }

    .landing-about-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }

    .stat-number {
      font-size: clamp(1.8rem, 8vw, 2.5rem) !important;
      letter-spacing: -1px !important;
    }
    
    .stat-card-resp {
      padding: 1rem 0.75rem !important;
    }

    .landing-section-px {
      padding-left: 1.25rem !important;
      padding-right: 1.25rem !important;
    }

    .grid-contact-resp {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }

    .map-container { height: 240px !important; }

    .panel-close-btn {
      right: 1rem !important;
      top: 12px !important;
    }

    .panel-h1 {
      font-size: clamp(1.8rem, 8vw, 2.8rem) !important;
    }

    .ivace-badge {
      flex-direction: column !important;
      text-align: center !important;
      padding: 1rem !important;
    }
  }
`;

export default function App() {
  const [activePanel, setActivePanel] = useState(null);

  const openPanel  = useCallback((id) => setActivePanel(id), []);
  const closePanel = useCallback(() => {
    setActivePanel(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const PanelContent = activePanel ? PANELS[activePanel] : null;

  // Inject global fonts + CSS once
  useEffect(() => {
    const el = document.createElement('style');
    el.id = 'b2tech-global-css';
    if (!document.getElementById('b2tech-global-css')) {
      el.textContent = GLOBAL_CSS;
      document.head.appendChild(el);
    }
    document.title = 'B2Tech | Ingeniería Cloud e Industrial Tech';
    return () => { el.remove(); };
  }, []);

  return (
    <div style={{
      backgroundColor: T.bg,
      color: T.mid,
      fontFamily: T.fontSans,
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    }}>
      <ParticlesBg />
      <NavBar activePanel={activePanel} onNav={openPanel} onLogoClick={closePanel} />
      <Landing onNav={openPanel} />

      <AnimatePresence mode="wait">
        {PanelContent && (
          <Panel key={activePanel} onClose={closePanel}>
            <PanelContent onNav={openPanel} />
          </Panel>
        )}
      </AnimatePresence>
    </div>
  );
}
