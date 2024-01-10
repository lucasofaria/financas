import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34,34,34, 0.4);
`;

export const ModalContent = styled.View`
  flex: 2;
  background-color: #FFF;
  justify-content: center;
  padding: 14px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  background-color: #3B3DBF;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  height: 45px;
`;

export const ButtonFilterText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;