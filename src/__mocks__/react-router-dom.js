import React from "react";

export function Link({ to, ...props }) {
  return <a href={to} {...props} />;
}
