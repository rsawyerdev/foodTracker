import { StyleSheet, TextInput,View, Button, Text, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';


export default function PantryScreen() {

    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate: any) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode: string) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
   
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='name'/>
      {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
      <Pressable onPress={showDatepicker}>
      <Text>Added: {date.toDateString()}</Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
