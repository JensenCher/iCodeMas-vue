import { db } from "@/db/index"
import { products } from "@/db/schema";
import { asc } from 'drizzle-orm';

export const getData = async () => {
    const data = await db.select().from(products).orderBy(asc(products.id));
    return data;
};