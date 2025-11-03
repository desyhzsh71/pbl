
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationMember
 * 
 */
export type OrganizationMember = $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectCollaborator
 * 
 */
export type ProjectCollaborator = $Result.DefaultSelection<Prisma.$ProjectCollaboratorPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model BillingHistory
 * 
 */
export type BillingHistory = $Result.DefaultSelection<Prisma.$BillingHistoryPayload>
/**
 * Model BillingAddress
 * 
 */
export type BillingAddress = $Result.DefaultSelection<Prisma.$BillingAddressPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model UsageTracking
 * 
 */
export type UsageTracking = $Result.DefaultSelection<Prisma.$UsageTrackingPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  COLLABORATOR: 'COLLABORATOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ProjectRole: {
  OWNER: 'OWNER',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER',
  SEO_MANAGER: 'SEO_MANAGER',
  COLLABORATOR: 'COLLABORATOR'
};

export type ProjectRole = (typeof ProjectRole)[keyof typeof ProjectRole]


export const Status: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ProjectStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const BillingCycle: {
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type BillingCycle = (typeof BillingCycle)[keyof typeof BillingCycle]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  TRIAL: 'TRIAL',
  PENDING: 'PENDING'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PaymentStatus: {
  PAID: 'PAID',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentType: {
  CREDIT_CARD: 'CREDIT_CARD',
  EWALLET: 'EWALLET',
  VIRTUAL_ACCOUNT: 'VIRTUAL_ACCOUNT',
  RETAIL: 'RETAIL',
  PAYLATER: 'PAYLATER',
  QRIS: 'QRIS'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ProjectRole = $Enums.ProjectRole

export const ProjectRole: typeof $Enums.ProjectRole

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type BillingCycle = $Enums.BillingCycle

export const BillingCycle: typeof $Enums.BillingCycle

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMember.findMany()
    * ```
    */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectCollaborator`: Exposes CRUD operations for the **ProjectCollaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectCollaborators
    * const projectCollaborators = await prisma.projectCollaborator.findMany()
    * ```
    */
  get projectCollaborator(): Prisma.ProjectCollaboratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billingHistory`: Exposes CRUD operations for the **BillingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingHistories
    * const billingHistories = await prisma.billingHistory.findMany()
    * ```
    */
  get billingHistory(): Prisma.BillingHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billingAddress`: Exposes CRUD operations for the **BillingAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingAddresses
    * const billingAddresses = await prisma.billingAddress.findMany()
    * ```
    */
  get billingAddress(): Prisma.BillingAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageTracking`: Exposes CRUD operations for the **UsageTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageTrackings
    * const usageTrackings = await prisma.usageTracking.findMany()
    * ```
    */
  get usageTracking(): Prisma.UsageTrackingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PasswordReset: 'PasswordReset',
    Organization: 'Organization',
    OrganizationMember: 'OrganizationMember',
    Project: 'Project',
    ProjectCollaborator: 'ProjectCollaborator',
    Plan: 'Plan',
    Subscription: 'Subscription',
    BillingHistory: 'BillingHistory',
    BillingAddress: 'BillingAddress',
    PaymentMethod: 'PaymentMethod',
    UsageTracking: 'UsageTracking',
    Item: 'Item'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "passwordReset" | "organization" | "organizationMember" | "project" | "projectCollaborator" | "plan" | "subscription" | "billingHistory" | "billingAddress" | "paymentMethod" | "usageTracking" | "item"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>
        fields: Prisma.OrganizationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMember>
          }
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectCollaborator: {
        payload: Prisma.$ProjectCollaboratorPayload<ExtArgs>
        fields: Prisma.ProjectCollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          findFirst: {
            args: Prisma.ProjectCollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          findMany: {
            args: Prisma.ProjectCollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>[]
          }
          create: {
            args: Prisma.ProjectCollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          createMany: {
            args: Prisma.ProjectCollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>[]
          }
          delete: {
            args: Prisma.ProjectCollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          update: {
            args: Prisma.ProjectCollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectCollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.ProjectCollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          aggregate: {
            args: Prisma.ProjectCollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectCollaborator>
          }
          groupBy: {
            args: Prisma.ProjectCollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectCollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCollaboratorCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      BillingHistory: {
        payload: Prisma.$BillingHistoryPayload<ExtArgs>
        fields: Prisma.BillingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>
          }
          findFirst: {
            args: Prisma.BillingHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>
          }
          findMany: {
            args: Prisma.BillingHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>[]
          }
          create: {
            args: Prisma.BillingHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>
          }
          createMany: {
            args: Prisma.BillingHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>[]
          }
          delete: {
            args: Prisma.BillingHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>
          }
          update: {
            args: Prisma.BillingHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.BillingHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>[]
          }
          upsert: {
            args: Prisma.BillingHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingHistoryPayload>
          }
          aggregate: {
            args: Prisma.BillingHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingHistory>
          }
          groupBy: {
            args: Prisma.BillingHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<BillingHistoryCountAggregateOutputType> | number
          }
        }
      }
      BillingAddress: {
        payload: Prisma.$BillingAddressPayload<ExtArgs>
        fields: Prisma.BillingAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          findFirst: {
            args: Prisma.BillingAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          findMany: {
            args: Prisma.BillingAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>[]
          }
          create: {
            args: Prisma.BillingAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          createMany: {
            args: Prisma.BillingAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>[]
          }
          delete: {
            args: Prisma.BillingAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          update: {
            args: Prisma.BillingAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          deleteMany: {
            args: Prisma.BillingAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>[]
          }
          upsert: {
            args: Prisma.BillingAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingAddressPayload>
          }
          aggregate: {
            args: Prisma.BillingAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingAddress>
          }
          groupBy: {
            args: Prisma.BillingAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingAddressCountArgs<ExtArgs>
            result: $Utils.Optional<BillingAddressCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      UsageTracking: {
        payload: Prisma.$UsageTrackingPayload<ExtArgs>
        fields: Prisma.UsageTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>
          }
          findFirst: {
            args: Prisma.UsageTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>
          }
          findMany: {
            args: Prisma.UsageTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>[]
          }
          create: {
            args: Prisma.UsageTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>
          }
          createMany: {
            args: Prisma.UsageTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>[]
          }
          delete: {
            args: Prisma.UsageTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>
          }
          update: {
            args: Prisma.UsageTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>
          }
          deleteMany: {
            args: Prisma.UsageTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageTrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>[]
          }
          upsert: {
            args: Prisma.UsageTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageTrackingPayload>
          }
          aggregate: {
            args: Prisma.UsageTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageTracking>
          }
          groupBy: {
            args: Prisma.UsageTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<UsageTrackingCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    passwordReset?: PasswordResetOmit
    organization?: OrganizationOmit
    organizationMember?: OrganizationMemberOmit
    project?: ProjectOmit
    projectCollaborator?: ProjectCollaboratorOmit
    plan?: PlanOmit
    subscription?: SubscriptionOmit
    billingHistory?: BillingHistoryOmit
    billingAddress?: BillingAddressOmit
    paymentMethod?: PaymentMethodOmit
    usageTracking?: UsageTrackingOmit
    item?: ItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    passwordResets: number
    organizationsOwned: number
    organizationMembers: number
    projectsCreated: number
    projectCollaborators: number
    subscriptions: number
    paymentMethods: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs
    organizationsOwned?: boolean | UserCountOutputTypeCountOrganizationsOwnedArgs
    organizationMembers?: boolean | UserCountOutputTypeCountOrganizationMembersArgs
    projectsCreated?: boolean | UserCountOutputTypeCountProjectsCreatedArgs
    projectCollaborators?: boolean | UserCountOutputTypeCountProjectCollaboratorsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    paymentMethods?: boolean | UserCountOutputTypeCountPaymentMethodsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCollaboratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    projects: number
    subscriptions: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    projects?: boolean | OrganizationCountOutputTypeCountProjectsArgs
    subscriptions?: boolean | OrganizationCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    collaborators: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborators?: boolean | ProjectCountOutputTypeCountCollaboratorsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCollaboratorWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscriptions: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    billingHistory: number
    usageTracking: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billingHistory?: boolean | SubscriptionCountOutputTypeCountBillingHistoryArgs
    usageTracking?: boolean | SubscriptionCountOutputTypeCountUsageTrackingArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountBillingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingHistoryWhereInput
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountUsageTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageTrackingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    company: string | null
    job: string | null
    country: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    company: string | null
    job: string | null
    country: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    company: number
    job: number
    country: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    company?: true
    job?: true
    country?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    company?: true
    job?: true
    country?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    company?: true
    job?: true
    country?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    company?: boolean
    job?: boolean
    country?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    organizationsOwned?: boolean | User$organizationsOwnedArgs<ExtArgs>
    organizationMembers?: boolean | User$organizationMembersArgs<ExtArgs>
    projectsCreated?: boolean | User$projectsCreatedArgs<ExtArgs>
    projectCollaborators?: boolean | User$projectCollaboratorsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    billingAddresses?: boolean | User$billingAddressesArgs<ExtArgs>
    paymentMethods?: boolean | User$paymentMethodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    company?: boolean
    job?: boolean
    country?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    company?: boolean
    job?: boolean
    country?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    company?: boolean
    job?: boolean
    country?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "company" | "job" | "country" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    organizationsOwned?: boolean | User$organizationsOwnedArgs<ExtArgs>
    organizationMembers?: boolean | User$organizationMembersArgs<ExtArgs>
    projectsCreated?: boolean | User$projectsCreatedArgs<ExtArgs>
    projectCollaborators?: boolean | User$projectCollaboratorsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    billingAddresses?: boolean | User$billingAddressesArgs<ExtArgs>
    paymentMethods?: boolean | User$paymentMethodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      passwordResets: Prisma.$PasswordResetPayload<ExtArgs>[]
      organizationsOwned: Prisma.$OrganizationPayload<ExtArgs>[]
      organizationMembers: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      projectsCreated: Prisma.$ProjectPayload<ExtArgs>[]
      projectCollaborators: Prisma.$ProjectCollaboratorPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      billingAddresses: Prisma.$BillingAddressPayload<ExtArgs> | null
      paymentMethods: Prisma.$PaymentMethodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      company: string
      job: string
      country: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passwordResets<T extends User$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizationsOwned<T extends User$organizationsOwnedArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationsOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizationMembers<T extends User$organizationMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsCreated<T extends User$projectsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectCollaborators<T extends User$projectCollaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectCollaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    billingAddresses<T extends User$billingAddressesArgs<ExtArgs> = {}>(args?: Subset<T, User$billingAddressesArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentMethods<T extends User$paymentMethodsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly company: FieldRef<"User", 'String'>
    readonly job: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.passwordResets
   */
  export type User$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    cursor?: PasswordResetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * User.organizationsOwned
   */
  export type User$organizationsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * User.organizationMembers
   */
  export type User$organizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * User.projectsCreated
   */
  export type User$projectsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.projectCollaborators
   */
  export type User$projectCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    where?: ProjectCollaboratorWhereInput
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    cursor?: ProjectCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.billingAddresses
   */
  export type User$billingAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    where?: BillingAddressWhereInput
  }

  /**
   * User.paymentMethods
   */
  export type User$paymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    cursor?: PaymentMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type PasswordResetAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _avg?: PasswordResetAvgAggregateInputType
    _sum?: PasswordResetSumAggregateInputType
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "used" | "createdAt", ExtArgs["result"]["passwordReset"]>
  export type PasswordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'Int'>
    readonly userId: FieldRef<"PasswordReset", 'Int'>
    readonly token: FieldRef<"PasswordReset", 'String'>
    readonly expiresAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly used: FieldRef<"PasswordReset", 'Boolean'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    ownerId: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    ownerId: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    ownerId?: true
  }

  export type OrganizationSumAggregateInputType = {
    ownerId?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    ownerId: number
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    projects?: boolean | Organization$projectsArgs<ExtArgs>
    subscriptions?: boolean | Organization$subscriptionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    projects?: boolean | Organization$projectsArgs<ExtArgs>
    subscriptions?: boolean | Organization$subscriptionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Organization$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Organization$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly ownerId: FieldRef<"Organization", 'Int'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Organization.projects
   */
  export type Organization$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Organization.subscriptions
   */
  export type Organization$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null
    _avg: OrganizationMemberAvgAggregateOutputType | null
    _sum: OrganizationMemberSumAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  export type OrganizationMemberAvgAggregateOutputType = {
    userId: number | null
  }

  export type OrganizationMemberSumAggregateOutputType = {
    userId: number | null
  }

  export type OrganizationMemberMinAggregateOutputType = {
    id: string | null
    userId: number | null
    organizationId: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMemberMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    organizationId: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMemberCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    role: number
    status: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMemberAvgAggregateInputType = {
    userId?: true
  }

  export type OrganizationMemberSumAggregateInputType = {
    userId?: true
  }

  export type OrganizationMemberMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    status?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    status?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMemberCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    status?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type GetOrganizationMemberAggregateType<T extends OrganizationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>
  }




  export type OrganizationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithAggregationInput | OrganizationMemberOrderByWithAggregationInput[]
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum
    having?: OrganizationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMemberCountAggregateInputType | true
    _avg?: OrganizationMemberAvgAggregateInputType
    _sum?: OrganizationMemberSumAggregateInputType
    _min?: OrganizationMemberMinAggregateInputType
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type OrganizationMemberGroupByOutputType = {
    id: string
    userId: number
    organizationId: string
    role: $Enums.Role
    status: $Enums.Status
    joinedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationMemberCountAggregateOutputType | null
    _avg: OrganizationMemberAvgAggregateOutputType | null
    _sum: OrganizationMemberSumAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  type GetOrganizationMemberGroupByPayload<T extends OrganizationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "role" | "status" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationMember"]>
  export type OrganizationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      organizationId: string
      role: $Enums.Role
      status: $Enums.Status
      joinedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizationMember"]>
    composites: {}
  }

  type OrganizationMemberGetPayload<S extends boolean | null | undefined | OrganizationMemberDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>

  type OrganizationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMemberCountAggregateInputType | true
    }

  export interface OrganizationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'], meta: { name: 'OrganizationMember' } }
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMemberFindManyArgs>(args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     * 
     */
    create<T extends OrganizationMemberCreateArgs>(args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMemberDeleteArgs>(args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMemberUpdateArgs>(args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers and returns the data updated in the database.
     * @param {OrganizationMemberUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMembers.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMemberAggregateArgs>(args: Subset<T, OrganizationMemberAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMember model
   */
  readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMember model
   */
  interface OrganizationMemberFieldRefs {
    readonly id: FieldRef<"OrganizationMember", 'String'>
    readonly userId: FieldRef<"OrganizationMember", 'Int'>
    readonly organizationId: FieldRef<"OrganizationMember", 'String'>
    readonly role: FieldRef<"OrganizationMember", 'Role'>
    readonly status: FieldRef<"OrganizationMember", 'Status'>
    readonly joinedAt: FieldRef<"OrganizationMember", 'DateTime'>
    readonly createdAt: FieldRef<"OrganizationMember", 'DateTime'>
    readonly updatedAt: FieldRef<"OrganizationMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
  }

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
  }

  /**
   * OrganizationMember updateManyAndReturn
   */
  export type OrganizationMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
  }

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    createdBy: number | null
  }

  export type ProjectSumAggregateOutputType = {
    createdBy: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    organizationId: string | null
    createdBy: number | null
    deadline: Date | null
    status: $Enums.ProjectStatus | null
    customDomain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    organizationId: string | null
    createdBy: number | null
    deadline: Date | null
    status: $Enums.ProjectStatus | null
    customDomain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    organizationId: number
    createdBy: number
    deadline: number
    status: number
    customDomain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    createdBy?: true
  }

  export type ProjectSumAggregateInputType = {
    createdBy?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    createdBy?: true
    deadline?: true
    status?: true
    customDomain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    createdBy?: true
    deadline?: true
    status?: true
    customDomain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    createdBy?: true
    deadline?: true
    status?: true
    customDomain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    organizationId: string
    createdBy: number
    deadline: Date | null
    status: $Enums.ProjectStatus
    customDomain: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    createdBy?: boolean
    deadline?: boolean
    status?: boolean
    customDomain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    collaborators?: boolean | Project$collaboratorsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    createdBy?: boolean
    deadline?: boolean
    status?: boolean
    customDomain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    createdBy?: boolean
    deadline?: boolean
    status?: boolean
    customDomain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    createdBy?: boolean
    deadline?: boolean
    status?: boolean
    customDomain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "organizationId" | "createdBy" | "deadline" | "status" | "customDomain" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    collaborators?: boolean | Project$collaboratorsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      collaborators: Prisma.$ProjectCollaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      organizationId: string
      createdBy: number
      deadline: Date | null
      status: $Enums.ProjectStatus
      customDomain: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collaborators<T extends Project$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Project$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly organizationId: FieldRef<"Project", 'String'>
    readonly createdBy: FieldRef<"Project", 'Int'>
    readonly deadline: FieldRef<"Project", 'DateTime'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly customDomain: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.collaborators
   */
  export type Project$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    where?: ProjectCollaboratorWhereInput
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    cursor?: ProjectCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectCollaborator
   */

  export type AggregateProjectCollaborator = {
    _count: ProjectCollaboratorCountAggregateOutputType | null
    _avg: ProjectCollaboratorAvgAggregateOutputType | null
    _sum: ProjectCollaboratorSumAggregateOutputType | null
    _min: ProjectCollaboratorMinAggregateOutputType | null
    _max: ProjectCollaboratorMaxAggregateOutputType | null
  }

  export type ProjectCollaboratorAvgAggregateOutputType = {
    userId: number | null
  }

  export type ProjectCollaboratorSumAggregateOutputType = {
    userId: number | null
  }

  export type ProjectCollaboratorMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: number | null
    role: $Enums.ProjectRole | null
    status: $Enums.Status | null
    addedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCollaboratorMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: number | null
    role: $Enums.ProjectRole | null
    status: $Enums.Status | null
    addedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCollaboratorCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    role: number
    status: number
    addedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectCollaboratorAvgAggregateInputType = {
    userId?: true
  }

  export type ProjectCollaboratorSumAggregateInputType = {
    userId?: true
  }

  export type ProjectCollaboratorMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    status?: true
    addedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCollaboratorMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    status?: true
    addedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCollaboratorCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    status?: true
    addedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectCollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCollaborator to aggregate.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectCollaborators
    **/
    _count?: true | ProjectCollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectCollaboratorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectCollaboratorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCollaboratorMaxAggregateInputType
  }

  export type GetProjectCollaboratorAggregateType<T extends ProjectCollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectCollaborator[P]>
      : GetScalarType<T[P], AggregateProjectCollaborator[P]>
  }




  export type ProjectCollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCollaboratorWhereInput
    orderBy?: ProjectCollaboratorOrderByWithAggregationInput | ProjectCollaboratorOrderByWithAggregationInput[]
    by: ProjectCollaboratorScalarFieldEnum[] | ProjectCollaboratorScalarFieldEnum
    having?: ProjectCollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCollaboratorCountAggregateInputType | true
    _avg?: ProjectCollaboratorAvgAggregateInputType
    _sum?: ProjectCollaboratorSumAggregateInputType
    _min?: ProjectCollaboratorMinAggregateInputType
    _max?: ProjectCollaboratorMaxAggregateInputType
  }

  export type ProjectCollaboratorGroupByOutputType = {
    id: string
    projectId: string
    userId: number
    role: $Enums.ProjectRole
    status: $Enums.Status
    addedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: ProjectCollaboratorCountAggregateOutputType | null
    _avg: ProjectCollaboratorAvgAggregateOutputType | null
    _sum: ProjectCollaboratorSumAggregateOutputType | null
    _min: ProjectCollaboratorMinAggregateOutputType | null
    _max: ProjectCollaboratorMaxAggregateOutputType | null
  }

  type GetProjectCollaboratorGroupByPayload<T extends ProjectCollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    addedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCollaborator"]>

  export type ProjectCollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    addedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCollaborator"]>

  export type ProjectCollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    addedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCollaborator"]>

  export type ProjectCollaboratorSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    addedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectCollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "role" | "status" | "addedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["projectCollaborator"]>
  export type ProjectCollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectCollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectCollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectCollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectCollaborator"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: number
      role: $Enums.ProjectRole
      status: $Enums.Status
      addedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectCollaborator"]>
    composites: {}
  }

  type ProjectCollaboratorGetPayload<S extends boolean | null | undefined | ProjectCollaboratorDefaultArgs> = $Result.GetResult<Prisma.$ProjectCollaboratorPayload, S>

  type ProjectCollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectCollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCollaboratorCountAggregateInputType | true
    }

  export interface ProjectCollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectCollaborator'], meta: { name: 'ProjectCollaborator' } }
    /**
     * Find zero or one ProjectCollaborator that matches the filter.
     * @param {ProjectCollaboratorFindUniqueArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectCollaboratorFindUniqueArgs>(args: SelectSubset<T, ProjectCollaboratorFindUniqueArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectCollaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectCollaboratorFindUniqueOrThrowArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectCollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCollaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorFindFirstArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectCollaboratorFindFirstArgs>(args?: SelectSubset<T, ProjectCollaboratorFindFirstArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCollaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorFindFirstOrThrowArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectCollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectCollaborators
     * const projectCollaborators = await prisma.projectCollaborator.findMany()
     * 
     * // Get first 10 ProjectCollaborators
     * const projectCollaborators = await prisma.projectCollaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectCollaboratorWithIdOnly = await prisma.projectCollaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectCollaboratorFindManyArgs>(args?: SelectSubset<T, ProjectCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectCollaborator.
     * @param {ProjectCollaboratorCreateArgs} args - Arguments to create a ProjectCollaborator.
     * @example
     * // Create one ProjectCollaborator
     * const ProjectCollaborator = await prisma.projectCollaborator.create({
     *   data: {
     *     // ... data to create a ProjectCollaborator
     *   }
     * })
     * 
     */
    create<T extends ProjectCollaboratorCreateArgs>(args: SelectSubset<T, ProjectCollaboratorCreateArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectCollaborators.
     * @param {ProjectCollaboratorCreateManyArgs} args - Arguments to create many ProjectCollaborators.
     * @example
     * // Create many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCollaboratorCreateManyArgs>(args?: SelectSubset<T, ProjectCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectCollaborators and returns the data saved in the database.
     * @param {ProjectCollaboratorCreateManyAndReturnArgs} args - Arguments to create many ProjectCollaborators.
     * @example
     * // Create many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectCollaborators and only return the `id`
     * const projectCollaboratorWithIdOnly = await prisma.projectCollaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectCollaborator.
     * @param {ProjectCollaboratorDeleteArgs} args - Arguments to delete one ProjectCollaborator.
     * @example
     * // Delete one ProjectCollaborator
     * const ProjectCollaborator = await prisma.projectCollaborator.delete({
     *   where: {
     *     // ... filter to delete one ProjectCollaborator
     *   }
     * })
     * 
     */
    delete<T extends ProjectCollaboratorDeleteArgs>(args: SelectSubset<T, ProjectCollaboratorDeleteArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectCollaborator.
     * @param {ProjectCollaboratorUpdateArgs} args - Arguments to update one ProjectCollaborator.
     * @example
     * // Update one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectCollaboratorUpdateArgs>(args: SelectSubset<T, ProjectCollaboratorUpdateArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectCollaborators.
     * @param {ProjectCollaboratorDeleteManyArgs} args - Arguments to filter ProjectCollaborators to delete.
     * @example
     * // Delete a few ProjectCollaborators
     * const { count } = await prisma.projectCollaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectCollaboratorDeleteManyArgs>(args?: SelectSubset<T, ProjectCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectCollaboratorUpdateManyArgs>(args: SelectSubset<T, ProjectCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCollaborators and returns the data updated in the database.
     * @param {ProjectCollaboratorUpdateManyAndReturnArgs} args - Arguments to update many ProjectCollaborators.
     * @example
     * // Update many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectCollaborators and only return the `id`
     * const projectCollaboratorWithIdOnly = await prisma.projectCollaborator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectCollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectCollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectCollaborator.
     * @param {ProjectCollaboratorUpsertArgs} args - Arguments to update or create a ProjectCollaborator.
     * @example
     * // Update or create a ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.upsert({
     *   create: {
     *     // ... data to create a ProjectCollaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectCollaborator we want to update
     *   }
     * })
     */
    upsert<T extends ProjectCollaboratorUpsertArgs>(args: SelectSubset<T, ProjectCollaboratorUpsertArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorCountArgs} args - Arguments to filter ProjectCollaborators to count.
     * @example
     * // Count the number of ProjectCollaborators
     * const count = await prisma.projectCollaborator.count({
     *   where: {
     *     // ... the filter for the ProjectCollaborators we want to count
     *   }
     * })
    **/
    count<T extends ProjectCollaboratorCountArgs>(
      args?: Subset<T, ProjectCollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectCollaboratorAggregateArgs>(args: Subset<T, ProjectCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetProjectCollaboratorAggregateType<T>>

    /**
     * Group by ProjectCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectCollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCollaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectCollaborator model
   */
  readonly fields: ProjectCollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectCollaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectCollaborator model
   */
  interface ProjectCollaboratorFieldRefs {
    readonly id: FieldRef<"ProjectCollaborator", 'String'>
    readonly projectId: FieldRef<"ProjectCollaborator", 'String'>
    readonly userId: FieldRef<"ProjectCollaborator", 'Int'>
    readonly role: FieldRef<"ProjectCollaborator", 'ProjectRole'>
    readonly status: FieldRef<"ProjectCollaborator", 'Status'>
    readonly addedAt: FieldRef<"ProjectCollaborator", 'DateTime'>
    readonly createdAt: FieldRef<"ProjectCollaborator", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectCollaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectCollaborator findUnique
   */
  export type ProjectCollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator findUniqueOrThrow
   */
  export type ProjectCollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator findFirst
   */
  export type ProjectCollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCollaborators.
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCollaborators.
     */
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * ProjectCollaborator findFirstOrThrow
   */
  export type ProjectCollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCollaborators.
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCollaborators.
     */
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * ProjectCollaborator findMany
   */
  export type ProjectCollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborators to fetch.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectCollaborators.
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * ProjectCollaborator create
   */
  export type ProjectCollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectCollaborator.
     */
    data: XOR<ProjectCollaboratorCreateInput, ProjectCollaboratorUncheckedCreateInput>
  }

  /**
   * ProjectCollaborator createMany
   */
  export type ProjectCollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectCollaborators.
     */
    data: ProjectCollaboratorCreateManyInput | ProjectCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCollaborator createManyAndReturn
   */
  export type ProjectCollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectCollaborators.
     */
    data: ProjectCollaboratorCreateManyInput | ProjectCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCollaborator update
   */
  export type ProjectCollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectCollaborator.
     */
    data: XOR<ProjectCollaboratorUpdateInput, ProjectCollaboratorUncheckedUpdateInput>
    /**
     * Choose, which ProjectCollaborator to update.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator updateMany
   */
  export type ProjectCollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectCollaborators.
     */
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCollaborators to update
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * Limit how many ProjectCollaborators to update.
     */
    limit?: number
  }

  /**
   * ProjectCollaborator updateManyAndReturn
   */
  export type ProjectCollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update ProjectCollaborators.
     */
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCollaborators to update
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * Limit how many ProjectCollaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCollaborator upsert
   */
  export type ProjectCollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectCollaborator to update in case it exists.
     */
    where: ProjectCollaboratorWhereUniqueInput
    /**
     * In case the ProjectCollaborator found by the `where` argument doesn't exist, create a new ProjectCollaborator with this data.
     */
    create: XOR<ProjectCollaboratorCreateInput, ProjectCollaboratorUncheckedCreateInput>
    /**
     * In case the ProjectCollaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCollaboratorUpdateInput, ProjectCollaboratorUncheckedUpdateInput>
  }

  /**
   * ProjectCollaborator delete
   */
  export type ProjectCollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter which ProjectCollaborator to delete.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator deleteMany
   */
  export type ProjectCollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCollaborators to delete
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * Limit how many ProjectCollaborators to delete.
     */
    limit?: number
  }

  /**
   * ProjectCollaborator without action
   */
  export type ProjectCollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type PlanSumAggregateOutputType = {
    price: Decimal | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    billingCycle: $Enums.BillingCycle | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    billingCycle: $Enums.BillingCycle | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    billingCycle: number
    features: number
    limits: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price?: true
  }

  export type PlanSumAggregateInputType = {
    price?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    billingCycle?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    billingCycle?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    billingCycle?: true
    features?: true
    limits?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: Decimal
    billingCycle: $Enums.BillingCycle
    features: JsonValue
    limits: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    features?: boolean
    limits?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    features?: boolean
    limits?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    features?: boolean
    limits?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingCycle?: boolean
    features?: boolean
    limits?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "billingCycle" | "features" | "limits" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: Prisma.Decimal
      billingCycle: $Enums.BillingCycle
      features: Prisma.JsonValue
      limits: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Decimal'>
    readonly billingCycle: FieldRef<"Plan", 'BillingCycle'>
    readonly features: FieldRef<"Plan", 'Json'>
    readonly limits: FieldRef<"Plan", 'Json'>
    readonly isActive: FieldRef<"Plan", 'Boolean'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    userId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    organizationId: string | null
    planId: string | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    autoRenew: boolean | null
    lastPaymentDate: Date | null
    nextPaymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    organizationId: string | null
    planId: string | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    autoRenew: boolean | null
    lastPaymentDate: Date | null
    nextPaymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    planId: number
    status: number
    startDate: number
    endDate: number
    autoRenew: number
    lastPaymentDate: number
    nextPaymentDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    userId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    userId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    planId?: true
    status?: true
    startDate?: true
    endDate?: true
    autoRenew?: true
    lastPaymentDate?: true
    nextPaymentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    planId?: true
    status?: true
    startDate?: true
    endDate?: true
    autoRenew?: true
    lastPaymentDate?: true
    nextPaymentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    planId?: true
    status?: true
    startDate?: true
    endDate?: true
    autoRenew?: true
    lastPaymentDate?: true
    nextPaymentDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: number | null
    organizationId: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date
    endDate: Date | null
    autoRenew: boolean
    lastPaymentDate: Date | null
    nextPaymentDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    autoRenew?: boolean
    lastPaymentDate?: boolean
    nextPaymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | Subscription$userArgs<ExtArgs>
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    billingHistory?: boolean | Subscription$billingHistoryArgs<ExtArgs>
    usageTracking?: boolean | Subscription$usageTrackingArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    autoRenew?: boolean
    lastPaymentDate?: boolean
    nextPaymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | Subscription$userArgs<ExtArgs>
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    autoRenew?: boolean
    lastPaymentDate?: boolean
    nextPaymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | Subscription$userArgs<ExtArgs>
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    autoRenew?: boolean
    lastPaymentDate?: boolean
    nextPaymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "planId" | "status" | "startDate" | "endDate" | "autoRenew" | "lastPaymentDate" | "nextPaymentDate" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | Subscription$userArgs<ExtArgs>
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    billingHistory?: boolean | Subscription$billingHistoryArgs<ExtArgs>
    usageTracking?: boolean | Subscription$usageTrackingArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | Subscription$userArgs<ExtArgs>
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | Subscription$userArgs<ExtArgs>
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      billingHistory: Prisma.$BillingHistoryPayload<ExtArgs>[]
      usageTracking: Prisma.$UsageTrackingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number | null
      organizationId: string | null
      planId: string
      status: $Enums.SubscriptionStatus
      startDate: Date
      endDate: Date | null
      autoRenew: boolean
      lastPaymentDate: Date | null
      nextPaymentDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Subscription$userArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends Subscription$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    billingHistory<T extends Subscription$billingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$billingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageTracking<T extends Subscription$usageTrackingArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$usageTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'Int'>
    readonly organizationId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly autoRenew: FieldRef<"Subscription", 'Boolean'>
    readonly lastPaymentDate: FieldRef<"Subscription", 'DateTime'>
    readonly nextPaymentDate: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.user
   */
  export type Subscription$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Subscription.organization
   */
  export type Subscription$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Subscription.billingHistory
   */
  export type Subscription$billingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    where?: BillingHistoryWhereInput
    orderBy?: BillingHistoryOrderByWithRelationInput | BillingHistoryOrderByWithRelationInput[]
    cursor?: BillingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingHistoryScalarFieldEnum | BillingHistoryScalarFieldEnum[]
  }

  /**
   * Subscription.usageTracking
   */
  export type Subscription$usageTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    where?: UsageTrackingWhereInput
    orderBy?: UsageTrackingOrderByWithRelationInput | UsageTrackingOrderByWithRelationInput[]
    cursor?: UsageTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageTrackingScalarFieldEnum | UsageTrackingScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model BillingHistory
   */

  export type AggregateBillingHistory = {
    _count: BillingHistoryCountAggregateOutputType | null
    _avg: BillingHistoryAvgAggregateOutputType | null
    _sum: BillingHistorySumAggregateOutputType | null
    _min: BillingHistoryMinAggregateOutputType | null
    _max: BillingHistoryMaxAggregateOutputType | null
  }

  export type BillingHistoryAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type BillingHistorySumAggregateOutputType = {
    amount: Decimal | null
  }

  export type BillingHistoryMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    planName: string | null
    amount: Decimal | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    invoiceUrl: string | null
    paymentMethod: string | null
    createdAt: Date | null
  }

  export type BillingHistoryMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    planName: string | null
    amount: Decimal | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    invoiceUrl: string | null
    paymentMethod: string | null
    createdAt: Date | null
  }

  export type BillingHistoryCountAggregateOutputType = {
    id: number
    subscriptionId: number
    planName: number
    amount: number
    status: number
    paidAt: number
    invoiceUrl: number
    paymentMethod: number
    createdAt: number
    _all: number
  }


  export type BillingHistoryAvgAggregateInputType = {
    amount?: true
  }

  export type BillingHistorySumAggregateInputType = {
    amount?: true
  }

  export type BillingHistoryMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    planName?: true
    amount?: true
    status?: true
    paidAt?: true
    invoiceUrl?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type BillingHistoryMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    planName?: true
    amount?: true
    status?: true
    paidAt?: true
    invoiceUrl?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type BillingHistoryCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    planName?: true
    amount?: true
    status?: true
    paidAt?: true
    invoiceUrl?: true
    paymentMethod?: true
    createdAt?: true
    _all?: true
  }

  export type BillingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingHistory to aggregate.
     */
    where?: BillingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingHistories to fetch.
     */
    orderBy?: BillingHistoryOrderByWithRelationInput | BillingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingHistories
    **/
    _count?: true | BillingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingHistoryMaxAggregateInputType
  }

  export type GetBillingHistoryAggregateType<T extends BillingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingHistory[P]>
      : GetScalarType<T[P], AggregateBillingHistory[P]>
  }




  export type BillingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingHistoryWhereInput
    orderBy?: BillingHistoryOrderByWithAggregationInput | BillingHistoryOrderByWithAggregationInput[]
    by: BillingHistoryScalarFieldEnum[] | BillingHistoryScalarFieldEnum
    having?: BillingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingHistoryCountAggregateInputType | true
    _avg?: BillingHistoryAvgAggregateInputType
    _sum?: BillingHistorySumAggregateInputType
    _min?: BillingHistoryMinAggregateInputType
    _max?: BillingHistoryMaxAggregateInputType
  }

  export type BillingHistoryGroupByOutputType = {
    id: string
    subscriptionId: string
    planName: string
    amount: Decimal
    status: $Enums.PaymentStatus
    paidAt: Date | null
    invoiceUrl: string | null
    paymentMethod: string | null
    createdAt: Date
    _count: BillingHistoryCountAggregateOutputType | null
    _avg: BillingHistoryAvgAggregateOutputType | null
    _sum: BillingHistorySumAggregateOutputType | null
    _min: BillingHistoryMinAggregateOutputType | null
    _max: BillingHistoryMaxAggregateOutputType | null
  }

  type GetBillingHistoryGroupByPayload<T extends BillingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], BillingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type BillingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    planName?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    invoiceUrl?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingHistory"]>

  export type BillingHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    planName?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    invoiceUrl?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingHistory"]>

  export type BillingHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    planName?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    invoiceUrl?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingHistory"]>

  export type BillingHistorySelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    planName?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    invoiceUrl?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
  }

  export type BillingHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "planName" | "amount" | "status" | "paidAt" | "invoiceUrl" | "paymentMethod" | "createdAt", ExtArgs["result"]["billingHistory"]>
  export type BillingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type BillingHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type BillingHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $BillingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingHistory"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      planName: string
      amount: Prisma.Decimal
      status: $Enums.PaymentStatus
      paidAt: Date | null
      invoiceUrl: string | null
      paymentMethod: string | null
      createdAt: Date
    }, ExtArgs["result"]["billingHistory"]>
    composites: {}
  }

  type BillingHistoryGetPayload<S extends boolean | null | undefined | BillingHistoryDefaultArgs> = $Result.GetResult<Prisma.$BillingHistoryPayload, S>

  type BillingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingHistoryCountAggregateInputType | true
    }

  export interface BillingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingHistory'], meta: { name: 'BillingHistory' } }
    /**
     * Find zero or one BillingHistory that matches the filter.
     * @param {BillingHistoryFindUniqueArgs} args - Arguments to find a BillingHistory
     * @example
     * // Get one BillingHistory
     * const billingHistory = await prisma.billingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingHistoryFindUniqueArgs>(args: SelectSubset<T, BillingHistoryFindUniqueArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingHistoryFindUniqueOrThrowArgs} args - Arguments to find a BillingHistory
     * @example
     * // Get one BillingHistory
     * const billingHistory = await prisma.billingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingHistoryFindFirstArgs} args - Arguments to find a BillingHistory
     * @example
     * // Get one BillingHistory
     * const billingHistory = await prisma.billingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingHistoryFindFirstArgs>(args?: SelectSubset<T, BillingHistoryFindFirstArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingHistoryFindFirstOrThrowArgs} args - Arguments to find a BillingHistory
     * @example
     * // Get one BillingHistory
     * const billingHistory = await prisma.billingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingHistories
     * const billingHistories = await prisma.billingHistory.findMany()
     * 
     * // Get first 10 BillingHistories
     * const billingHistories = await prisma.billingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingHistoryWithIdOnly = await prisma.billingHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingHistoryFindManyArgs>(args?: SelectSubset<T, BillingHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingHistory.
     * @param {BillingHistoryCreateArgs} args - Arguments to create a BillingHistory.
     * @example
     * // Create one BillingHistory
     * const BillingHistory = await prisma.billingHistory.create({
     *   data: {
     *     // ... data to create a BillingHistory
     *   }
     * })
     * 
     */
    create<T extends BillingHistoryCreateArgs>(args: SelectSubset<T, BillingHistoryCreateArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingHistories.
     * @param {BillingHistoryCreateManyArgs} args - Arguments to create many BillingHistories.
     * @example
     * // Create many BillingHistories
     * const billingHistory = await prisma.billingHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingHistoryCreateManyArgs>(args?: SelectSubset<T, BillingHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingHistories and returns the data saved in the database.
     * @param {BillingHistoryCreateManyAndReturnArgs} args - Arguments to create many BillingHistories.
     * @example
     * // Create many BillingHistories
     * const billingHistory = await prisma.billingHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingHistories and only return the `id`
     * const billingHistoryWithIdOnly = await prisma.billingHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillingHistory.
     * @param {BillingHistoryDeleteArgs} args - Arguments to delete one BillingHistory.
     * @example
     * // Delete one BillingHistory
     * const BillingHistory = await prisma.billingHistory.delete({
     *   where: {
     *     // ... filter to delete one BillingHistory
     *   }
     * })
     * 
     */
    delete<T extends BillingHistoryDeleteArgs>(args: SelectSubset<T, BillingHistoryDeleteArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingHistory.
     * @param {BillingHistoryUpdateArgs} args - Arguments to update one BillingHistory.
     * @example
     * // Update one BillingHistory
     * const billingHistory = await prisma.billingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingHistoryUpdateArgs>(args: SelectSubset<T, BillingHistoryUpdateArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingHistories.
     * @param {BillingHistoryDeleteManyArgs} args - Arguments to filter BillingHistories to delete.
     * @example
     * // Delete a few BillingHistories
     * const { count } = await prisma.billingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingHistoryDeleteManyArgs>(args?: SelectSubset<T, BillingHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingHistories
     * const billingHistory = await prisma.billingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingHistoryUpdateManyArgs>(args: SelectSubset<T, BillingHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingHistories and returns the data updated in the database.
     * @param {BillingHistoryUpdateManyAndReturnArgs} args - Arguments to update many BillingHistories.
     * @example
     * // Update many BillingHistories
     * const billingHistory = await prisma.billingHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillingHistories and only return the `id`
     * const billingHistoryWithIdOnly = await prisma.billingHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillingHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillingHistory.
     * @param {BillingHistoryUpsertArgs} args - Arguments to update or create a BillingHistory.
     * @example
     * // Update or create a BillingHistory
     * const billingHistory = await prisma.billingHistory.upsert({
     *   create: {
     *     // ... data to create a BillingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingHistory we want to update
     *   }
     * })
     */
    upsert<T extends BillingHistoryUpsertArgs>(args: SelectSubset<T, BillingHistoryUpsertArgs<ExtArgs>>): Prisma__BillingHistoryClient<$Result.GetResult<Prisma.$BillingHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingHistoryCountArgs} args - Arguments to filter BillingHistories to count.
     * @example
     * // Count the number of BillingHistories
     * const count = await prisma.billingHistory.count({
     *   where: {
     *     // ... the filter for the BillingHistories we want to count
     *   }
     * })
    **/
    count<T extends BillingHistoryCountArgs>(
      args?: Subset<T, BillingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingHistoryAggregateArgs>(args: Subset<T, BillingHistoryAggregateArgs>): Prisma.PrismaPromise<GetBillingHistoryAggregateType<T>>

    /**
     * Group by BillingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: BillingHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingHistory model
   */
  readonly fields: BillingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BillingHistory model
   */
  interface BillingHistoryFieldRefs {
    readonly id: FieldRef<"BillingHistory", 'String'>
    readonly subscriptionId: FieldRef<"BillingHistory", 'String'>
    readonly planName: FieldRef<"BillingHistory", 'String'>
    readonly amount: FieldRef<"BillingHistory", 'Decimal'>
    readonly status: FieldRef<"BillingHistory", 'PaymentStatus'>
    readonly paidAt: FieldRef<"BillingHistory", 'DateTime'>
    readonly invoiceUrl: FieldRef<"BillingHistory", 'String'>
    readonly paymentMethod: FieldRef<"BillingHistory", 'String'>
    readonly createdAt: FieldRef<"BillingHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillingHistory findUnique
   */
  export type BillingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BillingHistory to fetch.
     */
    where: BillingHistoryWhereUniqueInput
  }

  /**
   * BillingHistory findUniqueOrThrow
   */
  export type BillingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BillingHistory to fetch.
     */
    where: BillingHistoryWhereUniqueInput
  }

  /**
   * BillingHistory findFirst
   */
  export type BillingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BillingHistory to fetch.
     */
    where?: BillingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingHistories to fetch.
     */
    orderBy?: BillingHistoryOrderByWithRelationInput | BillingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingHistories.
     */
    cursor?: BillingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingHistories.
     */
    distinct?: BillingHistoryScalarFieldEnum | BillingHistoryScalarFieldEnum[]
  }

  /**
   * BillingHistory findFirstOrThrow
   */
  export type BillingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BillingHistory to fetch.
     */
    where?: BillingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingHistories to fetch.
     */
    orderBy?: BillingHistoryOrderByWithRelationInput | BillingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingHistories.
     */
    cursor?: BillingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingHistories.
     */
    distinct?: BillingHistoryScalarFieldEnum | BillingHistoryScalarFieldEnum[]
  }

  /**
   * BillingHistory findMany
   */
  export type BillingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BillingHistories to fetch.
     */
    where?: BillingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingHistories to fetch.
     */
    orderBy?: BillingHistoryOrderByWithRelationInput | BillingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingHistories.
     */
    cursor?: BillingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingHistories.
     */
    skip?: number
    distinct?: BillingHistoryScalarFieldEnum | BillingHistoryScalarFieldEnum[]
  }

  /**
   * BillingHistory create
   */
  export type BillingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingHistory.
     */
    data: XOR<BillingHistoryCreateInput, BillingHistoryUncheckedCreateInput>
  }

  /**
   * BillingHistory createMany
   */
  export type BillingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingHistories.
     */
    data: BillingHistoryCreateManyInput | BillingHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingHistory createManyAndReturn
   */
  export type BillingHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many BillingHistories.
     */
    data: BillingHistoryCreateManyInput | BillingHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingHistory update
   */
  export type BillingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingHistory.
     */
    data: XOR<BillingHistoryUpdateInput, BillingHistoryUncheckedUpdateInput>
    /**
     * Choose, which BillingHistory to update.
     */
    where: BillingHistoryWhereUniqueInput
  }

  /**
   * BillingHistory updateMany
   */
  export type BillingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingHistories.
     */
    data: XOR<BillingHistoryUpdateManyMutationInput, BillingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BillingHistories to update
     */
    where?: BillingHistoryWhereInput
    /**
     * Limit how many BillingHistories to update.
     */
    limit?: number
  }

  /**
   * BillingHistory updateManyAndReturn
   */
  export type BillingHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * The data used to update BillingHistories.
     */
    data: XOR<BillingHistoryUpdateManyMutationInput, BillingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BillingHistories to update
     */
    where?: BillingHistoryWhereInput
    /**
     * Limit how many BillingHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingHistory upsert
   */
  export type BillingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingHistory to update in case it exists.
     */
    where: BillingHistoryWhereUniqueInput
    /**
     * In case the BillingHistory found by the `where` argument doesn't exist, create a new BillingHistory with this data.
     */
    create: XOR<BillingHistoryCreateInput, BillingHistoryUncheckedCreateInput>
    /**
     * In case the BillingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingHistoryUpdateInput, BillingHistoryUncheckedUpdateInput>
  }

  /**
   * BillingHistory delete
   */
  export type BillingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
    /**
     * Filter which BillingHistory to delete.
     */
    where: BillingHistoryWhereUniqueInput
  }

  /**
   * BillingHistory deleteMany
   */
  export type BillingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingHistories to delete
     */
    where?: BillingHistoryWhereInput
    /**
     * Limit how many BillingHistories to delete.
     */
    limit?: number
  }

  /**
   * BillingHistory without action
   */
  export type BillingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingHistory
     */
    select?: BillingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingHistory
     */
    omit?: BillingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingHistoryInclude<ExtArgs> | null
  }


  /**
   * Model BillingAddress
   */

  export type AggregateBillingAddress = {
    _count: BillingAddressCountAggregateOutputType | null
    _avg: BillingAddressAvgAggregateOutputType | null
    _sum: BillingAddressSumAggregateOutputType | null
    _min: BillingAddressMinAggregateOutputType | null
    _max: BillingAddressMaxAggregateOutputType | null
  }

  export type BillingAddressAvgAggregateOutputType = {
    userId: number | null
  }

  export type BillingAddressSumAggregateOutputType = {
    userId: number | null
  }

  export type BillingAddressMinAggregateOutputType = {
    id: string | null
    userId: number | null
    fullName: string | null
    email: string | null
    country: string | null
    city: string | null
    zipCode: string | null
    state: string | null
    address: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingAddressMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    fullName: string | null
    email: string | null
    country: string | null
    city: string | null
    zipCode: string | null
    state: string | null
    address: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingAddressCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    email: number
    country: number
    city: number
    zipCode: number
    state: number
    address: number
    company: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillingAddressAvgAggregateInputType = {
    userId?: true
  }

  export type BillingAddressSumAggregateInputType = {
    userId?: true
  }

  export type BillingAddressMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    country?: true
    city?: true
    zipCode?: true
    state?: true
    address?: true
    company?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingAddressMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    country?: true
    city?: true
    zipCode?: true
    state?: true
    address?: true
    company?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingAddressCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    country?: true
    city?: true
    zipCode?: true
    state?: true
    address?: true
    company?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillingAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingAddress to aggregate.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingAddresses
    **/
    _count?: true | BillingAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingAddressMaxAggregateInputType
  }

  export type GetBillingAddressAggregateType<T extends BillingAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingAddress[P]>
      : GetScalarType<T[P], AggregateBillingAddress[P]>
  }




  export type BillingAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingAddressWhereInput
    orderBy?: BillingAddressOrderByWithAggregationInput | BillingAddressOrderByWithAggregationInput[]
    by: BillingAddressScalarFieldEnum[] | BillingAddressScalarFieldEnum
    having?: BillingAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingAddressCountAggregateInputType | true
    _avg?: BillingAddressAvgAggregateInputType
    _sum?: BillingAddressSumAggregateInputType
    _min?: BillingAddressMinAggregateInputType
    _max?: BillingAddressMaxAggregateInputType
  }

  export type BillingAddressGroupByOutputType = {
    id: string
    userId: number
    fullName: string
    email: string
    country: string
    city: string
    zipCode: string | null
    state: string
    address: string
    company: string | null
    createdAt: Date
    updatedAt: Date
    _count: BillingAddressCountAggregateOutputType | null
    _avg: BillingAddressAvgAggregateOutputType | null
    _sum: BillingAddressSumAggregateOutputType | null
    _min: BillingAddressMinAggregateOutputType | null
    _max: BillingAddressMaxAggregateOutputType | null
  }

  type GetBillingAddressGroupByPayload<T extends BillingAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingAddressGroupByOutputType[P]>
            : GetScalarType<T[P], BillingAddressGroupByOutputType[P]>
        }
      >
    >


  export type BillingAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    country?: boolean
    city?: boolean
    zipCode?: boolean
    state?: boolean
    address?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingAddress"]>

  export type BillingAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    country?: boolean
    city?: boolean
    zipCode?: boolean
    state?: boolean
    address?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingAddress"]>

  export type BillingAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    country?: boolean
    city?: boolean
    zipCode?: boolean
    state?: boolean
    address?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingAddress"]>

  export type BillingAddressSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    country?: boolean
    city?: boolean
    zipCode?: boolean
    state?: boolean
    address?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillingAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "email" | "country" | "city" | "zipCode" | "state" | "address" | "company" | "createdAt" | "updatedAt", ExtArgs["result"]["billingAddress"]>
  export type BillingAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BillingAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BillingAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BillingAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingAddress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      fullName: string
      email: string
      country: string
      city: string
      zipCode: string | null
      state: string
      address: string
      company: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billingAddress"]>
    composites: {}
  }

  type BillingAddressGetPayload<S extends boolean | null | undefined | BillingAddressDefaultArgs> = $Result.GetResult<Prisma.$BillingAddressPayload, S>

  type BillingAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingAddressCountAggregateInputType | true
    }

  export interface BillingAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingAddress'], meta: { name: 'BillingAddress' } }
    /**
     * Find zero or one BillingAddress that matches the filter.
     * @param {BillingAddressFindUniqueArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingAddressFindUniqueArgs>(args: SelectSubset<T, BillingAddressFindUniqueArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingAddressFindUniqueOrThrowArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressFindFirstArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingAddressFindFirstArgs>(args?: SelectSubset<T, BillingAddressFindFirstArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressFindFirstOrThrowArgs} args - Arguments to find a BillingAddress
     * @example
     * // Get one BillingAddress
     * const billingAddress = await prisma.billingAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingAddresses
     * const billingAddresses = await prisma.billingAddress.findMany()
     * 
     * // Get first 10 BillingAddresses
     * const billingAddresses = await prisma.billingAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingAddressWithIdOnly = await prisma.billingAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingAddressFindManyArgs>(args?: SelectSubset<T, BillingAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingAddress.
     * @param {BillingAddressCreateArgs} args - Arguments to create a BillingAddress.
     * @example
     * // Create one BillingAddress
     * const BillingAddress = await prisma.billingAddress.create({
     *   data: {
     *     // ... data to create a BillingAddress
     *   }
     * })
     * 
     */
    create<T extends BillingAddressCreateArgs>(args: SelectSubset<T, BillingAddressCreateArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingAddresses.
     * @param {BillingAddressCreateManyArgs} args - Arguments to create many BillingAddresses.
     * @example
     * // Create many BillingAddresses
     * const billingAddress = await prisma.billingAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingAddressCreateManyArgs>(args?: SelectSubset<T, BillingAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingAddresses and returns the data saved in the database.
     * @param {BillingAddressCreateManyAndReturnArgs} args - Arguments to create many BillingAddresses.
     * @example
     * // Create many BillingAddresses
     * const billingAddress = await prisma.billingAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingAddresses and only return the `id`
     * const billingAddressWithIdOnly = await prisma.billingAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillingAddress.
     * @param {BillingAddressDeleteArgs} args - Arguments to delete one BillingAddress.
     * @example
     * // Delete one BillingAddress
     * const BillingAddress = await prisma.billingAddress.delete({
     *   where: {
     *     // ... filter to delete one BillingAddress
     *   }
     * })
     * 
     */
    delete<T extends BillingAddressDeleteArgs>(args: SelectSubset<T, BillingAddressDeleteArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingAddress.
     * @param {BillingAddressUpdateArgs} args - Arguments to update one BillingAddress.
     * @example
     * // Update one BillingAddress
     * const billingAddress = await prisma.billingAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingAddressUpdateArgs>(args: SelectSubset<T, BillingAddressUpdateArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingAddresses.
     * @param {BillingAddressDeleteManyArgs} args - Arguments to filter BillingAddresses to delete.
     * @example
     * // Delete a few BillingAddresses
     * const { count } = await prisma.billingAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingAddressDeleteManyArgs>(args?: SelectSubset<T, BillingAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingAddresses
     * const billingAddress = await prisma.billingAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingAddressUpdateManyArgs>(args: SelectSubset<T, BillingAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingAddresses and returns the data updated in the database.
     * @param {BillingAddressUpdateManyAndReturnArgs} args - Arguments to update many BillingAddresses.
     * @example
     * // Update many BillingAddresses
     * const billingAddress = await prisma.billingAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillingAddresses and only return the `id`
     * const billingAddressWithIdOnly = await prisma.billingAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillingAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillingAddress.
     * @param {BillingAddressUpsertArgs} args - Arguments to update or create a BillingAddress.
     * @example
     * // Update or create a BillingAddress
     * const billingAddress = await prisma.billingAddress.upsert({
     *   create: {
     *     // ... data to create a BillingAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingAddress we want to update
     *   }
     * })
     */
    upsert<T extends BillingAddressUpsertArgs>(args: SelectSubset<T, BillingAddressUpsertArgs<ExtArgs>>): Prisma__BillingAddressClient<$Result.GetResult<Prisma.$BillingAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressCountArgs} args - Arguments to filter BillingAddresses to count.
     * @example
     * // Count the number of BillingAddresses
     * const count = await prisma.billingAddress.count({
     *   where: {
     *     // ... the filter for the BillingAddresses we want to count
     *   }
     * })
    **/
    count<T extends BillingAddressCountArgs>(
      args?: Subset<T, BillingAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingAddressAggregateArgs>(args: Subset<T, BillingAddressAggregateArgs>): Prisma.PrismaPromise<GetBillingAddressAggregateType<T>>

    /**
     * Group by BillingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillingAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingAddressGroupByArgs['orderBy'] }
        : { orderBy?: BillingAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillingAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingAddress model
   */
  readonly fields: BillingAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BillingAddress model
   */
  interface BillingAddressFieldRefs {
    readonly id: FieldRef<"BillingAddress", 'String'>
    readonly userId: FieldRef<"BillingAddress", 'Int'>
    readonly fullName: FieldRef<"BillingAddress", 'String'>
    readonly email: FieldRef<"BillingAddress", 'String'>
    readonly country: FieldRef<"BillingAddress", 'String'>
    readonly city: FieldRef<"BillingAddress", 'String'>
    readonly zipCode: FieldRef<"BillingAddress", 'String'>
    readonly state: FieldRef<"BillingAddress", 'String'>
    readonly address: FieldRef<"BillingAddress", 'String'>
    readonly company: FieldRef<"BillingAddress", 'String'>
    readonly createdAt: FieldRef<"BillingAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"BillingAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillingAddress findUnique
   */
  export type BillingAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress findUniqueOrThrow
   */
  export type BillingAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress findFirst
   */
  export type BillingAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingAddresses.
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingAddresses.
     */
    distinct?: BillingAddressScalarFieldEnum | BillingAddressScalarFieldEnum[]
  }

  /**
   * BillingAddress findFirstOrThrow
   */
  export type BillingAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddress to fetch.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingAddresses.
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingAddresses.
     */
    distinct?: BillingAddressScalarFieldEnum | BillingAddressScalarFieldEnum[]
  }

  /**
   * BillingAddress findMany
   */
  export type BillingAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter, which BillingAddresses to fetch.
     */
    where?: BillingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingAddresses to fetch.
     */
    orderBy?: BillingAddressOrderByWithRelationInput | BillingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingAddresses.
     */
    cursor?: BillingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingAddresses.
     */
    skip?: number
    distinct?: BillingAddressScalarFieldEnum | BillingAddressScalarFieldEnum[]
  }

  /**
   * BillingAddress create
   */
  export type BillingAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingAddress.
     */
    data: XOR<BillingAddressCreateInput, BillingAddressUncheckedCreateInput>
  }

  /**
   * BillingAddress createMany
   */
  export type BillingAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingAddresses.
     */
    data: BillingAddressCreateManyInput | BillingAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingAddress createManyAndReturn
   */
  export type BillingAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * The data used to create many BillingAddresses.
     */
    data: BillingAddressCreateManyInput | BillingAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingAddress update
   */
  export type BillingAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingAddress.
     */
    data: XOR<BillingAddressUpdateInput, BillingAddressUncheckedUpdateInput>
    /**
     * Choose, which BillingAddress to update.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress updateMany
   */
  export type BillingAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingAddresses.
     */
    data: XOR<BillingAddressUpdateManyMutationInput, BillingAddressUncheckedUpdateManyInput>
    /**
     * Filter which BillingAddresses to update
     */
    where?: BillingAddressWhereInput
    /**
     * Limit how many BillingAddresses to update.
     */
    limit?: number
  }

  /**
   * BillingAddress updateManyAndReturn
   */
  export type BillingAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * The data used to update BillingAddresses.
     */
    data: XOR<BillingAddressUpdateManyMutationInput, BillingAddressUncheckedUpdateManyInput>
    /**
     * Filter which BillingAddresses to update
     */
    where?: BillingAddressWhereInput
    /**
     * Limit how many BillingAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingAddress upsert
   */
  export type BillingAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingAddress to update in case it exists.
     */
    where: BillingAddressWhereUniqueInput
    /**
     * In case the BillingAddress found by the `where` argument doesn't exist, create a new BillingAddress with this data.
     */
    create: XOR<BillingAddressCreateInput, BillingAddressUncheckedCreateInput>
    /**
     * In case the BillingAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingAddressUpdateInput, BillingAddressUncheckedUpdateInput>
  }

  /**
   * BillingAddress delete
   */
  export type BillingAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
    /**
     * Filter which BillingAddress to delete.
     */
    where: BillingAddressWhereUniqueInput
  }

  /**
   * BillingAddress deleteMany
   */
  export type BillingAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingAddresses to delete
     */
    where?: BillingAddressWhereInput
    /**
     * Limit how many BillingAddresses to delete.
     */
    limit?: number
  }

  /**
   * BillingAddress without action
   */
  export type BillingAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingAddress
     */
    select?: BillingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingAddress
     */
    omit?: BillingAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingAddressInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    userId: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    userId: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    userId: number | null
    type: $Enums.PaymentType | null
    cardLastFour: string | null
    cardBrand: string | null
    walletProvider: string | null
    walletPhone: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    type: $Enums.PaymentType | null
    cardLastFour: string | null
    cardBrand: string | null
    walletProvider: string | null
    walletPhone: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    cardLastFour: number
    cardBrand: number
    walletProvider: number
    walletPhone: number
    isDefault: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    userId?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    userId?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    cardLastFour?: true
    cardBrand?: true
    walletProvider?: true
    walletPhone?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    cardLastFour?: true
    cardBrand?: true
    walletProvider?: true
    walletPhone?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    cardLastFour?: true
    cardBrand?: true
    walletProvider?: true
    walletPhone?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    userId: number
    type: $Enums.PaymentType
    cardLastFour: string | null
    cardBrand: string | null
    walletProvider: string | null
    walletPhone: string | null
    isDefault: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    cardLastFour?: boolean
    cardBrand?: boolean
    walletProvider?: boolean
    walletPhone?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    cardLastFour?: boolean
    cardBrand?: boolean
    walletProvider?: boolean
    walletPhone?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    cardLastFour?: boolean
    cardBrand?: boolean
    walletProvider?: boolean
    walletPhone?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    cardLastFour?: boolean
    cardBrand?: boolean
    walletProvider?: boolean
    walletPhone?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "cardLastFour" | "cardBrand" | "walletProvider" | "walletPhone" | "isDefault" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      type: $Enums.PaymentType
      cardLastFour: string | null
      cardBrand: string | null
      walletProvider: string | null
      walletPhone: string | null
      isDefault: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly userId: FieldRef<"PaymentMethod", 'Int'>
    readonly type: FieldRef<"PaymentMethod", 'PaymentType'>
    readonly cardLastFour: FieldRef<"PaymentMethod", 'String'>
    readonly cardBrand: FieldRef<"PaymentMethod", 'String'>
    readonly walletProvider: FieldRef<"PaymentMethod", 'String'>
    readonly walletPhone: FieldRef<"PaymentMethod", 'String'>
    readonly isDefault: FieldRef<"PaymentMethod", 'Boolean'>
    readonly isActive: FieldRef<"PaymentMethod", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model UsageTracking
   */

  export type AggregateUsageTracking = {
    _count: UsageTrackingCountAggregateOutputType | null
    _avg: UsageTrackingAvgAggregateOutputType | null
    _sum: UsageTrackingSumAggregateOutputType | null
    _min: UsageTrackingMinAggregateOutputType | null
    _max: UsageTrackingMaxAggregateOutputType | null
  }

  export type UsageTrackingAvgAggregateOutputType = {
    bandwidthUsed: number | null
    apiCallsUsed: number | null
    mediaAssetsUsed: number | null
    projectsUsed: number | null
    rolesUsed: number | null
    collaboratorsUsed: number | null
    webhooksUsed: number | null
    modelsUsed: number | null
    localesUsed: number | null
    recordsUsed: number | null
  }

  export type UsageTrackingSumAggregateOutputType = {
    bandwidthUsed: number | null
    apiCallsUsed: number | null
    mediaAssetsUsed: number | null
    projectsUsed: number | null
    rolesUsed: number | null
    collaboratorsUsed: number | null
    webhooksUsed: number | null
    modelsUsed: number | null
    localesUsed: number | null
    recordsUsed: number | null
  }

  export type UsageTrackingMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    bandwidthUsed: number | null
    apiCallsUsed: number | null
    mediaAssetsUsed: number | null
    projectsUsed: number | null
    rolesUsed: number | null
    collaboratorsUsed: number | null
    webhooksUsed: number | null
    modelsUsed: number | null
    localesUsed: number | null
    recordsUsed: number | null
    periodStart: Date | null
    periodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageTrackingMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    bandwidthUsed: number | null
    apiCallsUsed: number | null
    mediaAssetsUsed: number | null
    projectsUsed: number | null
    rolesUsed: number | null
    collaboratorsUsed: number | null
    webhooksUsed: number | null
    modelsUsed: number | null
    localesUsed: number | null
    recordsUsed: number | null
    periodStart: Date | null
    periodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageTrackingCountAggregateOutputType = {
    id: number
    subscriptionId: number
    bandwidthUsed: number
    apiCallsUsed: number
    mediaAssetsUsed: number
    projectsUsed: number
    rolesUsed: number
    collaboratorsUsed: number
    webhooksUsed: number
    modelsUsed: number
    localesUsed: number
    recordsUsed: number
    periodStart: number
    periodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsageTrackingAvgAggregateInputType = {
    bandwidthUsed?: true
    apiCallsUsed?: true
    mediaAssetsUsed?: true
    projectsUsed?: true
    rolesUsed?: true
    collaboratorsUsed?: true
    webhooksUsed?: true
    modelsUsed?: true
    localesUsed?: true
    recordsUsed?: true
  }

  export type UsageTrackingSumAggregateInputType = {
    bandwidthUsed?: true
    apiCallsUsed?: true
    mediaAssetsUsed?: true
    projectsUsed?: true
    rolesUsed?: true
    collaboratorsUsed?: true
    webhooksUsed?: true
    modelsUsed?: true
    localesUsed?: true
    recordsUsed?: true
  }

  export type UsageTrackingMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    bandwidthUsed?: true
    apiCallsUsed?: true
    mediaAssetsUsed?: true
    projectsUsed?: true
    rolesUsed?: true
    collaboratorsUsed?: true
    webhooksUsed?: true
    modelsUsed?: true
    localesUsed?: true
    recordsUsed?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageTrackingMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    bandwidthUsed?: true
    apiCallsUsed?: true
    mediaAssetsUsed?: true
    projectsUsed?: true
    rolesUsed?: true
    collaboratorsUsed?: true
    webhooksUsed?: true
    modelsUsed?: true
    localesUsed?: true
    recordsUsed?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageTrackingCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    bandwidthUsed?: true
    apiCallsUsed?: true
    mediaAssetsUsed?: true
    projectsUsed?: true
    rolesUsed?: true
    collaboratorsUsed?: true
    webhooksUsed?: true
    modelsUsed?: true
    localesUsed?: true
    recordsUsed?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsageTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageTracking to aggregate.
     */
    where?: UsageTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageTrackings to fetch.
     */
    orderBy?: UsageTrackingOrderByWithRelationInput | UsageTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageTrackings
    **/
    _count?: true | UsageTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageTrackingMaxAggregateInputType
  }

  export type GetUsageTrackingAggregateType<T extends UsageTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageTracking[P]>
      : GetScalarType<T[P], AggregateUsageTracking[P]>
  }




  export type UsageTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageTrackingWhereInput
    orderBy?: UsageTrackingOrderByWithAggregationInput | UsageTrackingOrderByWithAggregationInput[]
    by: UsageTrackingScalarFieldEnum[] | UsageTrackingScalarFieldEnum
    having?: UsageTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageTrackingCountAggregateInputType | true
    _avg?: UsageTrackingAvgAggregateInputType
    _sum?: UsageTrackingSumAggregateInputType
    _min?: UsageTrackingMinAggregateInputType
    _max?: UsageTrackingMaxAggregateInputType
  }

  export type UsageTrackingGroupByOutputType = {
    id: string
    subscriptionId: string
    bandwidthUsed: number
    apiCallsUsed: number
    mediaAssetsUsed: number
    projectsUsed: number
    rolesUsed: number
    collaboratorsUsed: number
    webhooksUsed: number
    modelsUsed: number
    localesUsed: number
    recordsUsed: number
    periodStart: Date
    periodEnd: Date
    createdAt: Date
    updatedAt: Date
    _count: UsageTrackingCountAggregateOutputType | null
    _avg: UsageTrackingAvgAggregateOutputType | null
    _sum: UsageTrackingSumAggregateOutputType | null
    _min: UsageTrackingMinAggregateOutputType | null
    _max: UsageTrackingMaxAggregateOutputType | null
  }

  type GetUsageTrackingGroupByPayload<T extends UsageTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], UsageTrackingGroupByOutputType[P]>
        }
      >
    >


  export type UsageTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    bandwidthUsed?: boolean
    apiCallsUsed?: boolean
    mediaAssetsUsed?: boolean
    projectsUsed?: boolean
    rolesUsed?: boolean
    collaboratorsUsed?: boolean
    webhooksUsed?: boolean
    modelsUsed?: boolean
    localesUsed?: boolean
    recordsUsed?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageTracking"]>

  export type UsageTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    bandwidthUsed?: boolean
    apiCallsUsed?: boolean
    mediaAssetsUsed?: boolean
    projectsUsed?: boolean
    rolesUsed?: boolean
    collaboratorsUsed?: boolean
    webhooksUsed?: boolean
    modelsUsed?: boolean
    localesUsed?: boolean
    recordsUsed?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageTracking"]>

  export type UsageTrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    bandwidthUsed?: boolean
    apiCallsUsed?: boolean
    mediaAssetsUsed?: boolean
    projectsUsed?: boolean
    rolesUsed?: boolean
    collaboratorsUsed?: boolean
    webhooksUsed?: boolean
    modelsUsed?: boolean
    localesUsed?: boolean
    recordsUsed?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageTracking"]>

  export type UsageTrackingSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    bandwidthUsed?: boolean
    apiCallsUsed?: boolean
    mediaAssetsUsed?: boolean
    projectsUsed?: boolean
    rolesUsed?: boolean
    collaboratorsUsed?: boolean
    webhooksUsed?: boolean
    modelsUsed?: boolean
    localesUsed?: boolean
    recordsUsed?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsageTrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "bandwidthUsed" | "apiCallsUsed" | "mediaAssetsUsed" | "projectsUsed" | "rolesUsed" | "collaboratorsUsed" | "webhooksUsed" | "modelsUsed" | "localesUsed" | "recordsUsed" | "periodStart" | "periodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["usageTracking"]>
  export type UsageTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type UsageTrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type UsageTrackingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $UsageTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageTracking"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      bandwidthUsed: number
      apiCallsUsed: number
      mediaAssetsUsed: number
      projectsUsed: number
      rolesUsed: number
      collaboratorsUsed: number
      webhooksUsed: number
      modelsUsed: number
      localesUsed: number
      recordsUsed: number
      periodStart: Date
      periodEnd: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usageTracking"]>
    composites: {}
  }

  type UsageTrackingGetPayload<S extends boolean | null | undefined | UsageTrackingDefaultArgs> = $Result.GetResult<Prisma.$UsageTrackingPayload, S>

  type UsageTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageTrackingCountAggregateInputType | true
    }

  export interface UsageTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageTracking'], meta: { name: 'UsageTracking' } }
    /**
     * Find zero or one UsageTracking that matches the filter.
     * @param {UsageTrackingFindUniqueArgs} args - Arguments to find a UsageTracking
     * @example
     * // Get one UsageTracking
     * const usageTracking = await prisma.usageTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageTrackingFindUniqueArgs>(args: SelectSubset<T, UsageTrackingFindUniqueArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageTracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageTrackingFindUniqueOrThrowArgs} args - Arguments to find a UsageTracking
     * @example
     * // Get one UsageTracking
     * const usageTracking = await prisma.usageTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageTrackingFindFirstArgs} args - Arguments to find a UsageTracking
     * @example
     * // Get one UsageTracking
     * const usageTracking = await prisma.usageTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageTrackingFindFirstArgs>(args?: SelectSubset<T, UsageTrackingFindFirstArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageTrackingFindFirstOrThrowArgs} args - Arguments to find a UsageTracking
     * @example
     * // Get one UsageTracking
     * const usageTracking = await prisma.usageTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageTrackings
     * const usageTrackings = await prisma.usageTracking.findMany()
     * 
     * // Get first 10 UsageTrackings
     * const usageTrackings = await prisma.usageTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageTrackingWithIdOnly = await prisma.usageTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageTrackingFindManyArgs>(args?: SelectSubset<T, UsageTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageTracking.
     * @param {UsageTrackingCreateArgs} args - Arguments to create a UsageTracking.
     * @example
     * // Create one UsageTracking
     * const UsageTracking = await prisma.usageTracking.create({
     *   data: {
     *     // ... data to create a UsageTracking
     *   }
     * })
     * 
     */
    create<T extends UsageTrackingCreateArgs>(args: SelectSubset<T, UsageTrackingCreateArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageTrackings.
     * @param {UsageTrackingCreateManyArgs} args - Arguments to create many UsageTrackings.
     * @example
     * // Create many UsageTrackings
     * const usageTracking = await prisma.usageTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageTrackingCreateManyArgs>(args?: SelectSubset<T, UsageTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageTrackings and returns the data saved in the database.
     * @param {UsageTrackingCreateManyAndReturnArgs} args - Arguments to create many UsageTrackings.
     * @example
     * // Create many UsageTrackings
     * const usageTracking = await prisma.usageTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageTrackings and only return the `id`
     * const usageTrackingWithIdOnly = await prisma.usageTracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageTracking.
     * @param {UsageTrackingDeleteArgs} args - Arguments to delete one UsageTracking.
     * @example
     * // Delete one UsageTracking
     * const UsageTracking = await prisma.usageTracking.delete({
     *   where: {
     *     // ... filter to delete one UsageTracking
     *   }
     * })
     * 
     */
    delete<T extends UsageTrackingDeleteArgs>(args: SelectSubset<T, UsageTrackingDeleteArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageTracking.
     * @param {UsageTrackingUpdateArgs} args - Arguments to update one UsageTracking.
     * @example
     * // Update one UsageTracking
     * const usageTracking = await prisma.usageTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageTrackingUpdateArgs>(args: SelectSubset<T, UsageTrackingUpdateArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageTrackings.
     * @param {UsageTrackingDeleteManyArgs} args - Arguments to filter UsageTrackings to delete.
     * @example
     * // Delete a few UsageTrackings
     * const { count } = await prisma.usageTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageTrackingDeleteManyArgs>(args?: SelectSubset<T, UsageTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageTrackings
     * const usageTracking = await prisma.usageTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageTrackingUpdateManyArgs>(args: SelectSubset<T, UsageTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageTrackings and returns the data updated in the database.
     * @param {UsageTrackingUpdateManyAndReturnArgs} args - Arguments to update many UsageTrackings.
     * @example
     * // Update many UsageTrackings
     * const usageTracking = await prisma.usageTracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageTrackings and only return the `id`
     * const usageTrackingWithIdOnly = await prisma.usageTracking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageTrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageTracking.
     * @param {UsageTrackingUpsertArgs} args - Arguments to update or create a UsageTracking.
     * @example
     * // Update or create a UsageTracking
     * const usageTracking = await prisma.usageTracking.upsert({
     *   create: {
     *     // ... data to create a UsageTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageTracking we want to update
     *   }
     * })
     */
    upsert<T extends UsageTrackingUpsertArgs>(args: SelectSubset<T, UsageTrackingUpsertArgs<ExtArgs>>): Prisma__UsageTrackingClient<$Result.GetResult<Prisma.$UsageTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageTrackingCountArgs} args - Arguments to filter UsageTrackings to count.
     * @example
     * // Count the number of UsageTrackings
     * const count = await prisma.usageTracking.count({
     *   where: {
     *     // ... the filter for the UsageTrackings we want to count
     *   }
     * })
    **/
    count<T extends UsageTrackingCountArgs>(
      args?: Subset<T, UsageTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageTrackingAggregateArgs>(args: Subset<T, UsageTrackingAggregateArgs>): Prisma.PrismaPromise<GetUsageTrackingAggregateType<T>>

    /**
     * Group by UsageTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageTrackingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageTrackingGroupByArgs['orderBy'] }
        : { orderBy?: UsageTrackingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageTracking model
   */
  readonly fields: UsageTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageTracking model
   */
  interface UsageTrackingFieldRefs {
    readonly id: FieldRef<"UsageTracking", 'String'>
    readonly subscriptionId: FieldRef<"UsageTracking", 'String'>
    readonly bandwidthUsed: FieldRef<"UsageTracking", 'Int'>
    readonly apiCallsUsed: FieldRef<"UsageTracking", 'Int'>
    readonly mediaAssetsUsed: FieldRef<"UsageTracking", 'Int'>
    readonly projectsUsed: FieldRef<"UsageTracking", 'Int'>
    readonly rolesUsed: FieldRef<"UsageTracking", 'Int'>
    readonly collaboratorsUsed: FieldRef<"UsageTracking", 'Int'>
    readonly webhooksUsed: FieldRef<"UsageTracking", 'Int'>
    readonly modelsUsed: FieldRef<"UsageTracking", 'Int'>
    readonly localesUsed: FieldRef<"UsageTracking", 'Int'>
    readonly recordsUsed: FieldRef<"UsageTracking", 'Int'>
    readonly periodStart: FieldRef<"UsageTracking", 'DateTime'>
    readonly periodEnd: FieldRef<"UsageTracking", 'DateTime'>
    readonly createdAt: FieldRef<"UsageTracking", 'DateTime'>
    readonly updatedAt: FieldRef<"UsageTracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageTracking findUnique
   */
  export type UsageTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * Filter, which UsageTracking to fetch.
     */
    where: UsageTrackingWhereUniqueInput
  }

  /**
   * UsageTracking findUniqueOrThrow
   */
  export type UsageTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * Filter, which UsageTracking to fetch.
     */
    where: UsageTrackingWhereUniqueInput
  }

  /**
   * UsageTracking findFirst
   */
  export type UsageTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * Filter, which UsageTracking to fetch.
     */
    where?: UsageTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageTrackings to fetch.
     */
    orderBy?: UsageTrackingOrderByWithRelationInput | UsageTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageTrackings.
     */
    cursor?: UsageTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageTrackings.
     */
    distinct?: UsageTrackingScalarFieldEnum | UsageTrackingScalarFieldEnum[]
  }

  /**
   * UsageTracking findFirstOrThrow
   */
  export type UsageTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * Filter, which UsageTracking to fetch.
     */
    where?: UsageTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageTrackings to fetch.
     */
    orderBy?: UsageTrackingOrderByWithRelationInput | UsageTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageTrackings.
     */
    cursor?: UsageTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageTrackings.
     */
    distinct?: UsageTrackingScalarFieldEnum | UsageTrackingScalarFieldEnum[]
  }

  /**
   * UsageTracking findMany
   */
  export type UsageTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * Filter, which UsageTrackings to fetch.
     */
    where?: UsageTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageTrackings to fetch.
     */
    orderBy?: UsageTrackingOrderByWithRelationInput | UsageTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageTrackings.
     */
    cursor?: UsageTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageTrackings.
     */
    skip?: number
    distinct?: UsageTrackingScalarFieldEnum | UsageTrackingScalarFieldEnum[]
  }

  /**
   * UsageTracking create
   */
  export type UsageTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageTracking.
     */
    data: XOR<UsageTrackingCreateInput, UsageTrackingUncheckedCreateInput>
  }

  /**
   * UsageTracking createMany
   */
  export type UsageTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageTrackings.
     */
    data: UsageTrackingCreateManyInput | UsageTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageTracking createManyAndReturn
   */
  export type UsageTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * The data used to create many UsageTrackings.
     */
    data: UsageTrackingCreateManyInput | UsageTrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageTracking update
   */
  export type UsageTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageTracking.
     */
    data: XOR<UsageTrackingUpdateInput, UsageTrackingUncheckedUpdateInput>
    /**
     * Choose, which UsageTracking to update.
     */
    where: UsageTrackingWhereUniqueInput
  }

  /**
   * UsageTracking updateMany
   */
  export type UsageTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageTrackings.
     */
    data: XOR<UsageTrackingUpdateManyMutationInput, UsageTrackingUncheckedUpdateManyInput>
    /**
     * Filter which UsageTrackings to update
     */
    where?: UsageTrackingWhereInput
    /**
     * Limit how many UsageTrackings to update.
     */
    limit?: number
  }

  /**
   * UsageTracking updateManyAndReturn
   */
  export type UsageTrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * The data used to update UsageTrackings.
     */
    data: XOR<UsageTrackingUpdateManyMutationInput, UsageTrackingUncheckedUpdateManyInput>
    /**
     * Filter which UsageTrackings to update
     */
    where?: UsageTrackingWhereInput
    /**
     * Limit how many UsageTrackings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageTracking upsert
   */
  export type UsageTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageTracking to update in case it exists.
     */
    where: UsageTrackingWhereUniqueInput
    /**
     * In case the UsageTracking found by the `where` argument doesn't exist, create a new UsageTracking with this data.
     */
    create: XOR<UsageTrackingCreateInput, UsageTrackingUncheckedCreateInput>
    /**
     * In case the UsageTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageTrackingUpdateInput, UsageTrackingUncheckedUpdateInput>
  }

  /**
   * UsageTracking delete
   */
  export type UsageTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
    /**
     * Filter which UsageTracking to delete.
     */
    where: UsageTrackingWhereUniqueInput
  }

  /**
   * UsageTracking deleteMany
   */
  export type UsageTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageTrackings to delete
     */
    where?: UsageTrackingWhereInput
    /**
     * Limit how many UsageTrackings to delete.
     */
    limit?: number
  }

  /**
   * UsageTracking without action
   */
  export type UsageTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageTracking
     */
    select?: UsageTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageTracking
     */
    omit?: UsageTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageTrackingInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["item"]>

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    company: 'company',
    job: 'job',
    country: 'country',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    role: 'role',
    status: 'status',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    organizationId: 'organizationId',
    createdBy: 'createdBy',
    deadline: 'deadline',
    status: 'status',
    customDomain: 'customDomain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectCollaboratorScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    role: 'role',
    status: 'status',
    addedAt: 'addedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectCollaboratorScalarFieldEnum = (typeof ProjectCollaboratorScalarFieldEnum)[keyof typeof ProjectCollaboratorScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    billingCycle: 'billingCycle',
    features: 'features',
    limits: 'limits',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    planId: 'planId',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    autoRenew: 'autoRenew',
    lastPaymentDate: 'lastPaymentDate',
    nextPaymentDate: 'nextPaymentDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const BillingHistoryScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    planName: 'planName',
    amount: 'amount',
    status: 'status',
    paidAt: 'paidAt',
    invoiceUrl: 'invoiceUrl',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt'
  };

  export type BillingHistoryScalarFieldEnum = (typeof BillingHistoryScalarFieldEnum)[keyof typeof BillingHistoryScalarFieldEnum]


  export const BillingAddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    email: 'email',
    country: 'country',
    city: 'city',
    zipCode: 'zipCode',
    state: 'state',
    address: 'address',
    company: 'company',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillingAddressScalarFieldEnum = (typeof BillingAddressScalarFieldEnum)[keyof typeof BillingAddressScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    cardLastFour: 'cardLastFour',
    cardBrand: 'cardBrand',
    walletProvider: 'walletProvider',
    walletPhone: 'walletPhone',
    isDefault: 'isDefault',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const UsageTrackingScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    bandwidthUsed: 'bandwidthUsed',
    apiCallsUsed: 'apiCallsUsed',
    mediaAssetsUsed: 'mediaAssetsUsed',
    projectsUsed: 'projectsUsed',
    rolesUsed: 'rolesUsed',
    collaboratorsUsed: 'collaboratorsUsed',
    webhooksUsed: 'webhooksUsed',
    modelsUsed: 'modelsUsed',
    localesUsed: 'localesUsed',
    recordsUsed: 'recordsUsed',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsageTrackingScalarFieldEnum = (typeof UsageTrackingScalarFieldEnum)[keyof typeof UsageTrackingScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'ProjectRole'
   */
  export type EnumProjectRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRole'>
    


  /**
   * Reference to a field of type 'ProjectRole[]'
   */
  export type ListEnumProjectRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRole[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BillingCycle'
   */
  export type EnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle'>
    


  /**
   * Reference to a field of type 'BillingCycle[]'
   */
  export type ListEnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    company?: StringFilter<"User"> | string
    job?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    passwordResets?: PasswordResetListRelationFilter
    organizationsOwned?: OrganizationListRelationFilter
    organizationMembers?: OrganizationMemberListRelationFilter
    projectsCreated?: ProjectListRelationFilter
    projectCollaborators?: ProjectCollaboratorListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    billingAddresses?: XOR<BillingAddressNullableScalarRelationFilter, BillingAddressWhereInput> | null
    paymentMethods?: PaymentMethodListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job?: SortOrder
    country?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passwordResets?: PasswordResetOrderByRelationAggregateInput
    organizationsOwned?: OrganizationOrderByRelationAggregateInput
    organizationMembers?: OrganizationMemberOrderByRelationAggregateInput
    projectsCreated?: ProjectOrderByRelationAggregateInput
    projectCollaborators?: ProjectCollaboratorOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    billingAddresses?: BillingAddressOrderByWithRelationInput
    paymentMethods?: PaymentMethodOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    company?: StringFilter<"User"> | string
    job?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    passwordResets?: PasswordResetListRelationFilter
    organizationsOwned?: OrganizationListRelationFilter
    organizationMembers?: OrganizationMemberListRelationFilter
    projectsCreated?: ProjectListRelationFilter
    projectCollaborators?: ProjectCollaboratorListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    billingAddresses?: XOR<BillingAddressNullableScalarRelationFilter, BillingAddressWhereInput> | null
    paymentMethods?: PaymentMethodListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job?: SortOrder
    country?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    company?: StringWithAggregatesFilter<"User"> | string
    job?: StringWithAggregatesFilter<"User"> | string
    country?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: IntFilter<"PasswordReset"> | number
    userId?: IntFilter<"PasswordReset"> | number
    token?: StringFilter<"PasswordReset"> | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    userId?: IntFilter<"PasswordReset"> | number
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _avg?: PasswordResetAvgOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
    _sum?: PasswordResetSumOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordReset"> | number
    userId?: IntWithAggregatesFilter<"PasswordReset"> | number
    token?: StringWithAggregatesFilter<"PasswordReset"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    used?: BoolWithAggregatesFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    ownerId?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: OrganizationMemberListRelationFilter
    projects?: ProjectListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: OrganizationMemberOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    ownerId?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: OrganizationMemberListRelationFilter
    projects?: ProjectListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    ownerId?: IntWithAggregatesFilter<"Organization"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    userId?: IntFilter<"OrganizationMember"> | number
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    status?: EnumStatusFilter<"OrganizationMember"> | $Enums.Status
    joinedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    createdAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId_userId?: OrganizationMemberOrganizationIdUserIdCompoundUniqueInput
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    userId?: IntFilter<"OrganizationMember"> | number
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    status?: EnumStatusFilter<"OrganizationMember"> | $Enums.Status
    joinedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    createdAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "organizationId_userId">

  export type OrganizationMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationMemberCountOrderByAggregateInput
    _avg?: OrganizationMemberAvgOrderByAggregateInput
    _max?: OrganizationMemberMaxOrderByAggregateInput
    _min?: OrganizationMemberMinOrderByAggregateInput
    _sum?: OrganizationMemberSumOrderByAggregateInput
  }

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMember"> | string
    userId?: IntWithAggregatesFilter<"OrganizationMember"> | number
    organizationId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    role?: EnumRoleWithAggregatesFilter<"OrganizationMember"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"OrganizationMember"> | $Enums.Status
    joinedAt?: DateTimeNullableWithAggregatesFilter<"OrganizationMember"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrganizationMember"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    createdBy?: IntFilter<"Project"> | number
    deadline?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    customDomain?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborators?: ProjectCollaboratorListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    collaborators?: ProjectCollaboratorOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customDomain?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    createdBy?: IntFilter<"Project"> | number
    deadline?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborators?: ProjectCollaboratorListRelationFilter
  }, "id" | "customDomain">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    organizationId?: StringWithAggregatesFilter<"Project"> | string
    createdBy?: IntWithAggregatesFilter<"Project"> | number
    deadline?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    customDomain?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectCollaboratorWhereInput = {
    AND?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    OR?: ProjectCollaboratorWhereInput[]
    NOT?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    id?: StringFilter<"ProjectCollaborator"> | string
    projectId?: StringFilter<"ProjectCollaborator"> | string
    userId?: IntFilter<"ProjectCollaborator"> | number
    role?: EnumProjectRoleFilter<"ProjectCollaborator"> | $Enums.ProjectRole
    status?: EnumStatusFilter<"ProjectCollaborator"> | $Enums.Status
    addedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    createdAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectCollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: ProjectCollaboratorProjectIdUserIdCompoundUniqueInput
    AND?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    OR?: ProjectCollaboratorWhereInput[]
    NOT?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    projectId?: StringFilter<"ProjectCollaborator"> | string
    userId?: IntFilter<"ProjectCollaborator"> | number
    role?: EnumProjectRoleFilter<"ProjectCollaborator"> | $Enums.ProjectRole
    status?: EnumStatusFilter<"ProjectCollaborator"> | $Enums.Status
    addedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    createdAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId_userId">

  export type ProjectCollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCollaboratorCountOrderByAggregateInput
    _avg?: ProjectCollaboratorAvgOrderByAggregateInput
    _max?: ProjectCollaboratorMaxOrderByAggregateInput
    _min?: ProjectCollaboratorMinOrderByAggregateInput
    _sum?: ProjectCollaboratorSumOrderByAggregateInput
  }

  export type ProjectCollaboratorScalarWhereWithAggregatesInput = {
    AND?: ProjectCollaboratorScalarWhereWithAggregatesInput | ProjectCollaboratorScalarWhereWithAggregatesInput[]
    OR?: ProjectCollaboratorScalarWhereWithAggregatesInput[]
    NOT?: ProjectCollaboratorScalarWhereWithAggregatesInput | ProjectCollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectCollaborator"> | string
    projectId?: StringWithAggregatesFilter<"ProjectCollaborator"> | string
    userId?: IntWithAggregatesFilter<"ProjectCollaborator"> | number
    role?: EnumProjectRoleWithAggregatesFilter<"ProjectCollaborator"> | $Enums.ProjectRole
    status?: EnumStatusWithAggregatesFilter<"ProjectCollaborator"> | $Enums.Status
    addedAt?: DateTimeWithAggregatesFilter<"ProjectCollaborator"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectCollaborator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectCollaborator"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFilter<"Plan"> | $Enums.BillingCycle
    features?: JsonFilter<"Plan">
    limits?: JsonFilter<"Plan">
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    features?: SortOrder
    limits?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFilter<"Plan"> | $Enums.BillingCycle
    features?: JsonFilter<"Plan">
    limits?: JsonFilter<"Plan">
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    features?: SortOrder
    limits?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    price?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleWithAggregatesFilter<"Plan"> | $Enums.BillingCycle
    features?: JsonWithAggregatesFilter<"Plan">
    limits?: JsonWithAggregatesFilter<"Plan">
    isActive?: BoolWithAggregatesFilter<"Plan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: IntNullableFilter<"Subscription"> | number | null
    organizationId?: StringNullableFilter<"Subscription"> | string | null
    planId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    autoRenew?: BoolFilter<"Subscription"> | boolean
    lastPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    nextPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    billingHistory?: BillingHistoryListRelationFilter
    usageTracking?: UsageTrackingListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    nextPaymentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    billingHistory?: BillingHistoryOrderByRelationAggregateInput
    usageTracking?: UsageTrackingOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: IntNullableFilter<"Subscription"> | number | null
    organizationId?: StringNullableFilter<"Subscription"> | string | null
    planId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    autoRenew?: BoolFilter<"Subscription"> | boolean
    lastPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    nextPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    billingHistory?: BillingHistoryListRelationFilter
    usageTracking?: UsageTrackingListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    nextPaymentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: IntNullableWithAggregatesFilter<"Subscription"> | number | null
    organizationId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    autoRenew?: BoolWithAggregatesFilter<"Subscription"> | boolean
    lastPaymentDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    nextPaymentDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type BillingHistoryWhereInput = {
    AND?: BillingHistoryWhereInput | BillingHistoryWhereInput[]
    OR?: BillingHistoryWhereInput[]
    NOT?: BillingHistoryWhereInput | BillingHistoryWhereInput[]
    id?: StringFilter<"BillingHistory"> | string
    subscriptionId?: StringFilter<"BillingHistory"> | string
    planName?: StringFilter<"BillingHistory"> | string
    amount?: DecimalFilter<"BillingHistory"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFilter<"BillingHistory"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"BillingHistory"> | Date | string | null
    invoiceUrl?: StringNullableFilter<"BillingHistory"> | string | null
    paymentMethod?: StringNullableFilter<"BillingHistory"> | string | null
    createdAt?: DateTimeFilter<"BillingHistory"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type BillingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type BillingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillingHistoryWhereInput | BillingHistoryWhereInput[]
    OR?: BillingHistoryWhereInput[]
    NOT?: BillingHistoryWhereInput | BillingHistoryWhereInput[]
    subscriptionId?: StringFilter<"BillingHistory"> | string
    planName?: StringFilter<"BillingHistory"> | string
    amount?: DecimalFilter<"BillingHistory"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFilter<"BillingHistory"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"BillingHistory"> | Date | string | null
    invoiceUrl?: StringNullableFilter<"BillingHistory"> | string | null
    paymentMethod?: StringNullableFilter<"BillingHistory"> | string | null
    createdAt?: DateTimeFilter<"BillingHistory"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id">

  export type BillingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BillingHistoryCountOrderByAggregateInput
    _avg?: BillingHistoryAvgOrderByAggregateInput
    _max?: BillingHistoryMaxOrderByAggregateInput
    _min?: BillingHistoryMinOrderByAggregateInput
    _sum?: BillingHistorySumOrderByAggregateInput
  }

  export type BillingHistoryScalarWhereWithAggregatesInput = {
    AND?: BillingHistoryScalarWhereWithAggregatesInput | BillingHistoryScalarWhereWithAggregatesInput[]
    OR?: BillingHistoryScalarWhereWithAggregatesInput[]
    NOT?: BillingHistoryScalarWhereWithAggregatesInput | BillingHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingHistory"> | string
    subscriptionId?: StringWithAggregatesFilter<"BillingHistory"> | string
    planName?: StringWithAggregatesFilter<"BillingHistory"> | string
    amount?: DecimalWithAggregatesFilter<"BillingHistory"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusWithAggregatesFilter<"BillingHistory"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"BillingHistory"> | Date | string | null
    invoiceUrl?: StringNullableWithAggregatesFilter<"BillingHistory"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"BillingHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BillingHistory"> | Date | string
  }

  export type BillingAddressWhereInput = {
    AND?: BillingAddressWhereInput | BillingAddressWhereInput[]
    OR?: BillingAddressWhereInput[]
    NOT?: BillingAddressWhereInput | BillingAddressWhereInput[]
    id?: StringFilter<"BillingAddress"> | string
    userId?: IntFilter<"BillingAddress"> | number
    fullName?: StringFilter<"BillingAddress"> | string
    email?: StringFilter<"BillingAddress"> | string
    country?: StringFilter<"BillingAddress"> | string
    city?: StringFilter<"BillingAddress"> | string
    zipCode?: StringNullableFilter<"BillingAddress"> | string | null
    state?: StringFilter<"BillingAddress"> | string
    address?: StringFilter<"BillingAddress"> | string
    company?: StringNullableFilter<"BillingAddress"> | string | null
    createdAt?: DateTimeFilter<"BillingAddress"> | Date | string
    updatedAt?: DateTimeFilter<"BillingAddress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BillingAddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    country?: SortOrder
    city?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    state?: SortOrder
    address?: SortOrder
    company?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BillingAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    AND?: BillingAddressWhereInput | BillingAddressWhereInput[]
    OR?: BillingAddressWhereInput[]
    NOT?: BillingAddressWhereInput | BillingAddressWhereInput[]
    fullName?: StringFilter<"BillingAddress"> | string
    email?: StringFilter<"BillingAddress"> | string
    country?: StringFilter<"BillingAddress"> | string
    city?: StringFilter<"BillingAddress"> | string
    zipCode?: StringNullableFilter<"BillingAddress"> | string | null
    state?: StringFilter<"BillingAddress"> | string
    address?: StringFilter<"BillingAddress"> | string
    company?: StringNullableFilter<"BillingAddress"> | string | null
    createdAt?: DateTimeFilter<"BillingAddress"> | Date | string
    updatedAt?: DateTimeFilter<"BillingAddress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BillingAddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    country?: SortOrder
    city?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    state?: SortOrder
    address?: SortOrder
    company?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillingAddressCountOrderByAggregateInput
    _avg?: BillingAddressAvgOrderByAggregateInput
    _max?: BillingAddressMaxOrderByAggregateInput
    _min?: BillingAddressMinOrderByAggregateInput
    _sum?: BillingAddressSumOrderByAggregateInput
  }

  export type BillingAddressScalarWhereWithAggregatesInput = {
    AND?: BillingAddressScalarWhereWithAggregatesInput | BillingAddressScalarWhereWithAggregatesInput[]
    OR?: BillingAddressScalarWhereWithAggregatesInput[]
    NOT?: BillingAddressScalarWhereWithAggregatesInput | BillingAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingAddress"> | string
    userId?: IntWithAggregatesFilter<"BillingAddress"> | number
    fullName?: StringWithAggregatesFilter<"BillingAddress"> | string
    email?: StringWithAggregatesFilter<"BillingAddress"> | string
    country?: StringWithAggregatesFilter<"BillingAddress"> | string
    city?: StringWithAggregatesFilter<"BillingAddress"> | string
    zipCode?: StringNullableWithAggregatesFilter<"BillingAddress"> | string | null
    state?: StringWithAggregatesFilter<"BillingAddress"> | string
    address?: StringWithAggregatesFilter<"BillingAddress"> | string
    company?: StringNullableWithAggregatesFilter<"BillingAddress"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BillingAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillingAddress"> | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    userId?: IntFilter<"PaymentMethod"> | number
    type?: EnumPaymentTypeFilter<"PaymentMethod"> | $Enums.PaymentType
    cardLastFour?: StringNullableFilter<"PaymentMethod"> | string | null
    cardBrand?: StringNullableFilter<"PaymentMethod"> | string | null
    walletProvider?: StringNullableFilter<"PaymentMethod"> | string | null
    walletPhone?: StringNullableFilter<"PaymentMethod"> | string | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    isActive?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    cardLastFour?: SortOrderInput | SortOrder
    cardBrand?: SortOrderInput | SortOrder
    walletProvider?: SortOrderInput | SortOrder
    walletPhone?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    userId?: IntFilter<"PaymentMethod"> | number
    type?: EnumPaymentTypeFilter<"PaymentMethod"> | $Enums.PaymentType
    cardLastFour?: StringNullableFilter<"PaymentMethod"> | string | null
    cardBrand?: StringNullableFilter<"PaymentMethod"> | string | null
    walletProvider?: StringNullableFilter<"PaymentMethod"> | string | null
    walletPhone?: StringNullableFilter<"PaymentMethod"> | string | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    isActive?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    cardLastFour?: SortOrderInput | SortOrder
    cardBrand?: SortOrderInput | SortOrder
    walletProvider?: SortOrderInput | SortOrder
    walletPhone?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethod"> | string
    userId?: IntWithAggregatesFilter<"PaymentMethod"> | number
    type?: EnumPaymentTypeWithAggregatesFilter<"PaymentMethod"> | $Enums.PaymentType
    cardLastFour?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    cardBrand?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    walletProvider?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    walletPhone?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    isDefault?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    isActive?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type UsageTrackingWhereInput = {
    AND?: UsageTrackingWhereInput | UsageTrackingWhereInput[]
    OR?: UsageTrackingWhereInput[]
    NOT?: UsageTrackingWhereInput | UsageTrackingWhereInput[]
    id?: StringFilter<"UsageTracking"> | string
    subscriptionId?: StringFilter<"UsageTracking"> | string
    bandwidthUsed?: IntFilter<"UsageTracking"> | number
    apiCallsUsed?: IntFilter<"UsageTracking"> | number
    mediaAssetsUsed?: IntFilter<"UsageTracking"> | number
    projectsUsed?: IntFilter<"UsageTracking"> | number
    rolesUsed?: IntFilter<"UsageTracking"> | number
    collaboratorsUsed?: IntFilter<"UsageTracking"> | number
    webhooksUsed?: IntFilter<"UsageTracking"> | number
    modelsUsed?: IntFilter<"UsageTracking"> | number
    localesUsed?: IntFilter<"UsageTracking"> | number
    recordsUsed?: IntFilter<"UsageTracking"> | number
    periodStart?: DateTimeFilter<"UsageTracking"> | Date | string
    periodEnd?: DateTimeFilter<"UsageTracking"> | Date | string
    createdAt?: DateTimeFilter<"UsageTracking"> | Date | string
    updatedAt?: DateTimeFilter<"UsageTracking"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type UsageTrackingOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    bandwidthUsed?: SortOrder
    apiCallsUsed?: SortOrder
    mediaAssetsUsed?: SortOrder
    projectsUsed?: SortOrder
    rolesUsed?: SortOrder
    collaboratorsUsed?: SortOrder
    webhooksUsed?: SortOrder
    modelsUsed?: SortOrder
    localesUsed?: SortOrder
    recordsUsed?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type UsageTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsageTrackingWhereInput | UsageTrackingWhereInput[]
    OR?: UsageTrackingWhereInput[]
    NOT?: UsageTrackingWhereInput | UsageTrackingWhereInput[]
    subscriptionId?: StringFilter<"UsageTracking"> | string
    bandwidthUsed?: IntFilter<"UsageTracking"> | number
    apiCallsUsed?: IntFilter<"UsageTracking"> | number
    mediaAssetsUsed?: IntFilter<"UsageTracking"> | number
    projectsUsed?: IntFilter<"UsageTracking"> | number
    rolesUsed?: IntFilter<"UsageTracking"> | number
    collaboratorsUsed?: IntFilter<"UsageTracking"> | number
    webhooksUsed?: IntFilter<"UsageTracking"> | number
    modelsUsed?: IntFilter<"UsageTracking"> | number
    localesUsed?: IntFilter<"UsageTracking"> | number
    recordsUsed?: IntFilter<"UsageTracking"> | number
    periodStart?: DateTimeFilter<"UsageTracking"> | Date | string
    periodEnd?: DateTimeFilter<"UsageTracking"> | Date | string
    createdAt?: DateTimeFilter<"UsageTracking"> | Date | string
    updatedAt?: DateTimeFilter<"UsageTracking"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id">

  export type UsageTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    bandwidthUsed?: SortOrder
    apiCallsUsed?: SortOrder
    mediaAssetsUsed?: SortOrder
    projectsUsed?: SortOrder
    rolesUsed?: SortOrder
    collaboratorsUsed?: SortOrder
    webhooksUsed?: SortOrder
    modelsUsed?: SortOrder
    localesUsed?: SortOrder
    recordsUsed?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsageTrackingCountOrderByAggregateInput
    _avg?: UsageTrackingAvgOrderByAggregateInput
    _max?: UsageTrackingMaxOrderByAggregateInput
    _min?: UsageTrackingMinOrderByAggregateInput
    _sum?: UsageTrackingSumOrderByAggregateInput
  }

  export type UsageTrackingScalarWhereWithAggregatesInput = {
    AND?: UsageTrackingScalarWhereWithAggregatesInput | UsageTrackingScalarWhereWithAggregatesInput[]
    OR?: UsageTrackingScalarWhereWithAggregatesInput[]
    NOT?: UsageTrackingScalarWhereWithAggregatesInput | UsageTrackingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageTracking"> | string
    subscriptionId?: StringWithAggregatesFilter<"UsageTracking"> | string
    bandwidthUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    apiCallsUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    mediaAssetsUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    projectsUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    rolesUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    collaboratorsUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    webhooksUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    modelsUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    localesUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    recordsUsed?: IntWithAggregatesFilter<"UsageTracking"> | number
    periodStart?: DateTimeWithAggregatesFilter<"UsageTracking"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"UsageTracking"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UsageTracking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsageTracking"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetsInput
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetsNestedInput
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOrganizationsOwnedInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOrganizationsOwnedNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateInput = {
    id?: string
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrganizationMembersInput
    organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrganizationMemberUncheckedCreateInput = {
    id?: string
    userId: number
    organizationId: string
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyInput = {
    id?: string
    userId: number
    organizationId: string
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsCreatedInput
    collaborators?: ProjectCollaboratorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    createdBy: number
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput
    collaborators?: ProjectCollaboratorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    createdBy: number
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorCreateInput = {
    id?: string
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutProjectCollaboratorsInput
  }

  export type ProjectCollaboratorUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: number
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutProjectCollaboratorsNestedInput
  }

  export type ProjectCollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorCreateManyInput = {
    id?: string
    projectId: string
    userId: number
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle: $Enums.BillingCycle
    features: JsonNullValueInput | InputJsonValue
    limits: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle: $Enums.BillingCycle
    features: JsonNullValueInput | InputJsonValue
    limits: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    features?: JsonNullValueInput | InputJsonValue
    limits?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    features?: JsonNullValueInput | InputJsonValue
    limits?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle: $Enums.BillingCycle
    features: JsonNullValueInput | InputJsonValue
    limits: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    features?: JsonNullValueInput | InputJsonValue
    limits?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    features?: JsonNullValueInput | InputJsonValue
    limits?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    user?: UserCreateNestedOneWithoutSubscriptionsInput
    organization?: OrganizationCreateNestedOneWithoutSubscriptionsInput
    billingHistory?: BillingHistoryCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId?: number | null
    organizationId?: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billingHistory?: BillingHistoryUncheckedCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneWithoutSubscriptionsNestedInput
    organization?: OrganizationUpdateOneWithoutSubscriptionsNestedInput
    billingHistory?: BillingHistoryUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingHistory?: BillingHistoryUncheckedUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId?: number | null
    organizationId?: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingHistoryCreateInput = {
    id?: string
    planName: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.PaymentStatus
    paidAt?: Date | string | null
    invoiceUrl?: string | null
    paymentMethod?: string | null
    createdAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutBillingHistoryInput
  }

  export type BillingHistoryUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    planName: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.PaymentStatus
    paidAt?: Date | string | null
    invoiceUrl?: string | null
    paymentMethod?: string | null
    createdAt?: Date | string
  }

  export type BillingHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutBillingHistoryNestedInput
  }

  export type BillingHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingHistoryCreateManyInput = {
    id?: string
    subscriptionId: string
    planName: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.PaymentStatus
    paidAt?: Date | string | null
    invoiceUrl?: string | null
    paymentMethod?: string | null
    createdAt?: Date | string
  }

  export type BillingHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingAddressCreateInput = {
    id?: string
    fullName: string
    email: string
    country: string
    city: string
    zipCode?: string | null
    state: string
    address: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBillingAddressesInput
  }

  export type BillingAddressUncheckedCreateInput = {
    id?: string
    userId: number
    fullName: string
    email: string
    country: string
    city: string
    zipCode?: string | null
    state: string
    address: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillingAddressesNestedInput
  }

  export type BillingAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingAddressCreateManyInput = {
    id?: string
    userId: number
    fullName: string
    email: string
    country: string
    city: string
    zipCode?: string | null
    state: string
    address: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    id?: string
    type: $Enums.PaymentType
    cardLastFour?: string | null
    cardBrand?: string | null
    walletProvider?: string | null
    walletPhone?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentMethodsInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: string
    userId: number
    type: $Enums.PaymentType
    cardLastFour?: string | null
    cardBrand?: string | null
    walletProvider?: string | null
    walletPhone?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    cardLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    cardBrand?: NullableStringFieldUpdateOperationsInput | string | null
    walletProvider?: NullableStringFieldUpdateOperationsInput | string | null
    walletPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    cardLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    cardBrand?: NullableStringFieldUpdateOperationsInput | string | null
    walletProvider?: NullableStringFieldUpdateOperationsInput | string | null
    walletPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateManyInput = {
    id?: string
    userId: number
    type: $Enums.PaymentType
    cardLastFour?: string | null
    cardBrand?: string | null
    walletProvider?: string | null
    walletPhone?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    cardLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    cardBrand?: NullableStringFieldUpdateOperationsInput | string | null
    walletProvider?: NullableStringFieldUpdateOperationsInput | string | null
    walletPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    cardLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    cardBrand?: NullableStringFieldUpdateOperationsInput | string | null
    walletProvider?: NullableStringFieldUpdateOperationsInput | string | null
    walletPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageTrackingCreateInput = {
    id?: string
    bandwidthUsed?: number
    apiCallsUsed?: number
    mediaAssetsUsed?: number
    projectsUsed?: number
    rolesUsed?: number
    collaboratorsUsed?: number
    webhooksUsed?: number
    modelsUsed?: number
    localesUsed?: number
    recordsUsed?: number
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutUsageTrackingInput
  }

  export type UsageTrackingUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    bandwidthUsed?: number
    apiCallsUsed?: number
    mediaAssetsUsed?: number
    projectsUsed?: number
    rolesUsed?: number
    collaboratorsUsed?: number
    webhooksUsed?: number
    modelsUsed?: number
    localesUsed?: number
    recordsUsed?: number
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageTrackingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandwidthUsed?: IntFieldUpdateOperationsInput | number
    apiCallsUsed?: IntFieldUpdateOperationsInput | number
    mediaAssetsUsed?: IntFieldUpdateOperationsInput | number
    projectsUsed?: IntFieldUpdateOperationsInput | number
    rolesUsed?: IntFieldUpdateOperationsInput | number
    collaboratorsUsed?: IntFieldUpdateOperationsInput | number
    webhooksUsed?: IntFieldUpdateOperationsInput | number
    modelsUsed?: IntFieldUpdateOperationsInput | number
    localesUsed?: IntFieldUpdateOperationsInput | number
    recordsUsed?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutUsageTrackingNestedInput
  }

  export type UsageTrackingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    bandwidthUsed?: IntFieldUpdateOperationsInput | number
    apiCallsUsed?: IntFieldUpdateOperationsInput | number
    mediaAssetsUsed?: IntFieldUpdateOperationsInput | number
    projectsUsed?: IntFieldUpdateOperationsInput | number
    rolesUsed?: IntFieldUpdateOperationsInput | number
    collaboratorsUsed?: IntFieldUpdateOperationsInput | number
    webhooksUsed?: IntFieldUpdateOperationsInput | number
    modelsUsed?: IntFieldUpdateOperationsInput | number
    localesUsed?: IntFieldUpdateOperationsInput | number
    recordsUsed?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageTrackingCreateManyInput = {
    id?: string
    subscriptionId: string
    bandwidthUsed?: number
    apiCallsUsed?: number
    mediaAssetsUsed?: number
    projectsUsed?: number
    rolesUsed?: number
    collaboratorsUsed?: number
    webhooksUsed?: number
    modelsUsed?: number
    localesUsed?: number
    recordsUsed?: number
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageTrackingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandwidthUsed?: IntFieldUpdateOperationsInput | number
    apiCallsUsed?: IntFieldUpdateOperationsInput | number
    mediaAssetsUsed?: IntFieldUpdateOperationsInput | number
    projectsUsed?: IntFieldUpdateOperationsInput | number
    rolesUsed?: IntFieldUpdateOperationsInput | number
    collaboratorsUsed?: IntFieldUpdateOperationsInput | number
    webhooksUsed?: IntFieldUpdateOperationsInput | number
    modelsUsed?: IntFieldUpdateOperationsInput | number
    localesUsed?: IntFieldUpdateOperationsInput | number
    recordsUsed?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageTrackingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    bandwidthUsed?: IntFieldUpdateOperationsInput | number
    apiCallsUsed?: IntFieldUpdateOperationsInput | number
    mediaAssetsUsed?: IntFieldUpdateOperationsInput | number
    projectsUsed?: IntFieldUpdateOperationsInput | number
    rolesUsed?: IntFieldUpdateOperationsInput | number
    collaboratorsUsed?: IntFieldUpdateOperationsInput | number
    webhooksUsed?: IntFieldUpdateOperationsInput | number
    modelsUsed?: IntFieldUpdateOperationsInput | number
    localesUsed?: IntFieldUpdateOperationsInput | number
    recordsUsed?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    name: string
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PasswordResetListRelationFilter = {
    every?: PasswordResetWhereInput
    some?: PasswordResetWhereInput
    none?: PasswordResetWhereInput
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput
    some?: OrganizationMemberWhereInput
    none?: OrganizationMemberWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectCollaboratorListRelationFilter = {
    every?: ProjectCollaboratorWhereInput
    some?: ProjectCollaboratorWhereInput
    none?: ProjectCollaboratorWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type BillingAddressNullableScalarRelationFilter = {
    is?: BillingAddressWhereInput | null
    isNot?: BillingAddressWhereInput | null
  }

  export type PaymentMethodListRelationFilter = {
    every?: PaymentMethodWhereInput
    some?: PaymentMethodWhereInput
    none?: PaymentMethodWhereInput
  }

  export type PasswordResetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job?: SortOrder
    country?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job?: SortOrder
    country?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    job?: SortOrder
    country?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    ownerId?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    ownerId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganizationMemberOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: string
    userId: number
  }

  export type OrganizationMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMemberAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type OrganizationMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMemberSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    customDomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    createdBy?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    customDomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    customDomain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    createdBy?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectCollaboratorProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: number
  }

  export type ProjectCollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCollaboratorAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ProjectCollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCollaboratorSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumProjectRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    features?: SortOrder
    limits?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingCycleFilter<$PrismaModel>
    _max?: NestedEnumBillingCycleFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type BillingHistoryListRelationFilter = {
    every?: BillingHistoryWhereInput
    some?: BillingHistoryWhereInput
    none?: BillingHistoryWhereInput
  }

  export type UsageTrackingListRelationFilter = {
    every?: UsageTrackingWhereInput
    some?: UsageTrackingWhereInput
    none?: UsageTrackingWhereInput
  }

  export type BillingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    autoRenew?: SortOrder
    lastPaymentDate?: SortOrder
    nextPaymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    autoRenew?: SortOrder
    lastPaymentDate?: SortOrder
    nextPaymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    autoRenew?: SortOrder
    lastPaymentDate?: SortOrder
    nextPaymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type BillingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    invoiceUrl?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BillingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    invoiceUrl?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    invoiceUrl?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingHistorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BillingAddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    country?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    address?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingAddressAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type BillingAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    country?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    address?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingAddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    country?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    address?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingAddressSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    cardLastFour?: SortOrder
    cardBrand?: SortOrder
    walletProvider?: SortOrder
    walletPhone?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    cardLastFour?: SortOrder
    cardBrand?: SortOrder
    walletProvider?: SortOrder
    walletPhone?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    cardLastFour?: SortOrder
    cardBrand?: SortOrder
    walletProvider?: SortOrder
    walletPhone?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type UsageTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    bandwidthUsed?: SortOrder
    apiCallsUsed?: SortOrder
    mediaAssetsUsed?: SortOrder
    projectsUsed?: SortOrder
    rolesUsed?: SortOrder
    collaboratorsUsed?: SortOrder
    webhooksUsed?: SortOrder
    modelsUsed?: SortOrder
    localesUsed?: SortOrder
    recordsUsed?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageTrackingAvgOrderByAggregateInput = {
    bandwidthUsed?: SortOrder
    apiCallsUsed?: SortOrder
    mediaAssetsUsed?: SortOrder
    projectsUsed?: SortOrder
    rolesUsed?: SortOrder
    collaboratorsUsed?: SortOrder
    webhooksUsed?: SortOrder
    modelsUsed?: SortOrder
    localesUsed?: SortOrder
    recordsUsed?: SortOrder
  }

  export type UsageTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    bandwidthUsed?: SortOrder
    apiCallsUsed?: SortOrder
    mediaAssetsUsed?: SortOrder
    projectsUsed?: SortOrder
    rolesUsed?: SortOrder
    collaboratorsUsed?: SortOrder
    webhooksUsed?: SortOrder
    modelsUsed?: SortOrder
    localesUsed?: SortOrder
    recordsUsed?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    bandwidthUsed?: SortOrder
    apiCallsUsed?: SortOrder
    mediaAssetsUsed?: SortOrder
    projectsUsed?: SortOrder
    rolesUsed?: SortOrder
    collaboratorsUsed?: SortOrder
    webhooksUsed?: SortOrder
    modelsUsed?: SortOrder
    localesUsed?: SortOrder
    recordsUsed?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageTrackingSumOrderByAggregateInput = {
    bandwidthUsed?: SortOrder
    apiCallsUsed?: SortOrder
    mediaAssetsUsed?: SortOrder
    projectsUsed?: SortOrder
    rolesUsed?: SortOrder
    collaboratorsUsed?: SortOrder
    webhooksUsed?: SortOrder
    modelsUsed?: SortOrder
    localesUsed?: SortOrder
    recordsUsed?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasswordResetCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type OrganizationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type BillingAddressCreateNestedOneWithoutUserInput = {
    create?: XOR<BillingAddressCreateWithoutUserInput, BillingAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingAddressCreateOrConnectWithoutUserInput
    connect?: BillingAddressWhereUniqueInput
  }

  export type PaymentMethodCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type PasswordResetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type BillingAddressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BillingAddressCreateWithoutUserInput, BillingAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingAddressCreateOrConnectWithoutUserInput
    connect?: BillingAddressWhereUniqueInput
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PasswordResetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUserInput | PasswordResetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUserInput | PasswordResetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUserInput | PasswordResetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type OrganizationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutUserInput | ProjectCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type BillingAddressUpdateOneWithoutUserNestedInput = {
    create?: XOR<BillingAddressCreateWithoutUserInput, BillingAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingAddressCreateOrConnectWithoutUserInput
    upsert?: BillingAddressUpsertWithoutUserInput
    disconnect?: BillingAddressWhereInput | boolean
    delete?: BillingAddressWhereInput | boolean
    connect?: BillingAddressWhereUniqueInput
    update?: XOR<XOR<BillingAddressUpdateToOneWithWhereWithoutUserInput, BillingAddressUpdateWithoutUserInput>, BillingAddressUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PasswordResetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUserInput | PasswordResetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUserInput | PasswordResetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUserInput | PasswordResetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutUserInput | ProjectCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type BillingAddressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BillingAddressCreateWithoutUserInput, BillingAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingAddressCreateOrConnectWithoutUserInput
    upsert?: BillingAddressUpsertWithoutUserInput
    disconnect?: BillingAddressWhereInput | boolean
    delete?: BillingAddressWhereInput | boolean
    connect?: BillingAddressWhereUniqueInput
    update?: XOR<XOR<BillingAddressUpdateToOneWithWhereWithoutUserInput, BillingAddressUpdateWithoutUserInput>, BillingAddressUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    upsert?: UserUpsertWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetsInput, UserUpdateWithoutPasswordResetsInput>, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserCreateNestedOneWithoutOrganizationsOwnedInput = {
    create?: XOR<UserCreateWithoutOrganizationsOwnedInput, UserUncheckedCreateWithoutOrganizationsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsOwnedInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput> | SubscriptionCreateWithoutOrganizationInput[] | SubscriptionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput | SubscriptionCreateOrConnectWithoutOrganizationInput[]
    createMany?: SubscriptionCreateManyOrganizationInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput> | SubscriptionCreateWithoutOrganizationInput[] | SubscriptionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput | SubscriptionCreateOrConnectWithoutOrganizationInput[]
    createMany?: SubscriptionCreateManyOrganizationInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrganizationsOwnedNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationsOwnedInput, UserUncheckedCreateWithoutOrganizationsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsOwnedInput
    upsert?: UserUpsertWithoutOrganizationsOwnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationsOwnedInput, UserUpdateWithoutOrganizationsOwnedInput>, UserUncheckedUpdateWithoutOrganizationsOwnedInput>
  }

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrganizationInput | ProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrganizationInput | ProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrganizationInput | ProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput> | SubscriptionCreateWithoutOrganizationInput[] | SubscriptionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput | SubscriptionCreateOrConnectWithoutOrganizationInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutOrganizationInput | SubscriptionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SubscriptionCreateManyOrganizationInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutOrganizationInput | SubscriptionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutOrganizationInput | SubscriptionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrganizationInput | ProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrganizationInput | ProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrganizationInput | ProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput> | SubscriptionCreateWithoutOrganizationInput[] | SubscriptionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput | SubscriptionCreateOrConnectWithoutOrganizationInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutOrganizationInput | SubscriptionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SubscriptionCreateManyOrganizationInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutOrganizationInput | SubscriptionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutOrganizationInput | SubscriptionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrganizationMembersInput = {
    create?: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembersInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutOrganizationMembersNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembersInput
    upsert?: UserUpsertWithoutOrganizationMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationMembersInput, UserUpdateWithoutOrganizationMembersInput>, UserUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationCreateNestedOneWithoutProjectsInput = {
    create?: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsCreatedInput = {
    create?: XOR<UserCreateWithoutProjectsCreatedInput, UserUncheckedCreateWithoutProjectsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCollaboratorCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type OrganizationUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput
    upsert?: OrganizationUpsertWithoutProjectsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutProjectsInput, OrganizationUpdateWithoutProjectsInput>, OrganizationUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutProjectsCreatedInput, UserUncheckedCreateWithoutProjectsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsCreatedInput
    upsert?: UserUpsertWithoutProjectsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsCreatedInput, UserUpdateWithoutProjectsCreatedInput>, UserUncheckedUpdateWithoutProjectsCreatedInput>
  }

  export type ProjectCollaboratorUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput | ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput | ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectCollaboratorsInput = {
    create?: XOR<UserCreateWithoutProjectCollaboratorsInput, UserUncheckedCreateWithoutProjectCollaboratorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCollaboratorsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProjectRoleFieldUpdateOperationsInput = {
    set?: $Enums.ProjectRole
  }

  export type ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput
    upsert?: ProjectUpsertWithoutCollaboratorsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCollaboratorsInput, ProjectUpdateWithoutCollaboratorsInput>, ProjectUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateOneRequiredWithoutProjectCollaboratorsNestedInput = {
    create?: XOR<UserCreateWithoutProjectCollaboratorsInput, UserUncheckedCreateWithoutProjectCollaboratorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCollaboratorsInput
    upsert?: UserUpsertWithoutProjectCollaboratorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectCollaboratorsInput, UserUpdateWithoutProjectCollaboratorsInput>, UserUncheckedUpdateWithoutProjectCollaboratorsInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumBillingCycleFieldUpdateOperationsInput = {
    set?: $Enums.BillingCycle
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionsInput, OrganizationUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type BillingHistoryCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<BillingHistoryCreateWithoutSubscriptionInput, BillingHistoryUncheckedCreateWithoutSubscriptionInput> | BillingHistoryCreateWithoutSubscriptionInput[] | BillingHistoryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingHistoryCreateOrConnectWithoutSubscriptionInput | BillingHistoryCreateOrConnectWithoutSubscriptionInput[]
    createMany?: BillingHistoryCreateManySubscriptionInputEnvelope
    connect?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
  }

  export type UsageTrackingCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UsageTrackingCreateWithoutSubscriptionInput, UsageTrackingUncheckedCreateWithoutSubscriptionInput> | UsageTrackingCreateWithoutSubscriptionInput[] | UsageTrackingUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UsageTrackingCreateOrConnectWithoutSubscriptionInput | UsageTrackingCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UsageTrackingCreateManySubscriptionInputEnvelope
    connect?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
  }

  export type BillingHistoryUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<BillingHistoryCreateWithoutSubscriptionInput, BillingHistoryUncheckedCreateWithoutSubscriptionInput> | BillingHistoryCreateWithoutSubscriptionInput[] | BillingHistoryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingHistoryCreateOrConnectWithoutSubscriptionInput | BillingHistoryCreateOrConnectWithoutSubscriptionInput[]
    createMany?: BillingHistoryCreateManySubscriptionInputEnvelope
    connect?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
  }

  export type UsageTrackingUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UsageTrackingCreateWithoutSubscriptionInput, UsageTrackingUncheckedCreateWithoutSubscriptionInput> | UsageTrackingCreateWithoutSubscriptionInput[] | UsageTrackingUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UsageTrackingCreateOrConnectWithoutSubscriptionInput | UsageTrackingCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UsageTrackingCreateManySubscriptionInputEnvelope
    connect?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateOneWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type OrganizationUpdateOneWithoutSubscriptionsNestedInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionsInput, OrganizationUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionsInput
    upsert?: OrganizationUpsertWithoutSubscriptionsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSubscriptionsInput, OrganizationUpdateWithoutSubscriptionsInput>, OrganizationUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type BillingHistoryUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<BillingHistoryCreateWithoutSubscriptionInput, BillingHistoryUncheckedCreateWithoutSubscriptionInput> | BillingHistoryCreateWithoutSubscriptionInput[] | BillingHistoryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingHistoryCreateOrConnectWithoutSubscriptionInput | BillingHistoryCreateOrConnectWithoutSubscriptionInput[]
    upsert?: BillingHistoryUpsertWithWhereUniqueWithoutSubscriptionInput | BillingHistoryUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: BillingHistoryCreateManySubscriptionInputEnvelope
    set?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    disconnect?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    delete?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    connect?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    update?: BillingHistoryUpdateWithWhereUniqueWithoutSubscriptionInput | BillingHistoryUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: BillingHistoryUpdateManyWithWhereWithoutSubscriptionInput | BillingHistoryUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: BillingHistoryScalarWhereInput | BillingHistoryScalarWhereInput[]
  }

  export type UsageTrackingUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UsageTrackingCreateWithoutSubscriptionInput, UsageTrackingUncheckedCreateWithoutSubscriptionInput> | UsageTrackingCreateWithoutSubscriptionInput[] | UsageTrackingUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UsageTrackingCreateOrConnectWithoutSubscriptionInput | UsageTrackingCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UsageTrackingUpsertWithWhereUniqueWithoutSubscriptionInput | UsageTrackingUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UsageTrackingCreateManySubscriptionInputEnvelope
    set?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    disconnect?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    delete?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    connect?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    update?: UsageTrackingUpdateWithWhereUniqueWithoutSubscriptionInput | UsageTrackingUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UsageTrackingUpdateManyWithWhereWithoutSubscriptionInput | UsageTrackingUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UsageTrackingScalarWhereInput | UsageTrackingScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BillingHistoryUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<BillingHistoryCreateWithoutSubscriptionInput, BillingHistoryUncheckedCreateWithoutSubscriptionInput> | BillingHistoryCreateWithoutSubscriptionInput[] | BillingHistoryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingHistoryCreateOrConnectWithoutSubscriptionInput | BillingHistoryCreateOrConnectWithoutSubscriptionInput[]
    upsert?: BillingHistoryUpsertWithWhereUniqueWithoutSubscriptionInput | BillingHistoryUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: BillingHistoryCreateManySubscriptionInputEnvelope
    set?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    disconnect?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    delete?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    connect?: BillingHistoryWhereUniqueInput | BillingHistoryWhereUniqueInput[]
    update?: BillingHistoryUpdateWithWhereUniqueWithoutSubscriptionInput | BillingHistoryUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: BillingHistoryUpdateManyWithWhereWithoutSubscriptionInput | BillingHistoryUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: BillingHistoryScalarWhereInput | BillingHistoryScalarWhereInput[]
  }

  export type UsageTrackingUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UsageTrackingCreateWithoutSubscriptionInput, UsageTrackingUncheckedCreateWithoutSubscriptionInput> | UsageTrackingCreateWithoutSubscriptionInput[] | UsageTrackingUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UsageTrackingCreateOrConnectWithoutSubscriptionInput | UsageTrackingCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UsageTrackingUpsertWithWhereUniqueWithoutSubscriptionInput | UsageTrackingUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UsageTrackingCreateManySubscriptionInputEnvelope
    set?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    disconnect?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    delete?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    connect?: UsageTrackingWhereUniqueInput | UsageTrackingWhereUniqueInput[]
    update?: UsageTrackingUpdateWithWhereUniqueWithoutSubscriptionInput | UsageTrackingUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UsageTrackingUpdateManyWithWhereWithoutSubscriptionInput | UsageTrackingUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UsageTrackingScalarWhereInput | UsageTrackingScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutBillingHistoryInput = {
    create?: XOR<SubscriptionCreateWithoutBillingHistoryInput, SubscriptionUncheckedCreateWithoutBillingHistoryInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutBillingHistoryInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type SubscriptionUpdateOneRequiredWithoutBillingHistoryNestedInput = {
    create?: XOR<SubscriptionCreateWithoutBillingHistoryInput, SubscriptionUncheckedCreateWithoutBillingHistoryInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutBillingHistoryInput
    upsert?: SubscriptionUpsertWithoutBillingHistoryInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutBillingHistoryInput, SubscriptionUpdateWithoutBillingHistoryInput>, SubscriptionUncheckedUpdateWithoutBillingHistoryInput>
  }

  export type UserCreateNestedOneWithoutBillingAddressesInput = {
    create?: XOR<UserCreateWithoutBillingAddressesInput, UserUncheckedCreateWithoutBillingAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBillingAddressesNestedInput = {
    create?: XOR<UserCreateWithoutBillingAddressesInput, UserUncheckedCreateWithoutBillingAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingAddressesInput
    upsert?: UserUpsertWithoutBillingAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillingAddressesInput, UserUpdateWithoutBillingAddressesInput>, UserUncheckedUpdateWithoutBillingAddressesInput>
  }

  export type UserCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type UserUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodsInput
    upsert?: UserUpsertWithoutPaymentMethodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentMethodsInput, UserUpdateWithoutPaymentMethodsInput>, UserUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type SubscriptionCreateNestedOneWithoutUsageTrackingInput = {
    create?: XOR<SubscriptionCreateWithoutUsageTrackingInput, SubscriptionUncheckedCreateWithoutUsageTrackingInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsageTrackingInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SubscriptionUpdateOneRequiredWithoutUsageTrackingNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUsageTrackingInput, SubscriptionUncheckedCreateWithoutUsageTrackingInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsageTrackingInput
    upsert?: SubscriptionUpsertWithoutUsageTrackingInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUsageTrackingInput, SubscriptionUpdateWithoutUsageTrackingInput>, SubscriptionUncheckedUpdateWithoutUsageTrackingInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole
  }

  export type NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingCycleFilter<$PrismaModel>
    _max?: NestedEnumBillingCycleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type PasswordResetCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetCreateOrConnectWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetCreateManyUserInputEnvelope = {
    data: PasswordResetCreateManyUserInput | PasswordResetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationCreateManyOwnerInputEnvelope = {
    data: OrganizationCreateManyOwnerInput | OrganizationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationMemberCreateWithoutUserInput = {
    id?: string
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrganizationMemberUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberCreateOrConnectWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberCreateManyUserInputEnvelope = {
    data: OrganizationMemberCreateManyUserInput | OrganizationMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    collaborators?: ProjectCollaboratorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectCreateManyCreatorInputEnvelope = {
    data: ProjectCreateManyCreatorInput | ProjectCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCollaboratorCreateWithoutUserInput = {
    id?: string
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCollaboratorsInput
  }

  export type ProjectCollaboratorUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCollaboratorCreateOrConnectWithoutUserInput = {
    where: ProjectCollaboratorWhereUniqueInput
    create: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type ProjectCollaboratorCreateManyUserInputEnvelope = {
    data: ProjectCollaboratorCreateManyUserInput | ProjectCollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    organization?: OrganizationCreateNestedOneWithoutSubscriptionsInput
    billingHistory?: BillingHistoryCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId?: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billingHistory?: BillingHistoryUncheckedCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BillingAddressCreateWithoutUserInput = {
    id?: string
    fullName: string
    email: string
    country: string
    city: string
    zipCode?: string | null
    state: string
    address: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingAddressUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    email: string
    country: string
    city: string
    zipCode?: string | null
    state: string
    address: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingAddressCreateOrConnectWithoutUserInput = {
    where: BillingAddressWhereUniqueInput
    create: XOR<BillingAddressCreateWithoutUserInput, BillingAddressUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodCreateWithoutUserInput = {
    id?: string
    type: $Enums.PaymentType
    cardLastFour?: string | null
    cardBrand?: string | null
    walletProvider?: string | null
    walletPhone?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.PaymentType
    cardLastFour?: string | null
    cardBrand?: string | null
    walletProvider?: string | null
    walletPhone?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodCreateOrConnectWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodCreateManyUserInputEnvelope = {
    data: PaymentMethodCreateManyUserInput | PaymentMethodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    update: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    data: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetScalarWhereInput
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetScalarWhereInput = {
    AND?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    OR?: PasswordResetScalarWhereInput[]
    NOT?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    id?: IntFilter<"PasswordReset"> | number
    userId?: IntFilter<"PasswordReset"> | number
    token?: StringFilter<"PasswordReset"> | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
  }

  export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    ownerId?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMemberScalarWhereInput = {
    AND?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    OR?: OrganizationMemberScalarWhereInput[]
    NOT?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    userId?: IntFilter<"OrganizationMember"> | number
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    status?: EnumStatusFilter<"OrganizationMember"> | $Enums.Status
    joinedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    createdAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCreatorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    createdBy?: IntFilter<"Project"> | number
    deadline?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    customDomain?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectCollaboratorWhereUniqueInput
    update: XOR<ProjectCollaboratorUpdateWithoutUserInput, ProjectCollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectCollaboratorWhereUniqueInput
    data: XOR<ProjectCollaboratorUpdateWithoutUserInput, ProjectCollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type ProjectCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: ProjectCollaboratorScalarWhereInput
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectCollaboratorScalarWhereInput = {
    AND?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
    OR?: ProjectCollaboratorScalarWhereInput[]
    NOT?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
    id?: StringFilter<"ProjectCollaborator"> | string
    projectId?: StringFilter<"ProjectCollaborator"> | string
    userId?: IntFilter<"ProjectCollaborator"> | number
    role?: EnumProjectRoleFilter<"ProjectCollaborator"> | $Enums.ProjectRole
    status?: EnumStatusFilter<"ProjectCollaborator"> | $Enums.Status
    addedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    createdAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: IntNullableFilter<"Subscription"> | number | null
    organizationId?: StringNullableFilter<"Subscription"> | string | null
    planId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    autoRenew?: BoolFilter<"Subscription"> | boolean
    lastPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    nextPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type BillingAddressUpsertWithoutUserInput = {
    update: XOR<BillingAddressUpdateWithoutUserInput, BillingAddressUncheckedUpdateWithoutUserInput>
    create: XOR<BillingAddressCreateWithoutUserInput, BillingAddressUncheckedCreateWithoutUserInput>
    where?: BillingAddressWhereInput
  }

  export type BillingAddressUpdateToOneWithWhereWithoutUserInput = {
    where?: BillingAddressWhereInput
    data: XOR<BillingAddressUpdateWithoutUserInput, BillingAddressUncheckedUpdateWithoutUserInput>
  }

  export type BillingAddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingAddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutUserInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentMethodScalarWhereInput = {
    AND?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    OR?: PaymentMethodScalarWhereInput[]
    NOT?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    userId?: IntFilter<"PaymentMethod"> | number
    type?: EnumPaymentTypeFilter<"PaymentMethod"> | $Enums.PaymentType
    cardLastFour?: StringNullableFilter<"PaymentMethod"> | string | null
    cardBrand?: StringNullableFilter<"PaymentMethod"> | string | null
    walletProvider?: StringNullableFilter<"PaymentMethod"> | string | null
    walletPhone?: StringNullableFilter<"PaymentMethod"> | string | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    isActive?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
  }

  export type UserCreateWithoutPasswordResetsInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetsInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
  }

  export type UserUpsertWithoutPasswordResetsInput = {
    update: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserUpdateWithoutPasswordResetsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrganizationsOwnedInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationsOwnedInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationsOwnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationsOwnedInput, UserUncheckedCreateWithoutOrganizationsOwnedInput>
  }

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    id?: string
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrganizationMembersInput
  }

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: number
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data: OrganizationMemberCreateManyOrganizationInput | OrganizationMemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutProjectsCreatedInput
    collaborators?: ProjectCollaboratorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    createdBy: number
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ProjectCreateManyOrganizationInputEnvelope = {
    data: ProjectCreateManyOrganizationInput | ProjectCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutOrganizationInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    user?: UserCreateNestedOneWithoutSubscriptionsInput
    billingHistory?: BillingHistoryCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId?: number | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billingHistory?: BillingHistoryUncheckedCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutOrganizationInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
  }

  export type SubscriptionCreateManyOrganizationInputEnvelope = {
    data: SubscriptionCreateManyOrganizationInput | SubscriptionCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrganizationsOwnedInput = {
    update: XOR<UserUpdateWithoutOrganizationsOwnedInput, UserUncheckedUpdateWithoutOrganizationsOwnedInput>
    create: XOR<UserCreateWithoutOrganizationsOwnedInput, UserUncheckedCreateWithoutOrganizationsOwnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationsOwnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationsOwnedInput, UserUncheckedUpdateWithoutOrganizationsOwnedInput>
  }

  export type UserUpdateWithoutOrganizationsOwnedInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationsOwnedInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOrganizationInput, ProjectUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOrganizationInput, ProjectUncheckedUpdateWithoutOrganizationInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOrganizationInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutOrganizationInput, SubscriptionUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutOrganizationInput, SubscriptionUncheckedUpdateWithoutOrganizationInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutOrganizationInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserCreateWithoutOrganizationMembersInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationMembersInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
  }

  export type OrganizationCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOrganizationsOwnedInput
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutOrganizationMembersInput = {
    update: XOR<UserUpdateWithoutOrganizationMembersInput, UserUncheckedUpdateWithoutOrganizationMembersInput>
    create: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationMembersInput, UserUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type UserUpdateWithoutOrganizationMembersInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOrganizationsOwnedNestedInput
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutProjectsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOrganizationsOwnedInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutProjectsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutProjectsCreatedInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsCreatedInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsCreatedInput, UserUncheckedCreateWithoutProjectsCreatedInput>
  }

  export type ProjectCollaboratorCreateWithoutProjectInput = {
    id?: string
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectCollaboratorsInput
  }

  export type ProjectCollaboratorUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: number
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCollaboratorCreateOrConnectWithoutProjectInput = {
    where: ProjectCollaboratorWhereUniqueInput
    create: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCollaboratorCreateManyProjectInputEnvelope = {
    data: ProjectCollaboratorCreateManyProjectInput | ProjectCollaboratorCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutProjectsInput = {
    update: XOR<OrganizationUpdateWithoutProjectsInput, OrganizationUncheckedUpdateWithoutProjectsInput>
    create: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutProjectsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutProjectsInput, OrganizationUncheckedUpdateWithoutProjectsInput>
  }

  export type OrganizationUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOrganizationsOwnedNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutProjectsCreatedInput = {
    update: XOR<UserUpdateWithoutProjectsCreatedInput, UserUncheckedUpdateWithoutProjectsCreatedInput>
    create: XOR<UserCreateWithoutProjectsCreatedInput, UserUncheckedCreateWithoutProjectsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsCreatedInput, UserUncheckedUpdateWithoutProjectsCreatedInput>
  }

  export type UserUpdateWithoutProjectsCreatedInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectCollaboratorWhereUniqueInput
    update: XOR<ProjectCollaboratorUpdateWithoutProjectInput, ProjectCollaboratorUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectCollaboratorWhereUniqueInput
    data: XOR<ProjectCollaboratorUpdateWithoutProjectInput, ProjectCollaboratorUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectCollaboratorScalarWhereInput
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutCollaboratorsInput = {
    id?: string
    name: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsCreatedInput
  }

  export type ProjectUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    createdBy: number
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutCollaboratorsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserCreateWithoutProjectCollaboratorsInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectCollaboratorsInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectCollaboratorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectCollaboratorsInput, UserUncheckedCreateWithoutProjectCollaboratorsInput>
  }

  export type ProjectUpsertWithoutCollaboratorsInput = {
    update: XOR<ProjectUpdateWithoutCollaboratorsInput, ProjectUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCollaboratorsInput, ProjectUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type ProjectUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProjectCollaboratorsInput = {
    update: XOR<UserUpdateWithoutProjectCollaboratorsInput, UserUncheckedUpdateWithoutProjectCollaboratorsInput>
    create: XOR<UserCreateWithoutProjectCollaboratorsInput, UserUncheckedCreateWithoutProjectCollaboratorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectCollaboratorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectCollaboratorsInput, UserUncheckedUpdateWithoutProjectCollaboratorsInput>
  }

  export type UserUpdateWithoutProjectCollaboratorsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectCollaboratorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSubscriptionsInput
    organization?: OrganizationCreateNestedOneWithoutSubscriptionsInput
    billingHistory?: BillingHistoryCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    userId?: number | null
    organizationId?: string | null
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billingHistory?: BillingHistoryUncheckedCreateNestedManyWithoutSubscriptionInput
    usageTracking?: UsageTrackingUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle: $Enums.BillingCycle
    features: JsonNullValueInput | InputJsonValue
    limits: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingCycle: $Enums.BillingCycle
    features: JsonNullValueInput | InputJsonValue
    limits: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserCreateWithoutSubscriptionsInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type OrganizationCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOrganizationsOwnedInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSubscriptionsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSubscriptionsInput, OrganizationUncheckedCreateWithoutSubscriptionsInput>
  }

  export type BillingHistoryCreateWithoutSubscriptionInput = {
    id?: string
    planName: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.PaymentStatus
    paidAt?: Date | string | null
    invoiceUrl?: string | null
    paymentMethod?: string | null
    createdAt?: Date | string
  }

  export type BillingHistoryUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    planName: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.PaymentStatus
    paidAt?: Date | string | null
    invoiceUrl?: string | null
    paymentMethod?: string | null
    createdAt?: Date | string
  }

  export type BillingHistoryCreateOrConnectWithoutSubscriptionInput = {
    where: BillingHistoryWhereUniqueInput
    create: XOR<BillingHistoryCreateWithoutSubscriptionInput, BillingHistoryUncheckedCreateWithoutSubscriptionInput>
  }

  export type BillingHistoryCreateManySubscriptionInputEnvelope = {
    data: BillingHistoryCreateManySubscriptionInput | BillingHistoryCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UsageTrackingCreateWithoutSubscriptionInput = {
    id?: string
    bandwidthUsed?: number
    apiCallsUsed?: number
    mediaAssetsUsed?: number
    projectsUsed?: number
    rolesUsed?: number
    collaboratorsUsed?: number
    webhooksUsed?: number
    modelsUsed?: number
    localesUsed?: number
    recordsUsed?: number
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageTrackingUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    bandwidthUsed?: number
    apiCallsUsed?: number
    mediaAssetsUsed?: number
    projectsUsed?: number
    rolesUsed?: number
    collaboratorsUsed?: number
    webhooksUsed?: number
    modelsUsed?: number
    localesUsed?: number
    recordsUsed?: number
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageTrackingCreateOrConnectWithoutSubscriptionInput = {
    where: UsageTrackingWhereUniqueInput
    create: XOR<UsageTrackingCreateWithoutSubscriptionInput, UsageTrackingUncheckedCreateWithoutSubscriptionInput>
  }

  export type UsageTrackingCreateManySubscriptionInputEnvelope = {
    data: UsageTrackingCreateManySubscriptionInput | UsageTrackingCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    features?: JsonNullValueInput | InputJsonValue
    limits?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    features?: JsonNullValueInput | InputJsonValue
    limits?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutSubscriptionsInput = {
    update: XOR<OrganizationUpdateWithoutSubscriptionsInput, OrganizationUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<OrganizationCreateWithoutSubscriptionsInput, OrganizationUncheckedCreateWithoutSubscriptionsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSubscriptionsInput, OrganizationUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type OrganizationUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOrganizationsOwnedNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type BillingHistoryUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: BillingHistoryWhereUniqueInput
    update: XOR<BillingHistoryUpdateWithoutSubscriptionInput, BillingHistoryUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<BillingHistoryCreateWithoutSubscriptionInput, BillingHistoryUncheckedCreateWithoutSubscriptionInput>
  }

  export type BillingHistoryUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: BillingHistoryWhereUniqueInput
    data: XOR<BillingHistoryUpdateWithoutSubscriptionInput, BillingHistoryUncheckedUpdateWithoutSubscriptionInput>
  }

  export type BillingHistoryUpdateManyWithWhereWithoutSubscriptionInput = {
    where: BillingHistoryScalarWhereInput
    data: XOR<BillingHistoryUpdateManyMutationInput, BillingHistoryUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type BillingHistoryScalarWhereInput = {
    AND?: BillingHistoryScalarWhereInput | BillingHistoryScalarWhereInput[]
    OR?: BillingHistoryScalarWhereInput[]
    NOT?: BillingHistoryScalarWhereInput | BillingHistoryScalarWhereInput[]
    id?: StringFilter<"BillingHistory"> | string
    subscriptionId?: StringFilter<"BillingHistory"> | string
    planName?: StringFilter<"BillingHistory"> | string
    amount?: DecimalFilter<"BillingHistory"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFilter<"BillingHistory"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"BillingHistory"> | Date | string | null
    invoiceUrl?: StringNullableFilter<"BillingHistory"> | string | null
    paymentMethod?: StringNullableFilter<"BillingHistory"> | string | null
    createdAt?: DateTimeFilter<"BillingHistory"> | Date | string
  }

  export type UsageTrackingUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: UsageTrackingWhereUniqueInput
    update: XOR<UsageTrackingUpdateWithoutSubscriptionInput, UsageTrackingUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UsageTrackingCreateWithoutSubscriptionInput, UsageTrackingUncheckedCreateWithoutSubscriptionInput>
  }

  export type UsageTrackingUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: UsageTrackingWhereUniqueInput
    data: XOR<UsageTrackingUpdateWithoutSubscriptionInput, UsageTrackingUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UsageTrackingUpdateManyWithWhereWithoutSubscriptionInput = {
    where: UsageTrackingScalarWhereInput
    data: XOR<UsageTrackingUpdateManyMutationInput, UsageTrackingUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UsageTrackingScalarWhereInput = {
    AND?: UsageTrackingScalarWhereInput | UsageTrackingScalarWhereInput[]
    OR?: UsageTrackingScalarWhereInput[]
    NOT?: UsageTrackingScalarWhereInput | UsageTrackingScalarWhereInput[]
    id?: StringFilter<"UsageTracking"> | string
    subscriptionId?: StringFilter<"UsageTracking"> | string
    bandwidthUsed?: IntFilter<"UsageTracking"> | number
    apiCallsUsed?: IntFilter<"UsageTracking"> | number
    mediaAssetsUsed?: IntFilter<"UsageTracking"> | number
    projectsUsed?: IntFilter<"UsageTracking"> | number
    rolesUsed?: IntFilter<"UsageTracking"> | number
    collaboratorsUsed?: IntFilter<"UsageTracking"> | number
    webhooksUsed?: IntFilter<"UsageTracking"> | number
    modelsUsed?: IntFilter<"UsageTracking"> | number
    localesUsed?: IntFilter<"UsageTracking"> | number
    recordsUsed?: IntFilter<"UsageTracking"> | number
    periodStart?: DateTimeFilter<"UsageTracking"> | Date | string
    periodEnd?: DateTimeFilter<"UsageTracking"> | Date | string
    createdAt?: DateTimeFilter<"UsageTracking"> | Date | string
    updatedAt?: DateTimeFilter<"UsageTracking"> | Date | string
  }

  export type SubscriptionCreateWithoutBillingHistoryInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    user?: UserCreateNestedOneWithoutSubscriptionsInput
    organization?: OrganizationCreateNestedOneWithoutSubscriptionsInput
    usageTracking?: UsageTrackingCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutBillingHistoryInput = {
    id?: string
    userId?: number | null
    organizationId?: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usageTracking?: UsageTrackingUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutBillingHistoryInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutBillingHistoryInput, SubscriptionUncheckedCreateWithoutBillingHistoryInput>
  }

  export type SubscriptionUpsertWithoutBillingHistoryInput = {
    update: XOR<SubscriptionUpdateWithoutBillingHistoryInput, SubscriptionUncheckedUpdateWithoutBillingHistoryInput>
    create: XOR<SubscriptionCreateWithoutBillingHistoryInput, SubscriptionUncheckedCreateWithoutBillingHistoryInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutBillingHistoryInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutBillingHistoryInput, SubscriptionUncheckedUpdateWithoutBillingHistoryInput>
  }

  export type SubscriptionUpdateWithoutBillingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneWithoutSubscriptionsNestedInput
    organization?: OrganizationUpdateOneWithoutSubscriptionsNestedInput
    usageTracking?: UsageTrackingUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutBillingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageTracking?: UsageTrackingUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type UserCreateWithoutBillingAddressesInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillingAddressesInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillingAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillingAddressesInput, UserUncheckedCreateWithoutBillingAddressesInput>
  }

  export type UserUpsertWithoutBillingAddressesInput = {
    update: XOR<UserUpdateWithoutBillingAddressesInput, UserUncheckedUpdateWithoutBillingAddressesInput>
    create: XOR<UserCreateWithoutBillingAddressesInput, UserUncheckedCreateWithoutBillingAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillingAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillingAddressesInput, UserUncheckedUpdateWithoutBillingAddressesInput>
  }

  export type UserUpdateWithoutBillingAddressesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillingAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentMethodsInput = {
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentMethodsInput = {
    id?: number
    fullName: string
    email: string
    company: string
    job: string
    country: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    organizationsOwned?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectCollaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    billingAddresses?: BillingAddressUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentMethodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type UserUpsertWithoutPaymentMethodsInput = {
    update: XOR<UserUpdateWithoutPaymentMethodsInput, UserUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentMethodsInput, UserUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type UserUpdateWithoutPaymentMethodsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    organizationsOwned?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectCollaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    billingAddresses?: BillingAddressUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SubscriptionCreateWithoutUsageTrackingInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    user?: UserCreateNestedOneWithoutSubscriptionsInput
    organization?: OrganizationCreateNestedOneWithoutSubscriptionsInput
    billingHistory?: BillingHistoryCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUsageTrackingInput = {
    id?: string
    userId?: number | null
    organizationId?: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billingHistory?: BillingHistoryUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUsageTrackingInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUsageTrackingInput, SubscriptionUncheckedCreateWithoutUsageTrackingInput>
  }

  export type SubscriptionUpsertWithoutUsageTrackingInput = {
    update: XOR<SubscriptionUpdateWithoutUsageTrackingInput, SubscriptionUncheckedUpdateWithoutUsageTrackingInput>
    create: XOR<SubscriptionCreateWithoutUsageTrackingInput, SubscriptionUncheckedCreateWithoutUsageTrackingInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUsageTrackingInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUsageTrackingInput, SubscriptionUncheckedUpdateWithoutUsageTrackingInput>
  }

  export type SubscriptionUpdateWithoutUsageTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneWithoutSubscriptionsNestedInput
    organization?: OrganizationUpdateOneWithoutSubscriptionsNestedInput
    billingHistory?: BillingHistoryUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUsageTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingHistory?: BillingHistoryUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type PasswordResetCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OrganizationCreateManyOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberCreateManyUserInput = {
    id?: string
    organizationId: string
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCollaboratorCreateManyUserInput = {
    id?: string
    projectId: string
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    organizationId?: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodCreateManyUserInput = {
    id?: string
    type: $Enums.PaymentType
    cardLastFour?: string | null
    cardBrand?: string | null
    walletProvider?: string | null
    walletPhone?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordResetUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    collaborators?: ProjectCollaboratorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type ProjectCollaboratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    organization?: OrganizationUpdateOneWithoutSubscriptionsNestedInput
    billingHistory?: BillingHistoryUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingHistory?: BillingHistoryUncheckedUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    cardLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    cardBrand?: NullableStringFieldUpdateOperationsInput | string | null
    walletProvider?: NullableStringFieldUpdateOperationsInput | string | null
    walletPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    cardLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    cardBrand?: NullableStringFieldUpdateOperationsInput | string | null
    walletProvider?: NullableStringFieldUpdateOperationsInput | string | null
    walletPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    cardLastFour?: NullableStringFieldUpdateOperationsInput | string | null
    cardBrand?: NullableStringFieldUpdateOperationsInput | string | null
    walletProvider?: NullableStringFieldUpdateOperationsInput | string | null
    walletPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyOrganizationInput = {
    id?: string
    userId: number
    role: $Enums.Role
    status?: $Enums.Status
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    createdBy: number
    deadline?: Date | string | null
    status?: $Enums.ProjectStatus
    customDomain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyOrganizationInput = {
    id?: string
    userId?: number | null
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput
    collaborators?: ProjectCollaboratorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneWithoutSubscriptionsNestedInput
    billingHistory?: BillingHistoryUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingHistory?: BillingHistoryUncheckedUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorCreateManyProjectInput = {
    id?: string
    userId: number
    role: $Enums.ProjectRole
    status?: $Enums.Status
    addedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCollaboratorUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectCollaboratorsNestedInput
  }

  export type ProjectCollaboratorUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    userId?: number | null
    organizationId?: string | null
    status: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    lastPaymentDate?: Date | string | null
    nextPaymentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSubscriptionsNestedInput
    organization?: OrganizationUpdateOneWithoutSubscriptionsNestedInput
    billingHistory?: BillingHistoryUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingHistory?: BillingHistoryUncheckedUpdateManyWithoutSubscriptionNestedInput
    usageTracking?: UsageTrackingUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingHistoryCreateManySubscriptionInput = {
    id?: string
    planName: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.PaymentStatus
    paidAt?: Date | string | null
    invoiceUrl?: string | null
    paymentMethod?: string | null
    createdAt?: Date | string
  }

  export type UsageTrackingCreateManySubscriptionInput = {
    id?: string
    bandwidthUsed?: number
    apiCallsUsed?: number
    mediaAssetsUsed?: number
    projectsUsed?: number
    rolesUsed?: number
    collaboratorsUsed?: number
    webhooksUsed?: number
    modelsUsed?: number
    localesUsed?: number
    recordsUsed?: number
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingHistoryUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingHistoryUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingHistoryUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageTrackingUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandwidthUsed?: IntFieldUpdateOperationsInput | number
    apiCallsUsed?: IntFieldUpdateOperationsInput | number
    mediaAssetsUsed?: IntFieldUpdateOperationsInput | number
    projectsUsed?: IntFieldUpdateOperationsInput | number
    rolesUsed?: IntFieldUpdateOperationsInput | number
    collaboratorsUsed?: IntFieldUpdateOperationsInput | number
    webhooksUsed?: IntFieldUpdateOperationsInput | number
    modelsUsed?: IntFieldUpdateOperationsInput | number
    localesUsed?: IntFieldUpdateOperationsInput | number
    recordsUsed?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageTrackingUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandwidthUsed?: IntFieldUpdateOperationsInput | number
    apiCallsUsed?: IntFieldUpdateOperationsInput | number
    mediaAssetsUsed?: IntFieldUpdateOperationsInput | number
    projectsUsed?: IntFieldUpdateOperationsInput | number
    rolesUsed?: IntFieldUpdateOperationsInput | number
    collaboratorsUsed?: IntFieldUpdateOperationsInput | number
    webhooksUsed?: IntFieldUpdateOperationsInput | number
    modelsUsed?: IntFieldUpdateOperationsInput | number
    localesUsed?: IntFieldUpdateOperationsInput | number
    recordsUsed?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageTrackingUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandwidthUsed?: IntFieldUpdateOperationsInput | number
    apiCallsUsed?: IntFieldUpdateOperationsInput | number
    mediaAssetsUsed?: IntFieldUpdateOperationsInput | number
    projectsUsed?: IntFieldUpdateOperationsInput | number
    rolesUsed?: IntFieldUpdateOperationsInput | number
    collaboratorsUsed?: IntFieldUpdateOperationsInput | number
    webhooksUsed?: IntFieldUpdateOperationsInput | number
    modelsUsed?: IntFieldUpdateOperationsInput | number
    localesUsed?: IntFieldUpdateOperationsInput | number
    recordsUsed?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}