import React, { useState } from 'react';
import { DatePickerIOS } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const { opened, setOpened } = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  )

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted} </DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            Date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            local="pt"
            mode="date"
          />
        </Picker>

      )}
    </Container>
  );
}
