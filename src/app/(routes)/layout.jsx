import React from "react";
import SiteHeader from "../../modules/layout/SiteHeader/index";
import SiteFooter from "../../modules/layout/SiteFooter/index";

const layout = ({ children }) => {
  return (
    <section>
      <SiteHeader />
      {children}
      <SiteFooter />
    </section>
  );
};

export default layout;
