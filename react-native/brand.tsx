import React from 'react';
import brandData from '../iconify/altrex-brand.json';
import { AltrexIcon, AltrexIconProps } from './AltrexIcon';

export type AltrexBrandIconName = keyof typeof brandData.icons;

type Props = Omit<AltrexIconProps, 'icons'> & { name: AltrexBrandIconName };

export function AltrexBrandIcon(props: Props) {
  return <AltrexIcon {...props} icons={brandData.icons} />;
}
