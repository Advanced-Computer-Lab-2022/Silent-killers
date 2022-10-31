const Priceofcourse = ({ Course }) => {

    return (
      <div className="priceofcourse">
        <h4>{Course.Title}</h4>
        <p><strong>Price: </strong>{Course.Price}</p>
        <p><strong>--------------------------------------------- </strong></p>
      </div>
    )
  }
  
  export default Priceofcourse