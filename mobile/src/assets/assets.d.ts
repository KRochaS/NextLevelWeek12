declare module '*.png'

declare module '*.svg' {
  import React from 'react'
  // eslint-disable-next-line prettier/prettier
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
