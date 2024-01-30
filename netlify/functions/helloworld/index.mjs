export default async (req, context) => {
  const functionResponse = new String("Hello, World!");
  const options = { status: 200, statusText: "Serverless Response" };
  return new Response(functionResponse, options);
};

export const config = {
  path: "/hello",
};
