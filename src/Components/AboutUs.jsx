import React from 'react'
import myPhoto from '../../src/Hatem MAALEJ.png'

export default function AboutUs() {
    return (
        <div style={{ display: 'flex', alignSelf: 'center' }}>
            <img style={{ width: '10vw' }} src={myPhoto} alt="Hatem MAALEJ" />
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '70px', paddingLeft: '70px' }}>
                <div>
                    Hatem MAALEJ
                </div>
                <div>
                    14 / 01 / 1995
                </div>
                <div>
                    Engineer
                </div>
            </div>
        </div>
    )
}
