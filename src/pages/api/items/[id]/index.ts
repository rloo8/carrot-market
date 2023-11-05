import type { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const item = await client.item.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  const terms = item?.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));
  const similarItems = await client.item.findMany({
    where: {
      OR: terms,
      NOT: {
        id: item?.id,
      },
    },
  });

  res.json({
    ok: true,
    item,
    similarItems,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    fn: handler,
  })
);
