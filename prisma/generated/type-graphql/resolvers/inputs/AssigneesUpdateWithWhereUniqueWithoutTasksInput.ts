import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesUpdateWithoutTasksInput } from "../inputs/AssigneesUpdateWithoutTasksInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesUpdateWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class AssigneesUpdateWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneesUpdateWithoutTasksInput, {
    nullable: false
  })
  data!: AssigneesUpdateWithoutTasksInput;
}
