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
          <h4 className="card-text">Natural Day Cream</h4>
          <small className="text-muted">150 $</small>

          <div className="">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
