import React from 'react';
import Upcoming from './Upcoming';
import Previous from './Previous';
import CenteredTabs from "../../Tabs/CenteredTab";
import { useLocation } from "react-router-dom";
import BasicContainer from '../../Container/BasicContainer';

function DailyRegister({ open }) {

    const location = useLocation();
    const [activeTab, setActiveTab] = React.useState(0);

    const headingsIntervention = [
        "Upcoming Appointments",
        "Previous Appointments",
    ];

    const renderSegment = () => {
        if (activeTab === 0) return <Upcoming id={location.id} />;
        if (activeTab === 1) return <Previous id={location.id} />;
    }

    const render = () => (
        <div>
            <CenteredTabs
                headings={headingsIntervention}
                changeActiveTab={setActiveTab}
            />
            {renderSegment()}

        </div>
    );

    return (
        open ? render() : null
    );
}

export default DailyRegister;