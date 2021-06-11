import { fireEvent, render, screen } from '@testing-library/react';
import Icon from './Icon';

test('click event is called with the selected icon', () => {
  const selectionContext = {
    icon: 'rock',
    setPlayerChoice: jest.fn()
  };

  render(
    <Icon icon={selectionContext.icon} onIconSelect={selectionContext.setPlayerChoice}/>
  );

  const btnElement = screen.getByRole('button');

  fireEvent(
    btnElement,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  )

  expect(selectionContext.setPlayerChoice).toHaveBeenCalledWith('rock');
});