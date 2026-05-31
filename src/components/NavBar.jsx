import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { T } from '../tokens';
import { IconLogo, IconX } from '../icons';
import { GlowBtn } from './Primitives';

export const NAV_ITEMS = [
  { id: 'nosotros',    label: 'Nosotros'    },
  { id: 'servicios',   label: 'Servicios'   },
  { id: 'socios',      label: 'Socios'      },
  { id: 'soporte',     label: 'Soporte'     },
  { id: 'contacto',    label: 'Contacto'    },
  { id: 'localizacion',label: 'Localización'},
];

// ── Hamburger icon ───────────────────────────────────────────────────────────
const HamburgerIcon = ({ open }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <motion.line
      x1="3" y1="6" x2="19" y2="6"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      animate={open ? { x1: 4, y1: 4, x2: 18, y2: 18 } : { x1: 3, y1: 6, x2: 19, y2: 6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    />
    <motion.line
      x1="3" y1="11" x2="19" y2="11"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      animate={open ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.18 }}
    />
    <motion.line
      x1="3" y1="16" x2="19" y2="16"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      animate={open ? { x1: 4, y1: 18, x2: 18, y2: 4 } : { x1: 3, y1: 16, x2: 19, y2: 16 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    />
  </svg>
);

export const NavBar = ({ activePanel, onNav, onLogoClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setMenuOpen(false);
    if (activePanel === id) {
      onLogoClick();
    } else {
      onNav(id);
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    onLogoClick();
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '64px',
        background: T.glass, backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: `1px solid ${T.cyanBorder}`,
      }}>
        {/* Logo */}
        <motion.button
          onClick={handleLogoClick}
          whileHover={{ opacity: 0.85, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.7rem', padding:0, flexShrink:0 }}
        >
          <IconLogo s={34} c={T.cyan} />
          <span style={{ fontSize:'1.45rem', fontWeight:700, letterSpacing:'-0.04em', fontFamily:'inherit', lineHeight:1 }}>
            <span style={{ color:T.hi }}>B2</span><span style={{ color:T.cyan }}>Tech</span>
          </span>
        </motion.button>

        {/* Desktop nav items */}
        <ul className="nav-items-desktop" style={{ display:'flex', gap:'0.25rem', listStyle:'none', margin:0, padding:0 }}>
          {NAV_ITEMS.map(item => {
            const active = activePanel === item.id;
            return (
              <li key={item.id}>
                <motion.button
                  onClick={() => handleNav(item.id)}
                  whileHover={{ color: T.cyan }}
                  style={{
                    background: active ? T.cyanGlow : 'transparent',
                    border: active ? `1px solid ${T.cyanBorder}` : '1px solid transparent',
                    color: active ? T.cyan : T.mid,
                    padding: '0.45rem 1.1rem', borderRadius: '100px',
                    fontSize: '0.85rem', fontWeight: active ? 600 : 400,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s ease',
                  }}
                >{item.label}</motion.button>
              </li>
            );
          })}
        </ul>

        {/* Right Section: CTA / Close Panel / Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {activePanel ? (
            <motion.button
              onClick={handleLogoClick}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              whileHover={{ color: T.cyan, borderColor: T.cyanBorderHv, background: 'rgba(0,245,255,0.08)' }}
              style={{
                 display: 'flex', alignItems: 'center', gap: '0.4rem',
                 background: 'rgba(0,245,255,0.04)', border: `1px solid ${T.cyanBorder}`,
                 color: T.hi, cursor: 'pointer', borderRadius: '100px',
                 padding: '0.4rem 0.9rem', fontSize: '0.8rem', fontWeight: 600,
                 textTransform: 'uppercase', letterSpacing: '0.05em',
                 fontFamily: 'inherit', transition: 'all 0.2s ease',
              }}
            >
              <span>Cerrar</span>
              <IconX s={14} c="currentColor" />
            </motion.button>
          ) : (
            <div className="nav-cta-desktop">
              <GlowBtn onClick={() => handleNav('contacto')}>Consulta Técnica</GlowBtn>
            </div>
          )}

        {/* Hamburger button — hidden on desktop via CSS */}
        <motion.button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          whileTap={{ scale: 0.9 }}
          style={{
            display: 'none', // hidden by default, CSS shows it on mobile/tablet
            alignItems: 'center', justifyContent: 'center',
            background: menuOpen ? 'rgba(0,245,255,0.08)' : 'transparent',
            border: `1px solid ${menuOpen ? T.cyanBorder : 'transparent'}`,
            color: menuOpen ? T.cyan : T.mid,
            borderRadius: '8px', width: '40px', height: '40px',
            cursor: 'pointer', transition: 'all 0.2s ease',
            flexShrink: 0,
          }}
        >
          <HamburgerIcon open={menuOpen} />
        </motion.button>
        </div>
      </nav>

      {/* ── Mobile/Tablet drawer ────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 390,
                background: 'rgba(10,10,16,0.7)', backdropFilter: 'blur(4px)',
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 400,
                width: 'min(320px, 88vw)',
                background: 'rgba(10,10,16,0.98)', backdropFilter: 'blur(24px)',
                borderLeft: `1px solid ${T.cyanBorder}`,
                display: 'flex', flexDirection: 'column',
                padding: '5rem 1.75rem 2.5rem',
                overflowY: 'auto',
              }}
            >
              {/* Decorative top line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${T.cyan}, transparent)` }} />

              {/* Nav items */}
              <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {NAV_ITEMS.map((item, i) => {
                    const active = activePanel === item.id;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <button
                          onClick={() => handleNav(item.id)}
                          style={{
                            width: '100%', textAlign: 'left',
                            background: active ? 'rgba(0,245,255,0.08)' : 'transparent',
                            border: `1px solid ${active ? T.cyanBorder : 'transparent'}`,
                            color: active ? T.cyan : T.hi,
                            padding: '0.9rem 1.25rem', borderRadius: '10px',
                            fontSize: '1rem', fontWeight: active ? 600 : 400,
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            cursor: 'pointer', fontFamily: 'inherit',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.color = T.cyan; e.currentTarget.style.background = 'rgba(0,245,255,0.05)'; }}
                          onMouseLeave={e => { e.currentTarget.style.color = active ? T.cyan : T.hi; e.currentTarget.style.background = active ? 'rgba(0,245,255,0.08)' : 'transparent'; }}
                        >
                          {item.label}
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', background: `linear-gradient(90deg, transparent, ${T.cyanBorder}, transparent)`, margin: '1.5rem 0' }} />

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <GlowBtn onClick={() => handleNav('contacto')}>
                  Consulta Técnica
                </GlowBtn>
              </motion.div>

              {/* Footer info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: 'auto', paddingTop: '2rem' }}
              >
                <div style={{ color: T.low, fontSize: '0.72rem', fontFamily: 'Space Mono, monospace', letterSpacing: '1px', lineHeight: 1.8 }}>
                  <div>964 066 964</div>
                  <div>info@b2tech.es</div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
