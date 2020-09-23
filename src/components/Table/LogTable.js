import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, Typography, Box } from '@material-ui/core';

import LOG_TABLE_DATA from '../../DB/LogTableData'


const useStyles = makeStyles((theme) => ({
  Table: {
    minWidth: 350,
  },
  TableBody: {
    display: 'block',
    height: '300px',
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingBottom: '2px'
  },
  TableCell: {
    padding: '4px 0px 2px 10px;',
    borderBottom: 'none',

  },
  TableHeadCell: {
    padding: '4px 0px 2px 10px;',
    borderBottom: 'none',
    color: theme.palette.primary.main
  },
  ActiveTableHeadCell: {
    padding: '2px',
    borderBottom: 'none',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.selected,
  },

}));


const LogError = ({ type, message }) => {

  return (
    <>
      {type === 'LOGIN_FAILED' ?
        <>
          <Typography varint="body2" component="span" color='textSecondary'  >
            login {' '}
          </Typography>
          <Box varint="body2" component="span" color={theme.palette.status.error}  >
            failed. {' '}
          </Box>
          <Typography varint="body2" component="span" color='textSecondary'  >
            {message}
          </Typography>
        </>
        : (<Typography varint="body2" component="span" color='textSecondary' >
          error
        </Typography>)
      }
    </>
  )
}


export default () => {
  const classes = useStyles();
  const { headCells, rows } = LOG_TABLE_DATA;

  return (
    <Box>
      <TableContainer elevation={5} component={Paper}>
        <Table stickyHeader className={classes.Table}>
          <TableHead className={classes.TableHead}>
            <TableRow >
              {headCells.map((log, index) => (
                <TableCell key={index} className={classes.TableHeadCell}>
                  {
                    log.active ? (<Box textAlign="center" className={classes.ActiveTableHeadCell}>{log.label}</Box>) : log.label}</TableCell>
              ))
              }
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer elevation={5} className={classes.root} component={Paper}>
        <Table className={classes.TableBody} >
          <TableBody >
            {
              rows.map((log, index) => (
                <TableRow key={index} >
                  <Typography varint="body2" component="span" color='textSecondary' >
                    {log.timeStamp} {' '}
                  </Typography>
                  <Typography varint="body2" component="span" color='textSecondary' >
                    {log.production}.
                        </Typography>
                  <Box component="span" color={theme.palette.status[log.status.type]}  >
                    {log.status.text}.
                        </Box>
                  {!log.error ?
                    (<>
                      <Typography varint="body2" component="span" color='textSecondary' >
                        {log.currency}-
                        </Typography>
                      <Typography varint="body2" component="span" color='textSecondary' >
                        imlied price {log.message.price} -
                        </Typography>
                      <Typography varint="body2" component="span" color='textSecondary' >
                        message : inserted id: {log.message.id}
                      </Typography>
                    </>) : (
                      LogError(log.error)
                    )}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  );
}
