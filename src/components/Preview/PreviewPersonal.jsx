import { Component } from 'react';
import styled from 'styled-components';
import { CVSectionHeader, CVDetails, CVSection } from '../Elements';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

export default function PreviewPersonal(props) {
    return (
        <div>
            <CVSectionHeader>Personal Information</CVSectionHeader>
            <PersonalSection>
                <CVDetails>
                    {props.inputData.map((data, idx) => {
                        if (!idx) return;
                        return (
                            <PersonalInfo>
                                <Description>
                                    <div>
                                        {capitalize(props.inputData[idx].name)}
                                    </div>
                                    <div>:</div>
                                </Description>
                                <Info>{props.inputData[idx].value}</Info>
                            </PersonalInfo>
                        );
                    })}
                </CVDetails>
            </PersonalSection>
        </div>
    );
}

const PersonalSection = styled(CVSection)``;

const PersonalInfo = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 1rem;
`;

const Description = styled.div`
    width: 5rem;
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 1;
    margin-left: 0.5rem;
    overflow-wrap: break-word;
`;
