import React, { useState } from 'react';
import { Card, ListGroupItem, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'

function ProductCard(props) {
    const array = props.detailedProductsListState.filter(product => product.id === props.productStats.id)[0]
    const [modalIsShown, setModalIsShown] = useState(false)
    let propsBriefArray = Object.keys(props.productStats)
    propsBriefArray = propsBriefArray.filter(key => (key !== "id" && key !== "productType" && key !== "imageSrc" && key !== "manufacturer" && key !== "reference"))
    let propsDetailedArray = Object.keys(array)
    propsDetailedArray = propsDetailedArray.filter(key => (key !== "id" && key !== "productType" && key !== "imageSrc" && key !== "manufacturer" && key !== "reference"))
    console.log(propsDetailedArray);
    return (
        <Card style={{ width: '20rem', height: 'auto', backgroundColor: 'transparent', margin: '20px', border: 'none' }}>
            <Card.Img style={{ width: 'auto', height: '10vw', textAlign: 'bottom' }} variant="bottom" src={props.productStats.imageSrc} />
            <Card.Title style={{ backgroundColor: 'transparent', fontSize: '1.2vw', margin: "0", padding: ".75rem" }}>{props.productStats.manufacturer} <br /> {props.productStats.reference} </Card.Title>
            {
                propsBriefArray.map(key => <ListGroupItem key={props.productStats[key]} style={{ backgroundColor: 'transparent', fontSize: '1vw' }}>{key.charAt(0).toUpperCase() + key.slice(1)} : {props.productStats[key]}</ListGroupItem>)
            }
            <Button style={{ outline: 'none' }} variant="secondary" onClick={() => setModalIsShown(true)}>More Details</Button>{' '}
            <Button variant="primary" >Add To Basket</Button>{' '}
            <Modal show={modalIsShown} onHide={() => setModalIsShown(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Pc Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Card.Img style={{ width: 'auto', height: '10vw', textAlign: 'bottom' }} variant="bottom" src={array.imageSrc} />
                    <Card.Title style={{ backgroundColor: 'transparent', fontSize: '1.2vw', margin: "0", padding: ".75rem" }}>{array.manufacturer} <br /> {array.reference} </Card.Title>
                    {
                        propsDetailedArray.map(key => key === "price" ? <ListGroupItem key={array[key]} style={{ backgroundColor: 'transparent', fontSize: '1vw' }}>{key.charAt(0).toUpperCase() + key.slice(1)} : {array[key]} Dt</ListGroupItem> : <ListGroupItem key={array[key]} style={{ backgroundColor: 'transparent', fontSize: '1vw' }}>{key.charAt(0).toUpperCase() + key.slice(1)} : {array[key]}</ListGroupItem>)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalIsShown(false)}>Close</Button>
                    <Button variant="primary" >Add To Basket</Button>{' '}
                </Modal.Footer>
            </Modal>
        </Card >
    )
}

const mapStateToProps = (stateInStore) => {
    return ({
        briefProductsListState: stateInStore.briefProductsList,
        detailedProductsListState: stateInStore.detailedProductsList
    })
}

export default connect(mapStateToProps)(ProductCard)