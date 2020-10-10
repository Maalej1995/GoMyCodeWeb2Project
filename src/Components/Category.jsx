import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap';

export default function Category({ match }) {
    return (
        <CardGroup style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent' }}>
            <Card style={{ width: '20vw', backgroundColor: 'transparent' }}>
                <Card.Img variant="top" src="https://images.frandroid.com/wp-content/uploads/2020/03/laptop-gamer.jpg" />
                <Card.Footer>
                    <Link to={`${match.url}/GamingPc`}>Gaming Pc</Link>
                </Card.Footer>
            </Card>
            <Card style={{ width: '20vw', backgroundColor: 'transparent' }}>
                <Card.Img variant="top" src="https://zoneled.fr/wp-content/uploads/2019/11/pcgamer.jpeg" />
                <Card.Footer>
                    <Link to={`${match.url}/GamingMouse`}>Gaming Mouse</Link>
                </Card.Footer>
            </Card>
            <Card style={{ width: '20vw', backgroundColor: 'transparent' }}>
                <Card.Img variant="top" src="https://mon-set-up-gaming.fr/wp-content/uploads/2018/04/souris-gamer-cest-quoi-1.jpg" />
                <Card.Footer>
                    <Link to={`${match.url}/GamingKeyboard`}>Gaming Keyboard</Link>
                </Card.Footer>
            </Card>
            <Route path={`${match.path}/:name`} render={({ match }) => (<div> <h3> {match.params.name} </h3> </div>)} />
        </CardGroup>
    )
}