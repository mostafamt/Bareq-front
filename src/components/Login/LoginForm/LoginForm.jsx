import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { v4 as uuidv4 } from "uuid";

import styles from "./loginForm.module.scss";

const data = {
  title: "تسجيل دخول",
  buttons: [
    {
      label: "طالب",
    },
    {
      label: "معلم",
    },
    {
      label: "ولي أمر",
    },
  ],
  form: [
    {
      label: "البريد الإلكتروني",
      type: "email",
    },
    {
      label: "كلمة المرور",
      type: "password",
    },
  ],
  formButtons: [
    {
      id: uuidv4(),
      label: <span>تسجيل الدخول</span>,
      type: "submit",
    },
    {
      id: uuidv4(),
      label: (
        <>
          <GoogleIcon />
          <span>تسجيل الدخول بواسطة جوجل</span>
        </>
      ),
      type: "button",
    },
  ],
  rememberMe: {
    label: "تذكرني",
  },
  passwordForget: {
    label: "هل نسيت كلمة المرور",
  },
  links: [
    {
      label: "تسجيل الدخول كمدرسة",
    },
    {
      label: "إنشاء حساب جديد",
    },
  ],
};

const defaultActiveButton = "طالب";

const LoginForm = () => {
  const [activeButton, setActiveButton] = React.useState(defaultActiveButton);
  return (
    <div className={styles["login-form"]}>
      <div>
        <Typography>{data.title}</Typography>
        <form>
          <div className={styles.buttons}>
            {data.buttons.map((button) => (
              <Button
                key={button.label}
                variant="login"
                type="button"
                active={activeButton === button.label}
                onClick={() => setActiveButton(button.label)}
              >
                {button.label}
              </Button>
            ))}
          </div>
          <div>
            {data.form.map((el) => (
              <div key={el.label} className={styles["form-control"]}>
                <label>{el.label}</label>
                <input type="text" />
              </div>
            ))}
            <div className={styles["action-buttons"]}>
              {data.formButtons.map((button) => (
                <Button key={button.id} type={button.type}>
                  {button.label}
                </Button>
              ))}
            </div>
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">{data.rememberMe.label}</label>
            </div>
          </div>
        </form>
        <div>
          <Link>{data.passwordForget.label}</Link>
        </div>
        <div>
          {data.links.map((link) => (
            <Link key={link.label}>{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
