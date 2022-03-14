import Form from './Form/Form';
import Preview from './Preview/Preview';
import styled from 'styled-components';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ContentWrapper = styled.div`
    justify-self: stretch;
    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    overflow-y: hidden;

    padding: 1vh 0 5vh 0;

    & > div {
        width: 40vw;

        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 5px;
        background-color: #fff;
        margin: 0 20px;
    }
`;

const StyledForm = styled(Form)``;

const StyledPreview = styled(Preview)``;

export default function Main() {
    const [personal, setPersonal] = useState([
        {
            name: 'name',
            value: '',
            id: uuidv4(),
            label: 'Full Name',
        },
        {
            name: 'address',
            value: '',
            id: uuidv4(),
            label: 'Address',
        },
        {
            name: 'phone',
            value: '',
            id: uuidv4(),
            label: 'Phone number',
        },
        {
            name: 'email',
            value: '',
            id: uuidv4(),
            label: 'Email address',
        },
    ]);

    const [experiences, setExperience] = useState([
        {
            position: { value: '', id: uuidv4() },
            company: { value: '', id: uuidv4() },
            city: { value: '', id: uuidv4() },
            from: { value: '', id: uuidv4() },
            to: { value: '', id: uuidv4() },
        },
    ]);

    const [education, setEducation] = useState([
        {
            university: {
                value: '',
                id: uuidv4(),
            },
            city: { value: '', id: uuidv4() },
            degree: { value: '', id: uuidv4() },
            from: { value: '', id: uuidv4() },
            to: { value: '', id: uuidv4() },
        },
    ]);

    const handleChangePersonal = (event, id) => {
        const idx = personal.findIndex((e) => e.id === id);
        const newPersonal = [...personal];

        newPersonal[idx].value = event.target.value;

        setPersonal(newPersonal);
    };

    const handleChangeExp = (event, jobIdx, type) => {
        const newExperiences = [...experiences];
        newExperiences[jobIdx][type].value = event.target.value;

        setExperience(newExperiences);
    };

    const handleAddExp = () => {
        setExperience([
            ...experiences,
            {
                position: { value: '', id: uuidv4() },
                company: { value: '', id: uuidv4() },
                city: { value: '', id: uuidv4() },
                from: { value: '', id: uuidv4() },
                to: { value: '', id: uuidv4() },
            },
        ]);
    };

    const handleDeleteExp = (index) => {
        setExperience(
            experiences.filter((exp, idx) => {
                return idx !== index;
            })
        );
    };

    const handleChangeEdu = (event, eduIdx, type) => {
        const newEducation = [...education];
        newEducation[eduIdx][type].value = event.target.value;

        setEducation(newEducation);
    };

    const handleAddEdu = () => {
        setEducation([
            ...education,
            {
                university: { value: '', id: uuidv4() },
                city: { value: '', id: uuidv4() },
                degree: { value: '', id: uuidv4() },
                from: { value: '', id: uuidv4() },
                to: { value: '', id: uuidv4() },
            },
        ]);
    };

    const handleDeleteEdu = (index) => {
        setEducation(
            education.filter((exp, idx) => {
                return idx !== index;
            })
        );
    };

    return (
        <ContentWrapper>
            <StyledForm
                {...{ personal, education, experiences }}
                handleChangePersonal={handleChangePersonal}
                handleChangeExp={handleChangeExp}
                handleAddExp={handleAddExp}
                handleDeleteExp={handleDeleteExp}
                handleChangeEdu={handleChangeEdu}
                handleAddEdu={handleAddEdu}
                handleDeleteEdu={handleDeleteEdu}
            />
            <StyledPreview {...{ personal, education, experiences }} />
        </ContentWrapper>
    );
}
