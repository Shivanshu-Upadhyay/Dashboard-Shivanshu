import React, { useState } from "react";

import Table from "react-bootstrap/Table";

function AddReport(props) {

  console.log(props);
  if(props.values !== undefined) {
  return (
    <div>
      <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Dated</th>
                    <th>Report Type</th>
                    <th>Document</th>
                    <th>Findings</th>
                  </tr>
                      <tr>
                          <td>{props.values.date}</td>
                          <td>{props.values.select}</td>
                          <td>{props.values.document}</td>
                          <td>{props.values.findings}</td>
                        
                      </tr>
                </thead>
              </Table>
      </div>
  );
  }
  else 
  return (
    <div>
      <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Dated</th>
                    <th>Report Type</th>
                    <th>Document</th>
                    <th>Findings</th>
                  </tr>
                </thead>
              </Table>
    </div>
  )
}

export default AddReport;
