import { FaHome } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const LocationBar = () => {
  const location = useLocation();
  const currentLocation =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  return (
    <>
      {currentLocation.length > 0 && (
        <div className="bg-gray-light text-center py-2">
          <FaHome className="mb-1" /> Home
          <span>{currentLocation ? ` → ${currentLocation}` : ''}</span>
        </div>
      )}
    </>
  );
};

export default LocationBar;
