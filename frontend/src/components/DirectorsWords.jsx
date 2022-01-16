import director from '../images/director.png';

const DirectorsWords = () => {
  return (
    <section className="director py-5 bg-light-gray">
      <div className="row">
        <div className="col-md-6">
          <div className="h-100 ">
            <div className="container">
              <h2 className="cursive-title">Director’s Words</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sagittis eget sapien in congue. Nullam vitae posuere diam, vel
                suscipit lorem. Maecenas magna augue, pulvinar vel ligula nec,
                gravida tempor
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-dark rounded-4">
            {/* <img
            src={director}
            className="img-fluid"
            alt="director"
            width="240"
            height="240"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsWords;
