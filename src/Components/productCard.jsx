import React, { useState } from 'react';
import { Card, ListGroupItem, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'

function ProductCard(props) {
    const array = props.detailedProductsListState.filter(product => product.id === props.productStats.id)
    const [modalIsShown, setModalIsShown] = useState(false)
    return (
        <Card style={{ width: '20rem', height: 'auto', backgroundColor: 'transparent', margin: '20px', border: 'none' }}>
            <Card.Img style={{ width: 'auto', height: '10vw', textAlign: 'bottom' }} variant="bottom" src={props.productStats.imageSrc} />
            <Card.Title style={{ backgroundColor: 'transparent', fontSize: '1.2vw', margin: "0", padding: ".75rem" }}>{props.productStats.manufacturer} <br /> {props.productStats.reference} </Card.Title>
            <ListGroupItem style={{ backgroundColor: 'transparent', fontSize: '1vw' }} >Processor : {props.productStats.processor}</ListGroupItem>
            <ListGroupItem style={{ backgroundColor: 'transparent', fontSize: '1vw' }} >RAM : {props.productStats.ram}</ListGroupItem>
            <ListGroupItem style={{ backgroundColor: 'transparent', fontSize: '1vw' }} >Graphics : {props.productStats.graphic}</ListGroupItem>
            <Button style={{ outline: 'none' }} variant="secondary" onClick={() => setModalIsShown(true)}>More Details</Button>{' '}
            <Button variant="primary" >Add To Basket</Button>{' '}
            <Modal show={modalIsShown} onHide={() => setModalIsShown(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Pc Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Card.Img style={{ width: 'auto', height: '10vw', textAlign: 'bottom' }} variant="bottom" src={array[0].imageSrc} />
                    <Card.Title style={{ backgroundColor: 'transparent', fontSize: '1.2vw', margin: "0", padding: ".75rem" }}>{array[0].manufacturer} <br /> {array[0].reference} </Card.Title>
                    <ListGroupItem style={{ textAlign: 'left', backgroundColor: 'transparent', fontSize: '1vw' }} >Screen : {array[0].screen}</ListGroupItem>
                    <ListGroupItem style={{ textAlign: 'left', backgroundColor: 'transparent', fontSize: '1vw' }} >Processor : {array[0].processor}</ListGroupItem>
                    <ListGroupItem style={{ textAlign: 'left', backgroundColor: 'transparent', fontSize: '1vw' }} >RAM : {array[0].ram}</ListGroupItem>
                    <ListGroupItem style={{ textAlign: 'left', backgroundColor: 'transparent', fontSize: '1vw' }} >Graphics : {array[0].graphic}</ListGroupItem>
                    <ListGroupItem style={{ textAlign: 'left', backgroundColor: 'transparent', fontSize: '1vw' }} >Disk : {array[0].disk}</ListGroupItem>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalIsShown(false)}>Close</Button>
                    <Button variant="primary" >Add To Basket</Button>{' '}
                </Modal.Footer>
            </Modal>
        </Card>
    )
}

const mapStateToProps = (stateInStore) => {
    return ({
        briefProductsListState: stateInStore.briefProductsList,
        detailedProductsListState: stateInStore.detailedProductsList
    })
}

export default connect(mapStateToProps)(ProductCard)