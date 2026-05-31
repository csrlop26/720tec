import { useState } from 'react';
import { motion } from 'framer-motion';
import { T } from '../tokens';
import { IconPhone, IconMail, IconTarget } from '../icons';
import { Badge, GlowBtn } from './Primitives';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export const PanelContacto = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', msg:'' });
  const [privacy, setPrivacy] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    if (!privacy) return;
    setSent(true);
  };

  const inputStyle = {
    width:'100%', background:T.surface1, border:'none',
    borderBottom:`2px solid ${T.cyanBorder}`, color:T.hi,
    padding:'1rem 0', marginBottom:'1.75rem', fontFamily:'inherit',
    fontSize:'1rem', outline:'none', transition:'border-color 0.3s',
    boxSizing:'border-box', caretColor:T.cyan,
  };

  return (
    <div className="panel-inner" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem 6rem' }}>
      <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
        <Badge>Contacto</Badge>
        <h1 className="panel-h1" style={{ fontSize:'clamp(2.4rem, 6vw, 3.5rem)', color:T.hi, fontWeight:700, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1rem' }}>
          Hablemos de tu<br/>próximo proyecto
        </h1>
      </motion.div>

      <div className="grid-contact-resp" style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'4rem', marginTop:'3rem', alignItems:'start' }}>
        {/* Left — contact info */}
        <motion.div initial={{ opacity:0, x:-24 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.15 }}>
          <p style={{ color:T.mid, fontSize:'1.05rem', lineHeight:1.8, marginBottom:'2.5rem' }}>
            Para infraestructura industrial, cloud o automatización. Cuéntanos el reto y te responderemos con una propuesta técnica en menos de 24 horas.
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:'1.75rem', marginBottom:'2.5rem' }}>
            {[
              { icon:<IconPhone  s={18} c={T.cyan} />, label:'Teléfono',   val:'964 066 964',                                            href:'tel:964066964' },
              { icon:<IconMail   s={18} c={T.cyan} />, label:'Email',      val:'info@b2tech.es',                                         href:'mailto:info@b2tech.es' },
              { icon:<IconTarget s={18} c={T.cyan} />, label:'Dirección',  val:'C/ Riu Xúquer, 43 · Edificio Fuego, Bloque 8 Bajos\n12006 Castelló de la Plana', href:null },
            ].map((item, i) => (
              <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'1rem' }}>
                <div style={{ width:'38px', height:'38px', flexShrink:0, background:'rgba(0,245,255,0.07)', border:`1px solid ${T.cyanBorder}`, borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color:T.low, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'0.25rem' }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color:T.hi, fontSize:'0.95rem', fontWeight:500, textDecoration:'none' }}>{item.val}</a>
                    : <div style={{ color:T.hi, fontSize:'0.95rem', fontWeight:500, whiteSpace:'pre-line', lineHeight:1.5 }}>{item.val}</div>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display:'flex', gap:'0.75rem' }}>
            {[
              { label:'Facebook', href:'https://www.facebook.com/b2tech/', icon:<FacebookIcon /> },
              { label:'Twitter',  href:'https://twitter.com/b2tech',        icon:<TwitterIcon  /> },
            ].map((s, i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ borderColor: T.cyanBorderHv, color: T.cyan }}
                style={{
                  display:'flex', alignItems:'center', gap:'0.5rem',
                  color:T.mid, textDecoration:'none',
                  background:'rgba(0,245,255,0.05)', border:`1px solid ${T.cyanBorder}`,
                  borderRadius:'100px', padding:'0.45rem 1rem',
                  fontSize:'0.82rem', transition:'all 0.2s',
                }}>
                {s.icon} {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2 }}
          style={{ background:T.surface1, border:`1px solid ${T.cyanBorder}`, borderRadius:'20px', padding:'2.5rem' }}
        >
          {sent ? (
            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} style={{ textAlign:'center', padding:'2rem 0' }}>
              <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>✅</div>
              <h3 style={{ color:T.hi, fontSize:'1.4rem', marginBottom:'0.75rem' }}>¡Mensaje enviado!</h3>
              <p style={{ color:T.mid }}>Te contactaremos en menos de 24 horas.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input name="name"    value={form.name}    onChange={handleChange} type="text"  placeholder="Nombre"                    style={inputStyle} required />
              <input name="company" value={form.company} onChange={handleChange} type="text"  placeholder="Empresa"                   style={inputStyle} />
              <input name="email"   value={form.email}   onChange={handleChange} type="email" placeholder="Correo electrónico"        style={inputStyle} required />
              <input name="phone"   value={form.phone}   onChange={handleChange} type="tel"   placeholder="Teléfono"                  style={inputStyle} />
              <textarea name="msg"  value={form.msg}     onChange={handleChange} placeholder="Mensaje"                               style={{ ...inputStyle, height:'100px', resize:'none' }} required />

              {/* Privacy checkbox */}
              <label style={{ display:'flex', alignItems:'flex-start', gap:'0.75rem', marginBottom:'1.75rem', cursor:'pointer' }}>
                <input type="checkbox" checked={privacy} onChange={e => setPrivacy(e.target.checked)}
                  style={{ marginTop:'0.2rem', accentColor: T.cyan, flexShrink:0 }} required />
                <span style={{ fontSize:'0.78rem', color:T.low, lineHeight:1.5 }}>
                  He leído y acepto la{' '}
                  <a href="https://b2tech.es/aviso-leal-y-politica-de-privacidad/" target="_blank" rel="noopener noreferrer"
                    style={{ color:T.cyan, textDecoration:'none' }}>política de privacidad</a>.
                  También puede solicitar nuestra política de seguridad desde este formulario.
                </span>
              </label>

              <GlowBtn type="submit">Enviar mensaje →</GlowBtn>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};
