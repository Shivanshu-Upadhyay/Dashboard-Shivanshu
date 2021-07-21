import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
