import React from 'react';
import { SvgXml } from 'react-native-svg';

export interface IconEntry {
  body: string;
}

export interface IconData {
  [name: string]: IconEntry;
}

export interface AltrexIconProps {
  name: string;
  icons: IconData;
  size?: number;
  color?: string;
}

export function AltrexIcon({ name, icons, size = 24, color = 'currentColor' }: AltrexIconProps) {
  const icon = icons[name];
  if (!icon) return null;

  const body =
    color !== 'currentColor'
      ? icon.body.replace(/var\(--ci-primary-color,\s*currentColor\)/g, color)
      : icon.body;

  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">${body}</svg>`;

  return <SvgXml xml={xml} width={size} height={size} />;
}
