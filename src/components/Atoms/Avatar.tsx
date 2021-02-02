import { Avatar as MuiAvatar } from "@material-ui/core";
import type { AvatarProps } from "@material-ui/core";

type IProps = AvatarProps;

const Avatar = ({ ...props }: IProps): JSX.Element => {
  return <MuiAvatar {...props} />;
};

export default Avatar;
