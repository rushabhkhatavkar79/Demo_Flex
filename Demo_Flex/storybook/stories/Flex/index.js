import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { generateKnobs } from '../utils';

// import { select } from '@storybook/addon-knobs';




export default () => {

    const topParentKnobs = generateKnobs('Top Parent')

    const child1Knobs = generateKnobs('Child 1')
    const child11Knobs = generateKnobs('Child 11')
    const child12Knobs = generateKnobs('Child 12')
    const child13Knobs = generateKnobs('Child 13')

    const child2Knobs = generateKnobs('Child 2')

    const child3Knobs = generateKnobs('Child 3')
    return (
        <View style={topParentKnobs} >
            <View style={{
                ...child1Knobs,
                backgroundColor: "red",
            }}>
                <View style={{
                    ...child11Knobs,
                    backgroundColor: "pink",
                }}>
                    <Text>child 11</Text>
                </View>
                <View style={{
                    ...child12Knobs,
                    backgroundColor: "yellow",
                }}>
                    <Text>child 12</Text>
                </View>
                <View style={{
                    ...child13Knobs,
                    backgroundColor: "gray",
                }}>
                    <Text>child 13</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: "green",
                ...child2Knobs,
            }}><Text >box1</Text></View>
            <View style={{
                backgroundColor: "blue",
                ...child3Knobs,
            }}><Text >box1</Text></View>

        </View>
    );
}

