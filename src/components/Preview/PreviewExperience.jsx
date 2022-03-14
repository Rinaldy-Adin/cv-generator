import styled from 'styled-components';
import { CVSectionHeader, CVSection, CVPeriod, CVDetails } from '../Elements';

export default function PreviewExperience(props) {
    return (
        <div>
            <CVSectionHeader>Work Experience</CVSectionHeader>
            {props.inputData.map((experience) => {
                return (
                    <CVSection>
                        <CVPeriod>
                            {experience.from.value} - {experience.to.value}
                        </CVPeriod>
                        <CVDetails>
                            <ExperiencePosition>
                                {experience.position.value}
                            </ExperiencePosition>
                            <ExperienceCompany>
                                {experience.company.value}
                            </ExperienceCompany>
                            <ExperienceCity>
                                {experience.city.value}
                            </ExperienceCity>
                        </CVDetails>
                    </CVSection>
                );
            })}
        </div>
    );
}

const ExperiencePosition = styled.div`
    font-weight: 800;
`;

const ExperienceCompany = styled.div``;
const ExperienceCity = styled.div``;
