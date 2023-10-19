import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setContactMeOpenState, setContactMeMaxState, selectContactMeOpenState, selectContactMeMaxState } from "../../app/appSlice";
import ZIndexCheck from "./lib/ZIndexCheck";
import { useRef } from "react";

export default function ContactMe() {
  const contactMeOpenState = useAppSelector(selectContactMeOpenState);
  const contactMeMaxState = useAppSelector(selectContactMeMaxState);
  const zIdx = ZIndexCheck('contactMe');
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
      .then(async (response) => {
        if (response.status == 200) {
          console.log('All good');
          formRef.current!.reset();
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
        console.error("Something went wrong!");
      })
  }

  const content =
    <div className="contact-me">
      <h1 className="contact-me__title">Contact Me</h1>
      <form className="contact-me__form" ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="4e25eb62-5459-4ae5-9b6a-2bd82e98aea8" />
        <input type="hidden" name="subject" value="New Message from jimmyvu.co" />
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} required></textarea>
          </div>
        </div>
        <button type="submit">Send Message</button>
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
