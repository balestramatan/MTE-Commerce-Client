import React from "react";
import layoutStyle from "./LoginForm.module.scss";
import TextField from "@mui/material/TextField";
import LinkButton from "../../../components/Elements/LinkButton/LinkButton";

interface Iprops {}

const LoginForm = (props: Iprops) => {
  const {} = props;

  const a = () => {
    console.log("CLICED");
  };

  return (
    <div className={layoutStyle.loginFormContainer}>
      <div className={layoutStyle.loginFormContext}>
        <div className={layoutStyle.loginFormTitle}>
          <p>התחברות</p>
        </div>

        <div className={layoutStyle.loginFormInputContainer}>
          <div className={layoutStyle.loginFormInputTitle}>
            <p>אימייל</p>
          </div>
          <div className={layoutStyle.loginFormInputFiled}>
            <TextField
              size="small"
              id="email-input"
              fullWidth={true}
              variant="outlined"
            />
          </div>
        </div>

        <div className={layoutStyle.loginFormInputContainer}>
          <div className={layoutStyle.loginFormPasswordRow}>
            <div>
              <p>סיסמא</p>
            </div>
            <div className={layoutStyle.loginFormForgotPassword}>
              <LinkButton onClick={a} title="שכחת סיסמא?" size="10px" />
            </div>
          </div>
          <div className={layoutStyle.loginFormInputFiled}>
            <TextField
              type="password"
              size="small"
              id="password-input"
              fullWidth={true}
              variant="outlined"
            />
          </div>
        </div>

        <div className={layoutStyle.loginFormSignIn}>
          <LinkButton onClick={a} title="כניסה" size="16px" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
