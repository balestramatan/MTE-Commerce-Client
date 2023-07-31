import React, {useState} from "react";
import layoutStyle from "./LoginForm.module.scss";
import TextField from "@mui/material/TextField";
import LinkButton from "../../elements/linkButton/LinkButton";
import validateEmail from "../../../actions/EmailValidation";

interface IProps {
    loginHandle: any;
    loginFailed: boolean;
}

const LoginForm = (props: IProps) => {
    const {loginHandle, loginFailed} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidationObj, setEmailValidationObj] = useState({
        isEmailValid: false,
        error: [""],
    });

    const a = () => {
        console.log("CLICKED");
    };

    const handleChange = (setState: any) => (event: any) => {
        setState(event.target.value)
    };

    const handleEmailValidation = (email: string) => {
        validateEmail(email)
            ? setEmailValidationObj({isEmailValid: true, error: [""]})
            : setEmailValidationObj({isEmailValid: false, error: ["emailInvalid"]});
    };

    const onClickLogin = () => {
        loginHandle({email, password});
    };

    return (
        <div className={layoutStyle.loginFormContainer}>
            <div className={layoutStyle.loginFormContext}>
                <form>
                    <div className={layoutStyle.loginFormTitle}>
                        <p>התחברות</p>
                    </div>

                    <div className={layoutStyle.loginFormInputContainer}>

                        {loginFailed && (
                            <div className={layoutStyle.errorMessageContainer}>
                                <p>שם משתמש או סיסמא שגויים</p>
                            </div>
                        )}

                        <div className={layoutStyle.loginFormInputTitle}>
                            <p>אימייל</p>
                        </div>
                        <div className={layoutStyle.loginFormInputFiled}>
                            <TextField
                                size="small"
                                onChange={handleChange(setEmail)}
                                onBlur={(e) => {
                                    handleEmailValidation(e.target.value);
                                }}
                                style={{
                                    backgroundColor: emailValidationObj.error.includes("emailInvalid") ? emailValidationObj.isEmailValid ? "" : "#fff6f6" : "",
                                }}
                                fullWidth={true}
                                variant="outlined"
                                autoComplete="username"
                            />
                        </div>
                    </div>

                    <div className={layoutStyle.loginFormInputContainer}>
                        <div className={layoutStyle.loginFormPasswordRow}>
                            <div>
                                <p>סיסמא</p>
                            </div>
                            <div className={layoutStyle.loginFormForgotPassword}>
                                <LinkButton
                                    disabled={false}
                                    onClick={a}
                                    title="שכחת סיסמא?"
                                    size="10px"
                                />
                            </div>
                        </div>
                        <div className={layoutStyle.loginFormInputFiled}>
                            <TextField
                                type="password"
                                onChange={handleChange(setPassword)}
                                size="small"
                                inputProps={{maxLength: 15}}
                                fullWidth={true}
                                variant="outlined"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    <div className={layoutStyle.loginFormSignIn}>
                        <LinkButton
                            onClick={() => {
                                onClickLogin();
                            }}
                            title="כניסה"
                            size="16px"
                            disabled={!emailValidationObj.isEmailValid}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
