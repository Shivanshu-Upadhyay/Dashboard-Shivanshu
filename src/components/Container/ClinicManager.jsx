import React from "react";
import BasicContainer from "./BasicContainer";
import CenteredTabs from "../Tabs/CenteredTab";
import Physio from "../Forms/Physio";
import Staff from "../Forms/Staff";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import './button.css'
import { makeStyles } from "@material-ui/core/styles";
import  { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  physiobutton: {
    width: "260px",
    height: "30px",
    fontSize: "15px",
    textAlign: "center",

    marginTop: "20px",
    '&:hover': {
      backgroundColor: '#3f51b5',
      color: "white",
    }

  },


}))


function ClinicManager() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(0);


  const renderForm = () => {
    if (activeTab === 0) return <Physio />;
    if (activeTab === 1) return <Staff />;

  };

var physio;
  var staff;

  const handleClickPhysio = () => {
    setActiveTab(0);

    physio = document.getElementById('physio');
    staff = document.getElementById('staff');

    physio.classList.add('clickButton');
    staff.classList.remove('clickButton');
    physio.classList.remove('button1');
    staff.classList.add('button1');

  }

  const handleClickStaff = () => {
    setActiveTab(1);

    staff = document.getElementById('staff');
    physio = document.getElementById('physio');
    staff.classList.add('clickButton');
    physio.classList.remove('clickButton');
    staff.classList.remove('button1');
    physio.classList.add('button1');

  }


  return (
    <BasicContainer style={{ marginTop: '50px' }}
    >
     
      <Button onClick={handleClickPhysio}  variant="contained"  className='clickButton' style={{marginRight:'45px'}} id="physio">Physio</Button>

      <Button  onClick={handleClickStaff}  className='button1' variant="contained" id='staff'>Admin & Staff</Button>



      {renderForm()}


    </BasicContainer>
    // <BasicContainer>
    //   <CenteredTabs
    //     headings={headingsClinicManager}
    //     changeActiveTab={setActiveTab}
    //   />
    //   {renderForm()}
    // </BasicContainer>
  );
}

export default ClinicManager;
