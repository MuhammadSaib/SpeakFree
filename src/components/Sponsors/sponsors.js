import "bootstrap/dist/css/bootstrap.min.css";
import "../Carousel/carousel.css";
const Sponsors = ({ array }) => {
  if (!Array.isArray(array)) {
    console.error("Invalid array passed to Sponsors component");
    return null; // or display an error message
  }
  let margin = "0px";
  if (array.length < 10) {
    margin = "100px";
  } else {
    margin = "30px";
  }
  return (
    <div
      className="container-fluid"
      style={{ width: "100%", overflowX: "hidden", minHeight: "100px" }}
    >

      <marquee>
      <div className="flex justify-center items-center">
        {array.map((element, index) => (
          <img
            style={{ marginLeft: margin, marginRight: margin, height: 'fit-content' }}
            key={index}
            src={element}
            width="100px"
            alt=""
          />
        ))}
      </div>
      </marquee>
    </div>
  );
};
export default Sponsors;
