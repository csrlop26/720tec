import { T } from '../tokens';

export const BgDecor = () => (
  <>
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
      backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
      backgroundSize: '48px 48px',
    }} />
    <div style={{ position:'fixed', width:'500px', height:'500px', top:'-15%', left:'-8%',  background:`radial-gradient(circle, ${T.cyanDim} 0%, transparent 70%)`, filter:'blur(80px)', opacity:0.35, pointerEvents:'none', zIndex:0 }} />
    <div style={{ position:'fixed', width:'400px', height:'400px', top:'35%',  right:'-5%', background:`radial-gradient(circle, ${T.cyanDim} 0%, transparent 70%)`, filter:'blur(80px)', opacity:0.25, pointerEvents:'none', zIndex:0 }} />
    <div style={{ position:'fixed', width:'350px', height:'350px', bottom:'-8%',left:'30%', background:`radial-gradient(circle, #1a006e 0%, transparent 70%)`,       filter:'blur(80px)', opacity:0.3,  pointerEvents:'none', zIndex:0 }} />
  </>
);
