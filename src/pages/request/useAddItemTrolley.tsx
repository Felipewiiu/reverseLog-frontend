import { useState, useCallback } from 'react';

interface ProductRequest {
  id: string,
  amount: number
}

export default function useAddItemTrolley() {
  const [itemsTrolley, setItemsTrolley] = useState<ProductRequest[]>([]);

  const addItem = useCallback((newItem: ProductRequest) => {
    setItemsTrolley((prevItems) => [...prevItems, newItem]);
  }, []);

  return { itemsTrolley, addItem };
}
