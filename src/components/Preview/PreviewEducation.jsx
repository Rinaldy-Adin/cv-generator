import styled from 'styled-components';
import { CVDetails, CVPeriod, CVSection, CVSectionHeader } from '../Elements';

export default function PreviewEducation(props) {
    return (
        <div>
            <CVSectionHeader>Education</CVSectionHeader>
            {props.inputData.map((education) => {
                return (
                    <div>
                        <CVSection>
                            <CVPeriod>
                                {education.from.value} - {education.to.value}
                            </CVPeriod>
                            <CVDetails>
                                <University>
                                    {education.university.value}
                                </University>
                                <City>{education.city.value}</City>
                                <Degree>{education.degree.value}</Degree>
                            </CVDetails>
                        </CVSection>
                    </div>
                );
            })}
        </div>
    );
}

const University = styled.div``;
const City = styled.div``;
const Degree = styled.div``;
