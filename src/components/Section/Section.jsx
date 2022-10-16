import PropTypes from 'prop-types';
import { StyledSection, Title, Container } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Container>
        {title && <Title>{title}</Title>}
        {children}
      </Container>
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
