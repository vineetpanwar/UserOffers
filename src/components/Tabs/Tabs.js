import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Tabs.scss";
import SmartTable from "../SmartTable/SmartTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && index === 0 && <SmartTable />}
      {value === index && index !== 0 && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const TabEntries = [
  "1.SELECT OFFERING",
  "2.ADD DETAILS",
  "3.CREATE OFFERS",
  "4.REFINE OFFERS",
  "5.CREATE COMPOSITION",
  "6.REVIEW OFFERING"
];
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(Number(newValue));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="offer tabs">
          {TabEntries.map((curr, index) => (
            <Tab key={index} label={curr} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {TabEntries.map((curr, index) => (
        <TabPanel key={index} value={value} index={index}>
          {curr}
        </TabPanel>
      ))}
    </Box>
  );
}
