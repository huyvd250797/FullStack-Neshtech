import Header from "../components/Header";
import Footer from "../components/Footer";

const HomPage = () => {
  return (
    <>
      {/*//! Gọi component Header */}
      <Header />
      <div className="content">
        {/* about */}
        <div className="about">
          <div className="about__title">About me</div>
          <div className="about__img">
            <img
              className="about--img"
              src="https://media.istockphoto.com/id/1173957135/vector/motivation-quote-with-falling-t-letter-to-read-i-can-instead-i-cant-glowing-neon.jpg?s=612x612&w=0&k=20&c=2mma0mNv4vSi-QVzAlmycNNO-rNi-lBCcYICdAD9FEo="
              alt="Fake Image"
            ></img>
          </div>
          <div className="about__text">Some text about me</div>
        </div>

        {/* title heading */}
        <div className="title-heading">
          <div className="title-heading__title">Title Heading</div>

          <div className="title-heading__img">
            <img
              className="title-heading--img"
              src="https://media.istockphoto.com/id/1173957135/vector/motivation-quote-with-falling-t-letter-to-read-i-can-instead-i-cant-glowing-neon.jpg?s=612x612&w=0&k=20&c=2mma0mNv4vSi-QVzAlmycNNO-rNi-lBCcYICdAD9FEo="
              alt="Fake Image"
            ></img>
          </div>
          <div className="title-heading__text">Some text about me</div>
        </div>
      </div>

      {/*//! Gọi component Footer */}
      <Footer />
    </>
  );
};

export default HomPage;
