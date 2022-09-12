import { useContext, useState } from "react";

import styles from "./Content.module.css";
import { CoursesContext } from "../../../../contexts/coursesData/coursesContext";
import { Collapse, Link, styled } from "@mui/material";
import AccordionData from "./Accordion";

const ExpandMoreStyle = styled((props) => {
  const { expand, ...other } = props;

  return <button {...other}></button>;
})(({ theme, expand }) => ({
  marginLeft: "auto",
}));

const ControlledAccordions = () => {
  const [expandedMore, setExpandedMore] = useState(false);
  const [expandedAll, setExpandedAll] = useState(false);

  const data = useContext(CoursesContext);
  const dataCourse = data.dataCourse?.content;

  const dataForDisplay =
    !expandedMore && dataCourse?.length > 10
      ? dataCourse?.slice(0, 10)
      : dataCourse;

  const handleExpandClick = (e) => {
    setExpandedMore(!expandedMore);
  };

  const handleExpandAllClick = (e) => {
    setExpandedAll(!expandedAll);
    setExpandedMore(true);
  };
  const DisplayData = () => {
    return dataForDisplay?.map((item, index) => (
      <AccordionData key={index} item={item} index={index} open={expandedAll} />
    ));
  };
  const renderButton = () => {
    if (!(!expandedMore && dataCourse?.length - 10 > 0)) return null;
    return (
      <ExpandMoreStyle
        className={styles.MoreCollapse}
        style={{ width: "100%" }}
        onClick={handleExpandClick}
      >
        <span>
          {dataCourse?.length - 10}
          <span> more sections</span>
        </span>
      </ExpandMoreStyle>
    );
  };
  return (
    <div className="heading-content">
      <h2 style={{ margin: "1rem 0" }}>Course content:</h2>
      <div style={{ margin: "1rem 0", display: "flex" }}>
        <div style={{ minWidth: "6rem" }}>
          <span>{dataCourse?.length} sections</span>
        </div>
        <div className={styles.expandAll}>
          <Link onClick={handleExpandAllClick}>
            {!expandedAll ? "Expand all lectures" : "Collapse all lectures"}
          </Link>
        </div>
      </div>
      {DisplayData()}

      {renderButton()}
    </div>
  );
};
export default ControlledAccordions;
