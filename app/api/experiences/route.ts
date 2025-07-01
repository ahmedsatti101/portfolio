import { apiGet, apiPost } from "../database";

export async function POST(req: Request) {
  const body = await req.json();
  const { company, role, logo, date } = body;

  const query = `
    INSERT INTO experiences(company, role, logo, date)
    VALUES(?, ?, ?, ?)
`;
  const values = [company, role, logo, date];

  let status, resBody;
  await apiPost(query, values)
    .then(() => {
      status = 200;
      resBody = { message: "Successfully added experience" };
    })
    .catch((err) => {
      status = 400;
      resBody = err;
    });

  return Response.json(resBody, {
    status,
  });
}

export async function GET() {
  const query = `
    SELECT * FROM experiences
  `;

  let status, body;
  try {
    await apiGet(query)
      .then((res) => {
        status = 200;
        body = res;
      })
      .catch((err: Error) => {
        status = 400;
        body = { error: err };
      });
    return Response.json(body, {
      status,
    });
  } catch (error) {
    console.error(error.message);
    return Response.json({ error }, { status: 400 });
  }
}
