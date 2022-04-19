import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const operatorAdd = container.find('#operator_add')
    const button4 = container.find('#number4');
    const operatorEquals = container.find('#operator-equals');

    button1.simulate('click');
    operatorAdd.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const operatorSubtract = container.find('#operator-subtract')
    const operatorEquals = container.find('#operator-equals');

    button7.simulate('click');
    operatorSubtract.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');

  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const operatorMultiply = container.find('#operator-multiply')
    const operatorEquals = container.find('#operator-equals');
    button5.simulate('click');
    operatorMultiply.simulate('click');
    button3.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');    
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const operatorDivide = container.find('#operator-divide')
    const operatorEquals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    operatorDivide.simulate('click');
    button7.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');    
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');    
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const operatorMultiply = container.find('#operator-multiply')
    const operatorAdd = container.find('#operator_add')
    const operatorEquals = container.find('#operator-equals');
    button2.simulate('click');
    operatorMultiply.simulate('click');
    button4.simulate('click');
    operatorAdd.simulate('click');
    button7.simulate('click');
    operatorMultiply.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.find('#number2');   
    const button4 = container.find('#number4');
    const operatorAdd = container.find('#operator_add')
    const clear = container.find('#clear');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    operatorAdd.simulate('click');
    button4.simulate('click');
    clear.simulate('click');
    button2.simulate('click');
    expect(runningTotal.text()).toEqual('2');
  })

})


