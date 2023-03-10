import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyActionsInput } from "../inputs/NotificationCreateManyActionsInput";

@TypeGraphQL.InputType("NotificationCreateManyActionsInputEnvelope", {
  isAbstract: true
})
export class NotificationCreateManyActionsInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyActionsInput], {
    nullable: false
  })
  data!: NotificationCreateManyActionsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
