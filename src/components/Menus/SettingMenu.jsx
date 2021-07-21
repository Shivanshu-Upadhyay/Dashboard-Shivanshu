import React from "react";
import clsx from "clsx";
import "./SettingMenu.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PersonIcon from "@material-ui/icons/Person";

function SettingsMenu({ active, setActive, isActive }) {
  const activeClasclassName = "active";
  const bgImg = (n) => ({
    backgroundColor: isActive(n) ? "rgb(110,140,190)" : "none",
  });

  const location = useLocation();
  const { hash } = location;

  console.log(location);
  const data = [
    { id: "profile", text: "My Profile", icon: <PersonIcon /> },
    { id: "calender", text: "My Calender" },
    { id: "branding", text: "Branding" },
    { id: "invoice", text: "Invoice" },
    { id: "master", text: "Master" },
    { id: "sms", text: "SMS" },
    { id: "case-report", text: "Case report" },
    { id: "consent", text: "Consent form" },
    { id: "product", text: "Product" },
  ];
  for (let i = 0; i < data.length; i++) {
    "#" + data[i].id === hash ? setActive(i) : (() => {})();
  }
  return (
    <div className="custom-active">
      {data.map((obj, index) => (
        <Link
          key={uuidv4()}
          id={obj.id}
          style={bgImg(index)}
          to={`/settings#${obj.id}`}
          onClick={() => setActive(index)}
          className={clsx("item", { [activeClasclassName]: isActive(index) })}
        >
          <h5>
            <b>{obj.text}</b>
          </h5>
        </Link>
      ))}
    </div>
  );
}

export default SettingsMenu;
