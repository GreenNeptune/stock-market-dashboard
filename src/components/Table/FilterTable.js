import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Typography,
} from '@material-ui/core';

import FilterChipHeader from '../FilterChipHeader/FilterChipHeader';
import AdjustIcon from '@material-ui/icons/Adjust';
import theme from '../../theme';

const useStyles = makeStyles(theme => ({
  root: {
    height: '368px',
  },
  Table: {
    minWidth: 350,
  },
  TableHeadCell: {
    color: theme.palette.text.primary,
    padding: theme.spacing(0.4),
  },
  TableCellSentAt: {
    padding: theme.spacing(0.4),
    color: theme.palette.text.primary,
  },
  TableCell: {
    padding: theme.spacing(0.4),
    color: theme.palette.text.secondary
  },
}));


export default ({ headCells, rows }) => {

  const classes = useStyles();

  return (
    <>
      <FilterChipHeader />
      <TableContainer className={classes.root} >
        <Table stickyHeader className={classes.Table} >
          <TableHead >
            <TableRow >
              {headCells.map((headCell, index) => (
                <TableCell className={classes.TableHeadCell} key={index}>
                  {headCell.label}
                </TableCell >))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row, index) => (
              <TableRow key={index} className={classes.TableCell}>
                <TableCell className={classes.TableCell} >
                  {row.companyName}
                </TableCell >
                <TableCell className={classes.TableCell} >{row.product}</TableCell>
                <TableCell className={classes.TableCellSentAt}  >{row.sentAt}</TableCell>
                <TableCell className={classes.TableCell} >
                  {row.status.isActive
                    ? (
                      <Box display="flex" alignItems="center" color={theme.palette.status.active}>
                        <AdjustIcon fontSize="small" />
                        <Typography style={{ marginLeft: '5px' }} variant="body2" component="span">
                          Active
                          </Typography>
                      </Box>)
                    : (
                      <Box display="flex" alignItems="center" color={theme.palette.status.canceled}>
                        <AdjustIcon fontSize="small" />
                        <Typography style={{ marginLeft: '5px' }} variant="body2" component="span">
                          Canceled
                        </Typography>
                      </Box>
                    )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}