import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesOrderByRelationAggregateInput } from "../inputs/AssigneesOrderByRelationAggregateInput";
import { CommentsOrderByRelationAggregateInput } from "../inputs/CommentsOrderByRelationAggregateInput";
import { NotificationsOrderByRelationAggregateInput } from "../inputs/NotificationsOrderByRelationAggregateInput";
import { TasksOrderByRelationAggregateInput } from "../inputs/TasksOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password_digest?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  preferences?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_sign_in_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TasksOrderByRelationAggregateInput, {
    nullable: true
  })
  Tasks?: TasksOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsOrderByRelationAggregateInput, {
    nullable: true
  })
  Comments?: CommentsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsOrderByRelationAggregateInput, {
    nullable: true
  })
  Notifications?: NotificationsOrderByRelationAggregateInput | undefined;

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
