import React from "react";
import UpgradeButton from "../Buttons/UpgradeButton";
import BasicContainer from "../Container/BasicContainer";
import Chip from "@material-ui/core/Chip";

function Plan() {
  return (
    <div>
      <BasicContainer>
        <h2 class="ui dividing header">Account Info</h2>
        <div style={{ alignContent: "center" }}>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <h4> Plan Name </h4>
                </td>
                <td>
                  <h3>
                    <Chip label="Basic" color="secondary" />
                  </h3>
                </td>
                <td>
                  <UpgradeButton />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <h4>No. of Users</h4>
                </td>
                <td>
                  <h4> 1</h4>
                </td>
                <td>
                  <UpgradeButton />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <h4>No. of Locations</h4>
                </td>
                <td>
                  <h4>1</h4>
                </td>
                <td>
                  <UpgradeButton />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Transactional SMS Usage</h4>
                </td>
                <td>
                  <h4>0/0</h4>
                </td>
                <td>
                  <UpgradeButton />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Joined On</h4>
                </td>
                <td>
                  <h4>13-Aug-2020</h4>
                </td>
                <td>
                  <br />
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Expiry Date</h4>
                </td>
                <td>
                  <h4>13-Aug-2020</h4>
                </td>
                <td>
                  <br />
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Validity</h4>
                </td>
                <td>
                  <h4>0 Days</h4>
                </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BasicContainer>
    </div>
  );
}

export default Plan;
