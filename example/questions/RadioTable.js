/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

const styles = StyleSheet.create({
    rowContainer: {
        paddingHorizontal: 4,
    }
});

const RadioTable = ({answer, question, onChange}) => {
    const change = (value, callback) => callback({target: {name: question.name, value}});
    console.log(question);
    return (
        <View style={styles.rowContainer}>
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
        </View>
    );
};

RadioTable.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

RadioTable.defaultProps = {
    answer: null
};

export default RadioTable;
