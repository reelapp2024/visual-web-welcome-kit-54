import React, { useRef, useState, useEffect } from 'react';

interface DynamicFAIconProps {
  iconClass: string;
  fallbackClass?: string;
  className?: string;
}

const DynamicFAIcon: React.FC<DynamicFAIconProps> = ({
  iconClass,
  fallbackClass = 'fas fa-star',
  className = 'text-4xl text-green-500',
}) => {
  const iconRef = useRef<HTMLElement>(null);
  const [isValidIcon, setIsValidIcon] = useState(true);

  useEffect(() => {
    const el = iconRef.current;
    if (el && (el.offsetWidth === 0 || el.offsetHeight === 0)) {
      setIsValidIcon(false);
    }
  }, [iconClass]);

  return (
    <i
      ref={iconRef}
      className={`${isValidIcon ? iconClass : fallbackClass} ${className}`}
    />
  );
};

export default DynamicFAIcon;
