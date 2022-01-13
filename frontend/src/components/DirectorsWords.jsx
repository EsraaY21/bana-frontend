import director from '../images/director.png';

const DirectorsWords = () => {
  return (
    <section class="director py-5 bg-light-gray">
      <div class="row">
        <div class="col-md-6">
          <div class="h-100 ">
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
        <div class="col-md-6">
          <div class="h-100 p-5 bg-dark rounded-4">
            {/* <img
            src={director}
            class="img-fluid"
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
