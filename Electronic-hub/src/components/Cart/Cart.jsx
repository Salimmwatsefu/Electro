import React from "react";
import './Cart.css';

const Cart = () => {
  return(
  <div className="container">
        <div className="table-wrap">
            <h1 Cart Items/>
            <table className="table table-responsive table-borderless">
                <thead>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>total</th>
                    <th>&nbsp;</th>
                </thead>
                <tbody>
                    <tr className="align-middle alert border-bottom" role="alert">
                        <td>
                            <input type="checkbox" id="check" />
                        </td>
                        <td className="text-center">
                            <img className="pic"
                                src="img url"
                                alt="" />
                        </td>
                        <td>
                            <div>
                                <p className="m-0 fw-bold">Product namr</p>
                                <p className="m-0 text-muted">Description</p>
                            </div>
                        </td>
                        <td>
                            <div className="fw-600">price</div>
                        </td>
                        <td className="d-">
                            <input className="input" type="text" placeholder="2" />
                        </td>
                        <td>
                            total
                        </td>
                        <td>
                            <div className="btn" data-bs-dismiss="alert">
                                <span className="fas fa-times"></span>
                            </div>
                        </td>
                    </tr>
                    <tr className="align-middle alert border-bottom" role="alert">
                        <td>
                            <input type="checkbox" id="check" />
                        </td>
                        <td className="text-center">
                            <img className="pic"
                                src="image url"
                                alt="" />
                        </td>
                        <td>
                            <div>
                                <p className="m-0 fw-bold">ProductName</p>
                                <p className="m-0 text-muted">Description</p>
                            </div>
                        </td>
                        <td>
                            <div className="fw-600">price</div>
                        </td>
                        <td className="d-">
                            <input className="input" type="text" placeholder="2" />
                        </td>
                        <td>
                            total
                        </td>
                        <td>
                            <div className="btn" data-bs-dismiss="alert">
                                <span className="fas fa-times"></span>
                            </div>
                        </td>
                    </tr>
                    <tr className="align-middle alert border-bottom" role="alert">
                        <td>
                            <input type="checkbox" id="check" />
                        </td>
                        <td className="text-center">
                            <img className="pic"
                                src="image url"
                                alt="" />
                        </td>
                        <td>
                            <div>
                                <p className="m-0 fw-bold">ProductName</p>
                                <p className="m-0 text-muted">Description</p>
                            </div>
                        </td>
                        <td>
                            <div className="fw-600">price</div>
                        </td>
                        <td className="d-">
                            <input className="input" type="text" placeholder="2" />
                        </td>
                        <td>
                            total
                        </td>
                        <td>
                            <div className="btn" data-bs-dismiss="alert">
                                <span className="fas fa-times"></span>
                            </div>
                        </td>
                    </tr>
                    <tr className="align-middle alert border-bottom" role="alert">
                        <td>
                            <input type="checkbox" id="check" />
                        </td>
                        <td className="text-center">
                            <img className="pic"
                                src="image url"
                                alt="" />
                        </td>
                        <td>
                            <div>
                                <p className="m-0 fw-bold">ProductName</p>
                                <p className="m-0 text-muted">Description</p>
                            </div>
                        </td>
                        <td>
                            <div className="fw-600">price</div>
                        </td>
                        <td>
                            <input className="input" type="text" placeholder="2" />
                        </td>
                        <td>
                            $total
                        </td>
                        <td>
                            <div className="btn" data-bs-dismiss="alert">
                                <span className="fas fa-times"></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Cart;