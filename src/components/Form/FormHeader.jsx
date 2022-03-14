import { Button } from '../Elements';
import styled from 'styled-components';

export default function FormHeader(props) {
    return (
        <FormHeaderContainer>
            <FormHeaderTitle>Personal information</FormHeaderTitle>
        </FormHeaderContainer>
    );
}

const FormHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 80px;
    padding: 0 20px;
`;

const FormHeaderTitle = styled.h1`
    font-size: 1.8em;
`;
