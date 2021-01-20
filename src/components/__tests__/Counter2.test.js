import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./counter";

describe("<Counter />", () => {
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
});

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