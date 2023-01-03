import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateWithoutTasksInput } from "../inputs/AssigneesCreateWithoutTasksInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesCreateOrConnectWithoutTasksInput", {
  isAbstract: true
})
export class AssigneesCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneesCreateWithoutTasksInput, {
    nullable: false
  })
  create!: AssigneesCreateWithoutTasksInput;
}
