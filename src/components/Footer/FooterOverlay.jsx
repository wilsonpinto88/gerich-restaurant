import React, { Fragment } from "react";

import "./FooterOverlay.css";

const FooterOverlay = () => (
  <Fragment>
    <div className="app__footerOverlay">
      <div className="app__footerOverlay-black" />
      <div className="app__footerOverlay-img app__bg" />
    </div>
  </Fragment>
);

export default FooterOverlay;
