import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';

import TextWithBadge from '../TextWithBadge';
import styles from './styles';

const InputDate = ({answer, question, onChange}) => (
    <View style={styles.container}>
        <TextWithBadge question={question}/>
        <DatePicker
            style={styles.datePicker}
            date={answer}
            placeholder={question.placeholder}
            format={question.format}
            minDate={question.minDate}
            maxDate={question.maxDate}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={date => onChange({[question.name]: date})}
        />
    </View>
);

InputDate.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

InputDate.defaultProps = {
    answer: null
};

export default InputDate;
