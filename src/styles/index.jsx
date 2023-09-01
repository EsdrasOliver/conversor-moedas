import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cecece;
    padding: 50px;
    border-radius: 5px;

    @media (max-width: 667px){
        padding: 20px;
    }
`