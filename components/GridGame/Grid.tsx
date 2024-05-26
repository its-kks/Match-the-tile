import { Modal, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import ModalHome from './ModalHome'

// we are not destructuring props here
export default function Grid(props) {
  const emoji = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🥰', '😍', '😘',
    '😗', '😙', '😚', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐',
    '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢',
    '🤮', '🤧', '🥵', '🥶', '🥴', '😵']
  const [gameControl, setGameControl] = useState({})
  const changes = useRef(0);
  const initialObj = useRef({});
  const matched = useRef(0);
  const difficultHandler = {
    'Easy': {
      count: 12,
      size: 50,
      height: 100,
      width: 100
    },
    'Medium': {
      count: 20,
      size: 35,
      height: 80,
      width: 80
    },
    'Hard': {
      count: 40,
      size: 25,
      height: 60,
      width: 60
    }
  }
  const currDiff = props.route.params["difficulty"];
  const count = difficultHandler[currDiff].count

  useEffect(() => {
    let obj: { [key: number]: { name: string, show: boolean, child: number, disable: boolean } } = {};
    for (let i = 0; i < count; i++) {
      obj[i] = {
        name: '',
        show: false,
        child: -1,
        disable: false
      }
    }


    let mySet = new Set();


    for (let i = 0; i < count; i++) {
      if (!mySet.has(i)) {
        let first = i;
        mySet.add(first);
        let sec = first;
        while (mySet.has(sec)) {
          sec = Math.floor(Math.random() * (count - 1 - 0 + 1)) + 0;
        }
        mySet.add(sec);
        obj[first].child = sec;
        obj[sec].child = first;
        obj[first].name = emoji[sec];
        obj[sec].name = emoji[sec];
      }
    }
    initialObj.current = obj;
    let curr = JSON.parse(JSON.stringify(initialObj.current));
    setGameControl(curr);

  }, [])

  const increaseMatchTwo = () => {
    matched.current += 2
  }

  const updateChanges = (newvalue: number) => {
    changes.current = newvalue;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#505050' }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          Object.keys(gameControl).map((key) => (
            <Card key={key} id={key}
              gameControl={gameControl}
              setGameControl={setGameControl}
              changes={changes.current}
              updateChange={updateChanges}
              increaseMatchTwo={increaseMatchTwo}
              textSize={difficultHandler[currDiff].size}
              widthBox={difficultHandler[currDiff].width}
              heightBox={difficultHandler[currDiff].height}
            />
          ))
        }
      </View>
      <ModalHome show={matched.current == count} text={"You Won"} nav={props.navigation.navigate}></ModalHome>
    </View>
  )
}

const styles = StyleSheet.create({})
