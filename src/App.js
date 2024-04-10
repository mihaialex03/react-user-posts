import React, { useState, useEffect } from "react";
import "./style.css";
import { UserList } from "./components/UserList";
import PostList from "./components/PostList";
import { ChangeLocationSection } from "./components/ChangeLocation";
import { UserAddForm } from "./components/UserAddForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [apiUsers, setApiUsers] = useState([]);
  const [apiPosts, setApiPosts] = useState([]);
  const [displayUsers, setDisplayUsers] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data);
      });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setApiPosts(data);
      });
  }, []);

  const handleDisplayUsers = () => {
    setDisplayUsers(true);
  };

  const handleDisplayPosts = () => {
    setDisplayUsers(false);
  };
  function addUser(newUser) {
    const newUserList = [newUser, ...apiUsers];
    setApiUsers(newUserList);
  }

  return (
    <div className="App container mt-5">
      <Container>
        <Row>
          <Col>
            <ChangeLocationSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <UserAddForm addUser={addUser} />
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-custom m-2" onClick={handleDisplayUsers}>
          Show users
        </button>
        <button className="btn btn-custom m-2" onClick={handleDisplayPosts}>
          Show posts
        </button>
      </div>
      {displayUsers ? (
        <UserList users={apiUsers} />
      ) : (
        <PostList posts={apiPosts} />
      )}
    </div>
  );
}

export default App;
