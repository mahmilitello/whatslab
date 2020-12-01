import React from 'react'
import styled from 'styled-components'

const MsgRow = styled.div`
    box-sizing: border-box;
    padding: 0 15px 20px 15px;
    display: flex;
    justify-content: flex-end;
`

const MsgBox = styled.div`
    border-radius: 5px;
    max-width: 80%;
    padding: 5px;
    background-color: rgb(220,248,198);
    box-shadow: 0 2px 1px rgb(200,200,200);
`

const MsgMsg = styled.p`
    margin: 5px 8px;
    text-align: left;
    word-wrap: break-word;
`


export class CompMensagemEu extends React.Component {
    render() {
        let impressao
        if (this.props.nomeUser !== '' && this.props.mensagem !== '') {
            impressao = 
                <MsgRow onClick={this.props.onClickFunc}>
                    <MsgBox onDoubleClick={this.props.doubleClickFunc}>
                        {/* <MsgUser>{this.props.nomeUser}</MsgUser> */}
                        <MsgMsg>{this.props.mensagem}</MsgMsg>
                    </MsgBox>
                </MsgRow>
        } else {
            impressao = <div></div>
        }
        return (impressao)
    }
}