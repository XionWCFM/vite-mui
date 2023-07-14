import { FallbackProps } from 'react-error-boundary';
import { AxiosError } from 'axios';

interface IErrorFallback extends FallbackProps {
  error: AxiosError;
}

const ErrorFallback = ({ error, resetErrorBoundary }: IErrorFallback) => {
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={() => resetErrorBoundary()}></button>
    </div>
  );
};

export default ErrorFallback;
