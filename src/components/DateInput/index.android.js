import React, { useMemo, useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {

  const [show, setShow] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  )

  function handleSelected(event, selectedDate) {
    setShow(false);
    onChange(selectedDate);
  }


  return (
    <Container>
      <DateButton onPress={() => setShow(true)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
        {show && <DateTimePicker mode={"date"} display="spinner" value={date} onChange={handleSelected} />}
      </DateButton>
    </Container>
  );
}
