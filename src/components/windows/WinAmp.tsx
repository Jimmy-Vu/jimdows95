import { useEffect, useRef } from "react";
import Webamp from "webamp";

const config = {
  initialSkin: {
    url: "src/assets/Windows_95_98.wsz"
  }
}

export default function WinAmp() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current == null) {
      return;
    }
    const webamp = new Webamp(config);
    webamp.renderWhenReady(divRef.current);

    return () => {
      webamp.dispose();
    };
  }, [divRef]);

  // Check if Winamp is supported in this browser
  if (!Webamp.browserIsSupported()) {
    return <div>Not supported</div>;
  }

  return <div ref={divRef} />;
}
