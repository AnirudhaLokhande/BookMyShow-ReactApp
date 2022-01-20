import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";

function AllMovies() {
    return (
        <div>
            <Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col onClick={()=>window.location.href="/movies/"+mov.id} id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                            <Card>
                                <Card.Img variant="top" src={mov.image} />
                                <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>
                                Bell Bottom Movie Name
                                </Card. Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) }
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;