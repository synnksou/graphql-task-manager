import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("CommentsCreateManyTasksInput", {
  isAbstract: true
})
export class CommentsCreateManyTasksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}