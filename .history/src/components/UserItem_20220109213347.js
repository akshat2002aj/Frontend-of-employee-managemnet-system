import React from "react";
import { useState, useEffect } from "react";
import CustomTile from "../CustomTile/CustomTile";
import CustomAppBar from "../custoomAppBar/CustomAppBar/CustomAppBar";
import { Row, Spinner } from "react-bootstrap";
import Navbarr from "./Navbarr";
import { useLocation } from "react-router-dom";
function UseQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function UserItem() {
  let query = UseQuery();
  const [details, setDetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Filter, setFilter] = useState("");
  let URL;
  if (query.get("department")) {
    URL = `https://major-project-1.herokuapp.com/home/${query.get(
      "department"
    )}`;
  } else {
    URL = "https://major-project-1.herokuapp.com/employees1";
  }
  useEffect(() => {
    async function getDetails() {
      const response = await fetch(URL, {
        method: "GET",
      });
      const data = await response.json();
      setDetails(data);
    }
    getDetails();
  }, []);
  return (
    <div>
      <Navbarr
        label="Search"
        // style={{ justifyContent: "center" }}
        onSearch={(event) => {
          setSearchText(event.target.value);
        }}
        onFilter={(event) => {
          setFilter(event.target.value);
        }}
      />
      {details.length === 0 ? (
        <Spinner
          animation="border"
          variant="light"
          className="my-auto mx-auto"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        //   NICHE vala portion after navbar
        <Row xs={8} md={3} className="g-0" style={{ justifyContent: "center" }}>
          {details
            .filter((e) =>
              searchText.length !== 0
                ? e.name.toLowerCase().includes(searchText.toLowerCase())
                : true
            )
            .filter((e) =>
              Filter.length !== 0 ? e.department.includes(Filter) : true
            )
            .map((e) => (
              <CustomTile
                id={e._id}
                name={e.name}
                department={e.department}
                image={e.image}
              />
            ))}
        </Row>
      )}
    </div>
  );
}

export default UserItem;
