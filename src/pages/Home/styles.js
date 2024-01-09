import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #F0F4FF;
`;

export const ListBalance = styled.FlatList`
  max-height: 200px;
`;

export const Area = styled.View`
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  align-items: baseline;
  align-items: center;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Text = styled.Text`
  margin-left: 5px;
  color: #121212;
  font-weight: bold;
  font-size: 18px;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #FFF;
`;