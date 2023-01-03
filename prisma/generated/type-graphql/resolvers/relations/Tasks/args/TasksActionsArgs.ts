import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsOrderByWithRelationInput } from "../../../inputs/ActionsOrderByWithRelationInput";
import { ActionsWhereInput } from "../../../inputs/ActionsWhereInput";
import { ActionsWhereUniqueInput } from "../../../inputs/ActionsWhereUniqueInput";
import { ActionsScalarFieldEnum } from "../../../../enums/ActionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TasksActionsArgs {
  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  where?: ActionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ActionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ActionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ActionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "targetType" | "targetId"> | undefined;
}
