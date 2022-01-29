
import styled from 'styled-components';

export const ChatOnlineContainer= styled.div`

    display: flex;
`;

export const ChatOnlineFriend = styled.div`

  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;

`;

export const ChatOnlineImgContainer = styled.div`
 
  position: relative;
  margin-right: 10px;
`;

export const ChatOnlineImg = styled.img`
 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid white;
`;

export const ChatOnlineBadger = styled.div`
  
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: 2px;
  right: 2px;
`;

