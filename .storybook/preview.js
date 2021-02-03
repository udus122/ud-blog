import { withNextRouter } from "storybook-addon-next-router";
import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/config/chakra/theme";

addDecorator(
  withNextRouter({
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  })
);

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
