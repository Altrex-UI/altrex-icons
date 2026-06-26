import React from 'react';
import genericData from '../iconify/altrex-generic.json';
import { AltrexIcon, AltrexIconProps } from './AltrexIcon';

export type AltrexGenericIconName = keyof typeof genericData.icons;

type Props = Omit<AltrexIconProps, 'icons'> & { name: AltrexGenericIconName };

export function AltrexGenericIcon(props: Props) {
  return <AltrexIcon {...props} icons={genericData.icons} />;
}
