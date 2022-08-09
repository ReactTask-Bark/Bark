import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "components/buttons/Button";

const FixedForm = () => {
  const navigate = useNavigate();
  return (
    <Form>
      <Button onClick={() => { navigate("/writepost"); }} buttonType="main">+</Button>
    </Form>
  );
};

const Form = styled.div`
  position: fixed;
  bottom: 100px;
  right: 25vw;
`;

export default FixedForm;
