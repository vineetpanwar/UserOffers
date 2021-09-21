import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name"
  },
  {
    id: "offeringCategory",
    numeric: false,
    disablePadding: true,
    label: "Offering Category"
  },
  {
    id: "businessModel",
    numeric: false,
    disablePadding: true,
    label: "Business Model"
  },
  {
    id: "PLC",
    numeric: false,
    disablePadding: true,
    label: "PLC"
  },
  {
    id: "revenueTreatment",
    numeric: false,
    disablePadding: true,
    label: "Revenue Treatment"
  },
  {
    id: "cloudEnabled",
    numeric: false,
    disablePadding: true,
    label: "Cloud Enabled"
  },
  {
    id: "startDate",
    numeric: false,
    disablePadding: true,
    label: "Start Date"
  },
  {
    id: "endDate",
    numeric: false,
    disablePadding: true,
    label: "End Date"
  },
  {
    id: "lifeCycleStatus",
    numeric: false,
    disablePadding: true,
    label: "LifeCycle Status"
  },
  {
    id: "configure",
    numeric: false,
    disablePadding: true,
    label: ""
  }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align="center"
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
          </StyledTableCell>
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchText, setSearchText] = React.useState("");
  const [actualRows, setRows] = React.useState(rows);

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

  const handleSearch = () => {
    const tempRows = actualRows.filter((curr) => {
      return (
        curr.name.includes(searchText) ||
        curr.offeringCategory.includes(searchText) ||
        curr.businessModel.includes(searchText)
      );
    });

    setRows(tempRows);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Box sx={{ p: 3 }}>
          <Typography className="subHeadingText" variant="body1">
            Select Configure
          </Typography>
          <div className="leftSection">
            <Box
              sx={{
                width: "50%",
                height: 400
              }}
            >
              <Typography variant="subtitle2">
                Select an offering to Configure(Search an offering Name, ID, or
                PLC)
              </Typography>
              <TextField
                id="outlined-basic"
                label="Search field"
                variant="outlined"
                margin="dense"
                onChange={(event) => setSearchText(event.target.value)}
              />
              <Button variant="outlined" onClick={handleSearch}>
                Search
              </Button>
              <Button>VIEW PRODUCT CATALOG</Button>
            </Box>
            <Box
              sx={{
                width: "40%",
                height: 400
              }}
            >
              <Typography variant="subtitle2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
              <Button>Learn more about this</Button>
            </Box>
          </div>
        </Box>
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
              {stableSort(actualRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell align="center">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.offeringCategory}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.businessModel}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.PLC}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.revenueTreatment}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.cloudEnabled}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.startDate}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.endDate}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.lifeCycleStatus}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button variant="contained">CONFIGURE</Button>
                      </StyledTableCell>
                    </StyledTableRow>
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
