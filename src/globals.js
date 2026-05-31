// --- INLINE ICONS (Lucide styling without external dependencies) ---
const CloudIcon = ({size=24, color="currentColor", strokeWidth=1.5}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
);
const CpuIcon = ({size=24, color="currentColor", strokeWidth=1.5}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
);
const RadioIcon = ({size=24, color="currentColor", strokeWidth=1.5}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>
);
const BrainIcon = ({size=24, color="currentColor", strokeWidth=1.5}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2h5"/><path d="M16.5 2v3.5l1.5 1.5"/><path d="M12 5v2.5l-1.5 1.5"/><path d="M7.5 2v3.5L6 7"/><path d="M6 10H3"/><path d="M21 10h-3"/><path d="M5.5 13.5l-2.5 2.5"/><path d="M18.5 13.5l2.5 2.5"/><path d="M8 17.5v4.5"/><path d="M16 17.5v4.5"/><path d="M12 17.5v4.5"/><circle cx="12" cy="12" r="3"/><circle cx="7" cy="12" r="1"/><circle cx="17" cy="12" r="1"/><circle cx="10" cy="8" r="1"/><circle cx="14" cy="8" r="1"/><circle cx="10" cy="16" r="1"/><circle cx="14" cy="16" r="1"/></svg>
);
const PhoneIcon = ({size=24, color="currentColor", strokeWidth=1.5}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = ({size=24, color="currentColor", strokeWidth=1.5}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

// --- THEME & TOKENS ---
const theme = {
  background: '#13131b',
  surfaceLow: '#1b1b23',
  surfaceHigh: '#292932',
  neonCyan: '#00F5FF',
  cyanDim: '#00696e',
  neonGreen: '#2ff801',
  textHigh: '#e9feff',
  textBody: '#b9caca',
  glassBorder: 'rgba(0, 245, 255, 0.15)',
  glassBg: 'rgba(52, 52, 61, 0.4)',
};

// --- STYLES OBJECT ---
const styles = {
  pageWrapper: {
    backgroundColor: theme.background,
    color: theme.textBody,
    fontFamily: '"Space Grotesk", sans-serif',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased',
  },
  gridBackground: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    zIndex: 0,
    pointerEvents: 'none',
  },
  glowOrb: {
    position: 'absolute',
    width: '400px', height: '400px',
    background: `radial-gradient(circle, ${theme.cyanDim} 0%, transparent 70%)`,
    filter: 'blur(60px)',
    zIndex: 0,
    opacity: 0.5,
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 1,
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    background: theme.glassBg,
    backdropFilter: 'blur(16px)',
    borderBottom: `1px solid ${theme.glassBorder}`,
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    color: theme.neonCyan,
    fontSize: '2rem',
    fontWeight: '700',
    letterSpacing: '-1px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  navLinks: {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
    margin: 0,
  },
  navLinkItem: {
    color: theme.textHigh,
    textDecoration: 'none',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  heroSection: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '8rem 0 4rem 0',
  },
  heroBadge: {
    background: 'rgba(0, 245, 255, 0.1)',
    border: `1px solid ${theme.glassBorder}`,
    color: theme.neonCyan,
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '2rem',
  },
  heroTitle: {
    fontSize: '4.5rem',
    color: theme.textHigh,
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    maxWidth: '800px',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
    color: theme.textBody,
    maxWidth: '600px',
    marginBottom: '3rem',
  },
  ctaButton: {
    background: `linear-gradient(45deg, #005e9f, ${theme.neonCyan})`,
    color: '#002021',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: `0 0 20px rgba(0, 245, 255, 0.4)`,
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  sectionTitle: {
    fontSize: '3rem',
    color: theme.textHigh,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '4rem',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '6rem',
  },
  serviceCard: {
    background: theme.surfaceLow,
    border: `1px solid ${theme.glassBorder}`,
    borderRadius: '16px',
    padding: '2.5rem 1.5rem',
    transition: 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  cardIcon: {
    fontSize: '2.5rem',
    color: theme.neonCyan,
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: theme.textHigh,
    marginBottom: '1rem',
    fontWeight: '600',
  },
  contactSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    padding: '6rem 0',
    borderTop: `1px solid ${theme.glassBorder}`,
  },
  input: {
    width: '100%',
    background: theme.surfaceLow,
    border: 'none',
    borderBottom: `2px solid ${theme.glassBorder}`,
    color: theme.textHigh,
    padding: '1rem 0',
    marginBottom: '2rem',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  footer: {
    background: theme.surfaceLow,
    borderTop: `1px solid ${theme.glassBorder}`,
    padding: '3rem 0',
    textAlign: 'center',
    color: theme.textBody,
  }
};
