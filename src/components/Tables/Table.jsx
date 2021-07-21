import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { v4 as uuidv4 } from "uuid";
import FloatingActionButtonZoom from "../Fab/fab";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(15,70,99)",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                {props.headings.map((heading) => {
                  return (
                    <StyledTableCell key={uuidv4()}>{heading}</StyledTableCell>
                  );
                })}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row) => {
                return (
                  <StyledTableRow key={uuidv4()}>
                    {Object.keys(row).map((field) => {
                      return (
                        <StyledTableCell key={uuidv4()}>
                          {row[field]}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {props.disableIcon ? undefined : (
        <FloatingActionButtonZoom tooltipTitle={props.title} />
      )}
    </div>
  );
}
