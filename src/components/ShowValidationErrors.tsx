type ShowValidationErrors = {
  error: string;
};

export const ShowValidationErrors = ({ error }: ShowValidationErrors) => {
  return <p>{error}</p>;
};
