import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./button.module.scss";

const Button = (props) => {
  if (props.variant === "login") {
    const { variant, active, ...other } = props;
    return (
      <button
        className={clsx(styles.button, styles.login, active && styles.active)}
        {...other}
      >
        {props.children}
      </button>
    );
  } else {
    const { children, ...other } = props;
    return (
      <button className={styles.button} {...other}>
        {props.children}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Button;
