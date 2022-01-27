import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { baseAPI } from '../baseAPI';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const { data } = await axios.get(`${baseAPI}products/${productId}`);
      setProduct(data);
    };
    fetchProductDetails();
  }, [productId]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
      {product && (
        <div className="container my-5">
          <div className="row container text-center">
            <div className="col-12 col-sm-12 col-lg-5 text-center ">
              <div className="bg-gray-lightx text-center product-col pb-2 ">
                <img
                  // src={product.images[selectedImage]}
                  alt={product.name}
                  className="img-fluid product-image"
                />
              </div>

              {/* <div className="small-img-group bg-gray-lightx text-center py-2 row">
                {product.images.map((item, index) => (
                  <div className="small-img-col col-3 p-1" key={index}>
                    <img
                      src={item}
                      alt={product.name}
                      className={`img-fluid small-image border border-2 ${
                        selectedImage === index ? 'image-active' : ''
                      }`}
                      width="100%"
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                ))}
              </div> */}
            </div>
            <div className="col-10 col-sm-12 col-lg-7 text-start pe-5">
              <p className="fs-3 fw-bold color-blue-dark">$20</p>
              {/* <p className="">17%</p> */}
              <h1>{product.name}</h1>
              <p>{product.short_description}</p>
              <p className="mt-5">Quantity</p>
              <div className="row">
                <div className="col-lg-3 p-0">
                  <Form.Control
                    as="select"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((count) => (
                      <option key={count + 1} value={count + 1}>
                        {count + 1}
                      </option>
                    ))}
                  </Form.Control>
                </div>
                <div className="col-lg-8 ">
                  <button
                    className={
                      product.countInStock === 0 ? '' : 'btn-blue-dark btn'
                    }
                    disabled={product.countInStock === 0}
                  >
                    {product.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>

              <hr className="mt-5 mb-4" />
              <p>
                <strong>SKU:</strong>
              </p>
              <p>
                <strong>Category:</strong>
                <span>Hair-Care</span>
              </p>
              <p>
                <strong>Tags:</strong>
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
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
