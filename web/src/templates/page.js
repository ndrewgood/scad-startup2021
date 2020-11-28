import React from "react";


const Page = (props) => {

  const { children } = props


  return (
    <body>
      {children}
    </body>
  );
};

export default Page;
