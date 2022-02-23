import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductsCarousel = () => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <section
      style={{
        margin: '20px 0 20px 0',
      }}
    >
      <Carousel
        // deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
      >
        {images.slice(0, 3).map((image) => {
          return (
            <div style={{ width: '240px', height: '134px' }}>
              <img
                // draggable={false}
                // style={{ width: '100%', height: '250px' }}
                src={image}
              />
            </div>
          );
        })}
      </Carousel>
    </section>
    // <Carousel
    //   swipeable={false}
    //   responsive={responsive}
    //   draggable={false}
    //   ssr={true} // means to render carousel on server-side.
    //   // infinite={true}
    //   autoPlaySpeed={1000}
    //   keyBoardControl={true}
    //   customTransition="all .5"
    //   transitionDuration={500}
    //   containerClass="carousel-container"
    //   removeArrowOnDeviceType={['tablet', 'mobile']}
    //   itemClass="carousel-item-padding-40-px image-item"
    // >
    //   <div>
    //     <img src="http://localhost:8000/images/Brightening_Cream_1_ZpIbPyA.jpeg" />
    //   </div>
    //   <div>
    //     <img src="http://localhost:8000/images/Brightening_Cream_1_ZpIbPyA.jpeg" />
    //   </div>
    //   <div>
    //     <img src="http://localhost:8000/images/Brightening_Cream_1_ZpIbPyA.jpeg" />
    //   </div>
    //   <div>
    //     <img src="http://localhost:8000/images/Brightening_Cream_1_ZpIbPyA.jpeg" />
    //   </div>
    //   <div>
    //     <img src="http://localhost:8000/images/Brightening_Cream_1_ZpIbPyA.jpeg" />
    //   </div>
    //   <div>
    //     <img src="http://localhost:8000/images/Brightening_Cream_1_ZpIbPyA.jpeg" />
    //   </div>
    //   <div>
    //     <img src="http://localhost:8000/images/Brightening_Cream_1_ZpIbPyA.jpeg" />
    //   </div>
    // </Carousel>
  );
};

export default ProductsCarousel;
