import React from "react";
import { Form, Field } from "react-final-form";
import Validator from "validator";
import SignIn from '../../../homepage/signin';
import { Dialog } from "@material-ui/core";
import _ from "lodash";
import { connect } from "react-redux";
import { register } from "../../../actions/waitingLobbyAction";
import PointingError from "../ErrorComponent/PointingError";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SignupImage from "../../../homepage/projectImg/signup-image.jpg";
import { makeMaskFromFormat } from "@material-ui/pickers/_helpers/text-field-helper";
import BasicContainer from "../../Container/BasicContainer";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Register = (props) => {

  const [open, setOpen] = React.useState(false);
  const [openSignIn, setOpenSignIn] = React.useState(false);

  const history = useHistory();
  const onSubmit = (formValues) => {
    setOpen(true);
    props.register(formValues);
    console.log(formValues);
    setTimeout(() => {
      history.push('/');
    }, 3000);
  };

  const handleClose = () => {
    setOpenSignIn(false)
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const validate = (formValues) => {
    const errors = {};
    // email
    if (!formValues.name) errors.name = "Name is required";
    if (formValues.email && !Validator.isEmail(formValues.email))
      errors.email = "Enter correct email";
    if (!formValues.email) errors.email = "Email is required";
    // password
    if (formValues.password && formValues.password.length < 5)
      errors.password = "Password should be at minimum of 5 character long";
    if (!formValues.password) errors.password = "Password is required";

    //confirm Password
    if (formValues.password !== formValues.confirmPassword)
      errors.confirmPassword = "password and confirm password must be same";
    if (!formValues.confirmPassword)
      errors.confirmPassword = "confirm password is required";

    // mobile
    if (formValues.mobile && !Validator.isDecimal(formValues.mobile))
      errors.mobile = "Only numerical values allowed";
    if (!formValues.mobile) errors.mobile = "Mobile is required";
    //landline
    // if (formValues.landline && !Validator.isDecimal(formValues.landline))
    //   errors.landline = "Only numerical values allowed";
    //clinic name
    if (!formValues.clinicName) errors.clinicName = "Clinic Name is required";
    //address
    if (formValues.address && formValues.address.length < 5)
      errors.address = "Address should me minimum 5 characters long";
    if (!formValues.address) errors.address = "Address is required";
    //country
    if (formValues.country && Validator.isEmpty(formValues.country))
      errors.country = "Select a country name";

    return errors;
  };
  const renderError = (meta) => {
    if (meta.touched && meta.error)
      return <div className="ui pointing red basic label">{meta.error}</div>;
    return undefined;
  };

  return (
    <BasicContainer>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success">
          You have successfully registered with us!
        </Alert>
      </Snackbar>
      <Grid container spacing={1}>
        <Grid item lg={6}>
          <Form onSubmit={onSubmit} validate={validate}>
            {({ handleSubmit, errors, submitting, form }) => (
              <div style={{ marginTop: '30px' }}>
                <form
                  onSubmit={(evt) => {
                    handleSubmit(evt);
                    form.reset();
                  }}
                  className="ui fluid form error"
                >
                  <Field name="name">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Name</label>
                        <input type="text" {...input} autoComplete="off" style={{background: "#eae8f1"}}/>
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Email</label>
                        <input type="text" {...input} autoComplete="off" style={{background: "#eae8f1"}}/>
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Password</label>
                        <input type="password" {...input} autoComplete="off"  style={{background: "#eae8f1"}}/>
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="confirmPassword">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Confirm Password</label>
                        <input type="password" {...input} autoComplete="off" style={{background: "#eae8f1"}} />
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="mobile">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Mobile</label>
                        <input type="text" {...input} autoComplete="off" style={{background: "#eae8f1"}} />
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="landline">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Landline</label>
                        <input type="text" {...input} autoComplete="off" style={{background: "#eae8f1"}} />
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>

                  <Field name="clinicName">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Clinic Name</label>
                        <input type="text" {...input} autoComplete="off" style={{background: "#eae8f1"}} />
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="address">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Address</label>
                        <input type="text" {...input} autoComplete="off" style={{background: "#eae8f1"}} />
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                  {/* <Field name="address">
              {({ input, meta }) => (
                <div className="field">
                  <label>Address</label>
                  <input type="password" {...input} autoComplete="off" />
                  {renderError(meta)}
                </div>
              )}
            </Field> */}

                  <Field name="country">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Country</label>
                        <select id="country" name="country" {...input} style={{background: "#eae8f1"}}>
                          <option value="Select Country">Select Country</option>

                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antartica">Antarctica</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegowina">
                            Bosnia and Herzegowina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">
                            British Indian Ocean Territory
                          </option>
                          <option value="Brunei Darussalam">Brunei Darussalam</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">Christmas Island</option>
                          <option value="Cocos Islands">
                            Cocos (Keeling) Islands
                          </option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Congo">
                            Congo, the Democratic Republic of the
                          </option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                          <option value="Croatia">Croatia (Hrvatska)</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="France Metropolitan">
                            France, Metropolitan
                          </option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">French Polynesia</option>
                          <option value="French Southern Territories">
                            French Southern Territories
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Heard and McDonald Islands">
                            Heard and Mc Donald Islands
                          </option>
                          <option value="Holy See">
                            Holy See (Vatican City State)
                          </option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran (Islamic Republic of)</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Democratic People's Republic of Korea">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="Korea">Korea, Republic of</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Lao">
                            Lao People's Democratic Republic
                          </option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon" selected>
                            Lebanon
                          </option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libyan Arab Jamahiriya">
                            Libyan Arab Jamahiriya
                          </option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macau">Macau</option>
                          <option value="Macedonia">
                            Macedonia, The Former Yugoslav Republic of
                          </option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">Marshall Islands</option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia">
                            Micronesia, Federated States of
                          </option>
                          <option value="Moldova">Moldova, Republic of</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">
                            Netherlands Antilles
                          </option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Northern Mariana Islands">
                            Northern Mariana Islands
                          </option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">Papua New Guinea</option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn">Pitcairn</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russian Federation</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                          </option>
                          <option value="Saint LUCIA">Saint LUCIA</option>
                          <option value="Saint Vincent">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">
                            Sao Tome and Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia (Slovak Republic)</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">Solomon Islands</option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="Span">Spain</option>
                          <option value="SriLanka">Sri Lanka</option>
                          <option value="St. Helena">St. Helena</option>
                          <option value="St. Pierre and Miguelon">
                            St. Pierre and Miquelon
                          </option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard">
                            Svalbard and Jan Mayen Islands
                          </option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syrian Arab Republic</option>
                          <option value="Taiwan">Taiwan, Province of China</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">
                            Tanzania, United Republic of
                          </option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks and Caicos">
                            Turks and Caicos Islands
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">
                            United States Minor Outlying Islands
                          </option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Viet Nam</option>
                          <option value="Virgin Islands (British)">
                            Virgin Islands (British)
                          </option>
                          <option value="Virgin Islands (U.S)">
                            Virgin Islands (U.S.)
                          </option>
                          <option value="Wallis and Futana Islands">
                            Wallis and Futuna Islands
                          </option>
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                        <PointingError input={input} meta={meta} />
                      </div>
                    )}
                  </Field>
                      <br />
                      
                  

                  <div style={{display: 'flex', justifyContent:'left', alignItems: 'center'}}>
                    <button
                      disabled={!_.isEmpty(errors) || submitting}
                      
                 style={{display:"inline-block",
                 width:"20rem",
                 padding:'0.3em 1.2em',
                 margin:'0 0.3em 0.3em 0',
                 borderRadius:'2em' ,
                 boxSizing: 'border-box',
                 fontWeight:'300',
                 color:'#FFFFFF' ,
                 background: 'linear-gradient(to right,#00EDFF,#0047ab)' , 
                 textAlign:'center' ,
                 transition: 'all 0.2s',
                 cursor: 'pointer'}}>
                      <h5>Register</h5> 
                    </button>
                  </div>
                  <br />
                </form>
              </div>
            )}
          </Form>
        </Grid>
        <Grid item>
          <div class="signup-image" style={{ marginLeft: '100px', marginTop: '88px' }}>
            <figure><img src={SignupImage} alt="sing up image"  style={{height:'80vh'}}/></figure>
            <a onClick={() => { setOpenSignIn(true) }} class="signup-image-link">I am already registered</a>
          </div>
        </Grid>
      </Grid>
      {openSignIn && (
        <Dialog
          maxWidth="md"
          open={openSignIn}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <SignIn />
        </Dialog>
      )}
    </BasicContainer>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps,
  { register })
  (Register);
// export default Register;
