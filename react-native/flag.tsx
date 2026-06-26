import React from 'react';
import flagData from '../iconify/altrex-flag.json';
import { AltrexIcon, AltrexIconProps } from './AltrexIcon';

export type AltrexFlagIconName = keyof typeof flagData.icons;

type Props = Omit<AltrexIconProps, 'icons'> & { name: AltrexFlagIconName };

export function AltrexFlagIcon(props: Props) {
  return <AltrexIcon {...props} icons={flagData.icons} />;
}
