import type {
  QueryResolvers,
  MutationResolvers,
  TeamRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const teams: QueryResolvers['teams'] = () => {
  return db.team.findMany()
}

export const team: QueryResolvers['team'] = ({ id }) => {
  return db.team.findUnique({
    where: { id },
  })
}

export const createTeam: MutationResolvers['createTeam'] = ({ input }) => {
  return db.team.create({
    data: input,
  })
}

export const updateTeam: MutationResolvers['updateTeam'] = ({ id, input }) => {
  return db.team.update({
    data: input,
    where: { id },
  })
}

export const deleteTeam: MutationResolvers['deleteTeam'] = ({ id }) => {
  return db.team.delete({
    where: { id },
  })
}

export const Team: TeamRelationResolvers = {
  entry: (_obj, { root }) => {
    return db.team.findUnique({ where: { id: root?.id } }).entry()
  },
  dog: (_obj, { root }) => {
    return db.team.findUnique({ where: { id: root?.id } }).dog()
  },
  cat: (_obj, { root }) => {
    return db.team.findUnique({ where: { id: root?.id } }).cat()
  },
}
