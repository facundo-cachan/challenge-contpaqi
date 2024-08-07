import type ImageProps from './types'

const size = 50;
const CustomImage = ({ alt, src = '/vercel.svg', ...props }: ImageProps) => {
  props.height = props.height ?? size;
  props.width = props.width ?? size;

  return (
    <img
      decoding="async"
      crossOrigin="anonymous"
      src={src}
      alt={alt ?? 'Logo'}
      {...props}
    />
  )
}

export default CustomImage;