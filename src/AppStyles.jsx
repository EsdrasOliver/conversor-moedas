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

    @media (max-width: 667px){
        height: 350px;
        padding: 2px 5px;
    }

    
`