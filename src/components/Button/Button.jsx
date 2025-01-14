import PropTypes from "prop-types";

import styles from "./button.module.scss";

const Button = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
