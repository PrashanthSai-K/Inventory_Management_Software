import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ReportView({ requiredData }) {
  const columnNames = Object.keys(requiredData[0]);

  function downloadPDF(requiredData) {
    const columnNames = Object.keys(requiredData[0]);
    const maxColumnsPerPage = 5; // Set the maximum number of columns per page
    const totalColumns = columnNames.length;
    const totalPages = Math.ceil(totalColumns / maxColumnsPerPage);

    const doc = new jsPDF();

    // Iterate through each page
    for (let page = 0; page < totalPages; page++) {
      // Calculate the start and end indices for the current page's columns
      const startIndex = page * maxColumnsPerPage;
      const endIndex = Math.min(startIndex + maxColumnsPerPage, totalColumns);
      const pageColumnNames = columnNames.slice(startIndex, endIndex);
      const pageTableData = requiredData.map((row) =>
        pageColumnNames.map((col) => row[col])
      );

      // Add a new page for each page, except the first one
      if (page > 0) {
        doc.addPage();
      }

      // Generate the table for the current page
      doc.autoTable({
        head: [pageColumnNames],
        body: pageTableData,
        startY: 10, // Adjust the startY position as needed
      });
    }

    doc.save("Master Table.pdf"); // Download the PDF with a specified filename
  }

  return (
    <div>
      <div
        style={{ width: "500px", height: "50%", maxHeight: "360px" }}
        className="shadow sm:rounded-lg h-96"
      >
        <table className="min-w-full text-sm">
          <thead
            style={{ backgroundColor: "#0f6af2", color: "white" }}
            className="text-xs uppercase font-medium"
          >
            <tr>
              {columnNames.map((columnName, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div>{columnName}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white", fontWeight: "bold" }}>
            {requiredData.map((row, rowIndex) => (
              <tr key={rowIndex} className=" shadow-md rounded-xl">
                {columnNames.map((columnName, columnIndex) => (
                  <td
                    key={columnIndex}
                    className=" px-6 py-4 whitespace-nowrap"
                  >
                    {row[columnName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {columnNames.length > 0 ? (
          <button onClick={() => downloadPDF(requiredData)} className="btn">
            Download PDF
          </button>
        ) : "Please Select Column"}
      </div>
    </div>
  );
}

export default ReportView;
