import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";

function createData(
  name,
  offeringCategory,
  businessModel,
  PLC,
  revenueTreatment,
  cloudEnabled,
  startDate,
  endDate,
  lifeCycleStatus
) {
  return {
    name,
    offeringCategory,
    businessModel,
    PLC,
    revenueTreatment,
    cloudEnabled,
    startDate,
    endDate,
    lifeCycleStatus
  };
}

//this should come form Redux, demo for now
const rows = [
  createData(
    "Faya subscription1",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Maya subscription2",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Gaya subscription3",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Saya  subscription4",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Daya subscription5",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Laya subscription6",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Maya subscription7",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Maya subscription8",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Maya subscription9",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  ),
  createData(
    "Maya subscription10",
    "Desktop product",
    "Subscription",
    "MAYAS",
    "Up Front",
    "Yes",
    "01 Jan 2021",
    "31 Dec 2021",
    "Assigned"
  )
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Name",
    numeric: false,
    disablePadding: true,
    label: "Name"
  },
  {
    id: "OfferingCategory",
    numeric: false,
    disablePadding: false,
    label: "Offering Category"
  },
  {
    id: "BusinessModel",
    numeric: false,
    disablePadding: false,
    label: "Business Model"
  },
  {
    id: "PLC",
    numeric: true,
    disablePadding: false,
    label: "PLC"
  },
  {
    id: "RevenueTreatment",
    numeric: false,
    disablePadding: false,
    label: "Revenue Treatment"
  },
  {
    id: "CloudEnabled",
    numeric: false,
    disablePadding: false,
    label: "Cloud Enabled"
  },
  {
    id: "StartDate",
    numeric: false,
    disablePadding: false,
    label: "Start Date"
  },
  {
    id: "EndDate",
    numeric: false,
    disablePadding: false,
    label: "End Date"
  },
  {
    id: "LifeCycleStatus",
    numeric: false,
    disablePadding: false,
    label: "LifeCycle Status"
  },
  {
    id: "configure",
    numeric: false,
    disablePadding: false,
    label: ""
  }
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  console.log(row, index);

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">
                        {row.offeringCategory}
                      </TableCell>
                      <TableCell align="right">{row.businessModel}</TableCell>
                      <TableCell align="right">{row.PLC}</TableCell>
                      <TableCell align="right">
                        {row.revenueTreatment}
                      </TableCell>
                      <TableCell align="right">{row.cloudEnabled}</TableCell>
                      <TableCell align="right">{row.startDate}</TableCell>
                      <TableCell align="right">{row.endDate}</TableCell>
                      <TableCell align="right">{row.lifeCycleStatus}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained">CONFIGURE</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
