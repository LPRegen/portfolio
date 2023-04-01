import { CustomLink } from "components/CustomLink";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";

export default function NotFound() {
  return (
    <>
      <Heading as="h2">Not found</Heading>
      <Paragraph>Could not find the requested resource</Paragraph>
      <CustomLink href="/" title="Go back to home page.">
        Go back to Home
      </CustomLink>
    </>
  );
}
