import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native'

import Header from '../../components/Header';
import BalanceItem from '../../components/BalanceItem';
import HistoricoList from '../../components/HistoricoList';
import CalendarModal from '../../components/CalendarModal';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Background, ListBalance, Area, Text, List } from './styles';

export default function Home(){
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovements(){
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params:{
          date: dateFormated
        }
      })

      const balance = await api.get('/balance', {
        params:{
          date: dateFormated
        }
      })

      if(isActive){
        setMovements(receives.data)
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => isActive = false;

  },[isFocused, dateMovements])

  async function handleDelete(id){
    try{
      await api.delete('receives/delete', {
        params:{
          item_id: id
        }
      })

      setDateMovements(new Date());
      
    }catch(err){
      console.log(err);
    }
  }

  function filterDateMovements(dateSelected){
    setDateMovements(dateSelected);
  }

  return (
    <Background>
      <Header title='Minhas movimentações'/>
      
      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" size={30} color='#121212'/>
        </TouchableOpacity>

        <Text>
          Ultimas movimentações
        </Text>
      </Area>

      <List
        data={movements}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <HistoricoList data={item} deleteItem={handleDelete} /> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <CalendarModal
          setVisible={ () => setModalVisible(false) }
          handleFilter={filterDateMovements}
        />
      </Modal>

    </Background>
  );
}