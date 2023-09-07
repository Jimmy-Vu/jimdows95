import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setContactMeState, selectContactMeState } from "../../app/appSlice";

export default function ContactMe() {
  const contactMeState = useAppSelector(selectContactMeState);

  const content =
    <div className="contact-me">

    </div>;

  return (
    <WindowFrame
      title="Contact Me"
      icon="src/assets/aim-icon.png"
      content={content}
      defaultSize={{ width: 600, height: 400 }}
      state={contactMeState}
      setFunc={setContactMeState}
    />
  );

}
