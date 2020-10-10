import React from 'react';
import { Container } from 'react-bootstrap';

export default function PcContainer({ children }) {
    return (
        <Container style={{ marginTop: 50 }}>
            {children}
        </Container>
    )
}