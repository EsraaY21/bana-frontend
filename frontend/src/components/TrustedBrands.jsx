import goodmood from '../images/goodmood.png';
import goodness from '../images/goodness.png';
import hayden from '../images/hayden.png';
import parker from '../images/parker.png';

const brands = [goodmood, goodness, hayden, parker];

const TrustedBrands = () => {
  return (
    <div className="brands container py-5">
      <div className="row text-center">
        <h3 className="cursive-title">Trusted</h3>
        <h1>Brands</h1>
        {brands.map((brand) => (
          <div key={brand} className="col-lg-3">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
