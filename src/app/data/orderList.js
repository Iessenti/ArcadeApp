import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
} from '@images';
import {Color} from '@constants';
import {Product_List} from './productList';

export const ORDER_LIST = [
  {
    orderId: '#45467734',
    date: 'Mar 21,2020',
    items: Product_List.slice(0, 2),
    status: 'Progress',
  },
  {
    orderId: '#6434232',
    date: 'Feb 21,2020',
    items: Product_List.slice(3, 5),
    status: 'Delivered',
  },
];
