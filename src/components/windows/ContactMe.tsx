import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setContactMeOpenState, setContactMeMaxState, selectContactMeOpenState, selectContactMeMaxState } from "../../app/appSlice";
import ZIndexCheck from "./lib/ZIndexCheck";

export default function ContactMe() {
  const contactMeOpenState = useAppSelector(selectContactMeOpenState);
  const contactMeMaxState = useAppSelector(selectContactMeMaxState);
  const zIdx = ZIndexCheck('contactMe');

  const content =
    <div className="contact-me">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="4e25eb62-5459-4ae5-9b6a-2bd82e98aea8" />
          <input type="hidden" name="subject" value="New Message from jimmyvu.co" />
            <div className="fields">
            <div className="field half">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required />
              </div>
            <div className="field">
              <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={5} required></textarea>
              </div>
            </div>
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <ul className="actions">
              <li><a href="" className="button submit">Send Message</a></li>
              </ul>
      </form>
    </div>;

  return (
    <WindowFrame
      title="Contact Me"
      id="contactMe"
      zIdx={zIdx}
      icon="src/assets/aim-icon.png"
      content={content}
      defaultSize={{ width: 600, height: 400 }}
      state={{ openState: contactMeOpenState, maxState: contactMeMaxState }}
      setOpenFunc={setContactMeOpenState}
      setMaxFunc={setContactMeMaxState}
    />
  );

}
