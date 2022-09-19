import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";


export const Section = styled.section`
padding: ${p => p.theme.space[9]}px 0 ${p => p.theme.space[8]}px;
@media (${breakpoints.tablet}) {
    padding: ${p => p.theme.space[9]}px 0 ${p => p.theme.space[8]}px;
};
@media (${breakpoints.laptop}) {
    padding: ${p => p.theme.space[9]}px 0 ${p => p.theme.space[12]}px;
};
`;