import { useEffect, useState } from 'react';

const SpriteLoader: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadSprite = () => {
      fetch('/svg/symbol-defs.svg')
        .then(response => response.text())
        .then(svg => {
          const div = document.createElement('div');
          div.innerHTML = svg;
          document.body.insertBefore(div, document.body.firstChild);
          setLoaded(true);
        });
    };

    if (!loaded) {
      loadSprite();
    }
  }, [loaded]);

  return null;
};

export default SpriteLoader;
