import { motion } from 'framer-motion';
import { T } from '../tokens';
import { IconPhone, IconMail, IconTarget } from '../icons';
import { Badge } from './Primitives';

export const PanelLocalizacion = () => (
  <div className="panel-inner" style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 2.5rem 6rem' }}>
    <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
      <Badge>Localización</Badge>
      <h1 className="panel-h1" style={{ fontSize:'clamp(2.4rem, 6vw, 3.5rem)', color:T.hi, fontWeight:700, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1rem' }}>
        Dónde nos<br/>encontramos
      </h1>
      <p style={{ fontSize:'1.1rem', color:T.mid, lineHeight:1.8, maxWidth:'520px', marginBottom:'3.5rem' }}>
        Desde Castelló de la Plana cubrimos proyectos industriales a nivel nacional e internacional.
      </p>
    </motion.div>

    <div className="grid-contact-resp" style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:'3rem', alignItems:'start' }}>
      {/* Info */}
      <motion.div initial={{ opacity:0, x:-24 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.15 }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'1.75rem' }}>
          {[
            { icon:<IconTarget s={18} c={T.cyan} />, label:'Dirección', val:'C/ Riu Xúquer, 43\nEdificio Fuego, Bloque 8 Bajos\n12006 – Castelló de la Plana' },
            { icon:<IconPhone  s={18} c={T.cyan} />, label:'Teléfono',  val:'964 066 964',    href:'tel:964066964' },
            { icon:<IconMail   s={18} c={T.cyan} />, label:'Email',     val:'info@b2tech.es', href:'mailto:info@b2tech.es' },
          ].map((item, i) => (
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'1rem' }}>
              <div style={{ width:'38px', height:'38px', flexShrink:0, background:'rgba(0,245,255,0.07)', border:`1px solid ${T.cyanBorder}`, borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                {item.icon}
              </div>
              <div>
                <div style={{ color:T.low, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'0.3rem' }}>{item.label}</div>
                {item.href
                  ? <a href={item.href} style={{ color:T.hi, fontSize:'0.95rem', fontWeight:500, textDecoration:'none' }}>{item.val}</a>
                  : <div style={{ color:T.hi, fontSize:'0.95rem', fontWeight:500, whiteSpace:'pre-line', lineHeight:1.6 }}>{item.val}</div>
                }
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Map embed */}
      <motion.div initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2 }}
        className="map-container"
        style={{ width: '100%', borderRadius:'16px', overflow:'hidden', border:`1px solid ${T.cyanBorder}`, height:'380px' }}>
        <iframe
          title="B2Tech ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773.4!2d-0.0404!3d39.9864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5ffe0b2e1a91a7%3A0x2b6a3c15cb7e6441!2sC%2F%20Riu%20X%C3%BAquer%2C%2043%2C%2012006%20Castell%C3%B3%20de%20la%20Plana!5e0!3m2!1ses!2ses!4v1680000000000!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border:0, filter:'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  </div>
);
