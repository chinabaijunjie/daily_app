import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from './selection.json'

const Icon = (props) => {
  const { name, size, color } = props;
  const Icons = createIconSetFromIcoMoon(icoMoonConfig, 'Icomoon', 'icomoon.ttf')
  return (
    <Icons name={name} size={size} color={color} />
  )
}

export default Icon
