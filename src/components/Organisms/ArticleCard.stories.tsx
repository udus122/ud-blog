import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";

import ArticleCardComponent from "./ArticleCard";

export default {
  title: "Design System/Organisms/ArticleCard",
  component: ArticleCardComponent,
};

const Template: Story<ComponentProps<typeof ArticleCardComponent>> = (args) => (
  <ArticleCardComponent {...args} />
);

export const ArticleCard = Template.bind({});
ArticleCard.args = {
  title: "VPS借りた時にまずやること",
  date: new Date(),
  description: `オレオレサーバー初期設定
  ユーザーの追加
  # Ubuntu
  adduser :username
  # デフォルトでは、ホームディレクトリが作成されないので、-m をつける
  useradd -m :username
  `,
  articleUrl: "https://blog.udusd.dev/articles/oreore-server-init",
  imageUrl: "https://source.unsplash.com/random",
  imageTitle: "Random",
};
