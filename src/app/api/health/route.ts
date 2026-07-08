export default async function handler() {
  return Response.json(
    {
      success: true,
      message: 'API is working',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
