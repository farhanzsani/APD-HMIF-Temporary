import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { prokers } from "@/lib/schema";
import { getSession } from "@/lib/auth";
import { canManageRoles } from "@/lib/permissions";
import { updateProkerSchema } from "@/lib/validation";
import { eq } from "drizzle-orm";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  if (!canManageRoles(session.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const proker = await db.query.prokers.findFirst({
    where: eq(prokers.id, id),
    with: {
      division: true,
      period: true,
      panitia: { with: { user: true } },
    },
  });

  if (!proker) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ proker });
}

export async function PUT(request: Request, { params }: RouteContext) {
  const { id } = await params;
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  if (!canManageRoles(session.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const json = await request.json().catch(() => null);
  const parsed = updateProkerSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  await db.update(prokers).set(parsed.data as any).where(eq(prokers.id, id));

  const proker = await db.query.prokers.findFirst({
    where: eq(prokers.id, id),
    with: { division: true, period: true, panitia: { with: { user: true } } },
  });

  return NextResponse.json({ proker });
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  const { id } = await params;
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  if (!canManageRoles(session.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  await db.delete(prokers).where(eq(prokers.id, id));

  return NextResponse.json({ ok: true });
}
