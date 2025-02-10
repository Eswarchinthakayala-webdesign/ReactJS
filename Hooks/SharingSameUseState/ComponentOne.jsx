
const ComponentOne = ({count,onClickHandler}) => {

  return (
    <div>
        <p>count:{count}</p>
        <button onClick={onClickHandler}>Increment</button>
    </div>
  )
}

export default ComponentOne
