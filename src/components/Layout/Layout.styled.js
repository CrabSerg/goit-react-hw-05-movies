import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 3px solid rgb(108,180,184);
  box-shadow: 0px 1px 2px 0px rgba(0,255,255,0.7),
  1px 2px 4px 0px rgba(0,255,255,0.7),
  2px 4px 8px 0px rgba(0,255,255,0.7),
  2px 4px 16px 0px rgba(0,255,255,0.7);

  > nav {
    display: flex;
  }
`;

export const StyleLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  margin-left: 12px;
  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  &.active {
    color: #FFD100;
    background-color: #005EB8;
  }
`;
