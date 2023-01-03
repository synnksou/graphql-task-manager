import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCountAggregate } from "../outputs/NotificationsCountAggregate";
import { NotificationsMaxAggregate } from "../outputs/NotificationsMaxAggregate";
import { NotificationsMinAggregate } from "../outputs/NotificationsMinAggregate";

@TypeGraphQL.ObjectType("NotificationsGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class NotificationsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  actionsId!: string;

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
