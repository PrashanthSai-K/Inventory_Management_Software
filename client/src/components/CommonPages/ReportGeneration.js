import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import * as XLSX from "xlsx";
import axios from "axios";

// Define your report component
const MyReport = ({ reportData }) => (
  <Document>
    <Page size="A3" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            {Object.keys(reportData[0]).map((key, index) => (
              <View key={index} style={[styles.tableCell, styles.tableHeader]}>
                <Text>{key}</Text>
              </View>
            ))}
          </View>
          {reportData.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {Object.values(row).map((cell, cellIndex) => (
                <View key={cellIndex} style={styles.tableCell}>
                  <Text>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// Define styles for your report
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
    borderRightColor: '#000',
    fontSize: 12,
    width:"150px",
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
    borderRightColor: '#000',
    fontSize: 12,
 
  },
  tableCell: {
    width:"150px",
    padding: 8,
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
    border:1,
    fontSize: 12,
  },
});

// Render the report with a PDFViewer
const ReportGeneration = ({ data }) => {
  console.log(data);
  const [viewPdfViewer, setViewPdfViewer] = useState(false);
  const generatePDF = async () => {
    setViewPdfViewer(true);
    try {
      const response = await axios.get("/generate-pdf"); // Make an HTTP request to trigger PDF generation on the server

      if (response.data.success) {
        // Open the download link in a new tab
        window.open("/my_report.pdf", "_blank");
      } else {
        console.error("PDF generation failed");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const exportToExcel = () => {
    const dataForExcel = [];

    const copy = data;
    const keysAndValuesArray = [];

    if (copy.length > 0) {
      const firstObject = copy[0];
      const keys = Object.keys(firstObject);
      keysAndValuesArray.push([...keys]);
      keysAndValuesArray.push([...keys.map((key) => firstObject[key])]);
      dataForExcel.push(...keysAndValuesArray);
    }

    dataForExcel.push(
      ...data.map((item) => {
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

  return (
    <div>
      {/* {viewPdfViewer && ( */}
      <div className="overflow-y-auto flex w-100 h-100 justify-center items-center">
        {viewPdfViewer && (
          <PDFViewer style={{ width: "50vw", height: "50vh" }}>
            <MyReport reportData={data} />
          </PDFViewer>
        )}
      </div>
      <button
        className="text-start border-black border-2 w-36 mt-3 items-center flex justify-center rounded-xl"
        onClick={generatePDF}
      >
        view PDF
      </button>
      <button
        className="text-start border-black border-2 w-36 mt-3 items-center flex justify-center rounded-xl"
        onClick={() => window.location.reload()}
      >
        close pdf viewer
      </button>
      <button
        className="text-start border-black border-2 w-36 mt-3 items-center flex justify-center rounded-xl"
        onClick={exportToExcel}
      >
        Export to Excel
      </button>
    </div>
  );
};

export default ReportGeneration;
