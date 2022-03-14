import React from 'react';
import styled from 'styled-components';
import FormHeader from './FormHeader';
import Input from './Input';
import Experience from './Experience';
import Education from './Education';

export default function Form(props) {
    const {
        personal,
        experiences,
        education,
        handleChangePersonal,
        handleChangeExp,
        handleAddExp,
        handleDeleteExp,
        handleChangeEdu,
        handleAddEdu,
        handleDeleteEdu,
    } = props;

    return (
        <FormCard>
            <FormHeader />
            <FormContainer>
                {personal.map((inputs, idx) => {
                    return (
                        <Input
                            label={personal[idx].label}
                            formID={personal[idx].id}
                            handleChange={handleChangePersonal}
                        />
                    );
                })}
                <Experience
                    handleChange={handleChangeExp}
                    handleAdd={handleAddExp}
                    handleDelete={handleDeleteExp}
                    experiences={experiences}
                />
                <Education
                    handleChange={handleChangeEdu}
                    handleAdd={handleAddEdu}
                    handleDelete={handleDeleteEdu}
                    education={education}
                />
            </FormContainer>
        </FormCard>
    );
}

const FormCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormContainer = styled.div`
    padding: 1rem 20px;
    flex: 1;
    overflow-y: auto;
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
`;
