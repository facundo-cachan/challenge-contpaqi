// https://boxicons.com/usage

import type IconProps from './types'

const Icon = ({ name, size = 'md', className = '' }: IconProps) => (
  <i className={`bx bx-${name} bx-${size} ${className}`} />
);

export default Icon;