import styled from "styled-components";

export const Container = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cecece;
    padding: 30px;
    border-radius: 5px;

    h1 {
        margin: 0;
        margin-bottom: 20px;
        color: #ff294d81;
    }
    
    input, select {
        margin-bottom: 10px;
        padding: 4px;
        margin-top: 4px;
    }

    input[type=submit] {
        padding: 8px;
        background-color: #EB2F4E;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-weight: bolder;
        font-size: 16px;
    }
    input[type=submit]:hover {
        cursor: pointer;
        background-color: #f1778b;
    }
    
`