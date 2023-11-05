import type { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { name, price, description } = req.body;
  const { user } = req.session;

  const item = await client.item.create({
    data: {
      name,
      price: +price,
      description,
      image: "xx",
      user: {
        connect: { id: user?.id },
      },
    },
  });

  res.json({
    ok: true,
    item,
  });
  res.status(200).end();
}

export default withApiSession(
  withHandler({
    method: "POST",
    fn: handler,
  })
);
