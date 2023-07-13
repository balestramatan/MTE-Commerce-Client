import React from 'react';
import layoutStyle from "./RegistrationForm.module.scss";
import TextField from "@mui/material/TextField";
import LinkButton from "../../../components/Elements/LinkButton/LinkButton";

interface Iprops {
    
}

const RegistrationForm = (props: Iprops) => {
    const {} = props

    const a = () => {
        console.log("CLICED");
      };
    
      return (
        <div className={layoutStyle.registrationFormContainer}>
          <div className={layoutStyle.registrationFormContext}>
            <div className={layoutStyle.registrationFormTitle}>
              <p>יצירת חשבון</p>
            </div>

            <div className={layoutStyle.registrationFormInputContainer}>
              <div className={layoutStyle.registrationFormInputTitle}>
                <p>שם פרטי</p>
              </div>
              <div className={layoutStyle.registrationFormInputFiled}>
                <TextField
                  size="small"
                  id="first-name-input"
                  fullWidth={true}
                  variant="outlined"
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
                  fullWidth={true}
                  variant="outlined"
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
                  fullWidth={true}
                  variant="outlined"
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
                  fullWidth={true}
                  variant="outlined"
                />
              </div>
            </div>
    
            <div className={layoutStyle.registrationFormSignIn}>
              <LinkButton onClick={a} title="יצירה" size="16px" />
            </div>
          </div>
        </div>
      );
    };

export default RegistrationForm;
