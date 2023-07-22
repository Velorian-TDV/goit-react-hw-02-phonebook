import styled from 'styled-components';

const Wrapper = styled.div`

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

    .contacts{
        margin-top: 20px;
        
        input{
            padding: 5px;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
        }
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

export default Wrapper;