import { FaLeaf, FaAppleAlt, FaCommentMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Products',
    description: 'Organic products with most affordable prices',
    icon: <FaLeaf />,
    link: 'shop',
  },

  {
    title: 'Nutrition Coach',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <FaAppleAlt />,
    link: 'nutrition',
  },

  {
    title: 'Psychotherapy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <FaCommentMedical />,
    link: 'psychotherapy',
  },
];

const Services = () => {
  return (
    <div className="services container py-5">
      <div className="row center-section">
        {services.map((service) => (
          <div key={service.title} className="col-lg-4">
            <Link to={service.link}>
              {service.icon}
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
