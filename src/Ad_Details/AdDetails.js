import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav2 from '../Navi Component/Nav2';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { adsData } from '../Add Show Component/CenterContent';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const AdDetails = () => {
  const { adId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adDetails = adsData.find(ad => ad.adId === parseInt(adId));

  if (!adDetails) {
    return <div>Ad not found</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>

      <Container className="col-md-10" style={{ marginTop: 100 }}>
        <Row>
          <Col>
            <h2>{adDetails.title}</h2>
            <p className="text-muted" style={{Color: "#fbd408"}}>{adDetails.location}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted">Posted on: August 13, 2023</p>
          </Col>
       
        </Row>
        <Row className="my-4">
          <Col>
            <Slider {...sliderSettings} style={{ maxWidth: 700,  }}>
              {/* Use the sliderSettings */}
              <div>
                <img
                  src="https://via.placeholder.com/700x300"
                  alt="Ad Image 1"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/700x300"
                  alt="Ad Image 2"
                  className="img-fluid"
                />
              </div>
              {/* Add more image slides as needed */}
            </Slider>
            <Row>
              <Col style={{ marginTop: 20 }}>
                <h3 style={{color:"#caa902"}}>{"Rs "  +adDetails.price}</h3>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <h4>Other Details:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor eros vel libero fermentum, vel dictum lorem
                  pellentesque. Quisque eget sapien at arcu interdum lacinia.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="mt-3 mt-md-0" >
            <div className="border p-3" style={{ borderRadius: 5,backgroundColor:"white" }}>
              <p>Seller Name</p>
              <p>
                <span><i className="bi bi-telephone-fill"></i></span> 07XXXXXXX
              </p>
              <p>
                <span><i className="bi bi-whatsapp"></i></span> 07XXXXXXX
              </p>

              <Button variant="success" style={{ marginRight: 10, backgroundColor: "#fbd408", border: "none", color: "black",borderRadius:50 }}>
                <i className="bi bi-arrow-up-circle"></i> Promote Ad
              </Button>
              <Button variant="danger" className="" style={{ border:"none",background: "none", color: "#c9c9c9" }}>
                <i className="bi bi-exclamation-circle"></i> Report Ad
              </Button>
              <hr />
              <Button variant="primary" className="" style={{ background: 'none', color: "black", border: "none" }}>
                <i className="bi bi-share-fill"></i> Share
              </Button>
              <Button variant="info" style={{ background: 'none', border: "none", color: "#0d6efd" }}>
                <i className="bi bi-heart-fill"></i> Add to Favorite Ads
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default AdDetails;
