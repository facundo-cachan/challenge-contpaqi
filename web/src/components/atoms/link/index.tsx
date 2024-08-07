import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

import type LinkProps from "./types";

const Link = styled(({ children, ...props }: LinkProps) => (
  <LinkR {...props}>{children}</LinkR>
))`
  color: #BF4F74;
  font-weight: bold;
`;

export default Link;