import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import rate from '../assets/rate.svg';
import alert from '../assets/alert-square.svg';
import store from '../assets/store.svg';
import CrementDetails from '../components/CrementDetails';
import AddtoCartDetails from '../components/AddtoCartDetails';
import { CartContext } from '../CartContext';
import { fetchProducts1 } from '../Api'; 
import Loader from '../components/Loader';

function ProductDetails() {
  const { id } = useParams(); 
  const { addToCart } = useContext(CartContext);
  const [addedDetails, setAddedDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const products = await fetchProducts1(); 
        const foundProduct = products.find((item) => item.unique_id === id);
        if (foundProduct) {
          setSelectedProduct(foundProduct);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!selectedProduct) {
    return <Loader />; 
  }

  const handleAddToCart = () => {
    const { current_price } = selectedProduct;
    const image = gallery[0] || '';
    const price = current_price.length > 0 ? current_price[0].USD[0] : 0;

    addToCart({ ...selectedProduct, quantity, image, price });
    setAddedDetails(true);

    setTimeout(() => {
      setAddedDetails(false);
    }, 1000);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const { photos, current_price, description, available_quantity, name } = selectedProduct;

  
  const gallery = [];
  for (let i = 0; i < 5; i++) {
    gallery.push(photos.length > 0 ? `https://api.timbu.cloud/images/${photos[i % photos.length].url}` : '');
  }

  const price = current_price.length > 0 ? current_price[0].USD[0] : 'N/A';

  const handleNavigation = () => {
    navigate(`/product/${selectedProduct.unique_id}`);
  };

  return (
    <main className='pt-[169px] max-w-[1440px] mx-auto 2xl:px-[133px] md:px-[130px] xl:min-h-screen px-[20px]'>
      <section>
        <section className=' xl:flex 2xl:w-[1165px] xl:w-[1000px] xl:h-[516px] justify-between md:gap-10 md:w-full' >
          <img src={gallery[0]} alt='Product' className='2xl:w-[547px] xl:w-[450px] xl:h-[507px] rounded-md w-full h-[240px] md:[400px]' />

          <section className='2xl:w-[570px] xl:[500px] xl:h-[516px] w-full '>
            <div className='text-[#101928]'>
              <h3 className='text-[32px] font-semibold leading-[40px] pt-4 xl:pt-0'>{name}</h3>
              <h5 className='text-[24px] font-bold leading-[32px] py-3'>${(price * quantity).toFixed(2)}</h5>
            </div>

            <div className='border-b-[2px] border-t-[2px] border-[#f0f2f5] pt-7 pb-9'>
              <p className='text-[14px] font-bold text-[#667185] '>{description || 'With our furniture, you do not just furnish your home, you also furnish your heart. You will be buying furniture but we assure you that you are also purchasing, durability, elegance and maximum comfort. Buy comfort, buy now!'}</p>
              <p className='flex text-[14px] pt-5 gap-[16px] text-[#344054] font-bold '><span><img src={rate} alt='rating icon'/></span>(121)</p>
            </div>

            <p className='py-6'>Quantity</p>

            <div className='flex justify-between'>
              <CrementDetails quantity={quantity} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
              <p className='flex items-center text-[18px] text-[#e60023] font-bold'><span><img src={alert} alt='an icon'/></span>{available_quantity} units left</p>
            </div>

            <div className='pt-8'>
              
              <AddtoCartDetails handle={handleAddToCart} addedDetails={addedDetails} />
            </div>
          </section>
        </section>

        <section className='hidden 2xl:w-[1165px] xl:w-[1000px] md:gap-8 xl:flex items-center justify-between lg:w-full'>
          <div className='w-[547px] pt-5 flex items-center pb-4'>
            <figure className='bg-[#e8e8e8] p-[12.57px] rounded-[12px] flex gap-[18.86px] w-[414.86px] xl:mx-auto '>
              {gallery.map((p, index) => (
                <img key={index} src={p} alt='Product gallery' className='w-[62.86px] h-[62.86px] rounded-[8px]' />
              ))}
            </figure>
          </div>

          <div className='2xl:w-[550px] md:w-[620px] border border-[#e4e7e6] flex gap-[24px] px-8 py-6 rounded-md'>
            <img src={store} alt='Store icon' />

            <div>
              <p className='text-[13.09px] font-[600] '>Free Delivery</p>
              <div className='flex items-center gap-[21px] '>
                <p className='text-[12px] '>Free 3-5 days shipping</p>
                <div className='w-[3px] h-[16px] bg-[#737584]'></div>
                <p className='text-[12px] '>3 Months Warranty</p>
                <div className='w-[3px] h-[16px] bg-[#737584]'></div>
                <p className='text-[12px] '>Free care</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default ProductDetails;
