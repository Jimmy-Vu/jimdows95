import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setContactMeOpenState, setContactMeMaxState, selectContactMeOpenState, selectContactMeMaxState } from "../../app/appSlice";

export default function ContactMe() {
  const contactMeOpenState = useAppSelector(selectContactMeOpenState);
  const contactMeMaxState = useAppSelector(selectContactMeMaxState);

  const content =
    <div className="contact-me">

    </div>;

  return (
    <WindowFrame
      title="Contact Me"
      id="contactMe"
      icon="src/assets/aim-icon.png"
      content={content}
      defaultSize={{ width: 600, height: 400 }}
      state={{ openState: contactMeOpenState, maxState: contactMeMaxState }}
      setOpenFunc={setContactMeOpenState}
      setMaxFunc={setContactMeMaxState}
    />
  );

}
