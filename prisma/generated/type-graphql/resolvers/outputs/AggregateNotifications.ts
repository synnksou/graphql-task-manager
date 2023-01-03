import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCountAggregate } from "../outputs/NotificationsCountAggregate";
import { NotificationsMaxAggregate } from "../outputs/NotificationsMaxAggregate";
import { NotificationsMinAggregate } from "../outputs/NotificationsMinAggregate";

@TypeGraphQL.ObjectType("AggregateNotifications", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateNotifications {
  @TypeGraphQL.Field(_type => NotificationsCountAggregate, {
    nullable: true
  })
  _count!: NotificationsCountAggregate | null;

  @TypeGraphQL.Field(_type => NotificationsMinAggregate, {
    nullable: true
  })
  _min!: NotificationsMinAggregate | null;

  @TypeGraphQL.Field(_type => NotificationsMaxAggregate, {
    nullable: true
  })
  _max!: NotificationsMaxAggregate | null;
}
