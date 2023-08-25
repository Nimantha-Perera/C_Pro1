import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearchLocation, FaList } from 'react-icons/fa';
import './All.ads.css';
import LeftSideFilter from './LeftSideFilter';
import RightSideBanner from './RightSideBanner';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';
import Nav2 from '../Navi Component/Nav2'
import CategorySelector from './CategorySelector';
import CenterContent from './CenterContent';
import AdsCard from './CenterContent';
import Img_Slider from '../Add Show Component/Img_Slider'
import Banner_H from '../Banner Add Horizontal/Banner_H';

const All_ads = () => {
  return (
    <div>

      <Banner_H />
      <Container fluid className='container col-md-12 ads_bar' >
        <Row className='justify-content-center'> {/* Add this line */}
          <Col md={2}>
            <LeftSideFilter />
          </Col>
          <Col md={6}>
            <Row>
            <SearchBar />
              {/* <Img_Slider /> */}
              
              <Col>
                <LocationSelector />
              </Col>
             
            </Row>
            <CenterContent />
          </Col>
          <Col md={2}>
            <RightSideBanner />
          </Col>
        </Row> {/* Add this line */}
      </Container>
    </div>
  );
};

export default All_ads;
