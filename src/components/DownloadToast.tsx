import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export default function DownloadToast() {
  const { content } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [runId, setRunId] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest('a[download]')) return;

      setRunId((id) => id + 1);
      setVisible(true);

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        setVisible(false);
      }, 3600);
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="download-toast"
          role="status"
          aria-live="polite"
          key={runId}
          initial={{ opacity: 0, y: 14, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 14, x: '-50%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="download-toast__icon" aria-hidden="true">
            ↓
          </span>
          <span className="download-toast__text">
            <strong className="download-toast__title">
              {content.download.title}
            </strong>
            <span className="download-toast__subtitle">
              {content.download.subtitle}
            </span>
          </span>
          <span className="download-toast__bar" aria-hidden="true">
            <span />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
