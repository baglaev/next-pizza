import Link from 'next/link';
import React from 'react';
import { Title } from './index';
import { Button } from '../ui/index';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  classname?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, classname }) => {
  return (
    <div className={classname}>
      <Link href={`product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img src={imageUrl} alt={name} className="w-[215px] h-[215px]" />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold"></Title>
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary">
            <Plus size={20} className="mr-1"></Plus>
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
