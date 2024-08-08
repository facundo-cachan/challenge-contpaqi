// https://boxicons.com/usage

import type IconProps from "./types";

const Icon = ({ name, type = "", size = "md", className = "" }: IconProps) => (
  <i className={`bx bx${type}-${name} bx-${size} ${className}`} />
);

export default Icon;
