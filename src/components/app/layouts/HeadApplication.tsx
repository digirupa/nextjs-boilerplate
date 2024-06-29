import React from "react";
import { NextSeo } from "next-seo";

type TProps = {
  title?: string;
};

const HeadApplication = (props: TProps) => {
  const { title = "Home" } = props;
  return (
    <NextSeo
      title={"Digirupa - " + title}
      description="Digirupa Next.js Boilerplate"
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
    />
  );
};

export default HeadApplication;
