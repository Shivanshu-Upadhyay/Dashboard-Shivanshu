import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ paddingBottom: "10px", marginTop: "-20" }}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={props.scrollable ? "scrollable" : undefined}
          centered
        >
          {props.headings.map((heading, index) => {
            return (
              <Tab
                key={uuidv4()}
                label={heading}
                onClick={() => {
                  props.changeActiveTab(index);
                }}
              />
            );
          })}
        </Tabs>
      </Paper>
    </div>
  );
}
