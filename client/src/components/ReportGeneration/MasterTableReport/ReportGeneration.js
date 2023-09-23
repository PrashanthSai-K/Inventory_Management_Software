import React, { useState } from "react";

import ReportView from "./ReportView";

// Render the report with a PDFViewer
const ReportGeneration = ({
  data,
  handleOkClick,
  setRequiredData,
  requiredData,
  selectedTable,
  selectedColumns,
  setError,
  setMessage,
  viewColumn
}) => {


  return (
    <div>
      <div className="">
        {requiredData.length > 0 && (
          <ReportView
            handleOkClick={handleOkClick}
            setError={setError}
            setMessage={setMessage}
            data={data}
            setRequiredData={setRequiredData}
            selectedColumns={selectedColumns}
            selectedTable={selectedTable}
            requiredData={requiredData}
            viewColumn={viewColumn}
          />
        )}
      </div>
    </div>
  );
};

export default ReportGeneration;
