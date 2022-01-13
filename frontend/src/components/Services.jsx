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
    <section className="services container section-y-padding">
      <div className="row text-center">
        {services.map((service) => (
          <div key={service.title} className="col-lg-4 px-5">
            <Link to={service.link}>
              {service.icon}
              <h3 className="color-blue-dark">{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
