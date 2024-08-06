import  { useEffect } from 'react';

const Webchat = () => {
  useEffect(() => {
    // Inject the Botpress webchat script
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Inject the Botpress webchat configuration script
    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/ba31dabc-c529-4cde-9f8b-b38b59b15b60/webchat/v2/config.js';
    configScript.async = true;
    document.body.appendChild(configScript);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return <div id="botpress-webchat-container"></div>;
};

export default Webchat;
