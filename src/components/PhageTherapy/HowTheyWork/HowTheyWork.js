import React from 'react';

import { MDBJumbotron, MDBRow, MDBCol } from 'mdbreact';

import phageCycle from '../../../images/phageCycle.jpg';
import './styles.css';

function HowTheyWork() {
  return (
    <div>
      <MDBJumbotron fluid className='pt-0 pb-0 mb-0'>
        <MDBRow>
          <MDBCol>
            <h2
              className='black-text text-center font-weight-bold htw-banner py-4 my-0 border-top border-dark'
              style={{
                backgroundColor: '#F5F5F5',
              }}
            >
              How They Work
            </h2>
          </MDBCol>
        </MDBRow>
        <MDBRow
          className='px-4 py-4 my-0 dark-text border-top border-dark'
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <MDBCol md='5' className='pl-5 '>
            <h4 className='py-3 border-bottom border-dark mb-4'>
              <span className='border-top border-white'>T</span>
              heraputic Applications
            </h4>
            <p>
              Phages’ infectious cycle begins with the specific recognition of
              receptors located on the surface of the bacteria. The phage then
              injects genetic material into the bacteria. Then the infection
              cycle continues with the hacking of the bacterial machinery in
              order to produce the genome of the new phages and its structural
              proteins in large numbers. Following an assembling stage, the new
              phages are formed and their evacuation to the outside of the
              bacteria destroys it.{' '}
            </p>
            <p className='pb-3'>
              The multiplication of bacteriophages is swift and always dependent
              on the presence of the targeted bacteria. With lytic phages
              selected and produced by Pherecydes Pharma, such as the T4 phage,
              bacterial cells are immediately killed after replication of the
              virion. As soon as the cell is destroyed, the newly-created phages
              rapidly replicate the cycle as soon as they find new bacteria.
            </p>
          </MDBCol>
          <MDBCol className='mx-auto' md='6'>
            <img
              src={phageCycle}
              className='img-fluid w-100 h-100 border-top border-white '
              style={{ backgroundColor: '' }}
              alt=''
            />
          </MDBCol>
        </MDBRow>
      </MDBJumbotron>
    </div>
  );
}

export default HowTheyWork;
