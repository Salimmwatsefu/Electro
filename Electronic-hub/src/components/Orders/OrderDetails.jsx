import React from "react";
import ",/OrderDetails.css";

const OrderDetails = () => {
    return(
        <div className="container mt-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-10">
                <div className="rounded">
                    <div className="table-responsive table-borderless">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center">Order #.</th>
                                    <th>Buyer's name</th>
                                    <th>status</th>
                                    <th>Total</th>
                                    <th>Created</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr className="cell-1" data-toggle="collapse" data-target="#demo">
                                    <td className="text-center">1</td>
                                    <td>Gasper Antunes</td>
                                    <td><span className="badge badge-danger">Fullfilled</span></td>
                                    <td>$2674.00</td>
                                    <td>Today</td>
                                    <td className="table-elipse" data-toggle="collapse" data-target="#demo"><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                                <tr id="demo" className="collapse cell-1 row-child">
                                    <td className="text-center" colspan="1"><i className="fa fa-angle-up"></i></td>
                                    <td colspan="1">Product&nbsp;</td>
                                    <td colspan="3">iphone SX with ratina display</td>
                                    <td colspan="1">QTY</td>
                                    <td colspan="2">2</td>
                                </tr>
                                <tr className="cell-1" data-toggle="collapse" data-target="#demo-2">
                                    <td className="text-center">2</td>
                                    <td>Tinder Steel</td>
                                    <td><span className="badge badge-success">Fullfilled</span></td>
                                    <td>$3664.00</td>
                                    <td>Yesterday</td>
                                    <td className="table-elipse" data-toggle="collapse" data-target="#demo"><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                                <tr id="demo-2" className="collapse cell-1 row-child">
                                    <td className="text-center" colspan="1"><i className="fa fa-angle-up"></i></td>
                                    <td colspan="1">Product&nbsp;</td>
                                    <td colspan="3">iphone SX with ratina display</td>
                                    <td colspan="1">QTY</td>
                                    <td colspan="2">2</td>
                                </tr>
                                <tr className="cell-1" data-toggle="collapse" data-target="#demo-3">
                                    <td className="text-center">3</td>
                                    <td>Micro Steel</td>
                                    <td><span className="badge badge-success">Placed</span></td>
                                    <td>$2674.00</td>
                                    <td>March 20, 2020</td>
                                    <td className="table-elipse" data-toggle="collapse" data-target="#demo"><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                                <tr id="demo-3" className="collapse cell-1 row-child">
                                    <td className="text-center" colspan="1"><i className="fa fa-angle-up"></i></td>
                                    <td colspan="1">Product&nbsp;</td>
                                    <td colspan="3">iphone SX with ratina display</td>
                                    <td colspan="1">QTY</td>
                                    <td colspan="2">2</td>
                                </tr>
                                <tr className="cell-1" data-toggle="collapse" data-target="#demo-4">
                                    <td className="text-center">4</td>
                                    <td>B Mobiles</td>
                                    <td><span className="badge badge-success">Delivered</span></td>
                                    <td>$4674.00</td>
                                    <td>March 22, 2020</td>
                                    <td className="table-elipse" data-toggle="collapse" data-target="#demo"><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                                <tr id="demo-4" className="collapse cell-1 row-child">
                                    <td className="text-center" colspan="1"><i className="fa fa-angle-up"></i></td>
                                    <td colspan="1">Product&nbsp;</td>
                                    <td colspan="3">iphone SX with ratina display</td>
                                    <td colspan="1">QTY</td>
                                    <td colspan="2">2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default OrderDetails;