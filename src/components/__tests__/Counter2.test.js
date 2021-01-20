import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "../Counter2";

/* describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    render(<Counter />);
    const counter = screen.getByText("0");
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    fireEvent.click(incrementButton);
    expect(counter.textContent).toEqual("1");
    fireEvent.click(decrementButton);
    expect(counter.textContent).toEqual("0");
  });
});
 */

/* Introducing the AAA pattern: Arrange, Act, Assert.
 */

describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    // Arrange
    render(<Counter />);
    const counter = screen.getByText("0");
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    // Act
    fireEvent.click(incrementButton);
    // Assert
    expect(counter.textContent).toEqual("1");
    // Act
    fireEvent.click(decrementButton);
    // Assert
    expect(counter.textContent).toEqual("0");
  });
});

//You arrange (= set up) your code so that everything is ready for the next steps.
/* Render the component.
Get the different elements of the DOM needed using queries and screen. */

/* function render(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'queries'>
  ): RenderResult

Basically, all this function does is render your component using ReactDOM.render (or hydrate, for server-side rendering) in a newly created div appended directly to document.body */

//You act, that is, you perform the steps a user is supposed to do (such as a click).

//You make assertions on what is supposed to happen.

/////////////////////////////////////////////////querry examples ////////////////////////////////////////////////////////////

//getByLabelText: searches for the label that matches the given text passed as an argument and then finds the element associated with that label

//getByText: searches for all elements with a text node with textContent matching the given text passed as an argument

//getByTitle: returns the element with a title attribute matching the given text passed as an argument

//getByPlaceholderText: searches for all elements with a placeholder attribute and finds one that matches the given text passed as an argument

//extract from : https://medium.com/better-programming/the-complete-beginners-guide-to-testing-react-apps-10964f515bec
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exemplo usando apenas elementos do RLT
/* describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    render(<Counter />);
    const counter = screen.getByText("0");
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    fireEvent.click(incrementButton);
    screen.getByText("1");

    fireEvent.click(decrementButton);
    screen.getByText("0");
  });
}); */

//Exemplo do mesmo teste feito no Enzyme

/* import React from "react";
import { shallow } from "enzyme";

import Counter from "./counter";

describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state("count")).toBe(0);

    wrapper.instance().increment();
    expect(wrapper.state("count")).toBe(1);

    wrapper.instance().decrement();
    expect(wrapper.state("count")).toBe(0);
  });
}); */

//Diferenças entre os 2 testes
//O Enzyme está testando detalhes da implementação ao seu próprio risco e isso pode ocasionar em:
//False positive: o teste passa mesmo que o código esteja quebrado
//False negative: o código está quebrado mesmo com a codificação correta

//Exemplo de falso positivo
//Queremos refatorar nosos componenetes pq queremos colocar qualquer count value, então removemos increment e decrement e colocamos um setCount, mas não atribuimos os métodos aos botões

//Exemplo de falso negativo
/* 

//exemplo de como deveriamos fazer um teste para testa-lo com Hooks no Enzyme

import React from "react"
import { shallow } from "enzyme"
import Counter from "./counter"
describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    const setValue = jest.fn()
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((initialValue) => [initialValue, setValue])
    
    const wrapper = shallow(<Counter />)
    wrapper.find("button").last().props().onClick()
    expect(setValue).toHaveBeenCalledWith(1)
    // We can't make any assumptions here on the real count displayed
    // In fact, the setCount setter is mocked!
    wrapper.find("button").first().props().onClick()
    expect(setValue).toHaveBeenCalledWith(-1)
  })
}) */
