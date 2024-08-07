// https://boxicons.com/usage

import type IconProps from './types'

const Icon = ({ name, size = 'md' }: IconProps) => (
  <i className={`bx bx-${name} bx-${size}`} />
);

export default Icon;