export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainStyle =
    "grid grid-rows-auto mb-20 gap-16 mx-4 max-w-3xl sm:mx-8 md:mx-auto";

  return (
    <>
      <main className={mainStyle}>{children}</main>
    </>
  );
}
