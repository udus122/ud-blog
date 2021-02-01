import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

type IProps = {
  title: string;
  date: string;
  description: string;
  articleUrl: string;
  image?: string | undefined;
  imageTitle?: string | undefined;
};

const ArticleCard = ({
  title,
  date,
  description,
  articleUrl,
  image,
  imageTitle,
}: IProps): JSX.Element => {
  return (
    <Grid item xs={12} md={6}>
      <Link href={articleUrl} passHref>
        <CardActionArea component="a">
          <Card css={{ display: "flex" }}>
            <div css={{ flex: 1 }}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                css={{
                  width: 160,
                }}
                image={image}
                title={imageTitle}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
};

export default ArticleCard;
