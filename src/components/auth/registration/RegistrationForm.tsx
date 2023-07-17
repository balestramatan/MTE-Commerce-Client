import React, { useState } from "react";
import layoutStyle from "./RegistrationForm.module.scss";
import TextField from "@mui/material/TextField";
import LinkButton from "../../elements/linkButton/LinkButton";
import validateEmail from "../../../actions/EmailValidation";

interface IProps {
  registrationHandle: any;
  registrationRes: any;
}

const RegistrationForm = (props: IProps) => {
  const { registrationHandle, registrationRes } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidationObj, setEmailValidationObj] = useState({
    isEmailValid: false,
    error: [""],
  });

  const a = () => {
    console.log("Clicked");
  };

  const handleChange = (e: any) => {
    switch (e.id) {
      case "first-name-input": {
        setFirstName(e.value);
        break;
      }
      case "last-name-input": {
        setLastName(e.value);
        break;
      }
      case "email-input": {
        setEmail(e.value);
        break;
      }
      case "password-input": {
        setPassword(e.value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleEmailValidation = (email: string) => {
    validateEmail(email)
      ? setEmailValidationObj({ isEmailValid: true, error: [""] })
      : setEmailValidationObj({ isEmailValid: false, error: ["emailInvalid"] });
  };

  const onClickRegistration = () => {
    registrationHandle({ firstName, lastName, email, password });
  };

  return (
    <div className={layoutStyle.registrationFormContainer}>
      <div className={layoutStyle.registrationFormContext}>
        <form>
          <div className={layoutStyle.registrationFormTitle}>
            <p>יצירת חשבון</p>
          </div>

          <div className={layoutStyle.registrationFormInputContainer}>
            {registrationRes?.userCreated === false && (
              <div className={layoutStyle.erorrMessageContainer}>
                <p>{`${registrationRes.email} קיים במערכת`}</p>
              </div>
            )}
            <div className={layoutStyle.registrationFormInputTitle}>
              <p>שם פרטי</p>
            </div>
            <div className={layoutStyle.registrationFormInputFiled}>
              <TextField
                size="small"
                id="first-name-input"
                onChange={(e) => {
                  handleChange(e.target);
                }}
                fullWidth={true}
                variant="outlined"
                inputProps={{ maxLength: 15 }}
              />
            </div>
          </div>

          <div className={layoutStyle.registrationFormInputContainer}>
            <div className={layoutStyle.registrationFormInputTitle}>
              <p>שם משפחה</p>
            </div>
            <div className={layoutStyle.registrationFormInputFiled}>
              <TextField
                size="small"
                id="last-name-input"
                onChange={(e) => {
                  handleChange(e.target);
                }}
                fullWidth={true}
                variant="outlined"
                inputProps={{ maxLength: 15 }}
              />
            </div>
          </div>

          <div className={layoutStyle.registrationFormInputContainer}>
            <div className={layoutStyle.registrationFormInputTitle}>
              <p>אימייל</p>
            </div>
            <div className={layoutStyle.registrationFormInputFiled}>
              <TextField
                size="small"
                id="email-input"
                onChange={(e) => {
                  handleChange(e.target);
                }}
                onBlur={(e) => {
                  handleEmailValidation(e.target.value);
                }}
                style={{
                  backgroundColor: emailValidationObj.error.includes(
                    "emailInvalid"
                  )
                    ? emailValidationObj.isEmailValid
                      ? ""
                      : "#fff6f6"
                    : "",
                }}
                fullWidth={true}
                variant="outlined"
                autoComplete="username"
              />
            </div>
          </div>

          <div className={layoutStyle.registrationFormInputContainer}>
            <div className={layoutStyle.registrationFormPasswordRow}>
              <p>סיסמא</p>
            </div>
            <div className={layoutStyle.registrationFormInputFiled}>
              <TextField
                type="password"
                size="small"
                id="password-input"
                onChange={(e) => {
                  handleChange(e.target);
                }}
                inputProps={{ maxLength: 15 }}
                fullWidth={true}
                variant="outlined"
                autoComplete="current-password"
              />
            </div>
          </div>

          <div className={layoutStyle.registrationFormSignIn}>
            <LinkButton
              disabled={!emailValidationObj.isEmailValid}
              onClick={() => {
                onClickRegistration();
              }}
              title="יצירה"
              size="16px"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
