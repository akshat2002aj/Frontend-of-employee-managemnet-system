import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import Header from "./header";
function UseQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Profile() {
  let query = UseQuery();
  const [details, setDetails] = useState([]);
  console.log("Before data");
  useEffect(() => {
    async function getDetails() {
      const response = await fetch(
        `https://major-project-1.herokuapp.com/${query.get("name")}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setDetails(data);
    }
    getDetails();
  }, []);
  return (
    <div>
      <Header />
      <Card
        style={{
          width: "30rem",
          display: "flex",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <Card.Img variant="top" src={details.image} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>
            Employee of the company from department {details.department}
          </Card.Text>
          {/* <ListGroup className="list-group-flush">
            <ListGroupItem style={{ margin: "10px 0" }}></ListGroupItem>
            <ListGroupItem style={{ margin: "10px 0" }}>
              Dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem style={{ margin: "10px 0" }}>
              Vestibulum at eros
            </ListGroupItem>
          </ListGroup> */}
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td>Department</td>
                <td>{details.department}</td>
              </tr>
              <tr>
                <td>Date of Joining</td>
                <td>{details.DateOfJoining}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{details.gender}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{details.DateOfBirth}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{details.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{details.email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{details.address}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
