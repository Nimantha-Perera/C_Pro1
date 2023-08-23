import React, { useState } from 'react';
import './PostAdd.css'; // Import the custom CSS file
import Alert from 'react-bootstrap/Alert';

const PostAdd = () => {
  

 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [showSubcategory, setShowSubcategory] = useState(false);
  const [showBrandsSubcategory, setShowBrandsSubcategory] = useState(false);
  const [showInstituteName, setShowInstituteName] = useState(false);

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedSubTown, setSelectedSubTown] = useState('');

  const [instituteName, setInstituteName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const handleRemoveImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };
  const [selectedImages, setSelectedImages] = useState([
    
    // ...other initial image URLs
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Price:", price);
  
    // Perform validation checks
    if (!selectedCategory || !selectedSubCategory) {
      alert("Please select both Category and Subcategory.");
      return;
    }
  
    if (showInstituteName && !instituteName.trim()) {
      alert("Please enter the Name of Institute.");
      return;
    }
  
    if (!selectedDistrict || !selectedSubTown) {
      alert("Please select both District and Sub-town.");
      return;
    }
  
    if (!title.trim() || !description.trim() || !price.trim()) {
      alert(
        "Please fill in all the required fields (Title, Description, and Price)."
      );
      return;
    }
  
    if (selectedImages.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
  
    if (selectedImages.length > 5) {
      alert("Please upload a maximum of 5 images.");
      return;
    }
  
    // Form data is valid, continue with submission logic
    // ... (Add your logic to handle form submission)
  
    alert("Successful Post");
  };

  const handleDistrictChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDistrict(selectedValue);
    setSelectedSubTown(''); // Reset selected sub-town when a new district is selected
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSelectedSubCategory('');
    setShowSubcategory(selectedValue !== '');
    setShowBrandsSubcategory(false);
    setShowInstituteName(false);
  };
 

  const handleSubCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedSubCategory(selectedValue);

    const isMobileOrLaptop = brandsSubcategories.hasOwnProperty(selectedValue);
    setShowBrandsSubcategory(isMobileOrLaptop);

    const isEducationSubCategory =
      selectedValue === 'Higher Education' ||
      selectedValue === 'Tution' ||
      selectedValue === 'Vocational Institutes';
    setShowInstituteName(isEducationSubCategory);
  };

  const handleImageChange = (event) => {
    const selectedFiles = event.target.files;
    const imagesArray = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      imagesArray.push(URL.createObjectURL(selectedFiles[i]));
    }
    if (imagesArray.length > 5) {
      imagesArray.splice(5, imagesArray.length - 5);
    }
    setSelectedImages(imagesArray);
  };

  const categories = [
    'Electronics',
    'Vehicles',
    'Home & Garden',
    'Services',
    'Jobs',
    'Education',
    'Animals',
    'Property',
    'Fashion & Beauty',
    'Other',
  ];

  const subcategoriesByCategory = {
    Electronics: ['Mobile Phones', 'Computer Accessories', 'TVs', 'TV & Video Accessories', 'Cameras & Camcorders', 'Audio & MP3', 'Electronic Home Appliances', 'Video Games & Consoles', 'Other Electronics'],
    Vehicles: ['Cars', 'Motorcycles', 'Bicycles', 'Other Vehicles'],
    'Home & Garden': ['Furniture', 'Appliances', 'Other Home & Garden'],
    Services: ['Plumbing', 'Electrician', 'Carpenter', 'Other Services'],
    Jobs: ['Full-time', 'Part-time', 'Freelance', 'Other Jobs'],
    Education: ['Higher Education','Tution', 'Vocational Institutes', 'Other Education'],
    Animals: ['Pets', 'Livestock', 'Other Animals'],
    Property: ['For Sale', 'For Rent', 'Other Property'],
    'Fashion & Beauty': ['Clothing', 'Beauty Products', 'Other Fashion & Beauty'],
    Other: ['Other Sub-category'],
  };

  const brandsSubcategories = {
    'Mobile Phones': ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Huawei'],
    Laptops: ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus', 'Acer'],
    TVs: ['Samsung', 'LG', 'Sony', 'TCL', 'Panasonic', 'Vizio'],
    'Computer Accessories': ['Apple', 'Lenovo', 'Dell', 'Asus', 'HP', 'Microsoft'],
    'TV & Video Accessories': ['Mounts & Stands', 'Cables & Adapters', 'Remote Controls', 'Antennas', 'TV Tuners'],
    'Audio & MP3': ['Sony', 'JBL', 'Bose', 'Sennheiser', 'Beats', 'Audio-Technica'],
    'Video Games & Consoles': ['PlayStation', 'Xbox', 'Nintendo', 'PC Gaming', 'Accessories'],
    Cars: ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Nissan'],
    Motorcycles: ['Harley-Davidson', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'BMW'],
    Bicycles: ['Trek', 'Giant', 'Specialized', 'Cannondale', 'Scott', 'Schwinn'],
    'Other Vehicles': ['Boats', 'RVs', 'Trucks', 'ATVs', 'Aircraft', 'Other'],
  };

 const districts = [
  {
    name: 'Colombo',
    subTowns: ['Colombo', 'Dehiwala', 'Mount Lavinia', 'Moratuwa', 'Sri Jayawardenepura Kotte'],
  },
  {
    name: 'Gampaha',
    subTowns: ['Gampaha', 'Negombo', 'Kelaniya', 'Sri Jayawardenepura Kotte'],
  },
  {
    name: 'Kalutara',
    subTowns: ['Kalutara', 'Panadura', 'Horana', 'Beruwala'],
  },
  {
    name: 'Kandy',
    subTowns: ['Kandy', 'Peradeniya', 'Katugastota', 'Gampola'],
  },
  {
    name: 'Kurunegala',
    subTowns: ['Kurunegala', 'Mawathagama', 'Wariyapola', 'Kuliyapitiya'],
  },
  {
    name: 'Galle',
    subTowns: ['Galle', 'Hikkaduwa', 'Unawatuna', 'Ambalangoda'],
  },
  {
    name: 'Matara',
    subTowns: ['Matara', 'Weligama', 'Mirissa', 'Dondra'],
  },
  {
    name: 'Badulla',
    subTowns: ['Badulla', 'Bandarawela', 'Ella', 'Haputale'],
  },
  {
    name: 'Anuradhapura',
    subTowns: ['Anuradhapura', 'Medawachchiya', 'Tambuttegama', 'Kekirawa'],
  },
  {
    name: 'Polonnaruwa',
    subTowns: ['Polonnaruwa', 'Hingurakgoda', 'Kaduruwela', 'Medirigiriya'],
  },
  {
    name: 'Trincomalee',
    subTowns: ['Trincomalee', 'Nilaveli', 'Kinniya', 'Kantalai'],
  },
  {
    name: 'Batticaloa',
    subTowns: ['Batticaloa', 'Kattankudy', 'Eravur', 'Valaichchenai'],
  },
  {
    name: 'Jaffna',
    subTowns: ['Jaffna', 'Point Pedro', 'Chavakachcheri', 'Nallur'],
  },
  {
    name: 'Kilinochchi',
    subTowns: ['Kilinochchi', 'Pallai', 'Kandarodai', 'Poonakari'],
  },
  {
    name: 'Mannar',
    subTowns: ['Mannar', 'Adampan', 'Talaimannar', 'Nanaddan'],
  },
  {
    name: 'Matale',
    subTowns: ['Matale', 'Dambulla', 'Sigiriya', 'Palapathwela'],
  },
  {
    name: 'Nuwara Eliya',
    subTowns: ['Nuwara Eliya', 'Hatton', 'Haputale', 'Talawakele'],
  },
  {
    name: 'Puttalam',
    subTowns: ['Puttalam', 'Chilaw', 'Kalpitiya', 'Wennappuwa'],
  },
  {
    name: 'Ratnapura',
    subTowns: ['Ratnapura', 'Embilipitiya', 'Balangoda', 'Kuruwita'],
  },
  {
    name: 'Kegalle',
    subTowns: ['Kegalle', 'Mawanella', 'Rambukkana', 'Dehiowita'],
  },
  {
    name: 'Hambantota',
    subTowns: ['Hambantota', 'Tangalle', 'Ambalantota', 'Suriyawewa'],
  },
  {
    name: 'Monaragala',
    subTowns: ['Monaragala', 'Wellawaya', 'Bibile', 'Kataragama'],
  },
  {
    name: 'Mullaitivu',
    subTowns: ['Mullaitivu', 'Oddusuddan', 'Puthukkudiyiruppu', 'Mankulam'],
  },
  {
    name: 'Vavuniya',
    subTowns: ['Vavuniya', 'Nedunkeni', 'Pambaimadu', 'Chettikulam'],
  },
  {
    name: 'Mannar',
    subTowns: ['Mannar', 'Adampan', 'Talaimannar', 'Nanaddan'],
  },
  // Add more districts with sub-towns as needed
];

  return (
    <div className="container container-center ads_cont">
      <form onSubmit={handleFormSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="category-nav mb-3">
              <label htmlFor="category" className="form-label">
              <i class="bi bi-bookmark-fill" style={{marginRight:10,color: "#fbd408"}}></i>
                Select Category
              </label>
              <select className="form-control" id="category" onChange={handleCategoryChange} style={{boxShadow:"none",fontSize:12 }}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {showSubcategory && (
              <div className="mb-3">
                <label htmlFor="subcategory" className="form-label">
                  Select Sub category
                </label>
                <select className="form-control" id="subcategory" onChange={handleSubCategoryChange} style={{boxShadow:"none",fontSize:12}}>
                  <option value="">Select Sub-category</option>
                  {selectedCategory &&
                    subcategoriesByCategory[selectedCategory].map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                </select>
              </div>
            )}
            {showBrandsSubcategory && (
              <div className="mb-3">
                <label htmlFor="brandsSubcategory" className="form-label">
                  Brands
                </label>
                <select className="form-control" id="brandsSubcategory" style={{boxShadow:"none",fontSize:12}}>
                  <option value="">Select Brand</option>
                  {brandsSubcategories[selectedSubCategory].map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showInstituteName && (
              <div className="mb-3">
                <label htmlFor="instituteName" className="form-label">
                  Name of Institute
                </label>
                <input type="text" className="form-control" id="instituteName"style={{boxShadow:"none",fontSize:12}} />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="district" className="form-label">
             
              <i class="bi bi-geo-alt-fill" style={{marginRight:10,color: "#fbd408"}}></i>
                Select District (Sri Lanka)
              
              </label>
              <select
              style={{boxShadow:"none",fontSize:12}}
                className="form-control"
                id="district"
                value={selectedDistrict}
                onChange={handleDistrictChange}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district.name} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Add the sub-town selection dropdown */}
            <div className="mb-3">
              <label htmlFor="subTown" className="form-label">
              <i class="bi bi-geo-fill" style={{marginRight:10,color: "#fbd408"}}></i>
                Select Sub-town
              </label>
              <select
              style={{boxShadow:"none",fontSize:12}}
                className="form-control"
                id="subTown"
                value={selectedSubTown}
                onChange={(e) => setSelectedSubTown(e.target.value)}
              >
                <option value="">Select Sub-town</option>
                {selectedDistrict &&
                  districts
                    .find((district) => district.name === selectedDistrict)
                    .subTowns.map((subTown) => (
                      <option key={subTown} value={subTown}>
                        {subTown}
                      </option>
                    ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label" placeholder='Brand Name and Modal'>
              <i class="bi bi-card-heading"style={{marginRight:10,color: "#fbd408"}}></i>
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder='Enter Modal,Year'
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{boxShadow:"none",fontSize:12}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
              <i class="bi bi-card-list"style={{marginRight:10,color: "#fbd408"}}></i>
                Description
              </label>
              <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{boxShadow:"none",fontSize:12}}
                ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
              <i class="bi bi-tags-fill"style={{marginRight:10,color: "#fbd408"}}></i>
                Price (LKR)
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{boxShadow:"none",fontSize:12}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="images" className="form-label">
              <i class="bi bi-card-image"style={{marginRight:10,color: "#fbd408"}}></i>
                Images (Max 5)
              </label>
              <input
                type="file"
                style={{boxShadow:"none",fontSize:12}}
                className="form-control"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>

            <div>
  {selectedImages.map((imageSrc, index) => (
    <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '10px',marginTop:10}}>
      <img
        src={imageSrc}
        alt={`Image ${index + 1}`}
        className='selected_imgs'
        style={{ width: '50px', height: '50px', objectFit: 'cover',borderRadius:10 }}
      />
      <button
        onClick={() => handleRemoveImage(index)}
        className='remove_button'
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius:20
        }}
      >
        <i class="bi bi-x-circle"></i>
      </button>
    </div>
  ))}
</div>




            <button
              type="submit"
              className="btn posted_add"
              style={{ backgroundColor: '#fbd408', borderRadius: 20, marginTop: 50, float: 'right' }}
            >
              Post Your Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostAdd;
