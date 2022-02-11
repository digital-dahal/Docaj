import { FileInput as Input } from "./Style";
const FileInput = ({ input, submitHandler, ...rest }) => {
  return <Input {...rest} type="file" onChange={submitHandler} />;
};
export default FileInput;
