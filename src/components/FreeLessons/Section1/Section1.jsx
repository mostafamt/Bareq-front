import { useEffect } from "react";
import { Container, Grid2, Typography } from "@mui/material";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";
import data from "./data.json";
import styles from "./section1.module.scss";
import TransitionsModal from "../TransitionsModal";
import React from "react";

const Section1 = () => {
  const { t } = useTranslation();
  // const modalRef = React.useRef();

  // useEffect(() => {
  //   // Trigger the modal to open when Section1 component mounts
  //   modalRef.current.handleOpen();
  // }, []);

  return (
    <div className={styles.section}>
      <Container fixed>
        <Grid2 container spacing={2}>
          <Grid2 size={6} className={styles.left}>
          </Grid2>
        </Grid2>
        <Grid2 size={6}>
          <TransitionsModal />
        </Grid2>
      </Container>
    </div>
  );
};

export default Section1;
