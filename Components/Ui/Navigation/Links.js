import Link, { LinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import React from "react";

// eslint-disable-next-line react/display-name
const Links = React.forwardRef(({ href, children, ...props }, ref) => {
  return (
    <Link href={href} passHref>
      <ChakraLink ref={ref} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
});

export default Links;
