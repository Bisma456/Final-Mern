import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllPosts } from "../../store/apis";
import DeleteModal from "../subComponents/DeleteModal";
import { useHistory } from 'react-router-dom'

function Users() {
  const [state, setstate] = useState([]);
  const history = useHistory();

const dispatch = useDispatch()
// const posts = useSelector(state =>{
//   console.log(state)
// })
// console.log(posts)
  const [msg, setmsg] = useState('')
  const handleDelete = (id)=>{
    console.log(id)
    axios.delete('http://localhost:4000/api/users/'+id)
    .then((res) => {
      console.log(res.data);
      setmsg(`${id} is deleted successfully`);
       history.push('/users')

    })
    .catch((e) => console.log(e));

  }
  useEffect(() => {
    console.log('i am in useeffect of posts')

    
      axios.get('http://localhost:4000/api/users/')
      .then((res) => {
        // console.log(res);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
  }, [dispatch]);
  return (
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item variant="primary">
            <Row className="col-headers">
              <Col>Name</Col>
              <Col>Email</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.name}</Col>
                <Col>{item.email}</Col>
                <Col>
                  <Button 
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/single-user/" + item._id}
                  >
                    View
                  </Button>
                  <Button 
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/update-post/" + item._id}
                  >
                    Edit
                  </Button>&nbsp;
                  <DeleteModal handleDelete={handleDelete} id={item._id}/>

                </Col>
              </Row>
            </ListGroup.Item>
          ))} 
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
}

export default Users;