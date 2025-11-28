import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })

import { PrismaClient } from '../src/generated/prisma/client'
export const prismaClient = new PrismaClient({ adapter })