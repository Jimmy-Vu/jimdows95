import { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import Webamp from "webamp";

const config = {
  initialSkin: {
    url: "src/assets/Windows_95_98.wsz"
  },
  initialTracks: [
    {
      metaData: {
        artist: "Sixpence None The Richer",
        title: "Kiss Me",
      },
      url: "src/components/windows/winamp/assests/Kiss Me.mp3",
    },
  ],
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

  return (
    <Draggable>
      <div ref={divRef} />
    </Draggable>
  );
}
