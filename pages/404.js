import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex gap-4 justify-center h-[100vh]">
      <div className="my-auto">
        <h1 className="text-3xl mx-2 font-bold">404</h1>
      </div>
      <div className="grid my-auto w-[40vw]">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-secondary-900">
          Looks like the page you are looking does not exists
        </p>
        <Link href="/" className="underline text-blue-500">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
