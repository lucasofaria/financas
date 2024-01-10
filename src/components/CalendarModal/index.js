import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Container, ModalContent, ButtonFilter, ButtonFilterText } from './styles';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }){
  const [dateNow, setDateNow] = useState(new Date());
  const [marketDates, setMarketDates] = useState({});

  function handleOnDayPress(date){
    setDateNow(new Date(date.dateString));

    let marketDay = {};

    marketDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#FFF'
    }

    setMarketDates(marketDay);
  }

  function handleFilterDate(){
    handleFilter(dateNow);
    setVisible();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={marketDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayTextColor: '#00adf5',
            selectedDayBackgroundColor: '#FFF'
          }}
        />

        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>

    </Container>
  );
}