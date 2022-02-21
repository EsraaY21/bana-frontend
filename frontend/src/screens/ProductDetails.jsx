import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddToCartButton from '../components/AddToCartButton';
import ProductCard from '../components/ProductCard';
import { imageUrl } from '../baseAPI';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncProductDetails,
  removeProductDetails,
} from '../features/productDetailsSlice';

const ProductDetails = () => {
  // all products
  const products = useSelector((state) => state.products.value);
  const productsStatus = useSelector((state) => state.products.status);

  // single product
  const productDetails = useSelector((state) => state.productDetails.value);
  const productDetailsStatus = useSelector(
    (state) => state.productDetails.status
  );

  const [quantity, setQuantity] = useState(1);

  // fetch single product
  const dispatch = useDispatch();
  const { productId } = useParams(); // productId is a string since it is from the url

  useEffect(() => {
    dispatch(fetchAsyncProductDetails(productId));
    return () => {
      dispatch(removeProductDetails());
    };
  }, [dispatch, productId]);

  // when an image is clicked, it becomes the main image
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const categories = useSelector((state) => state.categories.value);
  const categoriesStatus = useSelector((state) => state.categories.status);

  const lightboxOptions = {
    settings: {
      disableKeyboardControls: true,
      disableWheelControls: true,
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: true,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      showNextButton: false,
      showPrevButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  return (
    <>
      {productDetailsStatus === 'loading' ? (
        <Loader />
      ) : productDetailsStatus === 'failed' ? (
        <Message message="Request failed. Please check your internet connection." />
      ) : (
        <div className="container my-5">
          <div className="row container text-center">
            <div className="col-12 col-sm-12 col-lg-5 text-center ">
              <div className="bg-gray-light text-center product-col pb-2">
                <SimpleReactLightbox>
                  <SRLWrapper options={lightboxOptions}>
                    <img
                      src={`${imageUrl}${
                        [
                          productDetails.imageOne,
                          productDetails.imageTwo,
                          productDetails.imageThree,
                          productDetails.imageFour,
                        ][selectedImage]
                      }`}
                      alt={productDetails.name}
                      className="img-fluid product-image"
                      style={{
                        width: '100%',
                        objectFit: 'contain',
                        cursor: 'pointer',
                      }}
                    />
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>

              <div className="small-img-group  text-center py-2 row">
                {[
                  productDetails.imageOne,
                  productDetails.imageTwo,
                  productDetails.imageThree,
                  productDetails.imageFour,
                ].map((item, index) => (
                  <div className="small-img-col col-3 p-1" key={index}>
                    <img
                      src={`${imageUrl}${item}`}
                      alt={productDetails.name}
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
                ${productDetails.price * quantity}
              </p>
              {/* <p className="">17%</p> */}
              <h1>{productDetails.name}</h1>
              <p>{productDetails.short_description}</p>
              <p className="mt-4">Quantity</p>
              <div className="row">
                <div className="col-lg-3 p-0 mb-4">
                  <select
                    disabled={productDetails.countInStock === 0}
                    className="form-select"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[...Array(productDetails.countInStock).keys()].map(
                      (count) => (
                        <option key={count + 1} value={count + 1}>
                          {count + 1}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="col-lg-5">
                  <AddToCartButton
                    product={{ ...productDetails, quantity: quantity }}
                  />
                </div>
              </div>

              <hr className="mt-3" />
              <p>
                <strong>SKU: </strong>
                <span>{productDetails.id}</span>
              </p>
              <p>
                <strong>Category: </strong>
                {categoriesStatus === 'loading' ? (
                  <Loader />
                ) : categoriesStatus === 'failed' ? (
                  <Message message="Request failed. Please check your internet connection." />
                ) : (
                  <span>
                    {categories.filter(
                      (category) => category.id === productDetails.category
                    )[0]
                      ? categories.filter(
                          (category) => category.id === productDetails.category
                        )[0].name
                      : null}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div>
            <hr className="mt-5 mb-4" />
            <h2 className="mb-4">Description</h2>
            <p>{productDetails.long_description}</p>
            <hr className="mt-5 mb-4" />
            <h2>Related Products</h2>
            <div className="row center-section row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-5 mx-auto">
              {productsStatus === 'loading' ? (
                <Loader />
              ) : productsStatus === 'failed' ? (
                <Message message="Request failed. Please check your internet connection." />
              ) : (
                products
                  .filter(
                    (x) =>
                      x.category === productDetails.category &&
                      x.id !== productDetails.id
                  )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
