import type {
  QueryResolvers,
  MutationResolvers,
  RaidRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const raids: QueryResolvers['raids'] = () => {
  return db.raid.findMany()
}

export const raid: QueryResolvers['raid'] = ({ id }) => {
  return db.raid.findUnique({
    where: { id },
  })
}

export const createRaid: MutationResolvers['createRaid'] = ({ input }) => {
  return db.raid.create({
    data: input,
  })
}

export const updateRaid: MutationResolvers['updateRaid'] = ({ id, input }) => {
  return db.raid.update({
    data: input,
    where: { id },
  })
}

export const deleteRaid: MutationResolvers['deleteRaid'] = ({ id }) => {
  return db.raid.delete({
    where: { id },
  })
}

export const Raid: RaidRelationResolvers = {
  raider: (_obj, { root }) => {
    return db.raid.findUnique({ where: { id: root?.id } }).raider()
  },
  trick: (_obj, { root }) => {
    return db.raid.findUnique({ where: { id: root?.id } }).trick()
  },
  courtStatus: (_obj, { root }) => {
    return db.raid.findUnique({ where: { id: root?.id } }).courtStatus()
  },
}
