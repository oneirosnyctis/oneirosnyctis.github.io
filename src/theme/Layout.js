import React from "react";
import OriginalLayout from "@theme-original/Layout";
import WrapTables from "@site/src/theme/WrapTables";

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <WrapTables />
    </>
  );
}
