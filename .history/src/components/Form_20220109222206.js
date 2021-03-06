import React from "react";
import { ButtonToolbar, ButtonGroup, Button, Table } from "react-bootstrap";
import "../styles/Form.css";
import history from "../history";
import { useState, useEffect } from "react";

const Form = () => {
  //   const [data, setData] = useState(
  //       name:'',
  //       DateOfBirth:'',
  //       DateOfJoining:'',
  //       phone:'',
  //       email:'',
  //       address:'',
  //       image:'',
  //       gender:'',
  //       name:'',
  //   ]);
  const [name, setName] = useState([]);
  const [dob, setDob] = useState([]);
  const [doj, setDoj] = useState([]);
  const [phone, setPhone] = useState([]);
  const [department, setDepartment] = useState([]);
  const [email, setEmail] = useState([]);
  const [address, setAddress] = useState([]);
  const [image, setImage] = useState([]);
  const [gender, setGender] = useState([]);

  //   useEffect(() => {
  //     Axios.get("http://localhost:8080/employees")
  //       .then((res) => {
  //         console.log("Getting from::::", res.data);
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  const postData = async (e) => {
    try {
      e.preventDefault();
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          DateOfBirth: dob,
          DateOfJoining: doj,
          phone,
          department,
          email,
          address,
          image,
          gender,
        }),
      };
      const response = await fetch(
        "https://major-project-1.herokuapp.com/home",
        requestOptions
      );
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }

    history.push("/");
    window.location.reload();
  };

  console.log(
    JSON.stringify({
      DateOfBirth: dob,
      DateOfJoining: doj,
      phone,
      department,
      email,
      address,
      image,
      gender,
    })
  );
  return (
    <>
      <h1 style={{ alignText: "center", margin: "auto", width: "30%" }}>
        Add New Member
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Table
          className="box"
          style={{
            backgroundColor: "rgb(51, 52, 57)",
            cellpadding: "10",
            width: "70%",
          }}
        >
          <tr>
            <td> Name</td>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxlength="50"
                placeholder="
Name here"
              />
              (Max 50 Characters Allowed)
            </td>
          </tr>
          <tr>
            <td>Date of Birth(DOB)</td>
            <td>
              <input
                type="text"
                name="DateOfBirth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                maxlength="10"
                placeholder="DD/MM/YYYY"
              />
              (Max 10 Characters Allowed)
            </td>
          </tr>
          <tr>
            <td>Date of Joining (DOJ)</td>
            <td>
              <input
                type="text"
                name="DateOfJoining"
                value={doj}
                onChange={(e) => setDoj(e.target.value)}
                maxlength="10"
                placeholder="DD/MM/YYYY"
              />
              (Max 10 Characters Allowed)
            </td>
          </tr>
          <tr>
            <td>Email ID</td>
            <td>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
              />
            </td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td>
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxlength="10"
                placeholder="7842xxxxxx"
              />
              ( 10 Digits Allowed)
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input
                type="text"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <textarea
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="5"
                cols="50"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Employee Image</td>
            <td>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                name="image"
                placeholder="Image URL"
              />
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                name="department"
                placeholder="Department"
              />
            </td>
          </tr>
          <tfoot>
            <td align="center" colspan="2">
              <input type="Submit" onClick={postData} name="submit" />
            </td>
          </tfoot>
        </Table>
      </div>
    </>
  );
};

export default Form;
