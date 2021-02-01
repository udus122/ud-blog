import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Copyright from "@/components/Organisms/Copyright";

type IProps = {
  title: string;
  description: string;
};

const Footer = ({ description, title }: IProps): JSX.Element => {
  const theme = useTheme();
  return (
    <footer
      css={{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
