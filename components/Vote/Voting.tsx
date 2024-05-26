import React, { useEffect, useRef, useState } from 'react';
import {

  Text,
  View,
  Button,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';

import Radio from './Radio';

function Voting(): React.JSX.Element {
  const [age, setAge] = useState(18);
  const [dispAge, setDispAge] = useState('');
  const [currCountry, setCurrCountry] = useState(1);


  let countryVotingAge = [
    {
      id: 1,
      country: 'India',
      age: 18

    },
    {
      id: 2,
      country: 'USA',
      age: 18

    },
    {
      id: 3,
      country: 'UK',
      age: 18

    },
    {
      id: 4,
      country: 'Japan',
      age: 20

    },
    {
      id: 5,
      country: 'South Korea',
      age: 19

    },
    {
      id: 6,
      country: 'Australia',
      age: 18

    },
    {
      id: 7,
      country: 'Brazil',
      age: 16

    },
    {
      id: 8,
      country: 'Canada',
      age: 18

    },
    {
      id: 9,
      country: 'China',
      age: 18

    },
    {
      id: 10,
      country: 'France',
      age: 18

    },
    {
      id: 11,
      country: 'Germany',
      age: 18

    },
    {
      id: 12,
      country: 'Italy',
      age: 18

    },
    {
      id: 13,
      country: 'Mexico',
      age: 18

    },
    {
      id: 14,
      country: 'Russia',
      age: 18

    },
    {
      id: 15,
      country: 'Spain',
      age: 18

    },
    {
      id: 16,
      country: 'Sweden',
      age: 18

    },
    {
      id: 17,
      country: 'Switzerland',
      age: 18

    },
    {
      id: 18,
      country: 'Turkey',
      age: 18

    },
    {
      id: 19,
      country: 'Nigeria',
      age: 18

    },
    {
      id: 20,
      country: 'South Africa',
      age: 18

    }
  ];

  const increaseAge = () => {
    let currAge = age;
    currAge += 1;
    setAge(currAge);
  }

  const decreaseAge = () => {
    let currAge = age;
    currAge -= 1;
    setAge(currAge);
  }

  const returnEligibility = (age: number) => {
    if (currCountry == -1) {
      return "Please select country"
    }
    else if (age >= 0 && age <= 17) {
      return "Not eligible to vote"
    }
    else if (age >= countryVotingAge[currCountry].age && age <= 150) {
      return "You are eligible to vote"
    }
    else {
      return "Oh! cure of aging found"
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}> Check Your Eligibility </Text>
      <TextInput
        placeholder='Enter your age'
        onChangeText={(text) => {
          let isNumber = !isNaN(parseFloat(text));
          if (isNumber) {
            setAge(parseInt(text));
            setDispAge(text);
          } else {
            setDispAge('')
          }
        }}
        value={dispAge}
        style={styles.textInput}
      />

      <Text>{'Your current age: ' + age}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseAge} >
        <Text>Age++</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decreaseAge} disabled={age <= 0 ? true : false}>
        <Text>Age --</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: age >= 18 ? 'green' : 'red' }}>{returnEligibility(age)}</Text>


      <FlatList
        data={countryVotingAge}
        renderItem={({ item }) => (
          <Radio name={item.country} id={item.id} prev={currCountry} setPrev={setCurrCountry} />
        )}
        keyExtractor={item => item.id.toString()}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    padding: 3,
    margin: 2
  },
  textInput: {
    borderColor: 'cyan',
    margin: 5,
    borderWidth: 1,
    borderRadius: 5

  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10
  }

})

export default Voting;


