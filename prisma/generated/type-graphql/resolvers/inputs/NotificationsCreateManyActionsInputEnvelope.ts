import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyActionsInput } from "../inputs/NotificationsCreateManyActionsInput";

@TypeGraphQL.InputType("NotificationsCreateManyActionsInputEnvelope", {
  isAbstract: true
})
export class NotificationsCreateManyActionsInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationsCreateManyActionsInput], {
    nullable: false
  })
  data!: NotificationsCreateManyActionsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
