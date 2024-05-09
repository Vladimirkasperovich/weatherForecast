import "components/showValidationError/showValidationError.css"


type ShowValidationErrors = {
  error: string;
};

export const ShowValidationErrors = ({ error }: ShowValidationErrors) => {
  return <p className='error'>{error}</p>;
};
