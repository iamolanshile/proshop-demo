import React from "react";

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  console.log(products, isLoading, error);
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data.message || error.error}</Message>
      ) : (
        <React.Fragment>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HomeScreen;