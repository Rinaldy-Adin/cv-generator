import styled from 'styled-components';
import { Button } from '../Elements';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';

export default function Experience(props) {
    const { handleChange, handleDelete, handleAdd, experiences } = props;

    return (
        <ExperienceSection>
            <ExperienceTitle>Work Experience</ExperienceTitle>
            {experiences.map((exp, idx) => {
                return (
                    <JobExperience
                        index={idx}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />
                );
            })}
            <AddExperience onClick={handleAdd}>Add</AddExperience>
        </ExperienceSection>
    );
}

const JobExperience = ({ index, handleChange, handleDelete }) => {
    return (
        <ExperienceWrapper>
            <ExperienceHeader>
                <ExperienceNumber>Experience {index + 1}</ExperienceNumber>
                <ExperienceDelete onClick={() => handleDelete(index)}>
                    Delete
                </ExperienceDelete>
            </ExperienceHeader>
            <Input
                label='Position'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'position')}
            />
            <Input
                label='Company'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'company')}
            />
            <Input
                label='City'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'city')}
            />
            <Input
                label='From'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'from')}
            />
            <Input
                label='To'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'to')}
            />
        </ExperienceWrapper>
    );
};

const ExperienceSection = styled.div`
    padding: 1.5rem 0;
`;

const ExperienceTitle = styled.h1`
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
`;

const ExperienceWrapper = styled.div`
    padding: 0.5rem 0;
    margin: 0.5rem 0 1rem 0;
`;

const ExperienceHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;

    & > button {
        transition: opacity 300ms ease-out;
        opacity: 0;
    }

    &:hover > button {
        opacity: 1;
    }
`;

const ExperienceNumber = styled.h2`
    font-size: 1.2rem;
    margin-right: 2rem;
`;

const ExperienceDelete = styled(Button)`
    font-size: 1rem;
`;

const AddExperience = styled(Button)`
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
    margin-top: 1rem;
`;
