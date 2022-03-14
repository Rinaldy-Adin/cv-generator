import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flexbox;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1vw 1vh;

    font-family: ${({ theme: { fonts } }) => fonts[0]};
    color: ${({ theme: { colors } }) => colors.fontColor};
`;

const PageTitle = styled.h1`
    font-size: 3.5em;
    font-weight: 900;
`;

const HeaderRight = styled.div`
    margin-right: 2%;
`;

const HeaderLeft = styled.div`
    margin-left: 2%;
`;

const HeaderButton = styled.button`
    font-size: 2em;

    background: none;
    border: none;

    font-family: ${({ theme: { fonts } }) => fonts[0]};
    color: ${({ theme: { colors } }) => colors.fontColor};

    &:hover {
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <PageTitle>CV Generator</PageTitle>
            </HeaderLeft>
        </HeaderWrapper>
    );
};

export default Header;
