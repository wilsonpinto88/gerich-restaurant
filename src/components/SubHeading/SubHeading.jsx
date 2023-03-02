import React, { Fragment } from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <Fragment>
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  </Fragment>
);

export default SubHeading;
