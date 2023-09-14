import React, { useState } from "react";
import * as XLSX from "xlsx";
import ReportView from "./ReportView";


// Render the report with a PDFViewer
const ReportGeneration = ({ requiredData}) => {

  const exportToExcel = () => {
    const dataForExcel = [];
    const copy = requiredData;
    const keysAndValuesArray = [];
    if (copy.length > 0) {
      const firstObject = copy[0];
      const keys = Object.keys(firstObject);
      keysAndValuesArray.push([...keys]);
      keysAndValuesArray.push([...keys.map((key) => firstObject[key])]);
      dataForExcel.push(...keysAndValuesArray);
    }

    dataForExcel.push(
      ...requiredData.map((item) => {
        const rowData = [];
        for (const key in item) {
          rowData.push(item[key]);
        }
        return rowData;
      })
    );

    const ws = XLSX.utils.aoa_to_sheet(dataForExcel);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Change the sheet name as needed

    // Save the Excel file
    XLSX.writeFile(wb, "my_report.xlsx");
  };


  // console.log(selectedTable);

  return (
    <div>
      <div className="flex mt-10">
      <button
              className="focus:ring-4 animate1 shadow-lg transform active:scale-75 transition-transform cursor-pointer border-2 rounded-lg ml-5 w-36 py-2 bg-blue-500 text-white mr-16"
              onClick={exportToExcel}
            >
              Export to Excel
            </button>
        
      </div>
      {requiredData.length > 0 && 
            <ReportView requiredData={requiredData} />
            }
    </div>
  );
};

export default ReportGeneration;
