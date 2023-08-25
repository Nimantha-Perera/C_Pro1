import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { adsData } from "../Add Show Component/CenterContent";
import { Container, Row, Col, Button, Modal } from "react-bootstrap"; // Make sure these imports are present
import Footer from "../Footer/Footer";

const AdDetails = () => {
  const { adId } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false); // State to control the modal
  const [copySuccess, setCopySuccess] = useState(false); // State to track if copying was successful
  const [isFavorite, setIsFavorite] = useState(false); // New state for favorite status

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adDetails = adsData.find((ad) => ad.adId === parseInt(adId));

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

  // Function to open the share modal
  const handleShareButtonClick = () => {
    setShowShareModal(true);
  };

  // Function to close the share modal
  const handleCloseModal = () => {
    setShowShareModal(false);
    setCopySuccess(false); // Reset copy success state when closing the modal
  };

  const handleCopyLink = () => {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = window.location.href;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setCopySuccess(true);
  };

  //Share Facebook & Whatsapp
  const handleWhatsAppShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://api.whatsapp.com/send?text=${url}`);
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      <Container className="col-md-7" style={{ marginTop: 100 }}>
        <Row>
          <Col>
            <h2>{adDetails.title}</h2>
            <p className="text-muted" style={{ Color: "#fbd408" }}>
              {adDetails.location}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted">Posted on: {adDetails.postedTime}</p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Slider {...sliderSettings} style={{ maxWidth: 800 }}>
              {/* Use the sliderSettings */}
              <div>
                <img
                  src="https://via.placeholder.com/800x300"
                  alt="Ad Image 1"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/800x300"
                  alt="Ad Image 2"
                  className="img-fluid"
                />
              </div>
              {/* Add more image slides as needed */}
            </Slider>
            <Row>
              <Col style={{ marginTop: 20 }}>
                <h3 style={{ color: "#caa902" }}>{"Rs " + adDetails.price}</h3>
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
          <Col md={12} className=" mt-md-0 text-center">
            <div
              className="border p-3"
              style={{ borderRadius: 5, backgroundColor: "white" }}
            >
              <p>Sell by {adDetails.seller}</p>
              <p>
                <span>
                  <i className="bi bi-telephone-fill"></i>
                </span>{" "}
                07XXXXXXX
              </p>
              <p>
                <span>
                  <i className="bi bi-whatsapp"></i>
                </span>{" "}
                07XXXXXXX
              </p>

              <Button
                variant="success"
                style={{
                  marginRight: 10,
                  backgroundColor: "#fbd408",
                  border: "none",
                  color: "black",
                  borderRadius: 50,
                }}
              >
                <i className="bi bi-arrow-up-circle"></i> Promote Ad
              </Button>
              <Button
                variant="danger"
                className=""
                style={{ border: "none", background: "none", color: "#c9c9c9" }}
              >
                <i className="bi bi-exclamation-circle"></i> Report Ad
              </Button>
              <hr />
              <Button
                variant="primary"
                className=""
                style={{ background: "none", color: "black", border: "none" }}
                onClick={handleShareButtonClick}
              >
                <i className="bi bi-share-fill"></i> Share
              </Button>
              {/* Share Modal */}
              <Modal show={showShareModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Share Ad</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div>
                    <Button
                      variant="success"
                      style={{
                        marginRight: 10,
                        backgroundColor: "#01804d",
                        border: "none",
                        color: "white",
                        borderRadius: 50,
                      }}
                      onClick={handleWhatsAppShare}
                    >
                      <i
                        className="bi bi-whatsapp"
                        style={{ color: "white" }}
                      ></i>{" "}
                      Share on WhatsApp
                    </Button>
                    <Button
                      variant="info"
                      style={{
                        marginRight: 10,
                        backgroundColor: "#0d6efd",
                        border: "none",
                        color: "white",
                        borderRadius: 50,
                      }}
                      onClick={handleFacebookShare}
                    >
                      <i
                        className="bi bi-facebook"
                        style={{ color: "white" }}
                      ></i>{" "}
                      Share on Facebook
                    </Button>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={handleCopyLink}
                    style={{ fontSize: 10 }}
                  >
                    {copySuccess ? (
                      <i className="bi bi-clipboard-check"></i>
                    ) : (
                      <i className="bi bi-clipboard"></i>
                    )}
                    {copySuccess ? " Copied!" : " Copy Link"}
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button
              variant="info"
              style={{ background: "none", border: "none", color: isFavorite ? "red" : "#0d6efd" }}
              onClick={handleFavoriteClick}
            >
              <i className={`bi bi-heart${isFavorite ? "-fill" : ""}`}></i> {isFavorite ? "Added to Favorites" : "Add to Favorite Ads"}
            </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdDetails;
