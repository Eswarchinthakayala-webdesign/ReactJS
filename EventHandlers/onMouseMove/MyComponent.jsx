
const MyComponent = () => {
      const handleMove=()=>
      { 
        alert("Mouse Move Triggered")
        console.log("Mouse Move Triggered")
      }

  return (
   <p onMouseMove={handleMove}>
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in ut illum possimus accusamus culpa tenetur maxime perferendis natus dolore? Blanditiis aliquam esse iusto, laboriosam itaque a porro vero facilis.
   </p>
  )
}

export default MyComponent
