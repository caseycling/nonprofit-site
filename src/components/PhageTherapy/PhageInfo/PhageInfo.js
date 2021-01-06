import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import phageDiagram from '../../../images/phageDiagram.png';

import './styles.css';

const PhageInfo = () => {
  return (
    <MDBJumbotron
      fluid
      className='py-0 mb-0 border-top border-dark'
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <MDBRow>
        <MDBCol sm='12' md='7' className='mt-0 pr-0 '>
          <h2
            className='black-text text-center font-weight-bold what-banner  pt-4 pt-md-5 mt-3 my-0  '
            style={{
              backgroundColor: '#FFFFFF',
            }}
          >
            What is it?
          </h2>
          <p
            className='pt-4 pb-3 px-4 px-md-5 mx-md-5 mb-0 black-text '
            style={{ backgroundColor: '#FFFFFF' }}
          >
            The phages are natural predator viruses that only infect bacteria.
            They do not infect eukaryotic cells, and are therefore harmless to
            humans, animals, plants, fish, etc. They are present in all aquatic
            and terrestrial environments and represent the most numerous
            biological species on Earth.{' '}
          </p>
          <p
            className='px-4 px-md-5 mx-md-5 my-0 pb-5 black-text'
            style={{ backgroundColor: '#FFFFFF' }}
          >
            Phages have many qualities because they offer excellent efficacy
            against bacteria – including bacteria that are multi-resistant to
            antibiotics –, are very well tolerated due to their high specificity
            and adapt very quickly to bacterial mutations while respecting
            microbiota, unlike antibiotics.
          </p>
        </MDBCol>
        <MDBCol className='pl-0 my-3 mx-auto pb-4 pb-md-0' sm='12' md='5'>
          <img
            src={phageDiagram}
            className='img-fluid mb-0 pb-0 mx-auto w-100 h-100 border-left border-dark'
            alt=''
          />
        </MDBCol>
      </MDBRow>
    </MDBJumbotron>
  );
};

export default PhageInfo;
