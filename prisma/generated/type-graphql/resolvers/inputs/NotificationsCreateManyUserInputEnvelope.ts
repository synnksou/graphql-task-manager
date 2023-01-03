import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyUserInput } from "../inputs/NotificationsCreateManyUserInput";

@TypeGraphQL.InputType("NotificationsCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class NotificationsCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationsCreateManyUserInput], {
    nullable: false
  })
  data!: NotificationsCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
