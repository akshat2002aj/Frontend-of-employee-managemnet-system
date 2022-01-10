import React from "react";
import history from "../history";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../styles/Form.css";
function UseQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const MemberEdit = () => {
  let query = UseQuery();
  useEffect(() => {
    async function getDetails() {
      const response = await fetch(
        `https://major-project-1.herokuapp.com/${query.get("name")}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setName(data.name);
      setDob(data.DateOfBirth);
      setDoj(data.DateOfJoining);
      setPhone(data.phone);
      setGender(data.gender);
      setAddress(data.address);
      setDepartment(data.department);
      setImage(data.image);
      setEmail(data.email);
    }
    getDetails();
  }, []);

  const [name, setName] = useState([]);
  const [dob, setDob] = useState([]);
  const [doj, setDoj] = useState([]);
  const [phone, setPhone] = useState([]);
  const [department, setDepartment] = useState([]);
  const [email, setEmail] = useState([]);
  const [address, setAddress] = useState([]);
  const [image, setImage] = useState([]);
  const [gender, setGender] = useState([]);

  const updateData = async (e) => {
    try {
      e.preventDefault();
      const requestOptions = {
        method: "PATCH",
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
        `https://major-project-1.herokuapp.com/${name}`,
        requestOptions
      );
      history.push("/");
      window.location.reload();
      //const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{ alignText: "center", margin: "auto", width: "30%" }}>
        Edit Member
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
                type="text"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                //placeholder="7842xxxxxx"
              />
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input
                type="text"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <textarea
                name="address"
                rows="5"
                onChange={(e) => setAddress(e.target.value)}
                cols="50"
                value={address}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Employee Image</td>
            <td>
              <input
                type="text"
                name="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                placeholder="Image URL"
              />
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              <input
                type="text"
                name="department"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                placeholder="Department"
              />
            </td>
          </tr>
          <tfoot>
            <td align="center" colspan="2">
              <input type="Submit" onClick={updateData} name="submit" />
            </td>
          </tfoot>
        </Table>
      </div>
    </>
  );
};

export default MemberEdit;
