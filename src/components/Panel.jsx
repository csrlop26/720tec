import { motion } from 'framer-motion';
import { T } from '../tokens';
import { IconX } from '../icons';

export const Panel = ({ onClose, children }) => (
  <motion.div
    key="panel"
    initial={{ opacity: 0, y: 24, scale: 0.98 }}
    animate={{ opacity: 1, y: 0,  scale: 1    }}
    exit={{    opacity: 0, y: -16, scale: 0.98 }}
    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: T.bg,
      overflowY: 'auto',
    }}
  >
    <div style={{ paddingTop: '64px' }}>
      {children}
    </div>
  </motion.div>
);
