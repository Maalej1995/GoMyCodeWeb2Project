import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ margin: "100px" }}>
                Basket
            </div>
            <div style={{ width: "25%", height: "900px", backgroundColor: "grey", borderRadius: "10px", marginRight: "10%" }}>
                {props.basketListState.map(item => <div key={item.id}>
                    <div style={{ margin: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: "10px", color: "grey", backgroundColor: "white" }}>
                        <p style={{ marginLeft: "10px" }}>{item.value}</p>
                        <div>
                            <input type="button" value="Delete" style={{ outline: "none", fontSize: "1vw", border: "none", margin: "5px", backgroundColor: "red", width: "60px", height: "30px", borderRadius: "10px", marginLeft: "5px" }} onClick={() => props.dispatch({ type: "DELETE", payload: item })} />
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
const mapStateToProps = (stateInStore) => {
    return ({
        basketListState: stateInStore.basketList,
    })
}

export default connect(mapStateToProps)(Home)