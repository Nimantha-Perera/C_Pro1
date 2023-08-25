import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <div style={{marginBottom:20}}>
        <Form inline>
      <div className="d-flex">
        <FormControl style={{borderRadius:50,marginRight:20,boxShadow:"none"}} type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary" style={{backgroundColor:"#fbd408",borderRadius:50,width:50}}><i class="bi bi-search"></i></Button>
      </div>
    </Form>
    </div>
  );
};

export default SearchBar;
