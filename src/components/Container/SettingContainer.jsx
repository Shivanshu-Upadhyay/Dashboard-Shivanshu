import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import SettingsMenu from "../Menus/SettingMenu";
import MyProfileForm from "../Forms/MyProfileForm";
import BrandingForm from "../Forms/BrandingForm";
import CalenderForm from "../Forms/CalenderForm";
import CaseReportForm from "../Forms/CaseReportForm";
import ConsentForm from "../Forms/ConsentForm";
import InvoiceForm from "../Forms/InvoiceForm";
import SMSForm from "../Forms/SMSForm";
import ProductForm from "../Forms/ProductForm";
import BasicContainer from "./BasicContainer";

import { connect } from "react-redux";
import MasterForm from "../Forms/MasterForm";

function SettingContainer(props) {
  const [active, setActive] = React.useState(0);
  const setActiveValue = (value) => {
    setActive(value);
  };

  const isActive = (index) => {
    return index === active;
  };

  const renderSegment = () => (
    <div>
      <MyProfileForm open={isActive(0)} />

      <CalenderForm open={isActive(1)} />
      <BrandingForm open={isActive(2)} />
      <InvoiceForm open={isActive(3)} />
      <MasterForm open={isActive(4)} />
      <SMSForm open={isActive(5)} />
      <CaseReportForm open={isActive(6)} />
      <ConsentForm open={isActive(7)} />
      <ProductForm open={isActive(8)} />
    </div>
  );

  const renderSettings = () => (
    <div className="ui grid">
      <div className="four wide column">
        <div className="ui vertical fluid tabular menu">
          <SettingsMenu
            active={active}
            setActive={setActiveValue}
            isActive={isActive}
          />
        </div>
      </div>
      <div class="twelve wide stretched column">
        <div
          className="ui segment"
          style={{
            backgroundColor: "rgb(100,140,190)",
          }}
        >
          {renderSegment()}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <CssBaseline />

      <BasicContainer>
        <div className="setting-container">{renderSettings()}</div>
      </BasicContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLeftDrawerOpen: state.sideBarState,
  };
};

export default connect(mapStateToProps)(SettingContainer);
