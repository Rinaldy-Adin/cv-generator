import styled from 'styled-components';

export default function PreviewHeader(props) {
    return (
        <HeaderWrapper>
            <CVName>{props.fullName}</CVName>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    padding: 0 50px;
    background-color: ${({ theme: { colors } }) => colors.primary};
`;

const CVName = styled.h1`
    font-size: 2.5rem;
    color: #fff;
`;
