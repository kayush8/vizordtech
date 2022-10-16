import { useState } from "react";
import type { NextPage } from "next";

import styles from "@styles/contact/Contact.module.scss";

import {
  ArrowRightIcon,
  ChatIcon,
  LocationIcon,
  PhoneIcon,
} from "@components/utility/Icons";
import ContactInfo from "@components/Contact/ContactInfo";
import FormInput from "@components/Contact/FormInput";
import Layout from "@components/utility/Layout";

const Contact: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <Layout title="Contact Us">
      <section className={styles.contact} id="contact">
        <div className={styles.contact_details}>
          <div className={styles.circles}></div>
          <div className={styles.details_container}>
            <h2>We&apos;d love to hear from you</h2>
            <div className={styles.contact_card}>
              <ContactInfo
                icon={<ChatIcon />}
                title="Chat to us"
                desc="Our friendly team is here to help"
                contact="9to5networks@gmail.com"
              />
              <ContactInfo
                icon={<LocationIcon />}
                title="Office"
                desc="Come say hello at our office HQ"
                contact={`100 Smith Street\nCollingwood VIC 3066 AU`}
              />
              <ContactInfo
                icon={<PhoneIcon />}
                title="Phone"
                desc="Mon-Fri from 8am to 5pm"
                contact="+1 (555) 000-0000"
              />
            </div>
          </div>
        </div>
        <div className={styles.contact_form}>
          <div className={styles.form_container}>
            <h3>Contact Us</h3>
            <form>
              <div className={styles.row}>
                <FormInput
                  title="First Name"
                  state={name}
                  setState={setName}
                  placeholder="Enter your first name"
                />
                <FormInput
                  title="Last Name"
                  state={lastName}
                  setState={setLastName}
                  placeholder="Enter your last name"
                />
              </div>
              <div className={styles.row}>
                <FormInput
                  title="Email"
                  state={email}
                  setState={setEmail}
                  placeholder="Enter your email"
                />
                <FormInput
                  title="Phone Number"
                  state={phone}
                  setState={setPhone}
                  placeholder="Enter your phone number"
                />
              </div>
              <FormInput
                title="Message"
                state={message}
                setState={setMessage}
                placeholder="Enter your message"
              />
              <button className={styles.submit_btn}>
                Submit
                <ArrowRightIcon />
              </button>
            </form>
            <div className={styles.email_btn}>
              <span className={styles.email_us_label}>Email Us</span>
              <a href="mailto:9to5networks@gmail.com">9to5networks@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
