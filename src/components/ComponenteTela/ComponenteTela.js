import React from 'react';
import styled from 'styled-components';
import { Formulario } from '../Formulario/Formulario';


const TelaPrincipal = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    background-color: rgb(240,240,240);
    margin: 0 auto;
    min-width: 300px;
    max-width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export class ComponenteTela extends React.Component {
    render() {
        return(
            <TelaPrincipal>
                <Formulario/>
            </TelaPrincipal>
        )
    }
}