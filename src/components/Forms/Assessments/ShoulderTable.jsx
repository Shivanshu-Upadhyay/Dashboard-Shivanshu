import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



function createRow(desc, MMT, Active , Passive, MMT1, Active1 , Passive1,) {
 
  return { desc, MMT,  Active,  Passive, MMT1, Active1 , Passive1, };
}


const rows = [

  createRow('Flexion', ),
  createRow('Extension', ),
  createRow('Adduction', ),
  createRow('Abduction', ),
   createRow('External Rotation', ),
  createRow('Internal Rotation', ),
];



 function ShoulderTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
          <TableCell  >
            MOVEMENTS
            </TableCell>
            <TableCell align="center" colSpan={4}>
              LEFT
            </TableCell>
            <TableCell align="center"  colSpan={4}>
            RIGHT
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="">MMT(STRENGTH)</TableCell>
            <TableCell align="">ACTIVE(ROM)</TableCell>
            <TableCell align="">PASSIVE(ROM)</TableCell>
            
             <TableCell></TableCell>
            <TableCell align="">MMT(STRENGTH)</TableCell>
            <TableCell align="">ACTIVE(ROM)</TableCell>
            <TableCell align="">PASSIVE(ROM)</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="">{row.MMT}</TableCell>
              <TableCell align="">{row.Active}</TableCell>
              <TableCell align="">{row.Passive}</TableCell>
              <TableCell align=""></TableCell>
              <TableCell align="">{row.MMT1}</TableCell>
              <TableCell align="">{row.Active1}</TableCell>
              <TableCell align="">{row.Passive1}</TableCell>
              
            </TableRow>
          ))}

         
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export  default ShoulderTable;