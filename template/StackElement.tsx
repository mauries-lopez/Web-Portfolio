import React from "react";

interface StackElementProps {
  element?: React.ComponentType<{ size?: number }> | null;
  label: string;
}

export default function StackElement({ element: Icon, label }: StackElementProps) {
  return (
    <div className="flex flex-row items-center gap-1 rounded-full px-3 py-1 border border-stone-200 dark:border-neutral-700 bg-transparent">
      {Icon && <Icon size={14} />}
      <p className="text-xs font-medium text-gray-600 dark:text-neutral-400">{label}</p>
    </div>
  );
}
