import React from "react";
import BasicContainer from "./BasicContainer";
import AddDiagnosis from "../Forms/AddDiagnosis";
import CenteredTabs from "../Tabs/CenteredTab";
import { useLocation } from "react-router-dom";
import Goals from "../Forms/Goals";
import TreatmentProtocol from "../Forms/TreatmentProtocol";
import AddNewTreatmentCategory from "../Forms/AddNewTreatmentCategory";
import FixedSideBar from '../EhrComponent/FixedSideBar';
import DemographicData from "../EhrComponent/patientAccount/DemographicData";
import Referral from "../EhrComponent/patientAccount/Referral";
import Reminder from "../EhrComponent/patientAccount/Reminder";

function Intervention(props) {
  const location = useLocation();

  const [activeTab, setActiveTab] = React.useState(0);

  const headingsIntervention = [
    "Demographic Data",
    "Referral",
    "Reminder",
  ];

  const renderSegment = () => {
    if (activeTab === 0) return <DemographicData id={location.id} />;
    if (activeTab === 1) return <Referral id={location.id} />;
    if (activeTab === 2) return <Reminder id={location.id} />;
  }

  return (
    <div>
      <CenteredTabs
        headings={headingsIntervention}
        changeActiveTab={setActiveTab}
      />

      {renderSegment()}
    </div>
  );
}

export default Intervention;
