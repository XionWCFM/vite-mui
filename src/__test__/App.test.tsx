import axios from 'axios';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('axios');

describe('이게 테스트다', () => {
  const app = render(<App />);

  test('페이지가 제대로 뜨나요?', () => {
    const a = app.getByText('엄준식');
    expect(a).toBeInTheDocument();
  });
});
// Tests
// test("Renders main page correctly", async () => {
//   // Setup
//   render(<App />);
//   const buttonCount = await screen.findByRole("button");
//   const codeCount = await screen.queryByText(/The count is now:/);

//   // Pre Expecations
//   expect(buttonCount.innerHTML).toBe("count is 0");
//   // Instead of:
//   expect(codeCount).toBeNull();
//   expect(codeCount).not.toBeInTheDocuement();

//   // Init
//   fireEvent.click(buttonCount);
//   fireEvent.click(buttonCount);

//   // Post Expectations
//   expect(buttonCount.innerHTML).toBe("count is 2");
//   expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
// });
