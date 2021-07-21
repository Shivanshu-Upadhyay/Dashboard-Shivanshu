import React from "react";
import BasicContainer from "./BasicContainer";
import CenteredTabs from "../Tabs/CenteredTab";
import Examination from "../Forms/Assessments/Examination";
import Pain from "../Forms/Assessments/Pain";
import ChiefComplaint from "../Forms/Assessments/ChiefComplaint";
import Divider from "@material-ui/core/Divider";
import Sensory from "../Forms/Assessments/Sensory";
import History from "../Forms/Assessments/History";
import DemographicData from "../Forms/Assessments/DemographicData";
import Neuro from "../Forms/Assessments/Neuro";
import Pediatric from "../Forms/Assessments/Pediatric";
import Motor from "../Forms/Assessments/Motor";
import Shoulder from "../Forms/Assessments/ShoulderEvaluation";

export default function Patient(props) {
  const [activeTab, setActiveTab] = React.useState(0);

  const headings = [
    "Demographic Data",
    "Chief Complaints",
    "History",
    "Pain",
    "Examination",
    "Motor Examination",
    "Sensory Examination",
    "Neuro Examination",
    "Paediatric Evaluation",
    "Shoulder Evaluation"
  ];

  const renderForm = () => {
    if (activeTab === 0) return <DemographicData />;
    if (activeTab === 1) return <ChiefComplaint />;
    if (activeTab === 2) return <History />;
    if (activeTab === 3) return <Pain />;
    if (activeTab === 4) return <Examination />;
    if (activeTab === 5) return <Motor />
    if (activeTab === 6) return <Sensory />;
    if (activeTab === 7) return <Neuro />;
    if (activeTab === 8) return <Pediatric />;
    if (activeTab === 9) return <Shoulder />;
  };

  return (
    <BasicContainer>
      <CenteredTabs
        headings={headings}
        scrollable={true}
        changeActiveTab={setActiveTab}
      />
      <br />
      <br />
      {renderForm()}
    </BasicContainer>
  );
}
