import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";

@TypeGraphQL.ObjectType("NotificationGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class NotificationGroupBy {
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

  @TypeGraphQL.Field(_type => NotificationCountAggregate, {
    nullable: true
  })
  _count!: NotificationCountAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMinAggregate, {
    nullable: true
  })
  _min!: NotificationMinAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMaxAggregate, {
    nullable: true
  })
  _max!: NotificationMaxAggregate | null;
}
