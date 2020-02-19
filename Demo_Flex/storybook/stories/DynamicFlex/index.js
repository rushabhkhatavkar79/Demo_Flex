import React from 'react';
import { View, Text } from 'react-native';
import { generateKnobs } from '../utils';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";


const generateView = (groupLabel) => {

    const viewName = text("view name", groupLabel, groupLabel)
    const noOfChildren = number("Child qt.", 0, {}, groupLabel);

    const topParentKnobs = generateKnobs(groupLabel)

    let childViews = [];
    if (noOfChildren) {
        childViews = []
        for (let count = 1; count <= noOfChildren; count++) {
            const v = generateView(groupLabel + count)
            childViews.push(v);
        }
    } else {
        childViews.push(<Text key={groupLabel + "textNode"}>{viewName}</Text>);
    }

    return (
        <View key={groupLabel} style={{
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

