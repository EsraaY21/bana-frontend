import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddToCartButton from '../components/AddToCartButton';
import ProductCard from '../components/ProductCard';
import { imageUrl } from '../baseAPI';

const ProductDetails = () => {
  const products = useSelector((state) => state.products.value);
  const { productId } = useParams(); // productId is a string since it is from the url
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  // const cartItems = useSelector((state) => state.cart.value);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const product = products.filter((x) => x.id === parseInt(productId))[0];
  const categories = useSelector((state) => state.categories.value);

  console.log(product.category);

  return (
    <>
      {product && (
        <div className="container my-5">
          <div className="row container text-center">
            <div className="col-12 col-sm-12 col-lg-5 text-center ">
              <div className="bg-gray-lightx text-center product-col pb-2 ">
                <img
                  src={`${imageUrl}${
                    [
                      product.imageOne,
                      product.imageTwo,
                      product.imageThree,
                      product.imageFour,
                    ][selectedImage]
                  }`}
                  alt={product.name}
                  className="img-fluid product-image"
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="small-img-group bg-gray-lightx text-center py-2 row">
                {[
                  product.imageOne,
                  product.imageTwo,
                  product.imageThree,
                  product.imageFour,
                ].map((item, index) => (
                  <div className="small-img-col col-3 p-1" key={index}>
                    <img
                      src={`${imageUrl}${item}`}
                      alt={product.name}
                      className={`img-fluid small-image border border-2 ${
                        selectedImage === index ? 'image-active' : ''
                      }`}
                      width="100%"
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-10 col-sm-12 col-lg-7 text-start pe-5">
              <p className="fs-3 fw-bold color-blue-dark">
                ${product.price * quantity}
              </p>
              {/* <p className="">17%</p> */}
              <h1>{product.name}</h1>
              <p>{product.short_description}</p>
              <p className="mt-4">Quantity</p>
              <div className="row">
                <div className="col-lg-3 p-0">
                  <select
                    disabled={product.countInStock === 0}
                    className="form-select"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[...Array(product.countInStock).keys()].map((count) => (
                      <option key={count + 1} value={count + 1}>
                        {count + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-5">
                  <AddToCartButton
                    product={{ ...product, quantity: quantity }}
                  />
                </div>
              </div>

              <hr className="mt-5 mb-4" />
              <p>
                <strong>SKU: </strong>
                <span>{product.id}</span>
              </p>
              <p>
                <strong>Category: </strong>
                <span>Hair-Care</span>
              </p>
              <p>
                <strong>Tags: </strong>
                <span>Cleanse,Scrub</span>
              </p>
            </div>
          </div>

          <div>
            <hr className="mt-5 mb-4" />
            <h2 className="mb-4">Description</h2>
            <p>{product.long_description}</p>
            <hr className="mt-5 mb-4" />
            <h2>Related Products</h2>
            <div className="row center-section row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-5 mx-auto">
              {products
                .filter(
                  (x) => x.category === product.category && x.id !== product.id
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
