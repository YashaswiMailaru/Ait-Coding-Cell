import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import 'date-fns';
import { Button, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import standings from './standing';
import { AuthContext } from '../user_auth/Auth';
import { get_leaderboard } from './api';


const columns = [
  { id: 'rank', label: 'Rank', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'handle',
    label: 'Codeforces Handle',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'score',
    label: 'Score',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'year',
    label: 'Year',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: '90%',
    margin: "auto",
  },
  container: {
    maxHeight: 700,
  },
  textField: {
    width: "300px",
    marginLeft: "5%",
  },
  update: {
    float: 'right',
    margin: "1% 5%",
  },
});

export default function LeaderBoardTable() {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedDate, setSelectedDate] = React.useState(new Date);
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = useState([]);
  const user = useContext(AuthContext);

  console.log(user);
  
  
  const fetchLeaderBoard = async () => {

      const month = selectedDate.getMonth().toString() + selectedDate.getFullYear().toString();
      var data = await get_leaderboard(month);
      if(data == null)
        data = [];
      setRows(data);
      setLoading(false);


  }

  useEffect(() => {
    fetchLeaderBoard();
  }, [selectedDate]);

  if (loading) {
    return <div>loading..</div>
  }

 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const updateData = async () => {
    await standings();
  };

  var url = "https://bootdey.com/img/Content/avatar/avatar7.png";

  return (
    <div>

      <div className={classes.textField}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/yyyy"
            margin="normal"
            views={["year", "month"]}
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {(user) && (user.profile) && (user.profile.is_admin) && 
        <Button variant="contained" color="primary" className={classes.update} onClick={updateData}>
          Update
        </Button>
      }

    </div>
  );
}
