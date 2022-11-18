import React from "react";


import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { useEffect, useState, useContext } from "react";
import { Col, Divider, Row } from "antd";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import EditForm from "./EditForm";
import { hover } from "@testing-library/user-event/dist/hover";
// import Edit from "./components/Edit";

const Users = ({ users }) => {
  const { userData, deleteUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [users]);
  const [like, setLike] = useState(true);

  const handleLike = (username) => {
    setLike((current) => !current);
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="card-cover">
            <div className="img-cover">
              <div className="user-img-cover">
                <img
                  className="user-img"
                  src={`https://avatars.dicebear.com/v2/avataaars/${users.username}.svg?options[mood][]=happy`}
                  alt=""
                />
              </div>
            </div>
            <div className="user-info-card">
              <h3 style={{ fontSize: "16px", fontWeight: "500" }}>
                {users.name}
              </h3>
              <div className="user-info">
                <MailOutlined className="user-data-icon" />
                <p className="user-data">{users.email}</p>
              </div>
              <div className="user-info">
                <PhoneOutlined className="user-data-icon" />
                <p className="user-data">{users.phone}</p>
              </div>
              <div className="user-info">
                <GlobalOutlined className="user-data-icon" />
                <p className="user-data">http://{users.website}</p>
              </div>
            </div>
            <ul className="actions">
              <li>
                <button onClick={handleLike}>
                  {like ? (
                    <HeartOutlined className="action-icon heart" />
                  ) : (
                    <HeartFilled
                      className="action-icon"
                      style={{ color: "red" }}
                    />
                  )}
                </button>
              </li>
              <li>
                <OverlayTrigger
                  overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}
                >
                  <button
                    onClick={handleShow}
                    className="btn text-warning btn-act"
                    data-toggle="modal"
                    style={{ position: "relative", bottom: "30%" }}
                  >
                    <EditOutlined className="action-icon" />
                  </button>
                </OverlayTrigger>
              </li>
              <li>
                <button onClick={() => deleteUser(users.username, like)}>
                  <DeleteFilled className="action-icon" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={users} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-cancel"
            variant="secondary"
            onClick={handleClose}
            style={{
              marginRight: "100px",
              background: "white",
              color: "black",
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Users;
