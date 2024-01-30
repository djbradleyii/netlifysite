export default async (req, context) => {
  console.log("req: ", req);
  console.log("context: ", context);
  return new Response(`Hello, World! Welcome`);
};

export const config = {
  path: "/hello",
};
