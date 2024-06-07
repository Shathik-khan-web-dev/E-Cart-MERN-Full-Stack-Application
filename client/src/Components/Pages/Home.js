import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

const Home = () => {
  const [Product, setProduct] = useState([]);

  const getProduct = () => {
    axios
      .get("http://localhost:5000/product/get")
      .then((res) => {
        console.log(res.data.products);
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container className="py-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>productName</th>
            <th>productPrice</th>
            <th>productDescription</th>
            <th>productImage</th>
            <th>productCategory</th>
            <th>productQuantity</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.productName}</td>
              <td>{data.productPrice}</td>
              <td>{data.productDescription}</td>
              <td><img src={data.productImage} alt="" width={100} /></td>
              <td>{data.productCategory}</td>
              <td>{data.productQuantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;