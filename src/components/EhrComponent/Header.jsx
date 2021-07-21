import React from 'react';
import { connect } from "react-redux";
import { getPatientById } from "../../actions/patientAction";
import { Grid } from '@material-ui/core';
import Girl from '../../assets/photos/woman.png';
import Boy from '../../assets/photos/man.png';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Link } from 'react-router-dom';
function Header(props) {

    console.log(props.selectedPatient)

    const iconStyle = {
        height: '70px',
        width: '70px',
        marginTop: '15px'
    }

    const RenderIcon = () => {
        if (props.selectedPatient.gender == 'male') return <img src={Boy} style={iconStyle} alt="Male" />
        else return <img src={Girl} style={iconStyle} alt="Girl" />;
    }

    return (
        <div style={{ height: '16vh', borderColor: 'black', backgroundColor: 'wheat' }}>
            <div className="icon" style={{ marginLeft: '29vw', }}>
                <RenderIcon />
            </div>
            <div style={{ textAlign: 'center', fontSize: '2rem', color: 'blueviolet', marginTop: '-80px' }}>
                {props.selectedPatient.firstName} {props.selectedPatient.lastName}
            </div>

            <div style={{ marginLeft: '37vw', marginTop: '3vh', fontSize: '1.3rem' }}>
                {props.selectedPatient.patientId}
            </div>

            <div className="line" style={{ marginLeft: '45.5vw', marginTop: '-6vh' }}></div>


            <div style={{ marginLeft: '47vw', marginTop: '-6vh', fontSize: '1.3rem' }}>
                +91-{props.selectedPatient.mobile}
            </div>

            <div>
                <Link to="/add-appointment"><EventNoteIcon style={{ marginLeft: '80vw', marginTop: '-15vh', fontSize: "50px", color: 'black' }} fontSize="large" /></Link>
            </div>


        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        selectedPatient: state.selectedPatient,
    };
};


export default connect(mapStateToProps, { getPatientById })(Header);