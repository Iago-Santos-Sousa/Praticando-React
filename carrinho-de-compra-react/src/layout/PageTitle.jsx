import React from "react";

const PageTitle = ({ data }) => {
  return <div className="page-title">{data || "{insira um título}"}</div>;
};

export default PageTitle;
