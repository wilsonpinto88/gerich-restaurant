import React, { Fragment } from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <Fragment>
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div app__menuitem-name>
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div classname="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  </Fragment>
);

export default MenuItem;
