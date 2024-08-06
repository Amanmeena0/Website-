import  { useEffect } from 'react';

const Webchat = () => {
  useEffect(() => {
    // Load Botpress webchat scripts dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/ba31dabc-c529-4cde-9f8b-b38b59b15b60/webchat/v2/config.js';
    script2.async = true;
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Cleanup scripts on component unmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      {/* The Botpress webchat will be injected into this div */}
      <div id="webchat" />
    </div>
  );
};

export default Webchat;
