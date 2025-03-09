import { CURRENCY_SYMBOL } from '../config';

export const formatGhanaCedi = (amount) => {
  return `${CURRENCY_SYMBOL} ${new Intl.NumberFormat('en-GH', {
    style: 'decimal',
  }).format(amount)}`;
};