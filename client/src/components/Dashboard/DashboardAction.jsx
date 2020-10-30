import React, {Fragment} from 'react'
import {Button, Card, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const DashboardAction = ({profile, user}) => {
    console.log(profile)
    return (
        <div>
            <Row>
              <Col xs="12" md="8">
              <Card className="mb-3" border="info">
                <Card.Header as="h5">Your Profile Details</Card.Header>
                {!profile.avatar ? <Link className="btn btn-warning" to="/profile-photo">Click Here To Add Photo</Link> : (
                    <Card.Img id="_daImage" variant="top" src={profile.avatar} />
                )}
            <Card.Body>
                <Card.Title className="text-primary" as="h4">{user.firstname+' '+user.lastname}</Card.Title>
                <Card.Text>
                     {profile.bio ? profile.bio : "You haven't added any bio"}
                </Card.Text>
                <h5>General Info</h5>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td className="text-bold">Gender</td>
                            <td className="text">{profile.gender}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Age</td>
                            <td className="text">{profile.age}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Height</td>
                            <td className="text">{profile.height}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Weight</td>
                            <td className="text">{profile.weight}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Current City</td>
                            <td className="text">{profile.location}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Phone Number</td>
                            <td className="text">{profile.phone}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Profile Type</td>
                            <td className="text">{profile.profiletype}</td>
                        </tr>
                    </tbody>
                </Table>

                <h5>Other Details</h5>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td className="text-bold">Education</td>
                            <td className="text">{profile.education}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Languages I Know</td>
                            <td className="text">{profile.languages.map(lang => (
                                lang+', '
                            ))}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Proficieny In English</td>
                            <td className="text">{profile.englishproficiency}</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Experience Of</td>
                            <td className="text">{profile.status}</td>
                        </tr>
                    </tbody>
                </Table>

                <Link to="/edit-profile"><Button  variant="dark">Edit Profile</Button></Link>
                
            </Card.Body>
            </Card>
              </Col>

              <Col xs="12" md="4">
              <Card bg="light" border="danger" className="mb-3">
                <Card.Header as="h5">Notifications</Card.Header>
                
            <Card.Body>
                <Card.Title>No Upcoming Events...</Card.Title>
            </Card.Body>
            </Card>
              </Col>
            </Row>
            
        </div>
    )
}

export default DashboardAction
