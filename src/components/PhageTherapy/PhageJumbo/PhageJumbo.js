import React from 'react';
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from 'mdbreact';

import phageJumboPic from '../../../images/phageJumboPic.jpg';

const PhageJumbo = () => {
  return (
    <MDBJumbotron className='mb-0 py-0 h-50' fluid>
      <MDBRow
        className='mx-auto h-100'
        style={{
          backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
          height: '100%',
        }}
      >
        <MDBCol className='py-5 px-5 mb-5 mb-md-0 mt-md-5' md='6' style={{}}>
          <h1 className='font-weight-bold'>
            <span className='border-top border-dark'>T</span>he Phage
          </h1>
          <p className='font-weight-bold '>
            PREDATORS OF BACTERIA AND NATURAL MEDICINE AGAINST HOSPITAL ACQUIRED
            DISEASES
          </p>
        </MDBCol>
        <MDBCol className='px-0 ' md='6'>
          <img
            src={phageJumboPic}
            className='img-fluid w-100 h-100 border-top border-dark'
            style={{ backgroundColor: 'black' }}
            alt=''
          />
        </MDBCol>
      </MDBRow>
    </MDBJumbotron>
  );
};

export default PhageJumbo;
