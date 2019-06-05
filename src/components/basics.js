import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
} from 'styled-system';

export const Box = styled.div`
  ${space}
  ${layout}
  ${background}
  ${border}
`;

export const Flex = styled(Box)`
  ${flexbox}
`;

Flex.defaultProps = {
  flex: 'true',
};

export const Title = styled.h1`
  ${typography}
  ${space}
  ${color}
`;

Title.defaultProps = {
  fontSize: '2em',
};

export const Paragraph = styled.p`
  ${typography}
  ${space}
  ${color}
`;
