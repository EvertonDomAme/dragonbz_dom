import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: #c21500;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #ffc500, #c21500);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #ffc500, #c21500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 0 2rem;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 8rem;
  height: 3rem;
  padding: 0.2rem 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem 1rem;
  transition: 200ms;

  &:hover {
    background: #373B44;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: rgba(39, 231, 245, 0.719) 0px 20px 30px -10px;

  }
`;

export const LinkedPage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
