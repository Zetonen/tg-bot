import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Oval
      visible={true}
      height="20"
      width="20"
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
