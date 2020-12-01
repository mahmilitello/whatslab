import React from 'react';
import styled from 'styled-components';
import { CompMensagem } from '../CompMensagem/CompMensagem';
import { CompMensagemEu } from '../CompMensagemEu/CompMensagemEu';


const FormDiv = styled.div`
    max-height: 100%;
`

const ListaBaloes = styled.div`
  margin: 0 0 20px 0;
  padding: 20px 0 0 0;
  max-height: calc(100vh - 97px);
  overflow: auto;
  overflow-x:hidden;
`

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    margin: 15px 0;
`
const FormUsuario = styled.input`
    margin-right: 20px;
    padding: 0 0 0 5px;
    width: 100px;
    border: none;
    border-radius: 7px;
    box-shadow: 0 2px 1px rgb(200,200,200);
    outline: none;
`
const FormMsg = styled.input`
    margin-right: 20px;
    padding: 0 5px;
    width: 250px;
    border: none;
    border-radius: 7px;
    box-shadow: 0 2px 1px rgb(200,200,200);
    outline: none;
    word-wrap: break-word;
`

const Button = styled.button`
    width: 80px;
    background-color: orange;
    color: white;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    box-shadow: 0 2px 1px rgb(200,200,200);
    outline: none;
`


export class Formulario extends React.Component {

  state = {
    formulario: [],
    valorInputUsuario: "",
    valorInputMensagem: "",
    mensagemID: 0,
  };

    adicionaBalao = () => {
        if (this.state.valorInputUsuario !== '' && this.state.valorInputMensagem !== '') {
            this.setState({mensagemID: this.state.mensagemID + 1})
            const novaMensagem = {
                id: this.state.mensagemID,
                usuario: this.state.valorInputUsuario,
                mensagem: `${this.state.valorInputMensagem}`
            }
            const novoMensagens = [...this.state.formulario, novaMensagem]
            this.setState({ formulario: novoMensagens, valorInputUsuario:'', valorInputMensagem:''})
        }
    }

      
    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };

    onKeyDownForm = (event) => {
        if (event.key === `Enter`) {
            console.log(`msg key: ${event.key}`)
            this.adicionaBalao()
        }
    }

    onDoubleClickDelete = (id) => {
        const novoFormulario = this.state.formulario.filter(msgbox =>{
            if (msgbox.id === id) {
                return false
            } else {
                return true
            }
        })

        this.setState({ formulario: novoFormulario })
        console.log(`mensagem (id:${id}) apagada`)
    }

    render() {
        let listaDeBaloes
        if (this.state.formulario.length > 0) {
            listaDeBaloes = this.state.formulario.map((formulario) => {
                let compMensagemTemp
                if (formulario.usuario === 'eu') {
                    compMensagemTemp = 
                        <CompMensagemEu
                            nomeUser={formulario.usuario}
                            mensagem = {formulario.mensagem}
                            doubleClickFunc = {() => this.onDoubleClickDelete(formulario.id)}
                        />
                } else {
                    compMensagemTemp = 
                        <CompMensagem
                            nomeUser={formulario.usuario}
                            mensagem = {formulario.mensagem}
                            doubleClickFunc = {() => this.onDoubleClickDelete(formulario.id)}
                        />
                }
                return (compMensagemTemp);
            });
        }
        
        return (
            <FormDiv>
                <ListaBaloes>{listaDeBaloes}</ListaBaloes>
                <FormStyle onKeyDown={this.onKeyDownForm}>
                    <FormUsuario
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder={"Usuário"}
                    />
                    <FormMsg
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                    />
                    <Button onClick={this.adicionaBalao}>Enviar</Button>
                </FormStyle>
            </FormDiv>  
        );
    }
}
