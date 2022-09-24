import { act, renderHook } from '@testing-library/react';
import useForm from './hook';

const setup = params => renderHook(() => useForm(params));

test('should update the keyword', () => {
  const { result } = setup();

  act(() => {
    result.current.updateKeyword('hello');
  });

  expect(result.current.keyword).toBe('hello');
});

test('should use initial values', () => {
  const { result } = setup({ initialKeyword: 'matrix' });

  expect(result.current.keyword).toBe('matrix');
});
