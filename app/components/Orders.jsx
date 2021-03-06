import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import {deleteOrderProduct} from 'APP/app/action-creators/orders';


const Orders = function (props) {
  console.log("orders is: ", props.orders);
  return (
      <div className="container">
          <div className="row">
              <h4>Your Orders</h4>
              <h5>Total orders: {props.orders.length}</h5>
                  {

                    props.orders.map((order, idx) => {
                        return (
                            <div className="col s12" key={idx}>
                                    Order: {++idx}  <span className="title">Status: {order.status}</span>
                                    <ul className="collection">
                                     {
                                      
                                      order.products.map((product) => (
                                      <li className="collection-item avatar">
                                      <img src={product.image} alt="" className="circle"/>
                                      <span className="title">{product.name}</span>
                                      <p>Quantity: {product.orderProducts.quantity} <br />
                                          Price: {product.orderProducts.price}
                                      </p>                                     
                                      <Link className="btn-floating btn-small waves-effect waves-light red secondary-content" onClick={() => deleteOrderProduct(order.id, product.id)}><i className="material-icons">delete</i></Link>

                                     
                                      </li>
                                      ))
                                      
                                    }
                                    </ul>
                                 
                                    
                            </div>
                        );
                    })
                }
                      
          </div>
      </div>
  );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        orders: state.orders.list
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Orders);
