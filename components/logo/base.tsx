import { ComponentProps } from 'react'

export type AssetsLogoProps = ComponentProps<'div'> & {
  fillColor: string
  width?: string | number
  height?: string | number
}
