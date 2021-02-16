import * as React from "react";

const Copyright = (): JSX.Element => {
  return (
    <p className="text-gray-700 text-center">
      {"Copyright © "}
      <a href="https://blog.udusd.dev/">UDlog</a> {new Date().getFullYear()}
      {"."}
    </p>
  );
};

export default Copyright;
