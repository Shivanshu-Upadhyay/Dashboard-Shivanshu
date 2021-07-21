import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Fab, IconButton } from "@material-ui/core";

import React from "react";

function UpgradeButton() {
  return (
    <div style={{ marginTop: "-1rem" }}>
      <IconButton color="primary">
        <Fab variant="extended" size="small">
          <ShoppingCartIcon /> Upgrade
        </Fab>
      </IconButton>
    </div>
  );
}

export default UpgradeButton;
