import { useTable } from "react-table";
import React from "react";

const Table = (props) => {
  let data = []; // CLEAR FIRST

  for (let i of props.data) {
    data.push({
      docName: String(i[0]).split(/[/.]/)[1],
      docType: String(i[0]).split(/[/.]/)[2],
      lastModified: String(i[2]),
      docSize: i[3],
      open: i[4],
    });
  }

  console.log(data);

  const columns = React.useMemo(
    () => [
      {
        Header: "Doc Name",
        accessor: "docName", // accessor is the "key" in the data
      },
      {
        Header: "Doc Type",
        accessor: "docType",
      },
      {
        Header: "Last Modified",
        accessor: "lastModified",
      },
      {
        Header: "Doc Size",
        accessor: "docSize",
      },
      {
        Header: "Open",
        accessor: "open",
        Cell: (props) => (
          <a href={String(props.value)} target="_blank" rel="noreferrer">
            Link
          </a>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <table {...getTableProps()} style={{ border: "solid 1px black " }}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "solid 3px red",
                      color: "black",
                    }}
                  >
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>

      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                        }}
                      >
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
