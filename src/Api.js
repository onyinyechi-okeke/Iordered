export const fetchProducts = async (page, size) => {
    const response = await fetch(`https://timbu-get-all-products.reavdev.workers.dev/?organization_id=9ef10b6c842d4a1ba15c2e32809166e4&reverse_sort=false&page=${page}&size=${size}&Appid=0WJ1O1LQUGFO6MF&Apikey=ed24bd146b21465ab5158fb1a182345e20240712135458259838`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.items;
  };

  export const fetchProducts1 = async () => {
    const response = await fetch(`https://timbu-get-all-products.reavdev.workers.dev/?organization_id=9ef10b6c842d4a1ba15c2e32809166e4&reverse_sort=false&Appid=0WJ1O1LQUGFO6MF&Apikey=ed24bd146b21465ab5158fb1a182345e20240712135458259838`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.items;
  };
  

