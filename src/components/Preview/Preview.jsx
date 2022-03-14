import PreviewHeader from './PreviewHeader';
import styled from 'styled-components';
import PreviewPersonal from './PreviewPersonal';
import PreviewExperience from './PreviewExperience';
import PreviewEducation from './PreviewEducation';

export default function Preview(props) {
    const { personal, experiences, education } = props;

    return (
        <PreviewContainer>
            <PreviewHeader fullName={props.personal[0].value} />
            <PreviewBody>
                <PreviewPersonal inputData={personal} />
                <PreviewExperience inputData={experiences} />
                <PreviewEducation inputData={education} />
            </PreviewBody>
        </PreviewContainer>
    );
}

const PreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PreviewBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1.5rem;
    flex: 1;

    overflow-y: scroll;
    scrollbar-color: ${({ theme: { colors } }) => colors.primary} #e4e4e4;
    margin-right: -10px;
    width: 100%;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme: { colors } }) => colors.primary};
        border-radius: 100px;
    }

    & > div {
        margin-bottom: 1rem;
    }

    & > * {
        &:last-child {
            margin-bottom: 0;
        }
    }
`;
