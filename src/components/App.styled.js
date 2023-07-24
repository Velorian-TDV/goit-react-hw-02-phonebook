import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        min-height: 100vh;

        background-color: rgb(232, 255, 255);

        overflow-x: hidden;
    }
`

export const Wrapper = styled.div`
    padding: 10px;
    min-width: 350px;

    border: 1px solid black;
    border-radius: 5px;
    background-color: white;

    h2{
        text-align: center;
    }

    label{
        display: block;
        width: 100%;
    }

    input{
        width: 100%;
    }

    .form{
        padding-bottom: 10px;

        section{
            margin-top: 10px;
            &:first-child{
                margin-top: 0px;
            }

            label{
                display: block;
                width: 100%;
                text-transform: capitalize;
            }

            input{
                width: 100%;
                padding: 5px 5px;
            }
        }
        
        button{
            width: 100%;
            margin-top: 10px;
            padding: 5px;
        }
    }

    .search{
        input{
            padding: 5px;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
        }
    }

    .contacts{
        margin-top: 20px;
        
        ul{
            list-style-type: none;
            margin-top: 20px;
            height: 200px;
            overflow-y: scroll;

            li{
                display: flex;

                margin-top: 5px;
                padding: 5px;

                border-bottom: .1px solid black;

                &:hover{
                    background-color: lightgray;
                }

                p{
                    margin-right: 10px;
                }

                button{
                    margin-left: auto;
                    cursor: pointer;
                    padding: 0px 5px;
                }
            }
        }
    }
`
