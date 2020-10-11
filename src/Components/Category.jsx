import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap';
import Products from './Products'

export default function Category({ match }) {
    return (
        <div style={{ display: 'flex', backgroundColor: 'transparent' }}>
            <CardGroup style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent' }}>
                <Card style={{ alignSelf: 'flex-start', width: '10vw', fontSize: '1vw', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" src="https://images.frandroid.com/wp-content/uploads/2020/03/laptop-gamer.jpg" />
                    <Card.Footer>
                        <Link to={`${match.url}/GamingPc`}>Gaming Pc</Link>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '10vw', fontSize: '1vw', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" src="https://mon-set-up-gaming.fr/wp-content/uploads/2018/04/souris-gamer-cest-quoi-1.jpg" />
                    <Card.Footer>
                        <Link to={`${match.url}/GamingMouse`}>Gaming Mouse</Link>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '10vw', fontSize: '1vw', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" src="https://zoneled.fr/wp-content/uploads/2019/11/pcgamer.jpeg" />
                    <Card.Footer>
                        <Link to={`${match.url}/GamingKeyboard`}>Gaming Keyboard</Link>
                    </Card.Footer>
                </Card>
                {/* <Route path={`${match.path}/:name`} render={({ match }) => (<div> <h3> {match.params.name} </h3> </div>)} /> */}

            </CardGroup>
            <Switch>
                <Route path="/Category/GamingPc" component={Products} />
                {/* <Route path="/Category/GamingMouse" component={Category} />
                <Route path="/Category/GamingKeyboard" component={Category} /> */}
            </Switch>
        </div >
    )
}