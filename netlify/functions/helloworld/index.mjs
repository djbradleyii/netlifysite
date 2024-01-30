export default async (req, context) => {
  return new Response({ "message": "Hello, World!" });
};

export const config = {
  path: "/hello",
};
