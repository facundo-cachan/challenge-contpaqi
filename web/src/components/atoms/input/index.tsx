import styled from "styled-components";

import type InputProps from "./types";

const Inputt = (props: InputProps) => (
  <input type="text" {...props} />
);

export default Input;