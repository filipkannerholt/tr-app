import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
import { Entypo} from '@expo/vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer';

const RunTimer = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
        <View style={styles.sectionStyle}>
          <TouchableHighlight
          style={styles.timerBtn}
          onPress={() => {
            setIsStopwatchStart(!isStopwatchStart);
            setResetStopwatch(false);
          }}>
            <Entypo name="stopwatch" color={'#eeeeee'} size={30} margin={10}>
              <Text style={styles.btnText}>
                {!isStopwatchStart ? ' START' : ' STOP'}
              </Text>
            </Entypo>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'none'}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
          
          <Stopwatch
            laps
            start={isStopwatchStart}
            // To start
            reset={resetStopwatch}
            // To reset
            options={options}
            // Options for the styling
            getTime={(time) => {
              console.log(time);
            }}
            //get time (use for saving the result)
          />
        </View>
  );
};

export default RunTimer;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },

  sectionStyle:{
    width:'90%',
    height:'40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    borderRadius: 5,
  },

  buttonText: {
    color: '#006c67',
    fontSize: 20,
    marginTop: 10,
  },

  timerBtn:{
    backgroundColor: '#006c67',
    opacity: 0.7,
    width: '100%',
    height: '30%',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 1.5,
    shadowOffset: {height: 1.2, width: 1.2},
    shadowColor: '#015c58',
    borderWidth: 1,
    borderColor: '#f6ae2d',
  },

  btnText:{
    color: '#eeeeee',
    fontSize: 30,
    margin: 10,
  },
});

const options = {
  container: {
    backgroundColor: '#eeeeee',
    opacity: 0.7,
    width: '100%',
    height: '40%',
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f6ae2d'
  },
  
  text: {
    color: '#006c67',
    fontSize: 40,
  },
};