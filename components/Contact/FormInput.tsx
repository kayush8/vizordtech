import React from "react";
import styles from "@styles/contact/ContactInfo.module.scss";

type FormInputProps = {
  title: string;
  state: string;
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const FormInput: React.FC<FormInputProps> = ({
  title,
  state,
  setState,
  placeholder,
}) => {
  let label = title.toLowerCase().split(" ").join("_");

  return (
    <div className={styles.form_input}>
      <label htmlFor={label}>{title}</label>
      <input
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
