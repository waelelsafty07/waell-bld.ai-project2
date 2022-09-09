import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./BreadCrumbs.module.css";
import React from "react";
import { Link } from "react-router-dom";
function handleClick(event) {
  event.preventDefault();
}
const BreadCrumbs = ({ category }) => {
  const breadcrumbs = [
    <Link
      to="/"
      key="1"
      style={{ color: "#cec0fc", textDecoration: "none", fontWeight: "bold" }}
    >
      Home
    </Link>,
    <Link
      to="/"
      key="2"
      style={{ color: "#cec0fc", textDecoration: "none", fontWeight: "bold" }}
      className={styles.Breadcrumbs}
    >
      Development
    </Link>,
    <Typography style={{ color: "#cec0fc", fontWeight: "bold" }} key="3">
      {category}
    </Typography>,
  ];
  return (
    <Breadcrumbs
      separator={
        <NavigateNextIcon style={{ color: "white" }} fontSize="small" />
      }
      aria-label="breadcrumb"
      className={styles.BreadcrumbsContainer}
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
