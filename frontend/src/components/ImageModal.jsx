import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { imageUrl } from '../baseAPI';

const ImageModal = ({ product, selectedImage }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bg-gray-light text-center product-col pb-2">
        <img
          onClick={handleShow}
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
          style={{
            width: '100%',
            objectFit: 'contain',
            cursor: 'pointer',
          }}
        />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body className="text-center">
          <img
            onClick={handleShow}
            src={`${imageUrl}${
              [
                product.imageOne,
                product.imageTwo,
                product.imageThree,
                product.imageFour,
              ][selectedImage]
            }`}
            alt={product.name}
            className="img-fluid"
            style={{}}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;
