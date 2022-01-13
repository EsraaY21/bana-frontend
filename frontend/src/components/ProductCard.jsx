const ProductCard = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          role="img"
        >
          <rect width="100%" height="100%" fill="#f5f5f5" />
        </svg>

        <div className="card-body">
          <h5 className="card-text">Natural Day Cream</h5>
          <p className="text-muted">150 $</p>

          <button type="button" className="btn bg-blue-dark text-white w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
