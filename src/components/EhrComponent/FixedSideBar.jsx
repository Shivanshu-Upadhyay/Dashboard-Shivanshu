import React from "react";
import clsx from "clsx";
import "../Menus/SettingMenu.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";

function FixedSideBar({ active, setActive, isActive, selectedPatient }) {
    const activeClasclassName = "active";
    const bgImg = (n) => ({
        backgroundColor: isActive(n) ? "rgb(110,140,190)" : "none",
    });

    const location = useLocation();
    const { hash } = location;

    const data = [
        { id: "account", text: "Patient's Account" },
        { id: "consent", text: "Consent Form" },
        { id: "register", text: "Daily Register" },
        { id: "opd", text: "OPD Assessment" },
        { id: "ipd", text: "IPD Assessment" },
        { id: "bodyChart", text: "Body Chart" },
        { id: "investigation", text: "Investigation" },
        { id: "treatment", text: "Treatment" },
        { id: "soap", text: "SOAP Notes" }
    ];
    for (let i = 0; i < data.length; i++) {
        "#" + data[i].id === hash ? setActive(i) : (() => { })();
    }


    return (
        <div className="custom-active">
            {data.map((obj, index) => {
                var path;
                if (obj.id == 'account') path = `/patients/${selectedPatient._id}`;
                else path = `/patientDetails#${obj.id}`;
                return (
                    <Link
                        key={uuidv4()}
                        id={obj.id}

                        style={bgImg(index)}
                        to={path}
                        onClick={() => setActive(index)}
                        className={clsx("item", { [activeClasclassName]: isActive(index) })}
                    >
                        <h5>
                            <b>{obj.text}</b>
                        </h5>
                    </Link>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedPatient: state.selectedPatient
    };
};

export default connect(mapStateToProps,)(FixedSideBar);