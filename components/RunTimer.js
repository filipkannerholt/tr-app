import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Entypo} from '@expo/vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer';

const RunTimer = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
        <View style={styles.container}>
          <View style={styles.body}>
          <Image source={require('../assets/trappRunTransparent.png')} style={{width: 100, height: 50}}></Image>
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
          style={styles.saveBtn}
          >
            <Entypo name="save" color={'#006c67'} size={30} margin={10}>
              <Text style={styles.btnTextSave}> SAVE</Text>
            </Entypo>
          </TouchableHighlight>
          </View>
          <View style={styles.clockContainer}>
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
          <TouchableHighlight
            underlayColor={'none'}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
          </View>
          </View>
        </View>
        
  );
};

export default RunTimer;

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  body:{
    alignItems: 'center',
    marginTop: 0,
  },

  sectionStyle:{
    width:'90%',
    height:'40%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  clockContainer:{
    height: 100,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#006c67',
    fontSize: 20,
    marginTop: 10,
  },

  timerBtn:{
    backgroundColor: '#006c67',
    width: '50%',
    height: '40%',
    marginLeft: 2,
    marginRight:2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  saveBtn:{
    width: '50%',
    height: '40%',
    marginLeft: 2,
    marginRight:2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#006c67',
  },

  btnText:{
    color: '#eeeeee',
    fontSize: 30,
    margin: 10,
  },

  btnTextSave:{
    color: '#006c67',
    fontSize: 30,
    margin: 10,
  },
});

const options = {
  container: {
    backgroundColor: '#eeeeee',
    opacity: 0.7,
    width: '100%',
    height: '80%',
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