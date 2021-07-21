import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { changeHeading } from "../../actions/tableAction";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccessibleIcon from '@material-ui/icons/Accessible';





const JumboButton = (props) => {
  
  const handleClick = (value) => {
    props.changeHeading(props.data[value].heading);
  };

  const count = props.count;
  const width = props.width;

  const renderJumbo = () => {
    return (
      
      // <div>
      <Grid container spacing={3} style={{marginBottom:"20px"}}>
        {props.data.map((object, index) => {

          

         const RenderIcons = () => {
            if (object.heading == 'APPOINTMENTS') {
              return (
                <EventNoteIcon id="yoyo" />
              );
            }
            else if (object.heading == 'INCOME') {
              return (
                <MonetizationOnIcon id="yoyo" />
              );
            }
            else if (object.heading == 'EXPENSES') {
              return (
                <AccountBalanceWalletIcon id="yoyo" />
              );
            }
            else if (object.heading == 'PATIENTS') {
              return (
                <AccessibleIcon id="yoyo" />
              );
            }
          }





          return (
            <Grid
              key={uuidv4()}
              item
              xs={width}
              onClick={() => {
                handleClick(index);
                // renderTable();
              }}
            >

              <Card  id={object.heading}>
                <CardContent>
                  
                  <h4 id="display" > <RenderIcons/> {object.heading}</h4>
                  <p> {<h1>{object.data.count}</h1>}</p>

                  <br />
                  <br />
                  
                </CardContent>
                <CardActions></CardActions>
              </Card>

              
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return <div>{renderJumbo()}</div>;
};

export default connect(null, { changeHeading })(JumboButton);
