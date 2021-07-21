import React from "react";
import BasicContainer from "./BasicContainer";
import CenteredTabs from "../Tabs/CenteredTab";
import Ankle from "../Forms/Others/Ankle";
import Elbow from "../Forms/Others/Elbow";
import Hip from "../Forms/Others/Hip";
import Divider from "@material-ui/core/Divider";
import Knee from "../Forms/Others/Knee";
import Neurological from "../Forms/Others/Neurological";

export default function Assessment(props) {
  const [activeTab, setActiveTab] = React.useState(0);

  const headings = [
    "Ankle",
    "Elbow",
    "Hip",
    "Knee",
    "Neurological"
  ];

  const renderForm = () => {
    if (activeTab === 0) return <Ankle />;
    if (activeTab === 1) return <Elbow />;
    if (activeTab === 2) return <Hip />;
    if (activeTab === 3) return <Knee />;
    if (activeTab === 4) return <Neurological />;
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
