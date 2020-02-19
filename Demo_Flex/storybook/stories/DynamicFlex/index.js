import React from 'react';
import { View, Text } from 'react-native';
import { generateKnobs } from '../utils';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";


const generateView = (groupLabel) => {
    const topParentKnobs = generateKnobs(groupLabel)
    const noOfChildren = number("Child qt.", 0, {}, groupLabel);
    let childViews = null;
    if (noOfChildren) {
        childViews = []
        for (let count = 1; count <= noOfChildren; count++) {
            const v = generateView(groupLabel + count)
            childViews.push(v);
        }
    }

    return (
        <View style={{
            ...topParentKnobs,
            borderStyle: "dotted",
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "lightgray"
        }} >
            {childViews}

        </View>
    );
}


export default () => {

    return generateView('View');
}

