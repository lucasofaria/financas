import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #F0F3FF;
  border-radius: 6px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 14px;
  padding: 10px;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  gap: 5px;
`;

export const TipoText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-style: italic;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
`;