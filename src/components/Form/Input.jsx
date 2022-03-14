import styled from 'styled-components';
import { InputField, InputLabel } from '../Elements';

export default function Input(props) {
    const { label, handleChange, value, formID } = props;

    return (
        <InputWrapper>
            <InputField
                type='text'
                onChange={(e) => handleChange(e, formID)}
                value={value}
                required
            />
            <InputLabel>{label}</InputLabel>
        </InputWrapper>
    );
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    padding-top: 1rem;

    & + div {
        margin-top: 1.5rem;
    }
`;
