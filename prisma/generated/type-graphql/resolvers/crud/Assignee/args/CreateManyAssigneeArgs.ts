import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeCreateManyInput } from "../../../inputs/AssigneeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAssigneeArgs {
  @TypeGraphQL.Field(_type => [AssigneeCreateManyInput], {
    nullable: false
  })
  data!: AssigneeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
