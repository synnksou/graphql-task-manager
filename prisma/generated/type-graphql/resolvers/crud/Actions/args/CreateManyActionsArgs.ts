import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsCreateManyInput } from "../../../inputs/ActionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActionsArgs {
  @TypeGraphQL.Field(_type => [ActionsCreateManyInput], {
    nullable: false
  })
  data!: ActionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
