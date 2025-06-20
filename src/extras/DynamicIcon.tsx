import React from 'react';
import * as Icons from 'lucide-react';

export type IconName = keyof typeof Icons;

interface DynamicIconProps extends React.ComponentProps<'svg'> {
  iconName: string;
}

// Trim, strip trailing commas/quotes, remove spaces
const sanitize = (raw: string): string =>
  raw.trim().replace(/^[,\s"]+|[,\s"]+$/g, '');

export default function DynamicIcon({ iconName, ...props }: DynamicIconProps) {
  const cleanName = sanitize(iconName);
  // Cast only if it exists on lucide-react
  const IconComponent = (Icons as any)[cleanName] as React.ComponentType<any>;
  if (!IconComponent) {
    // fallback
    return <Icons.Star {...props} />;
  }
  return <IconComponent {...props} />;
}
