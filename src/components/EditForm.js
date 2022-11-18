import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EditForm.css";

import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

const EditForm = ({ theEmployee }) => {
  const username = theEmployee.username;

  const [name, setName] = useState(theEmployee.name);
  const [email, setEmail] = useState(theEmployee.email);
  const [phone, setPhone] = useState(theEmployee.phone);
  const [website, setWebsite] = useState(theEmployee.website);

  const { updateUser } = useContext(UserContext);

  const updatedUser = { username, name, email, phone, website };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(username, updatedUser);
  };

  return (
    <>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <div className="form-items">
            <div className="form-item-1">
              <Form.Group style={{ display: "flex" }}>
                <Form.Label style={{ display: "flex", margin: "10px" }}>
                  <span style={{ color: "red" }}>*</span> Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
            <div className="form-item">
              <Form.Group style={{ display: "flex" }}>
                <Form.Label style={{ display: "flex", margin: "10px" }}>
                  <span style={{ color: "red" }}>*</span> Email:
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
            <div className="form-item">
              <Form.Group style={{ display: "flex" }}>
                <Form.Label style={{ display: "flex", margin: "10px" }}>
                  <span style={{ color: "red" }}>*</span> Phone:
                </Form.Label>
                <Form.Control
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
            <div className="form-item">
              <Form.Group style={{ display: "flex" }}>
                <Form.Label style={{ display: "flex", margin: "10px" }}>
                  <span style={{ color: "red" }}>*</span> Website:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className="btn-ok">
            <Button variant="primary" type="submit" block>
              OK
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default EditForm;
