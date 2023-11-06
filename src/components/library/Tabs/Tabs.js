import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: '20px' }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `custom-tab-${index}`,
    "aria-controls": `custom-tabpanel-${index}`,
  };
}

function TabsComponent({ tabs, className }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={className}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="standard"
          aria-label="custom tabs"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#000000",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              label={tab.label}
              {...a11yProps(index)}
              key={index}
              className="!font-rigidSquare !uppercase !text-[14px] !text-neutral-800 !font-bold !p-0 !mr-4 last:!mr-0 !min-w-0"
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          {tab.component}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

TabsComponent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default TabsComponent;
