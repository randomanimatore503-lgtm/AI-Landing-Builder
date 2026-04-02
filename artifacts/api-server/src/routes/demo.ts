import { Router } from "express";
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { SubmitDemoRequestBody } from "@workspace/api-zod";

const router = Router();

const DATA_FILE = path.resolve(process.cwd(), "data", "demo-requests.json");

async function readRequests(): Promise<object[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeRequests(requests: object[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(requests, null, 2), "utf-8");
}

router.post("/demo-requests", async (req, res) => {
  const parsed = SubmitDemoRequestBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  const entry = {
    id: randomUUID(),
    ...parsed.data,
    submittedAt: new Date().toISOString(),
  };

  const requests = await readRequests();
  requests.push(entry);
  await writeRequests(requests);

  req.log.info({ id: entry.id }, "Demo request saved");

  res.status(201).json({
    success: true,
    id: entry.id,
    message: "Thank you! We'll be in touch shortly.",
  });
});

export default router;
