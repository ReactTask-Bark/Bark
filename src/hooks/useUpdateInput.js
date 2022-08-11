// 미사용
import { useState } from "react";
import { useParam } from "react-router-dom";

const useUpdateInput = (payload) => {
  const [contents, setContents] = useState({
    contents: payload,
  });

  const param = useParam().postid;

  const handler = (param, contents) => {};

  return [contents, handler];
};

export default useUpdateInput;
