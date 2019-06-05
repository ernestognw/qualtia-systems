import { setTag } from "./functions";

const Typography = ({
  color,
  greyColor,
  variant,
  children,
  gutterBottom,
  marginT,
  marginB,
  marginL,
  marginR,
  align,
  fontSize,
  className,
  underline,
  weight
}) => {
  return setTag(
    color,
    greyColor,
    variant,
    gutterBottom,
    children,
    marginT,
    marginB,
    marginL,
    marginR,
    align,
    fontSize,
    className,
    underline,
    weight
  );
};

export default Typography;
