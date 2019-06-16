import styled from "styled-components";
import Typography from "components/common/typography";
import CommonInput from "components/common/input";

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  flex-direction: column;
`;

const TitleBlock = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const Input = styled(CommonInput)`
  width: 70px;
  margin-left: 20px;
`;

const Image = styled.img`
  max-width: 300px;
  width: 100%;
`;

export { LoaderContainer, TitleBlock, Title, Input, Image };
