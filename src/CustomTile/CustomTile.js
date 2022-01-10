import { Card, Col, Button } from "react-bootstrap";
import history from "../history";
import profile from "../components/profile";
const CustomTile = ({ name, department, image }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px 20px 10px 5px",
        height: "22rem",
        backgroundColor: "rgb(51, 52, 57)",
      }}
      // onClick={() => history.push("/profile")}
    >
      <Card.Img
        variant="top"
        style={{
          //   : "center",
          borderRadius: "80%",
          height: "50%",
          width: "70%",
          margin: "10px",
        }}
        src={image}
        onClick={() => {
          history.push({
            pathname: "/profile",
            search: `?name=${name}`,
          });
          window.location.reload();
        }}
      />

      <Card.Body
        style={{ textAlign: "center", backgroundColor: "rgb(51, 52, 57)" }}
      >
        <Card.Title
          onClick={() => {
            history.push({
              pathname: "/profile",
              search: `?name=${name}`,
            });
            window.location.reload();
          }}
          style={{ backgroundColor: "rgb(51, 52, 57)" }}
        >
          {name}
        </Card.Title>
        <Card.Text
          onClick={() => {
            history.push({
              pathname: "/profile",
              search: `?name=${name}`,
            });
            window.location.reload();
          }}
          style={{
            backgroundColor:
              department === "UI-UX"
                ? "red"
                : department === "FrontEnd"
                ? "blue"
                : "green",
            padding: "0 10px",
          }}
        >
          {" "}
          {department}
        </Card.Text>
        <Button
          style={{
            backgroundColor: "#282626",
            borderRadius: "10px",
            padding: "0 60px",
            borderColor: "none",
          }}
          onClick={() => {
            history.push({
              pathname: "/editMember",
              search: `?name=${name}`,
            });
            window.location.reload();
          }}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomTile;
