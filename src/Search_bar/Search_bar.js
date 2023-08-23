import React from 'react';
import './Search_bar.css';

export default function Search_bar() {
  return (
    <div className='searc'>
        <div className="container content-center col-md-5 search_br">
      <div className="row">
        <div className="">
          <div className="input-group">
            <input type="text" className="form-control" id='input_serch' placeholder="Search..." />
            <div className="input-group-append">
              <button className="btn-primary" id='srch_btn' type="button"><i class="bi bi-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
