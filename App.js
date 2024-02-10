import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.calculatorWrap}>
        <View style={styles.calculatorDisplay}></View>
        <View style={styles.box}>
          <TouchableOpacity
            style={[styles.btn, styles.bt2, styles.clear]}
            data-value='clear'
          >
            <Text style={styles.text}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='/'>
            <Text style={styles.text}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.backspace]}
            data-value='←'
          >
            <Text style={styles.text}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} data-value='7'>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='8'>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='9'>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='*'>
            <Text style={styles.text}>x</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} data-value='4'>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='5'>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='6'>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='-'>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} data-value='1'>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='2'>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='3'>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} data-value='+'>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.btn1]} data-value='0'>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]} data-value='='>
            <Text style={styles.text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  calculatorWrap:{
    backgroundColor: 'rgba( 229, 160, 197, 0.35 )',
    width: '100%',
    height: '100%',
    paddingTop: 80,
  },
  calculatorDisplay:{
    padding: 10,
    textAlign: 'right',
    fontSize: '1.2em',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '35%',
    width: '100%',
    color: '#fff',
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  },
  btn:{
    padding: 20,
    // margin: 5,
    cursor: 'pointer',
  backgroundColor: 'rgba( 172, 201, 235, 0.2 )',
  borderRadius: 10,
  borderColor: 'red',
  borderWidth: 1,
  // flex: 1,
  width: '20%',
  height: '15%',
  alignItems: 'center',
  justifyContent: 'center',
},
box: {
  flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
    width: '100%',
    // marginHorizontal: 10,
    justifyContent: 'center',
    gap: 17,
    
  },
  clear:{
    width: '43%',
  },
  btn1:{
    width: '70%',
  },
  text:{
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }
});
