import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    waitFor,
  } from '@testing-library/dom'
const Test = require('./ButtonView').default;

// const ex = new ButtonView();
console.log(new Test());

describe('ButtonView', () => {
    it('test',() => {
        const test = 1;
        
        // const t = ex.template.getButtonList();
        // element.getByText('사진을 선택하세요')
        // console.log(ex);
        expect(test).toBe(1);
    })
})