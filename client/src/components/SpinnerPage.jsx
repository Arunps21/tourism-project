import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerPage() {
  return (
    <>
    <Spinner animation="border" role="status" style={{marginTop:"100px"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </>
  )
}

export default SpinnerPage