import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './FilterCheckbox';
import { Input } from '../ui/index';

type Item = FilterChecboxProps;
interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,
}) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            // onCheckedChange={() => onCheckedChange(item.value)}
            onCheckedChange={(ids) => console.log(ids)}
            // checked={selected.has(item.value)}
            // key={String(item.value)}
            key={index}
            checked={false}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
    </div>
  );
};
