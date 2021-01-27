import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSinglePost } from "../../store/mainSlice";
import axios from 'axios'

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [img, setimg] = useState('')
const handleSubmit = (e)=>{
    e.preventDefault()
let newPost = {title, description ,img}
console.log(newUser)
axios.put('http://localhost:4000/api/users/update/'+id, newUser)
.then(res => console.log(res))
.catch(err => console.log(err, 'error'));

}
  useEffect(() => {
    fetch("http://localhost:4000/api/users/" + id)
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
          setUser(res.data)
          settitle(res.data.title)
          setdescription(res.data.description)
        })
      .catch((err) => console.log(err));
  }, []);

  return (
      <form onSubmit={handleSubmit}>
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item variant="primary" className="col-headers">
            Users
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Row>
              <Col className="col-headers">Name</Col>
              <Col>{user?._id}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Email</Col>
              <Col><input type="text" value={title}  name='title' onChange={(e) => settitle(e.target.value)} />
</Col>
            </Row>
            <Row>
              <Col className="col-headers">Pwd</Col>
              {/* <Col>{user?.description}</Col> */}
              <Col><input type="text" value={description}  name='title' onChange={(e) => setdescription(e.target.value)} /></Col>
            </Row>
            <Row>
              <Col><button type='submit'>Update</button></Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
    </form>
  );
};

export default UpdateUser;