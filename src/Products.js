function Product(props) {
  return (
    <div className="col-lg-3">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h6 className="card-price text-center">
            {props.data.currency}
            {props.data.price}
            <span className="period">/{props.data.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.data.map((plan, index) => {
              return (
                <div className="content">
                  <li className="list" key={index}>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Product Name:{plan.productName}
                    </h5>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Price: {plan.price}
                    </h5>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
