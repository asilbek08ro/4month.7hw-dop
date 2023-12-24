import React from 'react';
import './calculator.css';

class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      operation: '+',
      result: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculate = () => {
    try {
      const { num1, num2, operation } = this.state;

      let result;
      if (operation === '+') {
        result = parseFloat(num1) + parseFloat(num2);
      } else if (operation === '-') {
        result = parseFloat(num1) - parseFloat(num2);
      } else if (operation === '*') {
        result = parseFloat(num1) * parseFloat(num2);
      } else if (operation === '/') {
        result = parseFloat(num1) / parseFloat(num2);
      } else if (operation === '^') {
        result = Math.pow(parseFloat(num1), parseFloat(num2));
      } else if (operation === 'sqrt') {
        result = Math.sqrt(parseFloat(num1));
      }

      this.setState({ result: `Результат: ${result}` });
    } catch (error) {
      this.setState({ result: 'Ошибка! Проверьте ввод чисел.' });
    }
  };

  render() {
    const { num1, num2, operation, result } = this.state;

    return (
      <div className="calculator-container">
        <input
          className="input-field"
          type="text"
          name="num1"
          value={num1}
          onChange={this.handleChange}
        />
        <input
          className="input-field"
          type="text"
          name="num2"
          value={num2}
          onChange={this.handleChange}
        />

        <select
          className="select-field"
          name="operation"
          value={operation}
          onChange={this.handleChange}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
          <option value="^">^</option>
          <option value="sqrt">sqrt</option>
        </select>

        <button className="calculate-button" onClick={this.calculate}>
          Вычислить
        </button>

        <div className="result-container">{result}</div>
      </div>
    );
  }
}

export default CalculatorApp;
