import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          position: "absolute",
        }}
        size={40}
        thickness={4}
      />
    </div>
  );
};

export default Spinner;
