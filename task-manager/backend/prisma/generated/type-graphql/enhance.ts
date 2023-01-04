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
  Task: crudResolvers.TaskCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  Action: crudResolvers.ActionCrudResolver,
  Notification: crudResolvers.NotificationCrudResolver,
  Assignee: crudResolvers.AssigneeCrudResolver
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
  Task: {
    aggregateTask: actionResolvers.AggregateTaskResolver,
    createManyTask: actionResolvers.CreateManyTaskResolver,
    createOneTask: actionResolvers.CreateOneTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    deleteOneTask: actionResolvers.DeleteOneTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    findFirstTaskOrThrow: actionResolvers.FindFirstTaskOrThrowResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    task: actionResolvers.FindUniqueTaskResolver,
    getTask: actionResolvers.FindUniqueTaskOrThrowResolver,
    groupByTask: actionResolvers.GroupByTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    updateOneTask: actionResolvers.UpdateOneTaskResolver,
    upsertOneTask: actionResolvers.UpsertOneTaskResolver
  },
  Comment: {
    aggregateComment: actionResolvers.AggregateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    createOneComment: actionResolvers.CreateOneCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    deleteOneComment: actionResolvers.DeleteOneCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
    comments: actionResolvers.FindManyCommentResolver,
    comment: actionResolvers.FindUniqueCommentResolver,
    getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
    groupByComment: actionResolvers.GroupByCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    updateOneComment: actionResolvers.UpdateOneCommentResolver,
    upsertOneComment: actionResolvers.UpsertOneCommentResolver
  },
  Action: {
    aggregateAction: actionResolvers.AggregateActionResolver,
    createManyAction: actionResolvers.CreateManyActionResolver,
    createOneAction: actionResolvers.CreateOneActionResolver,
    deleteManyAction: actionResolvers.DeleteManyActionResolver,
    deleteOneAction: actionResolvers.DeleteOneActionResolver,
    findFirstAction: actionResolvers.FindFirstActionResolver,
    findFirstActionOrThrow: actionResolvers.FindFirstActionOrThrowResolver,
    actions: actionResolvers.FindManyActionResolver,
    action: actionResolvers.FindUniqueActionResolver,
    getAction: actionResolvers.FindUniqueActionOrThrowResolver,
    groupByAction: actionResolvers.GroupByActionResolver,
    updateManyAction: actionResolvers.UpdateManyActionResolver,
    updateOneAction: actionResolvers.UpdateOneActionResolver,
    upsertOneAction: actionResolvers.UpsertOneActionResolver
  },
  Notification: {
    aggregateNotification: actionResolvers.AggregateNotificationResolver,
    createManyNotification: actionResolvers.CreateManyNotificationResolver,
    createOneNotification: actionResolvers.CreateOneNotificationResolver,
    deleteManyNotification: actionResolvers.DeleteManyNotificationResolver,
    deleteOneNotification: actionResolvers.DeleteOneNotificationResolver,
    findFirstNotification: actionResolvers.FindFirstNotificationResolver,
    findFirstNotificationOrThrow: actionResolvers.FindFirstNotificationOrThrowResolver,
    notifications: actionResolvers.FindManyNotificationResolver,
    notification: actionResolvers.FindUniqueNotificationResolver,
    getNotification: actionResolvers.FindUniqueNotificationOrThrowResolver,
    groupByNotification: actionResolvers.GroupByNotificationResolver,
    updateManyNotification: actionResolvers.UpdateManyNotificationResolver,
    updateOneNotification: actionResolvers.UpdateOneNotificationResolver,
    upsertOneNotification: actionResolvers.UpsertOneNotificationResolver
  },
  Assignee: {
    aggregateAssignee: actionResolvers.AggregateAssigneeResolver,
    createManyAssignee: actionResolvers.CreateManyAssigneeResolver,
    createOneAssignee: actionResolvers.CreateOneAssigneeResolver,
    deleteManyAssignee: actionResolvers.DeleteManyAssigneeResolver,
    deleteOneAssignee: actionResolvers.DeleteOneAssigneeResolver,
    findFirstAssignee: actionResolvers.FindFirstAssigneeResolver,
    findFirstAssigneeOrThrow: actionResolvers.FindFirstAssigneeOrThrowResolver,
    assignees: actionResolvers.FindManyAssigneeResolver,
    assignee: actionResolvers.FindUniqueAssigneeResolver,
    getAssignee: actionResolvers.FindUniqueAssigneeOrThrowResolver,
    groupByAssignee: actionResolvers.GroupByAssigneeResolver,
    updateManyAssignee: actionResolvers.UpdateManyAssigneeResolver,
    updateOneAssignee: actionResolvers.UpdateOneAssigneeResolver,
    upsertOneAssignee: actionResolvers.UpsertOneAssigneeResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Task: ["aggregateTask", "createManyTask", "createOneTask", "deleteManyTask", "deleteOneTask", "findFirstTask", "findFirstTaskOrThrow", "tasks", "task", "getTask", "groupByTask", "updateManyTask", "updateOneTask", "upsertOneTask"],
  Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
  Action: ["aggregateAction", "createManyAction", "createOneAction", "deleteManyAction", "deleteOneAction", "findFirstAction", "findFirstActionOrThrow", "actions", "action", "getAction", "groupByAction", "updateManyAction", "updateOneAction", "upsertOneAction"],
  Notification: ["aggregateNotification", "createManyNotification", "createOneNotification", "deleteManyNotification", "deleteOneNotification", "findFirstNotification", "findFirstNotificationOrThrow", "notifications", "notification", "getNotification", "groupByNotification", "updateManyNotification", "updateOneNotification", "upsertOneNotification"],
  Assignee: ["aggregateAssignee", "createManyAssignee", "createOneAssignee", "deleteManyAssignee", "deleteOneAssignee", "findFirstAssignee", "findFirstAssigneeOrThrow", "assignees", "assignee", "getAssignee", "groupByAssignee", "updateManyAssignee", "updateOneAssignee", "upsertOneAssignee"]
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
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTaskArgs: ["data", "skipDuplicates"],
  CreateOneTaskArgs: ["data"],
  DeleteManyTaskArgs: ["where"],
  DeleteOneTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTaskOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTaskArgs: ["where"],
  FindUniqueTaskOrThrowArgs: ["where"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTaskArgs: ["data", "where"],
  UpdateOneTaskArgs: ["data", "where"],
  UpsertOneTaskArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  CreateOneCommentArgs: ["data"],
  DeleteManyCommentArgs: ["where"],
  DeleteOneCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentArgs: ["where"],
  FindUniqueCommentOrThrowArgs: ["where"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentArgs: ["data", "where"],
  UpdateOneCommentArgs: ["data", "where"],
  UpsertOneCommentArgs: ["where", "create", "update"],
  AggregateActionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyActionArgs: ["data", "skipDuplicates"],
  CreateOneActionArgs: ["data"],
  DeleteManyActionArgs: ["where"],
  DeleteOneActionArgs: ["where"],
  FindFirstActionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstActionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueActionArgs: ["where"],
  FindUniqueActionOrThrowArgs: ["where"],
  GroupByActionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyActionArgs: ["data", "where"],
  UpdateOneActionArgs: ["data", "where"],
  UpsertOneActionArgs: ["where", "create", "update"],
  AggregateNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyNotificationArgs: ["data", "skipDuplicates"],
  CreateOneNotificationArgs: ["data"],
  DeleteManyNotificationArgs: ["where"],
  DeleteOneNotificationArgs: ["where"],
  FindFirstNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstNotificationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueNotificationArgs: ["where"],
  FindUniqueNotificationOrThrowArgs: ["where"],
  GroupByNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyNotificationArgs: ["data", "where"],
  UpdateOneNotificationArgs: ["data", "where"],
  UpsertOneNotificationArgs: ["where", "create", "update"],
  AggregateAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAssigneeArgs: ["data", "skipDuplicates"],
  CreateOneAssigneeArgs: ["data"],
  DeleteManyAssigneeArgs: ["where"],
  DeleteOneAssigneeArgs: ["where"],
  FindFirstAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAssigneeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAssigneeArgs: ["where"],
  FindUniqueAssigneeOrThrowArgs: ["where"],
  GroupByAssigneeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAssigneeArgs: ["data", "where"],
  UpdateOneAssigneeArgs: ["data", "where"],
  UpsertOneAssigneeArgs: ["where", "create", "update"]
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
  Task: relationResolvers.TaskRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  Action: relationResolvers.ActionRelationsResolver,
  Notification: relationResolvers.NotificationRelationsResolver,
  Assignee: relationResolvers.AssigneeRelationsResolver
};
const relationResolversInfo = {
  User: ["taskss", "comments", "notifications", "assignees"],
  Task: ["ownerId", "comments", "actions", "assignees"],
  Comment: ["owner", "task", "children", "parent"],
  Action: ["task", "notifications"],
  Notification: ["user", "actions"],
  Assignee: ["user", "task"]
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
  Task: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  Comment: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  Action: ["id", "name", "targetType", "targetId"],
  Notification: ["id", "readed_at", "userId", "actionsId"],
  Assignee: ["id", "taskId", "userId"]
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
  AggregateTask: ["_count", "_min", "_max"],
  TaskGroupBy: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateComment: ["_count", "_min", "_max"],
  CommentGroupBy: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateAction: ["_count", "_min", "_max"],
  ActionGroupBy: ["id", "name", "targetType", "targetId", "_count", "_min", "_max"],
  AggregateNotification: ["_count", "_min", "_max"],
  NotificationGroupBy: ["id", "readed_at", "userId", "actionsId", "_count", "_min", "_max"],
  AggregateAssignee: ["_count", "_min", "_max"],
  AssigneeGroupBy: ["id", "taskId", "userId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["taskss", "comments", "notifications", "assignees"],
  UserCountAggregate: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "name", "password_digest", "active", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "name", "password_digest", "active", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  TaskCount: ["comments", "actions", "assignees"],
  TaskCountAggregate: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt", "_all"],
  TaskMinAggregate: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TaskMaxAggregate: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  CommentCount: ["children"],
  CommentCountAggregate: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt", "_all"],
  CommentMinAggregate: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  CommentMaxAggregate: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  ActionCount: ["notifications"],
  ActionCountAggregate: ["id", "name", "targetType", "targetId", "_all"],
  ActionMinAggregate: ["id", "name", "targetType", "targetId"],
  ActionMaxAggregate: ["id", "name", "targetType", "targetId"],
  NotificationCountAggregate: ["id", "readed_at", "userId", "actionsId", "_all"],
  NotificationMinAggregate: ["id", "readed_at", "userId", "actionsId"],
  NotificationMaxAggregate: ["id", "readed_at", "userId", "actionsId"],
  AssigneeCountAggregate: ["id", "taskId", "userId", "_all"],
  AssigneeMinAggregate: ["id", "taskId", "userId"],
  AssigneeMaxAggregate: ["id", "taskId", "userId"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "notifications", "createdAt", "updatedAt", "assignees"],
  UserOrderByWithRelationInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "notifications", "createdAt", "updatedAt", "assignees"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  TaskWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "ownerId", "date", "state", "userId", "comments", "actions", "createdAt", "updatedAt", "assignees"],
  TaskOrderByWithRelationInput: ["id", "title", "description", "ownerId", "date", "state", "userId", "comments", "actions", "createdAt", "updatedAt", "assignees"],
  TaskWhereUniqueInput: ["id"],
  TaskOrderByWithAggregationInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt", "_count", "_max", "_min"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "owner", "ownerId", "task", "taskId", "targetType", "children", "parent", "parentId", "content", "createdAt", "updatedAt"],
  CommentOrderByWithRelationInput: ["id", "owner", "ownerId", "task", "taskId", "targetType", "children", "parent", "parentId", "content", "createdAt", "updatedAt"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  ActionWhereInput: ["AND", "OR", "NOT", "id", "name", "task", "targetType", "targetId", "notifications"],
  ActionOrderByWithRelationInput: ["id", "name", "task", "targetType", "targetId", "notifications"],
  ActionWhereUniqueInput: ["id"],
  ActionOrderByWithAggregationInput: ["id", "name", "targetType", "targetId", "_count", "_max", "_min"],
  ActionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "targetType", "targetId"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "user", "actions", "readed_at", "userId", "actionsId"],
  NotificationOrderByWithRelationInput: ["id", "user", "actions", "readed_at", "userId", "actionsId"],
  NotificationWhereUniqueInput: ["id"],
  NotificationOrderByWithAggregationInput: ["id", "readed_at", "userId", "actionsId", "_count", "_max", "_min"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "readed_at", "userId", "actionsId"],
  AssigneeWhereInput: ["AND", "OR", "NOT", "id", "user", "task", "taskId", "userId"],
  AssigneeOrderByWithRelationInput: ["id", "user", "task", "taskId", "userId"],
  AssigneeWhereUniqueInput: ["id"],
  AssigneeOrderByWithAggregationInput: ["id", "taskId", "userId", "_count", "_max", "_min"],
  AssigneeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "taskId", "userId"],
  UserCreateInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "notifications", "createdAt", "updatedAt", "assignees"],
  UserUpdateInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "notifications", "createdAt", "updatedAt", "assignees"],
  UserCreateManyInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "createdAt", "updatedAt"],
  TaskCreateInput: ["id", "title", "description", "ownerId", "date", "state", "comments", "actions", "createdAt", "updatedAt", "assignees"],
  TaskUpdateInput: ["id", "title", "description", "ownerId", "date", "state", "comments", "actions", "createdAt", "updatedAt", "assignees"],
  TaskCreateManyInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TaskUpdateManyMutationInput: ["id", "title", "description", "date", "state", "createdAt", "updatedAt"],
  CommentCreateInput: ["id", "owner", "task", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentUpdateInput: ["id", "owner", "task", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentCreateManyInput: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  CommentUpdateManyMutationInput: ["id", "targetType", "content", "createdAt", "updatedAt"],
  ActionCreateInput: ["id", "name", "task", "targetType", "notifications"],
  ActionUpdateInput: ["id", "name", "task", "targetType", "notifications"],
  ActionCreateManyInput: ["id", "name", "targetType", "targetId"],
  ActionUpdateManyMutationInput: ["id", "name", "targetType"],
  NotificationCreateInput: ["id", "user", "actions", "readed_at"],
  NotificationUpdateInput: ["id", "user", "actions", "readed_at"],
  NotificationCreateManyInput: ["id", "readed_at", "userId", "actionsId"],
  NotificationUpdateManyMutationInput: ["id", "readed_at"],
  AssigneeCreateInput: ["id", "user", "task"],
  AssigneeUpdateInput: ["id", "user", "task"],
  AssigneeCreateManyInput: ["id", "taskId", "userId"],
  AssigneeUpdateManyMutationInput: ["id"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TaskListRelationFilter: ["every", "some", "none"],
  CommentListRelationFilter: ["every", "some", "none"],
  NotificationListRelationFilter: ["every", "some", "none"],
  AssigneeListRelationFilter: ["every", "some", "none"],
  TaskOrderByRelationAggregateInput: ["_count"],
  CommentOrderByRelationAggregateInput: ["_count"],
  NotificationOrderByRelationAggregateInput: ["_count"],
  AssigneeOrderByRelationAggregateInput: ["_count"],
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
  ActionListRelationFilter: ["every", "some", "none"],
  ActionOrderByRelationAggregateInput: ["_count"],
  TaskCountOrderByAggregateInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TaskMaxOrderByAggregateInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  TaskMinOrderByAggregateInput: ["id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumStateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  TaskRelationFilter: ["is", "isNot"],
  EnumTargetTypeNullableFilter: ["equals", "in", "notIn", "not"],
  CommentRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  CommentMaxOrderByAggregateInput: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  CommentMinOrderByAggregateInput: ["id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  EnumTargetTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumNameNullableFilter: ["equals", "in", "notIn", "not"],
  ActionCountOrderByAggregateInput: ["id", "name", "targetType", "targetId"],
  ActionMaxOrderByAggregateInput: ["id", "name", "targetType", "targetId"],
  ActionMinOrderByAggregateInput: ["id", "name", "targetType", "targetId"],
  EnumNameNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ActionRelationFilter: ["is", "isNot"],
  NotificationCountOrderByAggregateInput: ["id", "readed_at", "userId", "actionsId"],
  NotificationMaxOrderByAggregateInput: ["id", "readed_at", "userId", "actionsId"],
  NotificationMinOrderByAggregateInput: ["id", "readed_at", "userId", "actionsId"],
  AssigneeCountOrderByAggregateInput: ["id", "taskId", "userId"],
  AssigneeMaxOrderByAggregateInput: ["id", "taskId", "userId"],
  AssigneeMinOrderByAggregateInput: ["id", "taskId", "userId"],
  TaskCreateNestedManyWithoutOwnerIdInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssigneeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  TaskUpdateManyWithoutOwnerIdNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssigneeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTaskssInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutTaskInput: ["create", "connectOrCreate", "createMany", "connect"],
  ActionCreateNestedManyWithoutTaskInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssigneeCreateNestedManyWithoutTaskInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutTaskssNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumStateFieldUpdateOperationsInput: ["set"],
  CommentUpdateManyWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ActionUpdateManyWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssigneeUpdateManyWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedOneWithoutChildrenInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableEnumTargetTypeFieldUpdateOperationsInput: ["set"],
  CommentUpdateManyWithoutParentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateOneWithoutChildrenNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskCreateNestedOneWithoutActionsInput: ["create", "connectOrCreate", "connect"],
  NotificationCreateNestedManyWithoutActionsInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableEnumNameFieldUpdateOperationsInput: ["set"],
  TaskUpdateOneRequiredWithoutActionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NotificationUpdateManyWithoutActionsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  ActionCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActionUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutAssigneesInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutAssigneesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutAssigneesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TaskUpdateOneRequiredWithoutAssigneesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  TaskCreateWithoutOwnerIdInput: ["id", "title", "description", "date", "state", "comments", "actions", "createdAt", "updatedAt", "assignees"],
  TaskCreateOrConnectWithoutOwnerIdInput: ["where", "create"],
  TaskCreateManyOwnerIdInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutOwnerInput: ["id", "task", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentCreateOrConnectWithoutOwnerInput: ["where", "create"],
  CommentCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutUserInput: ["id", "actions", "readed_at"],
  NotificationCreateOrConnectWithoutUserInput: ["where", "create"],
  NotificationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  AssigneeCreateWithoutUserInput: ["id", "task"],
  AssigneeCreateOrConnectWithoutUserInput: ["where", "create"],
  AssigneeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  TaskUpsertWithWhereUniqueWithoutOwnerIdInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutOwnerIdInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutOwnerIdInput: ["where", "data"],
  TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "date", "state", "userId", "createdAt", "updatedAt"],
  CommentUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "ownerId", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  NotificationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "readed_at", "userId", "actionsId"],
  AssigneeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AssigneeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AssigneeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AssigneeScalarWhereInput: ["AND", "OR", "NOT", "id", "taskId", "userId"],
  UserCreateWithoutTaskssInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "comments", "notifications", "createdAt", "updatedAt", "assignees"],
  UserCreateOrConnectWithoutTaskssInput: ["where", "create"],
  CommentCreateWithoutTaskInput: ["id", "owner", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  CommentCreateOrConnectWithoutTaskInput: ["where", "create"],
  CommentCreateManyTaskInputEnvelope: ["data", "skipDuplicates"],
  ActionCreateWithoutTaskInput: ["id", "name", "targetType", "notifications"],
  ActionCreateOrConnectWithoutTaskInput: ["where", "create"],
  ActionCreateManyTaskInputEnvelope: ["data", "skipDuplicates"],
  AssigneeCreateWithoutTaskInput: ["id", "user"],
  AssigneeCreateOrConnectWithoutTaskInput: ["where", "create"],
  AssigneeCreateManyTaskInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutTaskssInput: ["update", "create"],
  UserUpdateWithoutTaskssInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "comments", "notifications", "createdAt", "updatedAt", "assignees"],
  CommentUpsertWithWhereUniqueWithoutTaskInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutTaskInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutTaskInput: ["where", "data"],
  ActionUpsertWithWhereUniqueWithoutTaskInput: ["where", "update", "create"],
  ActionUpdateWithWhereUniqueWithoutTaskInput: ["where", "data"],
  ActionUpdateManyWithWhereWithoutTaskInput: ["where", "data"],
  ActionScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "targetType", "targetId"],
  AssigneeUpsertWithWhereUniqueWithoutTaskInput: ["where", "update", "create"],
  AssigneeUpdateWithWhereUniqueWithoutTaskInput: ["where", "data"],
  AssigneeUpdateManyWithWhereWithoutTaskInput: ["where", "data"],
  UserCreateWithoutCommentsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "notifications", "createdAt", "updatedAt", "assignees"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  TaskCreateWithoutCommentsInput: ["id", "title", "description", "ownerId", "date", "state", "actions", "createdAt", "updatedAt", "assignees"],
  TaskCreateOrConnectWithoutCommentsInput: ["where", "create"],
  CommentCreateWithoutParentInput: ["id", "owner", "task", "targetType", "children", "content", "createdAt", "updatedAt"],
  CommentCreateOrConnectWithoutParentInput: ["where", "create"],
  CommentCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutChildrenInput: ["id", "owner", "task", "targetType", "parent", "content", "createdAt", "updatedAt"],
  CommentCreateOrConnectWithoutChildrenInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create"],
  UserUpdateWithoutCommentsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "notifications", "createdAt", "updatedAt", "assignees"],
  TaskUpsertWithoutCommentsInput: ["update", "create"],
  TaskUpdateWithoutCommentsInput: ["id", "title", "description", "ownerId", "date", "state", "actions", "createdAt", "updatedAt", "assignees"],
  CommentUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  CommentUpsertWithoutChildrenInput: ["update", "create"],
  CommentUpdateWithoutChildrenInput: ["id", "owner", "task", "targetType", "parent", "content", "createdAt", "updatedAt"],
  TaskCreateWithoutActionsInput: ["id", "title", "description", "ownerId", "date", "state", "comments", "createdAt", "updatedAt", "assignees"],
  TaskCreateOrConnectWithoutActionsInput: ["where", "create"],
  NotificationCreateWithoutActionsInput: ["id", "user", "readed_at"],
  NotificationCreateOrConnectWithoutActionsInput: ["where", "create"],
  NotificationCreateManyActionsInputEnvelope: ["data", "skipDuplicates"],
  TaskUpsertWithoutActionsInput: ["update", "create"],
  TaskUpdateWithoutActionsInput: ["id", "title", "description", "ownerId", "date", "state", "comments", "createdAt", "updatedAt", "assignees"],
  NotificationUpsertWithWhereUniqueWithoutActionsInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutActionsInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutActionsInput: ["where", "data"],
  UserCreateWithoutNotificationsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "createdAt", "updatedAt", "assignees"],
  UserCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  ActionCreateWithoutNotificationsInput: ["id", "name", "task", "targetType"],
  ActionCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UserUpsertWithoutNotificationsInput: ["update", "create"],
  UserUpdateWithoutNotificationsInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "createdAt", "updatedAt", "assignees"],
  ActionUpsertWithoutNotificationsInput: ["update", "create"],
  ActionUpdateWithoutNotificationsInput: ["id", "name", "task", "targetType"],
  UserCreateWithoutAssigneesInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "notifications", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutAssigneesInput: ["where", "create"],
  TaskCreateWithoutAssigneesInput: ["id", "title", "description", "ownerId", "date", "state", "comments", "actions", "createdAt", "updatedAt"],
  TaskCreateOrConnectWithoutAssigneesInput: ["where", "create"],
  UserUpsertWithoutAssigneesInput: ["update", "create"],
  UserUpdateWithoutAssigneesInput: ["id", "name", "password_digest", "active", "preferences", "email", "last_sign_in_at", "taskss", "comments", "notifications", "createdAt", "updatedAt"],
  TaskUpsertWithoutAssigneesInput: ["update", "create"],
  TaskUpdateWithoutAssigneesInput: ["id", "title", "description", "ownerId", "date", "state", "comments", "actions", "createdAt", "updatedAt"],
  TaskCreateManyOwnerIdInput: ["id", "title", "description", "date", "state", "createdAt", "updatedAt"],
  CommentCreateManyOwnerInput: ["id", "taskId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  NotificationCreateManyUserInput: ["id", "readed_at", "actionsId"],
  AssigneeCreateManyUserInput: ["id", "taskId"],
  TaskUpdateWithoutOwnerIdInput: ["id", "title", "description", "date", "state", "comments", "actions", "createdAt", "updatedAt", "assignees"],
  CommentUpdateWithoutOwnerInput: ["id", "task", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  NotificationUpdateWithoutUserInput: ["id", "actions", "readed_at"],
  AssigneeUpdateWithoutUserInput: ["id", "task"],
  CommentCreateManyTaskInput: ["id", "ownerId", "targetType", "parentId", "content", "createdAt", "updatedAt"],
  ActionCreateManyTaskInput: ["id", "name", "targetType"],
  AssigneeCreateManyTaskInput: ["id", "userId"],
  CommentUpdateWithoutTaskInput: ["id", "owner", "targetType", "children", "parent", "content", "createdAt", "updatedAt"],
  ActionUpdateWithoutTaskInput: ["id", "name", "targetType", "notifications"],
  AssigneeUpdateWithoutTaskInput: ["id", "user"],
  CommentCreateManyParentInput: ["id", "ownerId", "taskId", "targetType", "content", "createdAt", "updatedAt"],
  CommentUpdateWithoutParentInput: ["id", "owner", "task", "targetType", "children", "content", "createdAt", "updatedAt"],
  NotificationCreateManyActionsInput: ["id", "readed_at", "userId"],
  NotificationUpdateWithoutActionsInput: ["id", "user", "readed_at"]
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

