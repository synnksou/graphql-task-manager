import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsOrderByRelationAggregateInput } from "../inputs/ActionsOrderByRelationAggregateInput";
import { AssigneesOrderByRelationAggregateInput } from "../inputs/AssigneesOrderByRelationAggregateInput";
import { CommentsOrderByRelationAggregateInput } from "../inputs/CommentsOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TasksOrderByWithRelationInput", {
  isAbstract: true
})
export class TasksOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  ownerId?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentsOrderByRelationAggregateInput, {
    nullable: true
  })
  Comments?: CommentsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActionsOrderByRelationAggregateInput, {
    nullable: true
  })
  Actions?: ActionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AssigneesOrderByRelationAggregateInput, {
    nullable: true
  })
  Assignees?: AssigneesOrderByRelationAggregateInput | undefined;
}
