import React from "react";

import '../styles/resource-card-grid.scss'

const ResourceCardGrid = ({span, bg, children}) => {
  return (
    <div className="resource-card-grid">
        {children}
    </div>
  );
};

export default ResourceCardGrid;
