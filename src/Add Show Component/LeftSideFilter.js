import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./LeftSideFilter.css";

const LeftSideFilter = () => {
  const [newUsedValue, setNewUsedValue] = useState("");
  const [posterTypeValue, setPosterTypeValue] = useState("");
  const [filterVisible, setFilterVisible] = useState(true);

  // New & Used Chaked

  const handleFilterChange = (event) => {
    const { id, value, checked } = event.target;

    if (id === "new" || id === "used") {
      setNewUsedValue(checked ? value : "");
    } else if (id === "typeOfPoster") {
      setPosterTypeValue(checked ? value : "");
    }
    if (id === "urgent" || id === "featured") {
      setNewUsedValue(checked ? value : "");
    } else if (id === "typeOfPoster") {
      setPosterTypeValue(checked ? value : "");
    }
  };
  // Filter Toggle Responsive

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const applyFilter = () => {
    // Logic to apply filters
    // You can use newUsedValue, posterTypeValue, and other filter values here
    console.log("Filters Applied");
    console.log("New/Used Value:", newUsedValue);
    console.log("Poster Type Value:", posterTypeValue);
    // Implement your filtering logic here...
  };

  return (
    <Card
      className="left-side-filter"
      style={{ marginTop: -1, border: "none" }}
    >
      <Card.Body>
        <div className="d-md-none mb-2">
          {/* Responsive View Toggle Button (Mobile View) */}
          <Button
            variant="primary"
            onClick={toggleFilter}
            style={{ float:"right", background: "none", border: "none" }}
          >
            {filterVisible ? (
              <>
                <i
                  className="bi bi-funnel-fill"
                  style={{ color: "#0d6efd" }}
                ></i>
              </>
            ) : (
              <>
                <i
                  className="bi bi-funnel-fill"
                  style={{ color: "#0d6efd" }}
                ></i>{" "}
              </>
            )}
          </Button>
        </div>

        <div
          className={`filter-section ${
            filterVisible ? "" : "filter-section-hidden"
          }`}
        >
          {/* Filter section */}
          <Form>
            <Form>
              {/* Filter options */}
              <Form.Group controlId="filterForm">
                <Form.Label style={{ fontSize: 12 }}>
                  <strong>Category</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleFilterChange}
                  style={{ fontSize: 10, boxShadow: "none" }}
                >
                  <option value="">Select Category</option>
                  <option value="filter1">Electronics</option>
                  <option value="filter2">Property</option>
                  <option value="filter3">Vehicles</option>
                  <option value="filter4">Home & Garden</option>
                  <option value="filter5">Business & Industry</option>
                  <option value="filter6">Services</option>
                  <option value="filter7">Sports & Kids</option>
                  <option value="filter8">Animals</option>
                  <option value="filter9">Fashion & Beauty</option>
                  <option value="filter10">Jobs </option>
                  <option value="filter11">Education</option>
                  <option value="filter12">Other</option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>

              {/* Additional Filtering Options */}
              <Form.Group controlId="newUsedFilter">
                <Form.Label style={{ fontSize: 12 }}>
                  <strong>New & Used</strong>
                </Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="new"
                    label="New"
                    value="new"
                    style={{ fontSize: 10, boxShadow: "none" }}
                    checked={newUsedValue === "new"}
                    onChange={handleFilterChange}
                  />
                  <Form.Check
                    type="checkbox"
                    id="used"
                    label="Used"
                    className="chk_filter"
                    style={{ fontSize: 10, boxShadow: "none" }}
                    value="used"
                    checked={newUsedValue === "used"}
                    onChange={handleFilterChange}
                  />
                </div>
              </Form.Group>

              {/* Type of Poster Filtering Option */}
              <Form.Group controlId="typeOfPosterFilter">
                <Form.Label style={{ fontSize: 12 }}>
                  <strong>Type of poster</strong>
                </Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="typeOfPoster"
                    label="URGENT"
                    value="urgent"
                    style={{ fontSize: 10, color: "red", boxShadow: "none" }}
                    checked={posterTypeValue === "urgent"}
                    onChange={handleFilterChange}
                  />
                  <Form.Check
                    type="checkbox"
                    id="typeOfPoster"
                    label="FEATURED"
                    style={{ fontSize: 10, boxShadow: "none" }}
                    value="featured"
                    checked={posterTypeValue === "featured"}
                    onChange={handleFilterChange}
                  />
                  {/* Add more poster type options as needed */}
                </div>
              </Form.Group>

              {/* Date Filter */}
              <Form.Group controlId="dateFilter">
                <Form.Label style={{ fontSize: 12 }}>
                  <strong>Date</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleFilterChange}
                  style={{ fontSize: 10, boxShadow: "none" }}
                >
                  <option value="">Select an option</option>
                  <option value="newest">Date: Newest on top</option>
                  <option value="oldest">Date: Oldest on top</option>
                </Form.Control>
              </Form.Group>

              {/* Price Filter */}
              <Form.Group controlId="priceFilter">
                <Form.Label style={{ fontSize: 12 }}>
                  <strong>Price</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleFilterChange}
                  style={{ fontSize: 10, boxShadow: "none" }}
                >
                  <option value="" style={{ fontSize: 12 }}>
                    Select an option
                  </option>
                  <option value="highToLow">Price: High to low</option>
                  <option value="lowToHigh">Price: Low to high</option>
                </Form.Control>
              </Form.Group>
            </Form>

            {/* Apply Filter Button */}
            <Button
              variant="primary"
              onClick={applyFilter}
              style={{
                fontSize: 12,
                marginTop: 10,
                width: 135,
                boxShadow: "none",
              }}
            >
              APPLY FILTERS
            </Button>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LeftSideFilter;
