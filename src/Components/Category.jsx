import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap';
import GamingPc from './GamingPc'
import GamingMouse from './GamingMouse'
import GamingKeyboard from './GamingKeyboard'
import { connect } from 'react-redux'

function Category(props) {
    return (
        <div style={{ display: 'flex', backgroundColor: 'transparent' }}>
            <CardGroup style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent' }}>
                <Card style={{ alignSelf: 'flex-start', width: '10vw', fontSize: '1vw', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" src="https://images.frandroid.com/wp-content/uploads/2020/03/laptop-gamer.jpg" />
                    <Card.Footer>
                        <Link onClick={() => props.dispatch({ type: "PC" })} to={`${props.match.url}/GamingPc`}>Gaming Pc</Link>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '10vw', fontSize: '1vw', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" src="https://mon-set-up-gaming.fr/wp-content/uploads/2018/04/souris-gamer-cest-quoi-1.jpg" />
                    <Card.Footer>
                        <Link onClick={() => props.dispatch({ type: "MOUSE" })} to={`${props.match.url}/GamingMouse`}>Gaming Mouse</Link>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '10vw', fontSize: '1vw', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" src="https://zoneled.fr/wp-content/uploads/2019/11/pcgamer.jpeg" />
                    <Card.Footer>
                        <Link onClick={() => props.dispatch({ type: "KEYBOARD" })} to={`${props.match.url}/GamingKeyboard`}>Gaming Keyboard</Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <Switch>
                <Route path="/Category/GamingPc" component={GamingPc} />
                <Route path="/Category/GamingMouse" component={GamingMouse} />
                <Route path="/Category/GamingKeyboard" component={GamingKeyboard} />
            </Switch>
        </div >
    )
}
const mapStateToProps = (stateInStore) => {
    return ({
        briefProductsListState: stateInStore.briefProductsList,
        detailedProductsListState: stateInStore.detailedProductsList
    })
}

export default connect(mapStateToProps)(Category)