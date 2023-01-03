import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsCreateManyInput } from "../../../inputs/NotificationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNotificationsArgs {
  @TypeGraphQL.Field(_type => [NotificationsCreateManyInput], {
    nullable: false
  })
  data!: NotificationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
