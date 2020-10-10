import React, { useState } from 'react';
import { Card, ListGroupItem, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'

function PcCard(props) {
    const array = props.detailedPcListState.filter(pc => pc.id === props.pcStats.id)
    const [modalIsShown, setModalIsShown] = useState(false)
    return (
        <Card style={{ width: '20rem', height: 'auto', backgroundColor: 'transparent', margin: '20px', border: 'none' }}>
            <Card.Img style={{ width: 'auto', height: '10vw', textAlign: 'bottom' }} variant="bottom" src={props.pcStats.imageSrc} />
            <Card.Title style={{ backgroundColor: 'transparent', fontSize: '1.2vw', margin: "0", padding: ".75rem" }}>{props.pcStats.manufacturer} <br /> {props.pcStats.reference} </Card.Title>
            <ListGroupItem style={{ backgroundColor: 'transparent', fontSize: '1vw' }} >Processor : {props.pcStats.processor}</ListGroupItem>
            <ListGroupItem style={{ backgroundColor: 'transparent', fontSize: '1vw' }} >RAM : {props.pcStats.ram}</ListGroupItem>
            <ListGroupItem style={{ backgroundColor: 'transparent', fontSize: '1vw' }} >Graphics : {props.pcStats.graphic}</ListGroupItem>
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
        briefPcListState: stateInStore.briefPcList,
        detailedPcListState: stateInStore.detailedPcList
    })
}

export default connect(mapStateToProps)(PcCard)