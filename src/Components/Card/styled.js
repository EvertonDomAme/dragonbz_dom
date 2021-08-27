import styled from 'styled-components';

export const CardArea = styled.div`
  background: #c21500;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #c21500, #ffc500);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #c21500, #ffc500); 
  padding: 1rem;
  border-radius: 50%;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: 200ms;
  width: 14rem;
  height: 17rem;
  overflow: hidden;

  &:hover {
    margin: 0.8rem;
    background: #373B44;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #4286f4, #373B44 );  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: rgba(39, 231, 245, 0.719) 0px 20px 30px -10px;
    
  }
`;

export const CardImg = styled.img`
  border-radius: 50%;
  position: center center;
  width: 12rem;
  height: 12rem;
  object-fit: cover;
`;

export const Name = styled.h3`
  color: #ffa800;
  text-align: center;
  padding: 0.5rem;
  font-size: 1.3em;
  }
`;