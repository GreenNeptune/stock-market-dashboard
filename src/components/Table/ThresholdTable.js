import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Typography } from '@material-ui/core';
import BoxHeader from '../boxHeader/BoxHeader';
import DATA from "../../DB/thresholdTableData";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '346px',
  },
  Table: {
    minWidth: 350,
  },
  TableHeadCell: {
    color: theme.palette.text.primary,
    padding: theme.spacing(0.4),
  },
  TableCell: {
    padding: theme.spacing(0.4),
    color: theme.palette.text.secondary,
  },
  TableCellDate: {
    color: theme.palette.primary.main,
    padding: theme.spacing(0.4),
  }
}));

export default () => {
  const classes = useStyles();
  const { rows, headCells } = DATA;
  return (
    <>
      <BoxHeader >
        <Typography variant="body2" component="span" color="textPrimary">
          Threshold :
          </Typography>
        <Typography variant="body2" component="span" color="textSecondary">
          100000
          </Typography>
      </BoxHeader>
      <TableContainer elevation={5} className={classes.root} >
        <Table stickyHeader className={classes.Table}>
          <TableHead >
            <TableRow >
              {headCells.map((headCell, index) => (
                <TableCell className={classes.TableHeadCell} key={index}>
                  {headCell.label}
                </TableCell >))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.TableCell} component="th" scope="row">
                    {row.counterParty}
                  </TableCell>
                  <TableCell className={classes.TableCell}>
                    {row.btc}
                  </TableCell>
                  <TableCell className={classes.TableCell}>
                    {row.eth}
                  </TableCell>
                  <TableCell className={classes.TableCell}>
                    {row.xrp}
                  </TableCell>
                  <TableCell className={classes.TableCell}>
                    {row.eur}
                  </TableCell>
                  <TableCell className={classes.TableCell}>
                    {row.usd}
                  </TableCell>
                  <TableCell className={classes.TableCell}>
                    {row.gbr}
                  </TableCell>
                  <TableCell className={classes.TableCell}>
                    {row.next_exposure}
                  </TableCell>
                  <TableCell className={classes.TableCellDate}>
                    {row.lastCalculationDate}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
