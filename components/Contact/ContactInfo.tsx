import React from "react";
import styles from "@styles/contact/ContactInfo.module.scss";

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  contact: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  desc,
  contact,
}) => {
  return (
    <div className={styles.contact_info}>
      <div className={styles.left}>{icon}</div>
      <div className={styles.right}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.desc}>{desc}</p>
        <h6 className={styles.contact_detail}>{contact}</h6>
      </div>
    </div>
  );
};

export default ContactInfo;
