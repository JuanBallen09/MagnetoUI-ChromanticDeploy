import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useMediaQuery } from ".";
import { DimType } from "../../../utils/eventDispatcher";
import { withContextAppProvider } from "../../context/context.component";

interface DemoProps extends Record<DimType, string> {
  defaultText: string;
  [key: string]: string; // Add an index signature to allow for additional properties
}

const Demo: React.FC<DemoProps> = ({
  hd,
  lg,
  md,
  sm,
  xl,
  xs,
  xxl,
  defaultText,
}) => {
  const text = useMediaQuery(defaultText, {
    hd,
    lg,
    md,
    sm,
    xl,
    xs,
    xxl,
  });

  return <label>{text}</label>;
};

/**
 * This hook use the browser resize event to works,
 * change the resolution of the current window to see the behavior.
 */
const meta: Meta<typeof Demo> = {
  title: "Hooks/useMediaQuery",
  component: withContextAppProvider<DemoProps>(Demo),
  args: {
    defaultText: "Default Content",
  },
  argTypes: {
    defaultText: {
      description: "Default content show when no matches are found",
      type: "string",
    },
    xs: {
      description: "content for 480px resolution",
      type: "string",
    },
    sm: {
      description: "content for 576px resolution",
      type: "string",
    },
    md: {
      description: "content for 768px resolution",
      type: "string",
    },
    lg: {
      description: "content for 992px resolution",
      type: "string",
    },
    xl: {
      description: "content for 1200px resolution",
      type: "string",
    },
    hd: {
      description: "content for 1366px resolution",
      type: "string",
    },
    xxl: {
      description: "content for 1600px resolution",
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {};

export const Mobile: Story = {
  args: {
    xs: "Content for xs",
    sm: "Content for sm",
  },
};

export const Responsive: Story = {
  args: {
    xs: "Content for xs",
    sm: "Content for sm",
    hd: "Content for hd",
  },
};
