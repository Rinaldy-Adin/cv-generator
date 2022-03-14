import styled from 'styled-components';
import { Button } from '../Elements';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

export default function Education(props) {
    const { handleChange, handleDelete, handleAdd, education } = props;

    return (
        <EducationSection>
            <EducationTitle>Past Education</EducationTitle>
            {education.map((exp, idx) => {
                return (
                    <EducationEntry
                        index={idx}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />
                );
            })}
            <AddEducation onClick={handleAdd}>Add</AddEducation>
        </EducationSection>
    );
}

const EducationEntry = ({ index, handleChange, handleDelete }) => {
    return (
        <EducationWrapper>
            <EducationHeader>
                <EducationNumber>Education {index + 1}</EducationNumber>
                <EducationDelete onClick={() => handleDelete(index)}>
                    Delete
                </EducationDelete>
            </EducationHeader>
            <Input
                label='University'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'university')}
            />
            <Input
                label='City'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'city')}
            />
            <Input
                label='Degree'
                formID={uuidv4()}
                handleChange={(e) => handleChange(e, index, 'degree')}
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
        </EducationWrapper>
    );
};

const EducationSection = styled.div`
    padding: 1.5rem 0;
`;

const EducationTitle = styled.h1`
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
`;

const EducationWrapper = styled.div`
    padding: 0.5rem 0;
    margin: 0.5rem 0 1rem 0;
`;

const EducationHeader = styled.div`
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

const EducationNumber = styled.h2`
    font-size: 1.2rem;
    margin-right: 2rem;
`;

const EducationDelete = styled(Button)`
    font-size: 1rem;
`;

const AddEducation = styled(Button)`
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
    margin-top: 1rem;
`;
