import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppointmentTable from "../../Tables/AppointmentTable";
import "../patientAccount/index.css";
import SaveIcon from '@material-ui/icons/Save';
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { getPatientById } from "../../../actions/patientAction";
import { addConsentData, getConsentData, deleteConsentData } from '../../../actions/consentAction';
import { Link } from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SignaturePad from 'react-signature-canvas'

import {

    Paper,
    Grid,

} from "@material-ui/core";
import { useLocation } from 'react-router-dom';
import { DeleteOutlined } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Consent({ open, selectedPatient, addConsentData, getConsentData, consentData, user, deleteConsentData }) {
    var myPatient = selectedPatient;

    React.useState(() => {
        getConsentData(myPatient._id);
    }, []);

    const consentTableHeading = [
        { id: "date", label: "Date" },
        { id: "action", label: "Actions" },
    ];

    const signCanvas = useRef({});

    const [sign, setSign] = React.useState();

    const clear = () => signCanvas.current.clear();
    const save = () => {
        setSign(signCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
        setPad(false);
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    if (selectedPatient.dob) {
        var age = selectedPatient.dob.toString();
        var myAge = age.substr(0, 4);
        var correctAge = yyyy - myAge;
    }

    const title = ['Consent'];

    const data = [];
    const handleDelete = (id) => {
        console.log('hje')
        deleteConsentData(id);
    }

    consentData &&
        consentData.forEach((consent) => {
            const newTo = {
                pathname: `consent/${consent._id}`,
                state: { id: consent._id, user: user, patient: myPatient, consent: consent, age: correctAge }
            }
            const phone = `91${myPatient.mobile}`
            const d = {
                date: (
                    <Link
                        to={newTo}>
                        <div style={{ color: 'blue' }}>

                            {`${consent.date}`}
                        </div>
                    </Link>
                ),
                action: (
                    <div className="ui compact menu" style={{ width: '170px' }}>
                        <div style={{ width: '50px' }}>
                            <a href={'https://wa.me/' + phone}
                                target="_blank"><WhatsAppIcon
                                    color="primary"
                                ></WhatsAppIcon></a>
                        </div>
                        <div style={{ width: '10px' }}>
                            <DeleteOutlined
                                color="secondary"
                                onClick={() => {
                                    handleDelete(consent._id);
                                }}
                            ></DeleteOutlined>
                        </div>
                    </div>
                )
            }
            data.push(d);
        })

    const onSubmit = (formValues) => {
        formValues.patient = myPatient._id;
        formValues.signature = sign;
        console.log(formValues);
        addConsentData(formValues);
    };

    const [myOpen, setMyOpen] = React.useState(false);
    const [pad, setPad] = React.useState(false);


    const classes = useStyles();

    const handleClickOpen = () => {
        setMyOpen(true);
    };

    const handleClose = () => {
        setMyOpen(false);
    };

    const handleClosePad = () => {
        setPad(false);
    }

    const openPad = () => {
        setPad(true);
    }

    const render = () => (
        <div>


            <div className='text-right m-5'> <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                ADD NEW CONSENT FORM
            </Button></div>


            <Dialog fullScreen open={myOpen} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            PATIENT DETAILS
                        </Typography>

                    </Toolbar>
                </AppBar>
                <DialogContent>

                    <Form onSubmit={onSubmit} initialValues={{
                        name: `${selectedPatient.firstName} ${selectedPatient.lastName}`,
                        age: correctAge,
                        gender: selectedPatient.gender,
                        date: today,
                        mobile: selectedPatient.mobile
                    }}>
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <Paper style={{ padding: 25 }}>


                                    <Grid container spacing={2} className='mb-2'>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <Field name="name">
                                                    {({ input }) => (
                                                        <div className="upname ">
                                                            <label className="name">Name-</label>
                                                            <input readOnly type="text" {...input} placeholder="" />
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </Grid>

                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <Field name="age">
                                                    {({ input }) => (
                                                        <div className="">
                                                            <label className="age">Age-</label>

                                                            <input readOnly type="text" {...input} placeholder="" className='w50' />
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <div className="">
                                                <label>Gender-</label>

                                                <label className='p-1 bold1'>
                                                    M:<Field readOnly name="gender" type="radio" value="male" component="input" />
                                                </label>

                                                <label className='p-1 bold1'>
                                                    F:<Field readOnly name="gender" type="radio" value="female" component="input" />
                                                </label>

                                                <label className='p-1 bold1'>
                                                    O:<Field readOnly name="gender" type="radio" value="others" component="input" />
                                                </label>
                                            </div>
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={2}>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <Field name="date">
                                                    {({ input }) => (
                                                        <div className="mb-3">
                                                            <label className=" ">Date-</label>
                                                            <input readOnly type="text" {...input} placeholder="" />
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </Grid>

                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <Field name="mobile">
                                                    {({ input }) => (
                                                        <div className="">
                                                            <label>Mobile No-</label>
                                                            <input readOnly type="text" {...input} placeholder="" />
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </Grid>
                                    </Grid>




                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <div>
                                                <h4>Terms & Conditions</h4>

                                                <p> <b>1.</b>  The Clinic / hospital management does not guarantee any treatment given in their premise(s) or home visit or during online consultation . The ultimate decision lies with the clinic / hospital management. The physiotherapist or clinic management shall not at all be responsible.
                                                </p>


                                                <p> <b>2.</b> Fees & other associated treatment costs are to be paid upfront, and are non-refundable & non-transferable.</p>
                                                <p> <b>3.</b> Me and my attendants or relatives are responsible for all of our belongings and clinic / hospital management is not at all responsible for any damage or loss.</p>
                                                <p> <b>4.</b> Any dispute, if any shall be sorted out between the clinic / hospital management & me amicably without the intervention of any third party.
                                                </p>
                                                <p> <b>5.</b> For any legal dispute, jurisdiction would be New Delhi, India.</p>
                                                <p> <b>6.</b> I give my consent after reading all the terms & conditions.</p>

                                            </div>
                                        </Grid>
                                    </Grid>



                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <div>
                                                <Field name="terms">
                                                    {({ input }) => (
                                                        <div className="fullw10  ">
                                                            <label className="">Terms & Conditions:</label>
                                                            <textarea
                                                                rows={5}


                                                                {...input}
                                                            ></textarea>
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <div>
                                                <Field name="signature">
                                                    {({ input }) => (
                                                        <div className="fullw10  ">
                                                            <label className="">Patient's Signature</label>
                                                            <Button onClick={openPad}>Patient's Signature</Button>
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <div className='text-right'>  <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        type='submit'
                                        autoFocus
                                        onClick={handleClose}
                                        startIcon={<SaveIcon />} >
                                        Save
                                    </Button></div>



                                </Paper>
                            </form>
                        )}
                    </Form>

                </DialogContent>
            </Dialog>
            <div>
                <AppointmentTable
                    title={title}
                    headings={consentTableHeading}
                    rows={data}
                />
            </div>
            {pad && (
                <Dialog
                    fullWidth
                    open={pad}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle style={{ color: "blue", fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
                        {"Your Signature Please"}
                    </DialogTitle>
                    <DialogContent>
                        <SignaturePad
                            ref={signCanvas}
                            canvasProps={{
                                className: 'signatureCanvas'
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={save}>Save</Button>
                        <Button onClick={clear}>Clear</Button>
                        <Button onClick={handleClosePad}>Close</Button>
                    </DialogActions>
                </Dialog>

            )}
        </div>
    );

    return (
        open ? render() : null
    );
}

const mapStateToProps = (state) => {
    return {
        selectedPatient: state.selectedPatient,
        consentData: state.consentData,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, {
    getPatientById,
    addConsentData,
    getConsentData,
    deleteConsentData
})(Consent);

