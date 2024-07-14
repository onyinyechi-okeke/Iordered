import React, { useState, useContext, useEffect } from 'react';
import search from '../../assets/search.svg';
import ProductCard from './ProductCard';
import Navigation from '../../components/Navigation';
import { CartContext } from '../../CartContext';
import { fetchProducts } from '../../Api';
import Loader from '../../components/Loader';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Modern() {
  const { addToCart } = useContext(CartContext);
  const N = 'Categories';
  const C = 'Modern';

  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getPageSize = (page) => {
    switch (page) {
      case 1:
        return 10;
      case 2:
        return 12;
      case 3:
        return 11;
      default:
        return 10;
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const size = getPageSize(currentPage);
        setPageSize(size);
        const productsData = await fetchProducts(currentPage, size);
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  
 const handleAddToCart = (product) => {
  const productDetails = {
    ...product,
    quantity: 1,
    img: product.photos && product.photos.length > 0 ? `https://api.timbu.cloud/images/${product.photos[0].url}` : '',
    price: (product.current_price && product.current_price.length > 0 && product.current_price[0].USD && product.current_price[0].USD.length > 0) ? product.current_price[0].USD[0] : 'N/A'
  };
  addToCart(productDetails);
};

  

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pages = [1, 2, 3];

  const changePage = (page) => {
    console.log(`Changing to page ${page}`);
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className='pt-[137px] lg:px-[124px] md:px-[64px] px-[42px] relative pb-10 max-w-[1440px] mx-auto '>
      <Navigation N={N} C={C} />
      <section className='flex mt-[25px] md:mt-[68px] mb-[20px] md:mb-[30px] gap-7 justify-between'>
        <div>
          <p className='md:text-[28px] tracking-tighter font-[700]'>Modern</p>
        </div>

        <div className='hidden md:w-[48%] md:flex justify-end xl:w-[34%]'>
          <div className='flex w-[54%] gap-[8.84px] px-[8.84px] py-[5.89px] border-[0.74px] border-[#dod5dd] rounded-[4.42px]'>
            <img src={search} alt='search icon' className='w-[20px]' />
            <input
              className='w-full border-none outline-none placeholder:text-[12px]'
              type='text'
              placeholder='Search items..'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {filteredProducts.length > 0 ? (
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 w-full gap-[24px]'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <div className='text-center mt-10'>
          <p className='text-[18px] font-[500]'>No items found matching "{searchTerm}".</p>
        </div>
      )}

      <div className='flex justify-center mt-8'>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className='px-3 py-1 mx-1 rounded-md bg-white border'
        >
          <BiChevronLeft />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`px-3 py-1 mx-1 rounded-md ${currentPage === page ? 'bg-gray-300' : 'bg-white border'}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === pages.length}
          className='px-3 py-1 mx-1 rounded-md bg-white border'
        >
          <BiChevronRight />
        </button>
      </div>
    </main>
  );
}

export default Modern;
