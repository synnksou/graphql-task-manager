import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesOrderByWithRelationInput } from "../../../inputs/AssigneesOrderByWithRelationInput";
import { AssigneesWhereInput } from "../../../inputs/AssigneesWhereInput";
import { AssigneesWhereUniqueInput } from "../../../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  where?: AssigneesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssigneesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AssigneesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: true
  })
  cursor?: AssigneesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
