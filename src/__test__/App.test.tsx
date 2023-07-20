import App from '../App';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/react';

test('카운터는 0으로 시작해야합니다.', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');

  expect(counterElement).toHaveTextContent('0');
});

test('마이너스버튼이 있어야합니다.', () => {
  render(<App />);

  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});
test('플러스버튼이 있어야합니다.', () => {
  render(<App />);

  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('플러스 버튼을 클릭하면 값이 올라야합니다.', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('1');
});

test('마이너스 버튼을 클릭하면 값이 올라야합니다.', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('-1');
});

test('on/off 버튼은 파랑색이어야한다.', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

test('-,+버튼은 on/off버튼에 따라 disabled 되어야한다.', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId('plus-button');

  expect(plusButtonElement).toBeDisabled();
});
