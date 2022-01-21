import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../products';

const ProductDetails = () => {
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    console.log(index);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row container text-center">
          <div className="col-12 col-sm-12 col-lg-5 text-center ">
            <div className="bg-gray-lightx text-center product-col pb-2 ">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="img-fluid product-image"
              />
            </div>

            <div className="small-img-group bg-gray-lightx text-center py-2 row">
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
            </div>
          </div>
          <div className="col-10 col-sm-12 col-lg-7 text-start">
            <p className="fs-3 fw-bold color-blue-dark">$20</p>
            {/* <p className="">17%</p> */}
            <h1>{product.name}</h1>
            <p>{product.short_description}</p>
            <p>Quantity</p>
            <div className="row">
              <div className="col p-0">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="1"
                  className="form-control"
                />
              </div>
              <div className="col ">
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
            bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
            Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
            magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
            nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla
            varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis
            eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
            venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
          </p>
          <hr className="mt-5 mb-4" />
          <h2>Related Products</h2>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
