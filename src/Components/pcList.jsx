import React from 'react';
import PcCard from './pcCard';
import { connect } from 'react-redux'

function PcList(props) {
    return (
        <div style={{ height: '450px', display: 'flex' }}>
            {
                props.briefPcListState.map(pc => <PcCard key={pc.id} pcStats={pc} />)
            }
        </div>
    )
}

const mapStateToProps = (stateInStore) => {
    return ({
        briefPcListState: stateInStore.briefPcList,
        detailedPcListState: stateInStore.detailedPcList
    })
}

export default connect(mapStateToProps)(PcList)