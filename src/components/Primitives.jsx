import { motion } from 'framer-motion';
import { T } from '../tokens';

export const Badge = ({ children }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
    background: 'rgba(0,245,255,0.06)',
    border: `1px solid ${T.cyanBorder}`,
    color: T.cyan, padding: '0.4rem 1.2rem',
    borderRadius: '4px',
    fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '3.5px',
    marginBottom: '1.5rem',
    fontFamily: T.fontSans,
    backdropFilter: 'blur(8px)',
  }}>
    <span
      className="pulse-dot"
      style={{
        width: '6px', height: '6px', borderRadius: '50%',
        background: T.cyan, flexShrink: 0,
      }}
    />
    {children}
  </span>
);

export const GlowBtn = ({ children, onClick, secondary = false, type = 'button' }) => (
  <motion.button
    type={type}
    onClick={onClick}
    whileHover={{
      scale: 1.03,
      boxShadow: secondary
        ? `0 0 24px rgba(0,245,255,0.1), inset 0 0 24px rgba(0,245,255,0.04)`
        : `0 0 40px rgba(0,245,255,0.55), 0 0 80px rgba(0,245,255,0.15)`,
    }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    style={{
      position: 'relative', overflow: 'hidden',
      background: secondary
        ? 'rgba(0,245,255,0.04)'
        : 'linear-gradient(135deg, #005f8a 0%, #0099cc 45%, #00c8d7 80%, #00F5FF 100%)',
      color:   secondary ? T.mid : '#001820',
      border:  secondary
        ? `1px solid ${T.cyanBorder}`
        : '1px solid rgba(0,245,255,0.5)',
      padding: '0.9rem 2.2rem',
      borderRadius: '6px',
      fontSize: '0.82rem', fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      cursor: 'pointer', fontFamily: T.fontSans,
      backdropFilter: secondary ? 'blur(12px)' : 'none',
      boxShadow: secondary
        ? 'none'
        : '0 0 24px rgba(0,245,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
      transition: 'all 0.3s ease',
    }}
  >
    {/* Animated shine sweep */}
    <span style={{
      position: 'absolute', top: '-50%', left: '-75%',
      width: '50%', height: '200%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
      transform: 'skewX(-20deg)',
      pointerEvents: 'none',
      animation: secondary ? 'none' : 'shineSweep 3.5s ease infinite',
    }} />
    {children}
  </motion.button>
);
