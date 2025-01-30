
const Greet = () => {
    const message="React is a Good Course"
    const date=new Date();
  return (
    <div>
        <h1>Message: {message}</h1>
        <p>Date: {date.getDay()}</p>
    </div>
  )
}

export default Greet
