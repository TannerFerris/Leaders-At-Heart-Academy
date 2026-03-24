import { useEffect, useRef, useState } from 'react';

function JotFormEmbed({ src, title }) {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(500);

  const embedSrc = src.includes('?')
    ? `${src}&isIframeEmbed=1`
    : `${src}?isIframeEmbed=1`;

  useEffect(() => {
    function handleMessage(event) {
      if (!event.data) return;

      let data = event.data;

      if (typeof data === 'string' && data.startsWith('JotFormIFrame')) {
        const parts = data.split(':');
        if (parts[2] === 'height_changed') {
          const newHeight = parseInt(parts[3], 10);
          if (!isNaN(newHeight) && newHeight > 0) setHeight(newHeight);
        }
        return;
      }

      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch { return; }
      }

      if (data?.action === 'setHeight' && data.height) {
        const newHeight = parseInt(data.height, 10);
        if (!isNaN(newHeight) && newHeight > 0) setHeight(newHeight);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      src={embedSrc}
      style={{
        width: '100%',
        height: `${height}px`,
        border: 'none',
        display: 'block',
      }}
      allowFullScreen
    />
  );
}

export default JotFormEmbed;
