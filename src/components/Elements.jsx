import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    position: relative;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts[1]};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.3rem;
    font-weight: 600;

    -webkit-appearance: none;
    -moz-appearance: none;
    transition: background 150ms ease-in-out, transform 150ms ease;

    &:hover {
        background: ${({ theme }) => theme.colors.tertiary};
    }

    &:active {
        transition: background 50ms ease-in;
        background: ${({ theme }) => theme.colors.tertiaryDarker};
    }
`;

const InputField = styled.input`
    border: 0;
    z-index: 1;
    background-color: transparent;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
    font: inherit;
    font-size: 1.125rem;
    padding: 0.25rem 0;
    color: ${({ theme: { colors } }) => colors.tertiaryDarker};
    font-family: ${({ theme }) => theme.fonts[1]};

    &:focus,
    &:valid {
        outline: 0;
        border-bottom-color: ${({ theme: { colors } }) => colors.tertiary};
        & + label {
            color: ${({ theme: { colors } }) => colors.tertiary};
            transform: translateY(-1.7rem);
        }
    }
`;

const InputLabel = styled.label`
    color: ${({ theme: { colors } }) => colors.primary};
    font-family: ${({ theme }) => theme.fonts[1]};
    position: absolute;
    bottom: 0.6rem;
    transition: 0.25s ease;
`;

const CVSectionHeader = styled.div`
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
    font-family: ${({ theme: { fonts } }) => fonts[0]};
    font-size: 1.2rem;
    font-weight: 800;
    padding-bottom: 0.4rem;
`;

const CVSection = styled.div`
    font-family: ${({ theme: { fonts } }) => fonts[0]};
    font-size: 1rem;
    margin-top: 0.75rem;

    display: flex;
    /* border: 1px solid black; */
`;

const CVPeriod = styled.div`
    width: 8rem;
    overflow-x: hidden;
`;

const CVDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    & > div {
        margin-bottom: 0.3rem;
        overflow-wrap: break-word;
        hyphens: auto;
        min-height: 1rem;
    }

    & > * {
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export {
    Button,
    InputField,
    InputLabel,
    CVSectionHeader,
    CVDetails,
    CVPeriod,
    CVSection,
};
