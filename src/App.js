import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class App extends Component {
    render() {
        return (
            <Column>
                <Row horizontal='spaced' wrap>
                    <Column>
                        Columna 1
                    </Column>
                    <Column>
                        Columna 2
                    </Column>
                    <Column>
                        Columna 3
                    </Column>
                    <Column style={{backgroundColor: 'red'}} flex={3}>
                        Columna 4
                    </Column>
                    <Column>
                        Columna 5
                    </Column>
                    <Column>
                        Columna 6
                    </Column>
                </Row>
                <Column>
                    Fila 2
                    <Row horizontal='spaced'>
                        <Column>
                            Columna 1
                        </Column>
                        <Column>
                            Columna 2
                        </Column>
                        <Column>
                            Columna 3
                        </Column>
                    </Row>
                </Column>
                <Column>
                    Fila 3
                    <Row horizontal='spaced'>
                        <Row style={{backgroundColor: 'red'}} flex={1}>
                            Columna 1
                        </Row>
                        <Row style={{backgroundColor: 'blue'}} flex={2}>
                            Columna 2
                        </Row>
                        <Row style={{backgroundColor: 'red'}} flex={3}>
                            Columna 3
                        </Row>
                    </Row>
                </Column>
            </Column>
        );
    }
}

export default App;
