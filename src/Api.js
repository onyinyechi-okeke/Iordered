import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 5,
  retryCondition: (error) => {
    return error.response && error.response.status === 429;
  },
  retryDelay: (retryCount) => {
    return axiosRetry.exponentialDelay(retryCount);
  }
});

export const fetchProducts = async (page, size) => {
  try {
    const response = await fetch(`https://api.timbu.cloud/products?organization_id=9ef10b6c842d4a1ba15c2e32809166e4&reverse_sort=false&page=${page}&size=${size}&Appid=0WJ1O1LQUGFO6MF&Apikey=ed24bd146b21465ab5158fb1a182345e20240712135458259838`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};


export const fetchProductsbyId = async (id) => {
  const response = await fetch(`https://api.timbu.cloud/products?organization_id=9ef10b6c842d4a1ba15c2e32809166e4&product_id=${id}&reverse_sort=false&Appid=0WJ1O1LQUGFO6MF&Apikey=ed24bd146b21465ab5158fb1a182345e20240712135458259838`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Failed to fetch product');
  }
  const data = await response.json();
  return data;
};
