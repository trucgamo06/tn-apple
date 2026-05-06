import { PRODUCTS, Product } from '../constants';

/**
 * Simulates an API call to fetch products
 */
export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 500);
  });
}

/**
 * Simulates an API call to fetch a single product by ID
 */
export async function fetchProductById(id: string): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS.find(p => p.id === id));
    }, 300);
  });
}
