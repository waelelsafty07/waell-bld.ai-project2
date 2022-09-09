import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import styles from "./Content.module.css";

const AccordionData = ({ item, open, index }) => {
  const [expanded, setExpanded] = useState(open);

  useEffect(() => {
    setExpanded(open);
  }, [open]);

  const handleChange = () => {
    // console.log(expanded);
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} style={{ margin: 0 }} onClick={handleChange}>
      <AccordionSummary
        className={styles.rowReverse}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
      >
        {}
        <Typography sx={{ width: "80%", ml: ".5rem", fontWeight: "bold" }}>
          {item?.name}
        </Typography>
        <Typography sx={{ width: "20%", fontSize: ".7rem" }}>
          {item?.more.length} Lectures
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {item?.more?.map((li, index1) => {
            return (
              <li key={index1} style={{ margin: "1rem 0" }}>
                <div className="List-Block">
                  {li.mimeType === "video" ? (
                    <PlayCircleIcon fontSize="small" />
                  ) : (
                    <InsertDriveFileOutlinedIcon fontSize="small" />
                  )}

                  <div style={{ display: "flex", flex: 1 }}>
                    <div>
                      <div style={{ display: "flex" }}>
                        <span className={styles.PanelTitle}>{li.name}</span>
                      </div>
                    </div>

                    <span style={{ flex: "1 1 0%" }}></span>
                    {li.preview ? (
                      <span
                        style={{
                          marginLeft: "1.5rem",
                          color: "#6a6f73",
                          fontSize: ".85rem",
                          maxWidth: "3rem",
                        }}
                      >
                        <Link href="#">preview</Link>
                      </span>
                    ) : (
                      ""
                    )}
                    <span
                      style={{
                        marginLeft: "1rem",
                        color: "#6a6f73",
                        width: "3rem",
                        fontSize: ".85rem",
                      }}
                    >
                      {li.mimeType === "video"
                        ? li.duration
                        : li.duration + " page"}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionData;
