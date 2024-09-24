import React from 'react'

// function CarouselImage(props) {
function CarouselImage({imageUrl}) {
  return (
    <>
    {/* <img src={props.imageUrl} alt="" style={{width:"100%",height:"700px"}}/> */}
    <img src={imageUrl} alt="" style={{width:"100%",height:"750px"}}/>
    </>
  )
}

export default CarouselImage