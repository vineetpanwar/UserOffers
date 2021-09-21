import React from "react";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import BasicTabs from "../../components/Tabs/Tabs";

const Home = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom component="div">
        Configure Offering
      </Typography>
      <BasicTabs />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  };
};

export default connect(mapStateToProps, null)(Home);
