import { FaHome } from 'react-icons/fa';
import { useParams, useLocation } from 'react-router-dom';

const LocationBar = () => {
  //   const params = useParams();
  const location = useLocation();
  const currentLocation =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  return (
    <div className="bg-gray-light text-center">
      <FaHome /> Home{' '}
      <span>{currentLocation ? ` → ${currentLocation}` : ''}</span>
    </div>
  );
};

export default LocationBar;
