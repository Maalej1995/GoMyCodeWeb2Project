import React from 'react';
import ProductCard from './productCard';
import { connect } from 'react-redux'

function ProductsList(props) {
    // console.log(props.briefProductsListState)
    return (
        <div style={{ height: '450px', display: 'flex' }}>
            {
                props.briefProductsListState.map(product => <ProductCard key={product.id} productStats={product} />)
            }
        </div>
    )
}

const mapStateToProps = (stateInStore) => {
    return ({
        briefProductsListState: stateInStore.briefProductsList,
        detailedProductsListState: stateInStore.detailedProductsList
    })
}

export default connect(mapStateToProps)(ProductsList)