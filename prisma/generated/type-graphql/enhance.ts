import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Tasks: crudResolvers.TasksCrudResolver,
  Comments: crudResolvers.CommentsCrudResolver,
  Actions: crudResolvers.ActionsCrudResolver,
  Notifications: crudResolvers.NotificationsCrudResolver,
  Assignees: crudResolvers.AssigneesCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Tasks: {
    aggregateTasks: actionResolvers.AggregateTasksResolver,
    createManyTasks: actionResolvers.CreateManyTasksResolver,
    createOneTasks: actionResolvers.CreateOneTasksResolver,
    deleteManyTasks: actionResolvers.DeleteManyTasksResolver,
    deleteOneTasks: actionResolvers.DeleteOneTasksResolver,
    findFirstTasks: actionResolvers.FindFirstTasksResolver,
    findFirstTasksOrThrow: actionResolvers.FindFirstTasksOrThrowResolver,
    findManyTasks: actionResolvers.FindManyTasksResolver,
    findUniqueTasks: actionResolvers.FindUniqueTasksResolver,
    findUniqueTasksOrThrow: actionResolvers.FindUniqueTasksOrThrowResolver,
    groupByTasks: actionResolvers.GroupByTasksResolver,
    updateManyTasks: actionResolvers.UpdateManyTasksResolver,
    updateOneTasks: actionResolvers.UpdateOneTasksResolver,
    upsertOneTasks: actionResolvers.UpsertOneTasksResolver
  },
  Comments: {
    aggregateComments: actionResolvers.AggregateCommentsResolver,
    createManyComments: actionResolvers.CreateManyCommentsResolver,
    createOneComments: actionResolvers.CreateOneCommentsResolver,
    deleteManyComments: actionResolvers.DeleteManyCommentsResolver,
    deleteOneComments: actionResolvers.DeleteOneCommentsResolver,
    findFirstComments: actionResolvers.FindFirstCommentsResolver,
    findFirstCommentsOrThrow: actionResolvers.FindFirstCommentsOrThrowResolver,
    findManyComments: actionResolvers.FindManyCommentsResolver,
    findUniqueComments: actionResolvers.FindUniqueCommentsResolver,
    findUniqueCommentsOrThrow: actionResolvers.FindUniqueCommentsOrThrowResolver,
    groupByComments: actionResolvers.GroupByCommentsResolver,
    updateManyComments: actionResolvers.UpdateManyCommentsResolver,
    updateOneComments: actionResolvers.UpdateOneCommentsResolver,
    upsertOneComments: actionResolvers.UpsertOneCommentsResolver
  },
  Actions: {
    aggregateActions: actionResolvers.AggregateActionsResolver,
    createManyActions: actionResolvers.CreateManyActionsResolver,
    createOneActions: actionResolvers.CreateOneActionsResolver,
    deleteManyActions: actionResolvers.DeleteManyActionsResolver,
    deleteOneActions: actionResolvers.DeleteOneActionsResolver,
    findFirstActions: actionResolvers.FindFirstActionsResolver,
    findFirstActionsOrThrow: actionResolvers.FindFirstActionsOrThrowResolver,
    findManyActions: actionResolvers.FindManyActionsResolver,
    findUniqueActions: actionResolvers.FindUniqueActionsResolver,
    findUniqueActionsOrThrow: actionResolvers.FindUniqueActionsOrThrowResolver,
    groupByActions: actionResolvers.GroupByActionsResolver,
    updateManyActions: actionResolvers.UpdateManyActionsResolver,
    updateOneActions: actionResolvers.UpdateOneActionsResolver,
    upsertOneActions: actionResolvers.UpsertOneActionsResolver
  },
  Notifications: {
    aggregateNotifications: actionResolvers.AggregateNotificationsResolver,
    createManyNotifications: actionResolvers.CreateManyNotificationsResolver,
    createOneNotifications: actionResolvers.CreateOneNotificationsResolver,
    deleteManyNotifications: actionResolvers.DeleteManyNotificationsResolver,
    deleteOneNotifications: actionResolvers.DeleteOneNotificationsResolver,
    findFirstNotifications: actionResolvers.FindFirstNotificationsResolver,
    findFirstNotificationsOrThrow: actionResolvers.FindFirstNotificationsOrThrowResolver,
    findManyNotifications: actionResolvers.FindManyNotificationsResolver,
    findUniqueNotifications: actionResolvers.FindUniqueNotificationsResolver,
    findUniqueNotificationsOrThrow: actionResolvers.FindUniqueNotificationsOrThrowResolver,
    groupByNotifications: actionResolvers.GroupByNotificationsResolver,
    updateManyNotifications: actionResolvers.UpdateManyNotificationsResolver,
    updateOneNotifications: actionResolvers.UpdateOneNotificationsResolver,
    upsertOneNotifications: actionResolvers.UpsertOneNotificationsResolver
  },
  Assignees: {
    aggregateAssignees: actionResolvers.AggregateAssigneesResolver,
    createManyAssignees: actionResolvers.CreateManyAssigneesResolver,
    createOneAssignees: actionResolvers.CreateOneAssigneesResolver,
    deleteManyAssignees: actionResolvers.DeleteManyAssigneesResolver,
    deleteOneAssignees: actionResolvers.DeleteOneAssigneesResolver,
    findFirstAssignees: actionResolvers.FindFirstAssigneesResolver,
    findFirstAssigneesOrThrow: actionResolvers.FindFirstAssigneesOrThrowResolver,
    findManyAssignees: actionResolvers.FindManyAssigneesResolver,
    findUniqueAssignees: actionResolvers.FindUniqueAssigneesResolver,
    findUniqueAssigneesOrThrow: actionResolvers.FindUniqueAssigneesOrThrowResolver,
    groupByAssignees: actionResolvers.GroupByAssigneesResolver,
    updateManyAssignees: actionResolvers.UpdateManyAssigneesResolver,
    updateOneAssignees: actionResolvers.UpdateOneAssigneesResolver,
    upsertOneAssignees: actionResolvers.UpsertOneAssigneesResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Tasks: ["aggregateTasks", "createManyTasks", "createOneTasks", "deleteManyTasks", "deleteOneTasks", "findFirstTasks", "findFirstTasksOrThrow", "findManyTasks", "findUniqueTasks", "findUniqueTasksOrThrow", "groupByTasks", "updateManyTasks", "updateOneTasks", "upsertOneTasks"],
  Comments: ["aggregateComments", "createManyComments", "createOneComments", "deleteManyComments", "deleteOneComments", "findFirstComments", "findFirstCommentsOrThrow", "findManyComments", "findUniqueComments", "findUniqueCommentsOrThrow", "groupByComments", "updateManyComments", "updateOneComments", "upsertOneComments"],
  Actions: ["aggregateActions", "createManyActions", "createOneActions", "deleteManyActions", "deleteOneActions", "findFirstActions", "findFirstActionsOrThrow", "findManyActions", "findUniqueActions", "findUniqueActionsOrThrow", "groupByActions", "updateManyActions", "updateOneActions", "upsertOneActions"],
  Notifications: ["aggregateNotifications", "createManyNotifications", "createOneNotifications", "deleteManyNotifications", "deleteOneNotifications", "findFirstNotifications", "findFirstNotificationsOrThrow", "findManyNotifications", "findUniqueNotifications", "findUniqueNotificationsOrThrow", "groupByNotifications", "updateManyNotifications", "updateOneNotifications", "upsertOneNotifications"],
  Assignees: ["aggregateAssignees", "createManyAssignees", "createOneAssignees", "deleteManyAssignees", "deleteOneAssignees", "findFirstAssignees", "findFirstAssigneesOrThrow", "findManyAssignees", "findUniqueAssignees", "findUniqueAssigneesOrThrow", "groupByAssignees", "updateManyAssignees", "updateOneAssignees", "upsertOneAssignees"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateTasksArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTasksArgs: ["data", "skipDuplicates"],
  CreateOneTasksArgs: ["data"],
  DeleteManyTasksArgs: ["where"],
  DeleteOneTasksArgs: ["where"],
  FindFirstTasksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTasksOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTasksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTasksArgs: ["where"],
  FindUniqueTasksOrThrowArgs: ["where"],
  GroupByTasksArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTasksArgs: ["data", "where"],
  UpdateOneTasksArgs: ["data", "where"],
  UpsertOneTasksArgs: ["where", "create", "update"],
  AggregateCommentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentsArgs: ["data", "skipDuplicates"],
  CreateOneCommentsArgs: ["data"],
  DeleteManyCommentsArgs: ["where"],
  DeleteOneCommentsArgs: ["where"],
  FindFirstCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCommentsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentsArgs: ["where"],
  FindUniqueCommentsOrThrowArgs: ["where"],
  GroupByCommentsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentsArgs: ["data", "where"],
  UpdateOneCommentsArgs: ["data", "where"],
  UpsertOneCommentsArgs: ["where", "create", "update"],
  AggregateActionsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyActionsArgs: ["data", "skipDuplicates"],
  CreateOneActionsArgs: ["data"],
  DeleteManyActionsArgs: ["where"],
  DeleteOneActionsArgs: ["where"],
  FindFirstActionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstActionsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueActionsArgs: ["where"],
  FindUniqueActionsOrThrowArgs: ["where"],
  GroupByActionsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyActionsArgs: ["data", "where"],
  UpdateOneActionsArgs: ["data", "where"],
  UpsertOneActionsArgs: ["where", "create", "update"],
  AggregateNotificationsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyNotificationsArgs: ["data", "skipDuplicates"],
  CreateOneNotificationsArgs: ["data"],
  DeleteManyNotificationsArgs: ["where"],
  DeleteOneNotificationsArgs: ["where"],
  FindFirstNotificationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstNotificationsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueNotificationsArgs: ["where"],
  FindUniqueNotificationsOrThrowArgs: ["where"],
  GroupByNotificationsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyNotificationsArgs: ["data", "where"],
  UpdateOneNotificationsArgs: ["data", "where"],
  UpsertOneNotificationsArgs: ["where", "create", "update"],
  AggregateAssigneesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAssigneesArgs: ["data", "skipDuplicates"],
  CreateOneAssigneesArgs: ["data"],
  DeleteManyAssigneesArgs: ["where"],
  DeleteOneAssigneesArgs: ["where"],
  FindFirstAssigneesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAssigneesOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssigneesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAssigneesArgs: ["where"],
  FindUniqueAssigneesOrThrowArgs: ["where"],
  GroupByAssigneesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAssigneesArgs: ["data", "where"],
  UpdateOneAssigneesArgs: ["data", "where"],
  UpsertOneAssigneesArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Tasks: relationResolvers.TasksRelationsResolver,
  Comments: relationResolvers.CommentsRelationsResolver,
  Actions: relationResolvers.ActionsRelationsResolver,
  Notifications: relationResolvers.NotificationsRelationsResolver,
  Assignees: relationResolvers.AssigneesRelationsResolver
};
const relationResolversInfo = {
  User: ["Tasks", "Comments", "Notifications", "Assignees"],
  Tasks: ["ownerId", "Comments", "Actions", "Assignees"],
  Comments: ["User", "Tasks", "children", "parent"],
  Actions: ["Tasks", "Notifications"],
  Notifications: ["User", "Actions"],
  Assignees: ["User", "Tasks"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  Tasks: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  Comments: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  Actions: ["id", "name", "targetType", "targetId"],
  Notifications: ["id", "readed_at", "userId", "actionsId"],
  Assignees: ["id", "tasksId", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateTasks: ["_count", "_min", "_max"],
  TasksGroupBy: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateComments: ["_count", "_min", "_max"],
  CommentsGroupBy: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateActions: ["_count", "_min", "_max"],
  ActionsGroupBy: ["id", "name", "targetType", "targetId", "_count", "_min", "_max"],
  AggregateNotifications: ["_count", "_min", "_max"],
  NotificationsGroupBy: ["id", "readed_at", "userId", "actionsId", "_count", "_min", "_max"],
  AggregateAssignees: ["_count", "_min", "_max"],
  AssigneesGroupBy: ["id", "tasksId", "userId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["Tasks", "Comments", "Notifications", "Assignees"],
  UserCountAggregate: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "name", "password_digest", "active", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "name", "password_digest", "active", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  TasksCount: ["Comments", "Actions", "Assignees"],
  TasksCountAggregate: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt", "_all"],
  TasksMinAggregate: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TasksMaxAggregate: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  CommentsCount: ["children"],
  CommentsCountAggregate: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt", "_all"],
  CommentsMinAggregate: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  CommentsMaxAggregate: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  ActionsCount: ["Notifications"],
  ActionsCountAggregate: ["id", "name", "targetType", "targetId", "_all"],
  ActionsMinAggregate: ["id", "name", "targetType", "targetId"],
  ActionsMaxAggregate: ["id", "name", "targetType", "targetId"],
  NotificationsCountAggregate: ["id", "readed_at", "userId", "actionsId", "_all"],
  NotificationsMinAggregate: ["id", "readed_at", "userId", "actionsId"],
  NotificationsMaxAggregate: ["id", "readed_at", "userId", "actionsId"],
  AssigneesCountAggregate: ["id", "tasksId", "userId", "_all"],
  AssigneesMinAggregate: ["id", "tasksId", "userId"],
  AssigneesMaxAggregate: ["id", "tasksId", "userId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "Notifications", "createdAt", "updatedAt", "Assignees"],
  UserOrderByWithRelationInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "Notifications", "createdAt", "updatedAt", "Assignees"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  TasksWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "ownerId", "date", "state", "userId", "Comments", "Actions", "createdAt", "updatedAt", "Assignees"],
  TasksOrderByWithRelationInput: ["id", "title", "description", "ownerId", "date", "state", "userId", "Comments", "Actions", "createdAt", "updatedAt", "Assignees"],
  TasksWhereUniqueInput: ["id"],
  TasksOrderByWithAggregationInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt", "_count", "_max", "_min"],
  TasksScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  CommentsWhereInput: ["AND", "OR", "NOT", "id", "User", "Tasks", "targetType", "children", "parent", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  CommentsOrderByWithRelationInput: ["id", "User", "Tasks", "targetType", "children", "parent", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  CommentsWhereUniqueInput: ["id"],
  CommentsOrderByWithAggregationInput: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CommentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  ActionsWhereInput: ["AND", "OR", "NOT", "id", "name", "Tasks", "targetType", "targetId", "Notifications"],
  ActionsOrderByWithRelationInput: ["id", "name", "Tasks", "targetType", "targetId", "Notifications"],
  ActionsWhereUniqueInput: ["id"],
  ActionsOrderByWithAggregationInput: ["id", "name", "targetType", "targetId", "_count", "_max", "_min"],
  ActionsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "targetType", "targetId"],
  NotificationsWhereInput: ["AND", "OR", "NOT", "id", "User", "Actions", "readed_at", "userId", "actionsId"],
  NotificationsOrderByWithRelationInput: ["id", "User", "Actions", "readed_at", "userId", "actionsId"],
  NotificationsWhereUniqueInput: ["id"],
  NotificationsOrderByWithAggregationInput: ["id", "readed_at", "userId", "actionsId", "_count", "_max", "_min"],
  NotificationsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "readed_at", "userId", "actionsId"],
  AssigneesWhereInput: ["AND", "OR", "NOT", "id", "User", "Tasks", "tasksId", "userId"],
  AssigneesOrderByWithRelationInput: ["id", "User", "Tasks", "tasksId", "userId"],
  AssigneesWhereUniqueInput: ["id"],
  AssigneesOrderByWithAggregationInput: ["id", "tasksId", "userId", "_count", "_max", "_min"],
  AssigneesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tasksId", "userId"],
  UserCreateInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "Notifications", "createdAt", "updatedAt", "Assignees"],
  UserUpdateInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "Notifications", "createdAt", "updatedAt", "Assignees"],
  UserCreateManyInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  TasksCreateInput: ["id", "title", "description", "ownerId", "date", "state", "Comments", "Actions", "createdAt", "updatedAt", "Assignees"],
  TasksUpdateInput: ["id", "title", "description", "ownerId", "date", "state", "Comments", "Actions", "createdAt", "updatedAt", "Assignees"],
  TasksCreateManyInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TasksUpdateManyMutationInput: ["id", "title", "description", "date", "state", "createdAt", "updatedAt"],
  CommentsCreateInput: ["id", "User", "Tasks", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentsUpdateInput: ["id", "User", "Tasks", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentsCreateManyInput: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  CommentsUpdateManyMutationInput: ["id", "targetType", "content", "createdAt", "updatedAt"],
  ActionsCreateInput: ["id", "name", "Tasks", "targetType", "Notifications"],
  ActionsUpdateInput: ["id", "name", "Tasks", "targetType", "Notifications"],
  ActionsCreateManyInput: ["id", "name", "targetType", "targetId"],
  ActionsUpdateManyMutationInput: ["id", "name", "targetType"],
  NotificationsCreateInput: ["id", "User", "Actions", "readed_at"],
  NotificationsUpdateInput: ["id", "User", "Actions", "readed_at"],
  NotificationsCreateManyInput: ["id", "readed_at", "userId", "actionsId"],
  NotificationsUpdateManyMutationInput: ["id", "readed_at"],
  AssigneesCreateInput: ["id", "User", "Tasks"],
  AssigneesUpdateInput: ["id", "User", "Tasks"],
  AssigneesCreateManyInput: ["id", "tasksId", "userId"],
  AssigneesUpdateManyMutationInput: ["id"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TasksListRelationFilter: ["every", "some", "none"],
  CommentsListRelationFilter: ["every", "some", "none"],
  NotificationsListRelationFilter: ["every", "some", "none"],
  AssigneesListRelationFilter: ["every", "some", "none"],
  TasksOrderByRelationAggregateInput: ["_count"],
  CommentsOrderByRelationAggregateInput: ["_count"],
  NotificationsOrderByRelationAggregateInput: ["_count"],
  AssigneesOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  UserMaxOrderByAggregateInput: ["id", "name", "password_digest", "active", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "name", "password_digest", "active", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserRelationFilter: ["is", "isNot"],
  EnumStateFilter: ["equals", "in", "notIn", "not"],
  ActionsListRelationFilter: ["every", "some", "none"],
  ActionsOrderByRelationAggregateInput: ["_count"],
  TasksCountOrderByAggregateInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TasksMaxOrderByAggregateInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TasksMinOrderByAggregateInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumStateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  TasksRelationFilter: ["is", "isNot"],
  EnumTargetTypeNullableFilter: ["equals", "in", "notIn", "not"],
  CommentsRelationFilter: ["is", "isNot"],
  CommentsCountOrderByAggregateInput: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  CommentsMaxOrderByAggregateInput: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  CommentsMinOrderByAggregateInput: ["id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  EnumTargetTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumNameNullableFilter: ["equals", "in", "notIn", "not"],
  ActionsCountOrderByAggregateInput: ["id", "name", "targetType", "targetId"],
  ActionsMaxOrderByAggregateInput: ["id", "name", "targetType", "targetId"],
  ActionsMinOrderByAggregateInput: ["id", "name", "targetType", "targetId"],
  EnumNameNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ActionsRelationFilter: ["is", "isNot"],
  NotificationsCountOrderByAggregateInput: ["id", "readed_at", "userId", "actionsId"],
  NotificationsMaxOrderByAggregateInput: ["id", "readed_at", "userId", "actionsId"],
  NotificationsMinOrderByAggregateInput: ["id", "readed_at", "userId", "actionsId"],
  AssigneesCountOrderByAggregateInput: ["id", "tasksId", "userId"],
  AssigneesMaxOrderByAggregateInput: ["id", "tasksId", "userId"],
  AssigneesMinOrderByAggregateInput: ["id", "tasksId", "userId"],
  TasksCreateNestedManyWithoutOwnerIdInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentsCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationsCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssigneesCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  TasksUpdateManyWithoutOwnerIdNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentsUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationsUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssigneesUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  CommentsCreateNestedManyWithoutTasksInput: ["create", "connectOrCreate", "createMany", "connect"],
  ActionsCreateNestedManyWithoutTasksInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssigneesCreateNestedManyWithoutTasksInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumStateFieldUpdateOperationsInput: ["set"],
  CommentsUpdateManyWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ActionsUpdateManyWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssigneesUpdateManyWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  TasksCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  CommentsCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentsCreateNestedOneWithoutChildrenInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TasksUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableEnumTargetTypeFieldUpdateOperationsInput: ["set"],
  CommentsUpdateManyWithoutParentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentsUpdateOneWithoutChildrenNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TasksCreateNestedOneWithoutActionsInput: ["create", "connectOrCreate", "connect"],
  NotificationsCreateNestedManyWithoutActionsInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableEnumNameFieldUpdateOperationsInput: ["set"],
  TasksUpdateOneRequiredWithoutActionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NotificationsUpdateManyWithoutActionsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  ActionsCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActionsUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutAssigneesInput: ["create", "connectOrCreate", "connect"],
  TasksCreateNestedOneWithoutAssigneesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutAssigneesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TasksUpdateOneRequiredWithoutAssigneesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumStateFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumStateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTargetTypeNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTargetTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumNameNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumNameNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  TasksCreateWithoutOwnerIdInput: ["id", "title", "description", "date", "state", "Comments", "Actions", "createdAt", "updatedAt", "Assignees"],
  TasksCreateOrConnectWithoutOwnerIdInput: ["where", "create"],
  TasksCreateManyOwnerIdInputEnvelope: ["data", "skipDuplicates"],
  CommentsCreateWithoutUserInput: ["id", "Tasks", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentsCreateOrConnectWithoutUserInput: ["where", "create"],
  CommentsCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  NotificationsCreateWithoutUserInput: ["id", "Actions", "readed_at"],
  NotificationsCreateOrConnectWithoutUserInput: ["where", "create"],
  NotificationsCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  AssigneesCreateWithoutUserInput: ["id", "Tasks"],
  AssigneesCreateOrConnectWithoutUserInput: ["where", "create"],
  AssigneesCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  TasksUpsertWithWhereUniqueWithoutOwnerIdInput: ["where", "update", "create"],
  TasksUpdateWithWhereUniqueWithoutOwnerIdInput: ["where", "data"],
  TasksUpdateManyWithWhereWithoutOwnerIdInput: ["where", "data"],
  TasksScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  CommentsUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CommentsUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CommentsUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CommentsScalarWhereInput: ["AND", "OR", "NOT", "id", "targetType", "parentId", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  NotificationsUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  NotificationsUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  NotificationsUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  NotificationsScalarWhereInput: ["AND", "OR", "NOT", "id", "readed_at", "userId", "actionsId"],
  AssigneesUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AssigneesUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AssigneesUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AssigneesScalarWhereInput: ["AND", "OR", "NOT", "id", "tasksId", "userId"],
  UserCreateWithoutTasksInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Comments", "Notifications", "createdAt", "updatedAt", "Assignees"],
  UserCreateOrConnectWithoutTasksInput: ["where", "create"],
  CommentsCreateWithoutTasksInput: ["id", "User", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentsCreateOrConnectWithoutTasksInput: ["where", "create"],
  CommentsCreateManyTasksInputEnvelope: ["data", "skipDuplicates"],
  ActionsCreateWithoutTasksInput: ["id", "name", "targetType", "Notifications"],
  ActionsCreateOrConnectWithoutTasksInput: ["where", "create"],
  ActionsCreateManyTasksInputEnvelope: ["data", "skipDuplicates"],
  AssigneesCreateWithoutTasksInput: ["id", "User"],
  AssigneesCreateOrConnectWithoutTasksInput: ["where", "create"],
  AssigneesCreateManyTasksInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutTasksInput: ["update", "create"],
  UserUpdateWithoutTasksInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Comments", "Notifications", "createdAt", "updatedAt", "Assignees"],
  CommentsUpsertWithWhereUniqueWithoutTasksInput: ["where", "update", "create"],
  CommentsUpdateWithWhereUniqueWithoutTasksInput: ["where", "data"],
  CommentsUpdateManyWithWhereWithoutTasksInput: ["where", "data"],
  ActionsUpsertWithWhereUniqueWithoutTasksInput: ["where", "update", "create"],
  ActionsUpdateWithWhereUniqueWithoutTasksInput: ["where", "data"],
  ActionsUpdateManyWithWhereWithoutTasksInput: ["where", "data"],
  ActionsScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "targetType", "targetId"],
  AssigneesUpsertWithWhereUniqueWithoutTasksInput: ["where", "update", "create"],
  AssigneesUpdateWithWhereUniqueWithoutTasksInput: ["where", "data"],
  AssigneesUpdateManyWithWhereWithoutTasksInput: ["where", "data"],
  UserCreateWithoutCommentsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Notifications", "createdAt", "updatedAt", "Assignees"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  TasksCreateWithoutCommentsInput: ["id", "title", "description", "ownerId", "date", "state", "Actions", "createdAt", "updatedAt", "Assignees"],
  TasksCreateOrConnectWithoutCommentsInput: ["where", "create"],
  CommentsCreateWithoutParentInput: ["id", "User", "Tasks", "targetType", "children", "content", "createdAt", "updatedAt"],
  CommentsCreateOrConnectWithoutParentInput: ["where", "create"],
  CommentsCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  CommentsCreateWithoutChildrenInput: ["id", "User", "Tasks", "targetType", "parent", "content", "createdAt", "updatedAt"],
  CommentsCreateOrConnectWithoutChildrenInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create"],
  UserUpdateWithoutCommentsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Notifications", "createdAt", "updatedAt", "Assignees"],
  TasksUpsertWithoutCommentsInput: ["update", "create"],
  TasksUpdateWithoutCommentsInput: ["id", "title", "description", "ownerId", "date", "state", "Actions", "createdAt", "updatedAt", "Assignees"],
  CommentsUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  CommentsUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  CommentsUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  CommentsUpsertWithoutChildrenInput: ["update", "create"],
  CommentsUpdateWithoutChildrenInput: ["id", "User", "Tasks", "targetType", "parent", "content", "createdAt", "updatedAt"],
  TasksCreateWithoutActionsInput: ["id", "title", "description", "ownerId", "date", "state", "Comments", "createdAt", "updatedAt", "Assignees"],
  TasksCreateOrConnectWithoutActionsInput: ["where", "create"],
  NotificationsCreateWithoutActionsInput: ["id", "User", "readed_at"],
  NotificationsCreateOrConnectWithoutActionsInput: ["where", "create"],
  NotificationsCreateManyActionsInputEnvelope: ["data", "skipDuplicates"],
  TasksUpsertWithoutActionsInput: ["update", "create"],
  TasksUpdateWithoutActionsInput: ["id", "title", "description", "ownerId", "date", "state", "Comments", "createdAt", "updatedAt", "Assignees"],
  NotificationsUpsertWithWhereUniqueWithoutActionsInput: ["where", "update", "create"],
  NotificationsUpdateWithWhereUniqueWithoutActionsInput: ["where", "data"],
  NotificationsUpdateManyWithWhereWithoutActionsInput: ["where", "data"],
  UserCreateWithoutNotificationsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "createdAt", "updatedAt", "Assignees"],
  UserCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  ActionsCreateWithoutNotificationsInput: ["id", "name", "Tasks", "targetType"],
  ActionsCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UserUpsertWithoutNotificationsInput: ["update", "create"],
  UserUpdateWithoutNotificationsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "createdAt", "updatedAt", "Assignees"],
  ActionsUpsertWithoutNotificationsInput: ["update", "create"],
  ActionsUpdateWithoutNotificationsInput: ["id", "name", "Tasks", "targetType"],
  UserCreateWithoutAssigneesInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "Notifications", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutAssigneesInput: ["where", "create"],
  TasksCreateWithoutAssigneesInput: ["id", "title", "description", "ownerId", "date", "state", "Comments", "Actions", "createdAt", "updatedAt"],
  TasksCreateOrConnectWithoutAssigneesInput: ["where", "create"],
  UserUpsertWithoutAssigneesInput: ["update", "create"],
  UserUpdateWithoutAssigneesInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "Tasks", "Comments", "Notifications", "createdAt", "updatedAt"],
  TasksUpsertWithoutAssigneesInput: ["update", "create"],
  TasksUpdateWithoutAssigneesInput: ["id", "title", "description", "ownerId", "date", "state", "Comments", "Actions", "createdAt", "updatedAt"],
  TasksCreateManyOwnerIdInput: ["id", "title", "description", "date", "state", "createdAt", "updatedAt"],
  CommentsCreateManyUserInput: ["id", "targetType", "parentId", "content", "tasksId", "createdAt", "updatedAt"],
  NotificationsCreateManyUserInput: ["id", "readed_at", "actionsId"],
  AssigneesCreateManyUserInput: ["id", "tasksId"],
  TasksUpdateWithoutOwnerIdInput: ["id", "title", "description", "date", "state", "Comments", "Actions", "createdAt", "updatedAt", "Assignees"],
  CommentsUpdateWithoutUserInput: ["id", "Tasks", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  NotificationsUpdateWithoutUserInput: ["id", "Actions", "readed_at"],
  AssigneesUpdateWithoutUserInput: ["id", "Tasks"],
  CommentsCreateManyTasksInput: ["id", "targetType", "parentId", "content", "ownerId", "createdAt", "updatedAt"],
  ActionsCreateManyTasksInput: ["id", "name", "targetType"],
  AssigneesCreateManyTasksInput: ["id", "userId"],
  CommentsUpdateWithoutTasksInput: ["id", "User", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  ActionsUpdateWithoutTasksInput: ["id", "name", "targetType", "Notifications"],
  AssigneesUpdateWithoutTasksInput: ["id", "User"],
  CommentsCreateManyParentInput: ["id", "targetType", "content", "ownerId", "tasksId", "createdAt", "updatedAt"],
  CommentsUpdateWithoutParentInput: ["id", "User", "Tasks", "targetType", "children", "content", "createdAt", "updatedAt"],
  NotificationsCreateManyActionsInput: ["id", "readed_at", "userId"],
  NotificationsUpdateWithoutActionsInput: ["id", "User", "readed_at"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

