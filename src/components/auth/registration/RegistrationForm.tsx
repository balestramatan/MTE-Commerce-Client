import React, {useState} from "react";
import registrationStyle from "./RegistrationForm.module.scss";
import TextField from "@mui/material/TextField";
import LinkButton from "../../elements/linkButton/LinkButton";
import validateEmail from "../../../actions/EmailValidation";

interface IProps {
    registrationHandle: any;
    registrationRes: any;
}

const RegistrationForm = (props: IProps) => {
    const {registrationHandle, registrationRes} = props;
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

    const handleChange = (setState: any) => (event: any) => {
        setState(event.target.value)
    };

    const handleEmailValidation = (email: string) => {
        validateEmail(email)
            ? setEmailValidationObj({isEmailValid: true, error: [""]})
            : setEmailValidationObj({isEmailValid: false, error: ["emailInvalid"]});
    };

    const onClickRegistration = () => {
        registrationHandle({firstName, lastName, email, password});
    };

    return (
        <div className={registrationStyle.registrationFormContainer}>
            <div className={registrationStyle.registrationFormContext}>
                <form>
                    <div className={registrationStyle.registrationFormTitle}>
                        <p>יצירת חשבון</p>
                    </div>

                    <div className={registrationStyle.registrationFormInputContainer}>
                        {registrationRes?.userCreated === false && (
                            <div className={registrationStyle.errorMessageContainer}>
                                <p>{`${registrationRes.email} קיים במערכת`}</p>
                            </div>
                        )}
                        <div className={registrationStyle.registrationFormInputTitle}>
                            <p>שם פרטי</p>
                        </div>
                        <div className={registrationStyle.registrationFormInputFiled}>
                            <TextField
                                size="small"
                                onChange={handleChange(setFirstName)}
                                fullWidth={true}
                                variant="outlined"
                                inputProps={{maxLength: 15}}
                            />
                        </div>
                    </div>

                    <div className={registrationStyle.registrationFormInputContainer}>
                        <div className={registrationStyle.registrationFormInputTitle}>
                            <p>שם משפחה</p>
                        </div>
                        <div className={registrationStyle.registrationFormInputFiled}>
                            <TextField
                                size="small"
                                onChange={handleChange(setLastName)}
                                fullWidth={true}
                                variant="outlined"
                                inputProps={{maxLength: 15}}
                            />
                        </div>
                    </div>

                    <div className={registrationStyle.registrationFormInputContainer}>
                        <div className={registrationStyle.registrationFormInputTitle}>
                            <p>אימייל</p>
                        </div>
                        <div className={registrationStyle.registrationFormInputFiled}>
                            <TextField
                                size="small"
                                onChange={handleChange(setEmail)}
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

                    <div className={registrationStyle.registrationFormInputContainer}>
                        <div className={registrationStyle.registrationFormPasswordRow}>
                            <p>סיסמא</p>
                        </div>
                        <div className={registrationStyle.registrationFormInputFiled}>
                            <TextField
                                type="password"
                                size="small"
                                onChange={handleChange(setPassword)}
                                inputProps={{maxLength: 15}}
                                fullWidth={true}
                                variant="outlined"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    <div className={registrationStyle.registrationFormSignIn}>
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
