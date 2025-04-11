
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
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseCategory
 * 
 */
export type CourseCategory = $Result.DefaultSelection<Prisma.$CourseCategoryPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model ModuleProgress
 * 
 */
export type ModuleProgress = $Result.DefaultSelection<Prisma.$ModuleProgressPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model VideoProgress
 * 
 */
export type VideoProgress = $Result.DefaultSelection<Prisma.$VideoProgressPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  Student: 'Student',
  Teacher: 'Teacher',
  Admin: 'Admin'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseCategory`: Exposes CRUD operations for the **CourseCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseCategories
    * const courseCategories = await prisma.courseCategory.findMany()
    * ```
    */
  get courseCategory(): Prisma.CourseCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moduleProgress`: Exposes CRUD operations for the **ModuleProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModuleProgresses
    * const moduleProgresses = await prisma.moduleProgress.findMany()
    * ```
    */
  get moduleProgress(): Prisma.ModuleProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoProgress`: Exposes CRUD operations for the **VideoProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoProgresses
    * const videoProgresses = await prisma.videoProgress.findMany()
    * ```
    */
  get videoProgress(): Prisma.VideoProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Course: 'Course',
    CourseCategory: 'CourseCategory',
    Module: 'Module',
    ModuleProgress: 'ModuleProgress',
    Video: 'Video',
    VideoProgress: 'VideoProgress',
    Enrollment: 'Enrollment',
    Rating: 'Rating'
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
      modelProps: "user" | "course" | "courseCategory" | "module" | "moduleProgress" | "video" | "videoProgress" | "enrollment" | "rating"
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
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseCategory: {
        payload: Prisma.$CourseCategoryPayload<ExtArgs>
        fields: Prisma.CourseCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          findFirst: {
            args: Prisma.CourseCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          findMany: {
            args: Prisma.CourseCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          create: {
            args: Prisma.CourseCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          createMany: {
            args: Prisma.CourseCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          delete: {
            args: Prisma.CourseCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          update: {
            args: Prisma.CourseCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          deleteMany: {
            args: Prisma.CourseCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          upsert: {
            args: Prisma.CourseCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          aggregate: {
            args: Prisma.CourseCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseCategory>
          }
          groupBy: {
            args: Prisma.CourseCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCategoryCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      ModuleProgress: {
        payload: Prisma.$ModuleProgressPayload<ExtArgs>
        fields: Prisma.ModuleProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>
          }
          findFirst: {
            args: Prisma.ModuleProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>
          }
          findMany: {
            args: Prisma.ModuleProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>[]
          }
          create: {
            args: Prisma.ModuleProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>
          }
          createMany: {
            args: Prisma.ModuleProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>[]
          }
          delete: {
            args: Prisma.ModuleProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>
          }
          update: {
            args: Prisma.ModuleProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>
          }
          deleteMany: {
            args: Prisma.ModuleProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>[]
          }
          upsert: {
            args: Prisma.ModuleProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProgressPayload>
          }
          aggregate: {
            args: Prisma.ModuleProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModuleProgress>
          }
          groupBy: {
            args: Prisma.ModuleProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleProgressCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleProgressCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      VideoProgress: {
        payload: Prisma.$VideoProgressPayload<ExtArgs>
        fields: Prisma.VideoProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          findFirst: {
            args: Prisma.VideoProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          findMany: {
            args: Prisma.VideoProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>[]
          }
          create: {
            args: Prisma.VideoProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          createMany: {
            args: Prisma.VideoProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>[]
          }
          delete: {
            args: Prisma.VideoProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          update: {
            args: Prisma.VideoProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          deleteMany: {
            args: Prisma.VideoProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>[]
          }
          upsert: {
            args: Prisma.VideoProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          aggregate: {
            args: Prisma.VideoProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoProgress>
          }
          groupBy: {
            args: Prisma.VideoProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoProgressCountArgs<ExtArgs>
            result: $Utils.Optional<VideoProgressCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    course?: CourseOmit
    courseCategory?: CourseCategoryOmit
    module?: ModuleOmit
    moduleProgress?: ModuleProgressOmit
    video?: VideoOmit
    videoProgress?: VideoProgressOmit
    enrollment?: EnrollmentOmit
    rating?: RatingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Courses: number
    ModuleProgress: number
    VideoProgress: number
    Enrollment: number
    Rating: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courses?: boolean | UserCountOutputTypeCountCoursesArgs
    ModuleProgress?: boolean | UserCountOutputTypeCountModuleProgressArgs
    VideoProgress?: boolean | UserCountOutputTypeCountVideoProgressArgs
    Enrollment?: boolean | UserCountOutputTypeCountEnrollmentArgs
    Rating?: boolean | UserCountOutputTypeCountRatingArgs
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
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModuleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideoProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    Module: number
    Enrollment: number
    Rating: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Module?: boolean | CourseCountOutputTypeCountModuleArgs
    Enrollment?: boolean | CourseCountOutputTypeCountEnrollmentArgs
    Rating?: boolean | CourseCountOutputTypeCountRatingArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type CourseCategoryCountOutputType
   */

  export type CourseCategoryCountOutputType = {
    Courses: number
  }

  export type CourseCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courses?: boolean | CourseCategoryCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategoryCountOutputType
     */
    select?: CourseCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    ModuleProgress: number
    Video: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ModuleProgress?: boolean | ModuleCountOutputTypeCountModuleProgressArgs
    Video?: boolean | ModuleCountOutputTypeCountVideoArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountModuleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleProgressWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    VideoProgress: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VideoProgress?: boolean | VideoCountOutputTypeCountVideoProgressArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountVideoProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoProgressWhereInput
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
    type: $Enums.Type | null
    name: string | null
    cpf: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    type: $Enums.Type | null
    name: string | null
    cpf: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    type: number
    name: number
    cpf: number
    email: number
    password: number
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
    type?: true
    name?: true
    cpf?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    cpf?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    cpf?: true
    email?: true
    password?: true
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
    type: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
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
    type?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    password?: boolean
    Courses?: boolean | User$CoursesArgs<ExtArgs>
    ModuleProgress?: boolean | User$ModuleProgressArgs<ExtArgs>
    VideoProgress?: boolean | User$VideoProgressArgs<ExtArgs>
    Enrollment?: boolean | User$EnrollmentArgs<ExtArgs>
    Rating?: boolean | User$RatingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "cpf" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courses?: boolean | User$CoursesArgs<ExtArgs>
    ModuleProgress?: boolean | User$ModuleProgressArgs<ExtArgs>
    VideoProgress?: boolean | User$VideoProgressArgs<ExtArgs>
    Enrollment?: boolean | User$EnrollmentArgs<ExtArgs>
    Rating?: boolean | User$RatingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Courses: Prisma.$CoursePayload<ExtArgs>[]
      ModuleProgress: Prisma.$ModuleProgressPayload<ExtArgs>[]
      VideoProgress: Prisma.$VideoProgressPayload<ExtArgs>[]
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>[]
      Rating: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.Type
      name: string
      cpf: string
      email: string
      password: string
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
    Courses<T extends User$CoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$CoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ModuleProgress<T extends User$ModuleProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$ModuleProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    VideoProgress<T extends User$VideoProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$VideoProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Enrollment<T extends User$EnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, User$EnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rating<T extends User$RatingArgs<ExtArgs> = {}>(args?: Subset<T, User$RatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly type: FieldRef<"User", 'Type'>
    readonly name: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.Courses
   */
  export type User$CoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.ModuleProgress
   */
  export type User$ModuleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    where?: ModuleProgressWhereInput
    orderBy?: ModuleProgressOrderByWithRelationInput | ModuleProgressOrderByWithRelationInput[]
    cursor?: ModuleProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleProgressScalarFieldEnum | ModuleProgressScalarFieldEnum[]
  }

  /**
   * User.VideoProgress
   */
  export type User$VideoProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    where?: VideoProgressWhereInput
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    cursor?: VideoProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * User.Enrollment
   */
  export type User$EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.Rating
   */
  export type User$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
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
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
    teacherId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
    teacherId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    categoryId: number | null
    teacherId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    categoryId: number | null
    teacherId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    categoryId: number
    teacherId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    teacherId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    teacherId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    categoryId?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    categoryId?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    categoryId?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    name: string
    price: number
    description: string
    categoryId: number
    teacherId: number
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    Module?: boolean | Course$ModuleArgs<ExtArgs>
    Enrollment?: boolean | Course$EnrollmentArgs<ExtArgs>
    Rating?: boolean | Course$RatingArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "categoryId" | "teacherId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    Module?: boolean | Course$ModuleArgs<ExtArgs>
    Enrollment?: boolean | Course$EnrollmentArgs<ExtArgs>
    Rating?: boolean | Course$RatingArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      category: Prisma.$CourseCategoryPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
      Module: Prisma.$ModulePayload<ExtArgs>[]
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>[]
      Rating: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      description: string
      categoryId: number
      teacherId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CourseCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseCategoryDefaultArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Module<T extends Course$ModuleArgs<ExtArgs> = {}>(args?: Subset<T, Course$ModuleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Enrollment<T extends Course$EnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, Course$EnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rating<T extends Course$RatingArgs<ExtArgs> = {}>(args?: Subset<T, Course$RatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly name: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Int'>
    readonly description: FieldRef<"Course", 'String'>
    readonly categoryId: FieldRef<"Course", 'Int'>
    readonly teacherId: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.Module
   */
  export type Course$ModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Course.Enrollment
   */
  export type Course$EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.Rating
   */
  export type Course$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseCategory
   */

  export type AggregateCourseCategory = {
    _count: CourseCategoryCountAggregateOutputType | null
    _avg: CourseCategoryAvgAggregateOutputType | null
    _sum: CourseCategorySumAggregateOutputType | null
    _min: CourseCategoryMinAggregateOutputType | null
    _max: CourseCategoryMaxAggregateOutputType | null
  }

  export type CourseCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseCategorySumAggregateOutputType = {
    id: number | null
  }

  export type CourseCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CourseCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CourseCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CourseCategoryAvgAggregateInputType = {
    id?: true
  }

  export type CourseCategorySumAggregateInputType = {
    id?: true
  }

  export type CourseCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CourseCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CourseCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CourseCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseCategory to aggregate.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseCategories
    **/
    _count?: true | CourseCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseCategoryMaxAggregateInputType
  }

  export type GetCourseCategoryAggregateType<T extends CourseCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseCategory[P]>
      : GetScalarType<T[P], AggregateCourseCategory[P]>
  }




  export type CourseCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseCategoryWhereInput
    orderBy?: CourseCategoryOrderByWithAggregationInput | CourseCategoryOrderByWithAggregationInput[]
    by: CourseCategoryScalarFieldEnum[] | CourseCategoryScalarFieldEnum
    having?: CourseCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCategoryCountAggregateInputType | true
    _avg?: CourseCategoryAvgAggregateInputType
    _sum?: CourseCategorySumAggregateInputType
    _min?: CourseCategoryMinAggregateInputType
    _max?: CourseCategoryMaxAggregateInputType
  }

  export type CourseCategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: CourseCategoryCountAggregateOutputType | null
    _avg: CourseCategoryAvgAggregateOutputType | null
    _sum: CourseCategorySumAggregateOutputType | null
    _min: CourseCategoryMinAggregateOutputType | null
    _max: CourseCategoryMaxAggregateOutputType | null
  }

  type GetCourseCategoryGroupByPayload<T extends CourseCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>
        }
      >
    >


  export type CourseCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    Courses?: boolean | CourseCategory$CoursesArgs<ExtArgs>
    _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CourseCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["courseCategory"]>
  export type CourseCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courses?: boolean | CourseCategory$CoursesArgs<ExtArgs>
    _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseCategory"
    objects: {
      Courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["courseCategory"]>
    composites: {}
  }

  type CourseCategoryGetPayload<S extends boolean | null | undefined | CourseCategoryDefaultArgs> = $Result.GetResult<Prisma.$CourseCategoryPayload, S>

  type CourseCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCategoryCountAggregateInputType | true
    }

  export interface CourseCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseCategory'], meta: { name: 'CourseCategory' } }
    /**
     * Find zero or one CourseCategory that matches the filter.
     * @param {CourseCategoryFindUniqueArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseCategoryFindUniqueArgs>(args: SelectSubset<T, CourseCategoryFindUniqueArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseCategoryFindUniqueOrThrowArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindFirstArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseCategoryFindFirstArgs>(args?: SelectSubset<T, CourseCategoryFindFirstArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindFirstOrThrowArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseCategories
     * const courseCategories = await prisma.courseCategory.findMany()
     * 
     * // Get first 10 CourseCategories
     * const courseCategories = await prisma.courseCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseCategoryFindManyArgs>(args?: SelectSubset<T, CourseCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseCategory.
     * @param {CourseCategoryCreateArgs} args - Arguments to create a CourseCategory.
     * @example
     * // Create one CourseCategory
     * const CourseCategory = await prisma.courseCategory.create({
     *   data: {
     *     // ... data to create a CourseCategory
     *   }
     * })
     * 
     */
    create<T extends CourseCategoryCreateArgs>(args: SelectSubset<T, CourseCategoryCreateArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseCategories.
     * @param {CourseCategoryCreateManyArgs} args - Arguments to create many CourseCategories.
     * @example
     * // Create many CourseCategories
     * const courseCategory = await prisma.courseCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCategoryCreateManyArgs>(args?: SelectSubset<T, CourseCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseCategories and returns the data saved in the database.
     * @param {CourseCategoryCreateManyAndReturnArgs} args - Arguments to create many CourseCategories.
     * @example
     * // Create many CourseCategories
     * const courseCategory = await prisma.courseCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseCategories and only return the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseCategory.
     * @param {CourseCategoryDeleteArgs} args - Arguments to delete one CourseCategory.
     * @example
     * // Delete one CourseCategory
     * const CourseCategory = await prisma.courseCategory.delete({
     *   where: {
     *     // ... filter to delete one CourseCategory
     *   }
     * })
     * 
     */
    delete<T extends CourseCategoryDeleteArgs>(args: SelectSubset<T, CourseCategoryDeleteArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseCategory.
     * @param {CourseCategoryUpdateArgs} args - Arguments to update one CourseCategory.
     * @example
     * // Update one CourseCategory
     * const courseCategory = await prisma.courseCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseCategoryUpdateArgs>(args: SelectSubset<T, CourseCategoryUpdateArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseCategories.
     * @param {CourseCategoryDeleteManyArgs} args - Arguments to filter CourseCategories to delete.
     * @example
     * // Delete a few CourseCategories
     * const { count } = await prisma.courseCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseCategoryDeleteManyArgs>(args?: SelectSubset<T, CourseCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseCategories
     * const courseCategory = await prisma.courseCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseCategoryUpdateManyArgs>(args: SelectSubset<T, CourseCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseCategories and returns the data updated in the database.
     * @param {CourseCategoryUpdateManyAndReturnArgs} args - Arguments to update many CourseCategories.
     * @example
     * // Update many CourseCategories
     * const courseCategory = await prisma.courseCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseCategories and only return the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseCategory.
     * @param {CourseCategoryUpsertArgs} args - Arguments to update or create a CourseCategory.
     * @example
     * // Update or create a CourseCategory
     * const courseCategory = await prisma.courseCategory.upsert({
     *   create: {
     *     // ... data to create a CourseCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseCategory we want to update
     *   }
     * })
     */
    upsert<T extends CourseCategoryUpsertArgs>(args: SelectSubset<T, CourseCategoryUpsertArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryCountArgs} args - Arguments to filter CourseCategories to count.
     * @example
     * // Count the number of CourseCategories
     * const count = await prisma.courseCategory.count({
     *   where: {
     *     // ... the filter for the CourseCategories we want to count
     *   }
     * })
    **/
    count<T extends CourseCategoryCountArgs>(
      args?: Subset<T, CourseCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseCategoryAggregateArgs>(args: Subset<T, CourseCategoryAggregateArgs>): Prisma.PrismaPromise<GetCourseCategoryAggregateType<T>>

    /**
     * Group by CourseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryGroupByArgs} args - Group by arguments.
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
      T extends CourseCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CourseCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseCategory model
   */
  readonly fields: CourseCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Courses<T extends CourseCategory$CoursesArgs<ExtArgs> = {}>(args?: Subset<T, CourseCategory$CoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CourseCategory model
   */
  interface CourseCategoryFieldRefs {
    readonly id: FieldRef<"CourseCategory", 'Int'>
    readonly name: FieldRef<"CourseCategory", 'String'>
    readonly description: FieldRef<"CourseCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseCategory findUnique
   */
  export type CourseCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory findUniqueOrThrow
   */
  export type CourseCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory findFirst
   */
  export type CourseCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory findFirstOrThrow
   */
  export type CourseCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory findMany
   */
  export type CourseCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategories to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory create
   */
  export type CourseCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseCategory.
     */
    data: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>
  }

  /**
   * CourseCategory createMany
   */
  export type CourseCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseCategory createManyAndReturn
   */
  export type CourseCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseCategory update
   */
  export type CourseCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseCategory.
     */
    data: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>
    /**
     * Choose, which CourseCategory to update.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory updateMany
   */
  export type CourseCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<CourseCategoryUpdateManyMutationInput, CourseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number
  }

  /**
   * CourseCategory updateManyAndReturn
   */
  export type CourseCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<CourseCategoryUpdateManyMutationInput, CourseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number
  }

  /**
   * CourseCategory upsert
   */
  export type CourseCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseCategory to update in case it exists.
     */
    where: CourseCategoryWhereUniqueInput
    /**
     * In case the CourseCategory found by the `where` argument doesn't exist, create a new CourseCategory with this data.
     */
    create: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>
    /**
     * In case the CourseCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>
  }

  /**
   * CourseCategory delete
   */
  export type CourseCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter which CourseCategory to delete.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory deleteMany
   */
  export type CourseCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseCategories to delete
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to delete.
     */
    limit?: number
  }

  /**
   * CourseCategory.Courses
   */
  export type CourseCategory$CoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * CourseCategory without action
   */
  export type CourseCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    courseId: number | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    courseId: number | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    courseId: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    courseId?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    courseId?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    courseId?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: number
    name: string
    description: string
    courseId: number
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    ModuleProgress?: boolean | Module$ModuleProgressArgs<ExtArgs>
    Video?: boolean | Module$VideoArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "courseId", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    ModuleProgress?: boolean | Module$ModuleProgressArgs<ExtArgs>
    Video?: boolean | Module$VideoArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      ModuleProgress: Prisma.$ModuleProgressPayload<ExtArgs>[]
      Video: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      courseId: number
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ModuleProgress<T extends Module$ModuleProgressArgs<ExtArgs> = {}>(args?: Subset<T, Module$ModuleProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Video<T extends Module$VideoArgs<ExtArgs> = {}>(args?: Subset<T, Module$VideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'Int'>
    readonly name: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly courseId: FieldRef<"Module", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.ModuleProgress
   */
  export type Module$ModuleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    where?: ModuleProgressWhereInput
    orderBy?: ModuleProgressOrderByWithRelationInput | ModuleProgressOrderByWithRelationInput[]
    cursor?: ModuleProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleProgressScalarFieldEnum | ModuleProgressScalarFieldEnum[]
  }

  /**
   * Module.Video
   */
  export type Module$VideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model ModuleProgress
   */

  export type AggregateModuleProgress = {
    _count: ModuleProgressCountAggregateOutputType | null
    _avg: ModuleProgressAvgAggregateOutputType | null
    _sum: ModuleProgressSumAggregateOutputType | null
    _min: ModuleProgressMinAggregateOutputType | null
    _max: ModuleProgressMaxAggregateOutputType | null
  }

  export type ModuleProgressAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    moduleId: number | null
  }

  export type ModuleProgressSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    moduleId: number | null
  }

  export type ModuleProgressMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    moduleId: number | null
    finished: boolean | null
  }

  export type ModuleProgressMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    moduleId: number | null
    finished: boolean | null
  }

  export type ModuleProgressCountAggregateOutputType = {
    id: number
    studentId: number
    moduleId: number
    finished: number
    _all: number
  }


  export type ModuleProgressAvgAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
  }

  export type ModuleProgressSumAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
  }

  export type ModuleProgressMinAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
    finished?: true
  }

  export type ModuleProgressMaxAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
    finished?: true
  }

  export type ModuleProgressCountAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
    finished?: true
    _all?: true
  }

  export type ModuleProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleProgress to aggregate.
     */
    where?: ModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProgresses to fetch.
     */
    orderBy?: ModuleProgressOrderByWithRelationInput | ModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModuleProgresses
    **/
    _count?: true | ModuleProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleProgressMaxAggregateInputType
  }

  export type GetModuleProgressAggregateType<T extends ModuleProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateModuleProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModuleProgress[P]>
      : GetScalarType<T[P], AggregateModuleProgress[P]>
  }




  export type ModuleProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleProgressWhereInput
    orderBy?: ModuleProgressOrderByWithAggregationInput | ModuleProgressOrderByWithAggregationInput[]
    by: ModuleProgressScalarFieldEnum[] | ModuleProgressScalarFieldEnum
    having?: ModuleProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleProgressCountAggregateInputType | true
    _avg?: ModuleProgressAvgAggregateInputType
    _sum?: ModuleProgressSumAggregateInputType
    _min?: ModuleProgressMinAggregateInputType
    _max?: ModuleProgressMaxAggregateInputType
  }

  export type ModuleProgressGroupByOutputType = {
    id: number
    studentId: number
    moduleId: number
    finished: boolean
    _count: ModuleProgressCountAggregateOutputType | null
    _avg: ModuleProgressAvgAggregateOutputType | null
    _sum: ModuleProgressSumAggregateOutputType | null
    _min: ModuleProgressMinAggregateOutputType | null
    _max: ModuleProgressMaxAggregateOutputType | null
  }

  type GetModuleProgressGroupByPayload<T extends ModuleProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleProgressGroupByOutputType[P]>
        }
      >
    >


  export type ModuleProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    moduleId?: boolean
    finished?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleProgress"]>

  export type ModuleProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    moduleId?: boolean
    finished?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleProgress"]>

  export type ModuleProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    moduleId?: boolean
    finished?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleProgress"]>

  export type ModuleProgressSelectScalar = {
    id?: boolean
    studentId?: boolean
    moduleId?: boolean
    finished?: boolean
  }

  export type ModuleProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "moduleId" | "finished", ExtArgs["result"]["moduleProgress"]>
  export type ModuleProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $ModuleProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModuleProgress"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      moduleId: number
      finished: boolean
    }, ExtArgs["result"]["moduleProgress"]>
    composites: {}
  }

  type ModuleProgressGetPayload<S extends boolean | null | undefined | ModuleProgressDefaultArgs> = $Result.GetResult<Prisma.$ModuleProgressPayload, S>

  type ModuleProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleProgressCountAggregateInputType | true
    }

  export interface ModuleProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModuleProgress'], meta: { name: 'ModuleProgress' } }
    /**
     * Find zero or one ModuleProgress that matches the filter.
     * @param {ModuleProgressFindUniqueArgs} args - Arguments to find a ModuleProgress
     * @example
     * // Get one ModuleProgress
     * const moduleProgress = await prisma.moduleProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleProgressFindUniqueArgs>(args: SelectSubset<T, ModuleProgressFindUniqueArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModuleProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleProgressFindUniqueOrThrowArgs} args - Arguments to find a ModuleProgress
     * @example
     * // Get one ModuleProgress
     * const moduleProgress = await prisma.moduleProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProgressFindFirstArgs} args - Arguments to find a ModuleProgress
     * @example
     * // Get one ModuleProgress
     * const moduleProgress = await prisma.moduleProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleProgressFindFirstArgs>(args?: SelectSubset<T, ModuleProgressFindFirstArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProgressFindFirstOrThrowArgs} args - Arguments to find a ModuleProgress
     * @example
     * // Get one ModuleProgress
     * const moduleProgress = await prisma.moduleProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModuleProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModuleProgresses
     * const moduleProgresses = await prisma.moduleProgress.findMany()
     * 
     * // Get first 10 ModuleProgresses
     * const moduleProgresses = await prisma.moduleProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleProgressWithIdOnly = await prisma.moduleProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleProgressFindManyArgs>(args?: SelectSubset<T, ModuleProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModuleProgress.
     * @param {ModuleProgressCreateArgs} args - Arguments to create a ModuleProgress.
     * @example
     * // Create one ModuleProgress
     * const ModuleProgress = await prisma.moduleProgress.create({
     *   data: {
     *     // ... data to create a ModuleProgress
     *   }
     * })
     * 
     */
    create<T extends ModuleProgressCreateArgs>(args: SelectSubset<T, ModuleProgressCreateArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModuleProgresses.
     * @param {ModuleProgressCreateManyArgs} args - Arguments to create many ModuleProgresses.
     * @example
     * // Create many ModuleProgresses
     * const moduleProgress = await prisma.moduleProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleProgressCreateManyArgs>(args?: SelectSubset<T, ModuleProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModuleProgresses and returns the data saved in the database.
     * @param {ModuleProgressCreateManyAndReturnArgs} args - Arguments to create many ModuleProgresses.
     * @example
     * // Create many ModuleProgresses
     * const moduleProgress = await prisma.moduleProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModuleProgresses and only return the `id`
     * const moduleProgressWithIdOnly = await prisma.moduleProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModuleProgress.
     * @param {ModuleProgressDeleteArgs} args - Arguments to delete one ModuleProgress.
     * @example
     * // Delete one ModuleProgress
     * const ModuleProgress = await prisma.moduleProgress.delete({
     *   where: {
     *     // ... filter to delete one ModuleProgress
     *   }
     * })
     * 
     */
    delete<T extends ModuleProgressDeleteArgs>(args: SelectSubset<T, ModuleProgressDeleteArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModuleProgress.
     * @param {ModuleProgressUpdateArgs} args - Arguments to update one ModuleProgress.
     * @example
     * // Update one ModuleProgress
     * const moduleProgress = await prisma.moduleProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleProgressUpdateArgs>(args: SelectSubset<T, ModuleProgressUpdateArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModuleProgresses.
     * @param {ModuleProgressDeleteManyArgs} args - Arguments to filter ModuleProgresses to delete.
     * @example
     * // Delete a few ModuleProgresses
     * const { count } = await prisma.moduleProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleProgressDeleteManyArgs>(args?: SelectSubset<T, ModuleProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModuleProgresses
     * const moduleProgress = await prisma.moduleProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleProgressUpdateManyArgs>(args: SelectSubset<T, ModuleProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleProgresses and returns the data updated in the database.
     * @param {ModuleProgressUpdateManyAndReturnArgs} args - Arguments to update many ModuleProgresses.
     * @example
     * // Update many ModuleProgresses
     * const moduleProgress = await prisma.moduleProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModuleProgresses and only return the `id`
     * const moduleProgressWithIdOnly = await prisma.moduleProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModuleProgress.
     * @param {ModuleProgressUpsertArgs} args - Arguments to update or create a ModuleProgress.
     * @example
     * // Update or create a ModuleProgress
     * const moduleProgress = await prisma.moduleProgress.upsert({
     *   create: {
     *     // ... data to create a ModuleProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModuleProgress we want to update
     *   }
     * })
     */
    upsert<T extends ModuleProgressUpsertArgs>(args: SelectSubset<T, ModuleProgressUpsertArgs<ExtArgs>>): Prisma__ModuleProgressClient<$Result.GetResult<Prisma.$ModuleProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModuleProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProgressCountArgs} args - Arguments to filter ModuleProgresses to count.
     * @example
     * // Count the number of ModuleProgresses
     * const count = await prisma.moduleProgress.count({
     *   where: {
     *     // ... the filter for the ModuleProgresses we want to count
     *   }
     * })
    **/
    count<T extends ModuleProgressCountArgs>(
      args?: Subset<T, ModuleProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModuleProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleProgressAggregateArgs>(args: Subset<T, ModuleProgressAggregateArgs>): Prisma.PrismaPromise<GetModuleProgressAggregateType<T>>

    /**
     * Group by ModuleProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProgressGroupByArgs} args - Group by arguments.
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
      T extends ModuleProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleProgressGroupByArgs['orderBy'] }
        : { orderBy?: ModuleProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModuleProgress model
   */
  readonly fields: ModuleProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModuleProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModuleProgress model
   */
  interface ModuleProgressFieldRefs {
    readonly id: FieldRef<"ModuleProgress", 'Int'>
    readonly studentId: FieldRef<"ModuleProgress", 'Int'>
    readonly moduleId: FieldRef<"ModuleProgress", 'Int'>
    readonly finished: FieldRef<"ModuleProgress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ModuleProgress findUnique
   */
  export type ModuleProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProgress to fetch.
     */
    where: ModuleProgressWhereUniqueInput
  }

  /**
   * ModuleProgress findUniqueOrThrow
   */
  export type ModuleProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProgress to fetch.
     */
    where: ModuleProgressWhereUniqueInput
  }

  /**
   * ModuleProgress findFirst
   */
  export type ModuleProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProgress to fetch.
     */
    where?: ModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProgresses to fetch.
     */
    orderBy?: ModuleProgressOrderByWithRelationInput | ModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleProgresses.
     */
    cursor?: ModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleProgresses.
     */
    distinct?: ModuleProgressScalarFieldEnum | ModuleProgressScalarFieldEnum[]
  }

  /**
   * ModuleProgress findFirstOrThrow
   */
  export type ModuleProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProgress to fetch.
     */
    where?: ModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProgresses to fetch.
     */
    orderBy?: ModuleProgressOrderByWithRelationInput | ModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleProgresses.
     */
    cursor?: ModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleProgresses.
     */
    distinct?: ModuleProgressScalarFieldEnum | ModuleProgressScalarFieldEnum[]
  }

  /**
   * ModuleProgress findMany
   */
  export type ModuleProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProgresses to fetch.
     */
    where?: ModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProgresses to fetch.
     */
    orderBy?: ModuleProgressOrderByWithRelationInput | ModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModuleProgresses.
     */
    cursor?: ModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProgresses.
     */
    skip?: number
    distinct?: ModuleProgressScalarFieldEnum | ModuleProgressScalarFieldEnum[]
  }

  /**
   * ModuleProgress create
   */
  export type ModuleProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a ModuleProgress.
     */
    data: XOR<ModuleProgressCreateInput, ModuleProgressUncheckedCreateInput>
  }

  /**
   * ModuleProgress createMany
   */
  export type ModuleProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModuleProgresses.
     */
    data: ModuleProgressCreateManyInput | ModuleProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModuleProgress createManyAndReturn
   */
  export type ModuleProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * The data used to create many ModuleProgresses.
     */
    data: ModuleProgressCreateManyInput | ModuleProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleProgress update
   */
  export type ModuleProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a ModuleProgress.
     */
    data: XOR<ModuleProgressUpdateInput, ModuleProgressUncheckedUpdateInput>
    /**
     * Choose, which ModuleProgress to update.
     */
    where: ModuleProgressWhereUniqueInput
  }

  /**
   * ModuleProgress updateMany
   */
  export type ModuleProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModuleProgresses.
     */
    data: XOR<ModuleProgressUpdateManyMutationInput, ModuleProgressUncheckedUpdateManyInput>
    /**
     * Filter which ModuleProgresses to update
     */
    where?: ModuleProgressWhereInput
    /**
     * Limit how many ModuleProgresses to update.
     */
    limit?: number
  }

  /**
   * ModuleProgress updateManyAndReturn
   */
  export type ModuleProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * The data used to update ModuleProgresses.
     */
    data: XOR<ModuleProgressUpdateManyMutationInput, ModuleProgressUncheckedUpdateManyInput>
    /**
     * Filter which ModuleProgresses to update
     */
    where?: ModuleProgressWhereInput
    /**
     * Limit how many ModuleProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleProgress upsert
   */
  export type ModuleProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the ModuleProgress to update in case it exists.
     */
    where: ModuleProgressWhereUniqueInput
    /**
     * In case the ModuleProgress found by the `where` argument doesn't exist, create a new ModuleProgress with this data.
     */
    create: XOR<ModuleProgressCreateInput, ModuleProgressUncheckedCreateInput>
    /**
     * In case the ModuleProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleProgressUpdateInput, ModuleProgressUncheckedUpdateInput>
  }

  /**
   * ModuleProgress delete
   */
  export type ModuleProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
    /**
     * Filter which ModuleProgress to delete.
     */
    where: ModuleProgressWhereUniqueInput
  }

  /**
   * ModuleProgress deleteMany
   */
  export type ModuleProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleProgresses to delete
     */
    where?: ModuleProgressWhereInput
    /**
     * Limit how many ModuleProgresses to delete.
     */
    limit?: number
  }

  /**
   * ModuleProgress without action
   */
  export type ModuleProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProgress
     */
    select?: ModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProgress
     */
    omit?: ModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProgressInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    moduleId: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    duration: number | null
    moduleId: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    url: string | null
    duration: number | null
    moduleId: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    url: string | null
    duration: number | null
    moduleId: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    name: number
    description: number
    url: number
    duration: number
    moduleId: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    duration?: true
    moduleId?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    duration?: true
    moduleId?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    duration?: true
    moduleId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    duration?: true
    moduleId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    duration?: true
    moduleId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    name: string
    description: string
    url: string
    duration: number
    moduleId: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    duration?: boolean
    moduleId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    VideoProgress?: boolean | Video$VideoProgressArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    duration?: boolean
    moduleId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    duration?: boolean
    moduleId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    duration?: boolean
    moduleId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "url" | "duration" | "moduleId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    VideoProgress?: boolean | Video$VideoProgressArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      VideoProgress: Prisma.$VideoProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      url: string
      duration: number
      moduleId: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    VideoProgress<T extends Video$VideoProgressArgs<ExtArgs> = {}>(args?: Subset<T, Video$VideoProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly name: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly duration: FieldRef<"Video", 'Int'>
    readonly moduleId: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.VideoProgress
   */
  export type Video$VideoProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    where?: VideoProgressWhereInput
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    cursor?: VideoProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model VideoProgress
   */

  export type AggregateVideoProgress = {
    _count: VideoProgressCountAggregateOutputType | null
    _avg: VideoProgressAvgAggregateOutputType | null
    _sum: VideoProgressSumAggregateOutputType | null
    _min: VideoProgressMinAggregateOutputType | null
    _max: VideoProgressMaxAggregateOutputType | null
  }

  export type VideoProgressAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    videoId: number | null
    progress: number | null
  }

  export type VideoProgressSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    videoId: number | null
    progress: number | null
  }

  export type VideoProgressMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    videoId: number | null
    finished: boolean | null
    progress: number | null
  }

  export type VideoProgressMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    videoId: number | null
    finished: boolean | null
    progress: number | null
  }

  export type VideoProgressCountAggregateOutputType = {
    id: number
    studentId: number
    videoId: number
    finished: number
    progress: number
    _all: number
  }


  export type VideoProgressAvgAggregateInputType = {
    id?: true
    studentId?: true
    videoId?: true
    progress?: true
  }

  export type VideoProgressSumAggregateInputType = {
    id?: true
    studentId?: true
    videoId?: true
    progress?: true
  }

  export type VideoProgressMinAggregateInputType = {
    id?: true
    studentId?: true
    videoId?: true
    finished?: true
    progress?: true
  }

  export type VideoProgressMaxAggregateInputType = {
    id?: true
    studentId?: true
    videoId?: true
    finished?: true
    progress?: true
  }

  export type VideoProgressCountAggregateInputType = {
    id?: true
    studentId?: true
    videoId?: true
    finished?: true
    progress?: true
    _all?: true
  }

  export type VideoProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoProgress to aggregate.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoProgresses
    **/
    _count?: true | VideoProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoProgressMaxAggregateInputType
  }

  export type GetVideoProgressAggregateType<T extends VideoProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoProgress[P]>
      : GetScalarType<T[P], AggregateVideoProgress[P]>
  }




  export type VideoProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoProgressWhereInput
    orderBy?: VideoProgressOrderByWithAggregationInput | VideoProgressOrderByWithAggregationInput[]
    by: VideoProgressScalarFieldEnum[] | VideoProgressScalarFieldEnum
    having?: VideoProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoProgressCountAggregateInputType | true
    _avg?: VideoProgressAvgAggregateInputType
    _sum?: VideoProgressSumAggregateInputType
    _min?: VideoProgressMinAggregateInputType
    _max?: VideoProgressMaxAggregateInputType
  }

  export type VideoProgressGroupByOutputType = {
    id: number
    studentId: number
    videoId: number
    finished: boolean
    progress: number
    _count: VideoProgressCountAggregateOutputType | null
    _avg: VideoProgressAvgAggregateOutputType | null
    _sum: VideoProgressSumAggregateOutputType | null
    _min: VideoProgressMinAggregateOutputType | null
    _max: VideoProgressMaxAggregateOutputType | null
  }

  type GetVideoProgressGroupByPayload<T extends VideoProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoProgressGroupByOutputType[P]>
            : GetScalarType<T[P], VideoProgressGroupByOutputType[P]>
        }
      >
    >


  export type VideoProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    videoId?: boolean
    finished?: boolean
    progress?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProgress"]>

  export type VideoProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    videoId?: boolean
    finished?: boolean
    progress?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProgress"]>

  export type VideoProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    videoId?: boolean
    finished?: boolean
    progress?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProgress"]>

  export type VideoProgressSelectScalar = {
    id?: boolean
    studentId?: boolean
    videoId?: boolean
    finished?: boolean
    progress?: boolean
  }

  export type VideoProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "videoId" | "finished" | "progress", ExtArgs["result"]["videoProgress"]>
  export type VideoProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $VideoProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoProgress"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      videoId: number
      finished: boolean
      progress: number
    }, ExtArgs["result"]["videoProgress"]>
    composites: {}
  }

  type VideoProgressGetPayload<S extends boolean | null | undefined | VideoProgressDefaultArgs> = $Result.GetResult<Prisma.$VideoProgressPayload, S>

  type VideoProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoProgressCountAggregateInputType | true
    }

  export interface VideoProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoProgress'], meta: { name: 'VideoProgress' } }
    /**
     * Find zero or one VideoProgress that matches the filter.
     * @param {VideoProgressFindUniqueArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoProgressFindUniqueArgs>(args: SelectSubset<T, VideoProgressFindUniqueArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoProgressFindUniqueOrThrowArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressFindFirstArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoProgressFindFirstArgs>(args?: SelectSubset<T, VideoProgressFindFirstArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressFindFirstOrThrowArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoProgresses
     * const videoProgresses = await prisma.videoProgress.findMany()
     * 
     * // Get first 10 VideoProgresses
     * const videoProgresses = await prisma.videoProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoProgressWithIdOnly = await prisma.videoProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoProgressFindManyArgs>(args?: SelectSubset<T, VideoProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoProgress.
     * @param {VideoProgressCreateArgs} args - Arguments to create a VideoProgress.
     * @example
     * // Create one VideoProgress
     * const VideoProgress = await prisma.videoProgress.create({
     *   data: {
     *     // ... data to create a VideoProgress
     *   }
     * })
     * 
     */
    create<T extends VideoProgressCreateArgs>(args: SelectSubset<T, VideoProgressCreateArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoProgresses.
     * @param {VideoProgressCreateManyArgs} args - Arguments to create many VideoProgresses.
     * @example
     * // Create many VideoProgresses
     * const videoProgress = await prisma.videoProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoProgressCreateManyArgs>(args?: SelectSubset<T, VideoProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoProgresses and returns the data saved in the database.
     * @param {VideoProgressCreateManyAndReturnArgs} args - Arguments to create many VideoProgresses.
     * @example
     * // Create many VideoProgresses
     * const videoProgress = await prisma.videoProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoProgresses and only return the `id`
     * const videoProgressWithIdOnly = await prisma.videoProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoProgress.
     * @param {VideoProgressDeleteArgs} args - Arguments to delete one VideoProgress.
     * @example
     * // Delete one VideoProgress
     * const VideoProgress = await prisma.videoProgress.delete({
     *   where: {
     *     // ... filter to delete one VideoProgress
     *   }
     * })
     * 
     */
    delete<T extends VideoProgressDeleteArgs>(args: SelectSubset<T, VideoProgressDeleteArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoProgress.
     * @param {VideoProgressUpdateArgs} args - Arguments to update one VideoProgress.
     * @example
     * // Update one VideoProgress
     * const videoProgress = await prisma.videoProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoProgressUpdateArgs>(args: SelectSubset<T, VideoProgressUpdateArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoProgresses.
     * @param {VideoProgressDeleteManyArgs} args - Arguments to filter VideoProgresses to delete.
     * @example
     * // Delete a few VideoProgresses
     * const { count } = await prisma.videoProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoProgressDeleteManyArgs>(args?: SelectSubset<T, VideoProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoProgresses
     * const videoProgress = await prisma.videoProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoProgressUpdateManyArgs>(args: SelectSubset<T, VideoProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoProgresses and returns the data updated in the database.
     * @param {VideoProgressUpdateManyAndReturnArgs} args - Arguments to update many VideoProgresses.
     * @example
     * // Update many VideoProgresses
     * const videoProgress = await prisma.videoProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoProgresses and only return the `id`
     * const videoProgressWithIdOnly = await prisma.videoProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoProgress.
     * @param {VideoProgressUpsertArgs} args - Arguments to update or create a VideoProgress.
     * @example
     * // Update or create a VideoProgress
     * const videoProgress = await prisma.videoProgress.upsert({
     *   create: {
     *     // ... data to create a VideoProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoProgress we want to update
     *   }
     * })
     */
    upsert<T extends VideoProgressUpsertArgs>(args: SelectSubset<T, VideoProgressUpsertArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressCountArgs} args - Arguments to filter VideoProgresses to count.
     * @example
     * // Count the number of VideoProgresses
     * const count = await prisma.videoProgress.count({
     *   where: {
     *     // ... the filter for the VideoProgresses we want to count
     *   }
     * })
    **/
    count<T extends VideoProgressCountArgs>(
      args?: Subset<T, VideoProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoProgressAggregateArgs>(args: Subset<T, VideoProgressAggregateArgs>): Prisma.PrismaPromise<GetVideoProgressAggregateType<T>>

    /**
     * Group by VideoProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressGroupByArgs} args - Group by arguments.
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
      T extends VideoProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoProgressGroupByArgs['orderBy'] }
        : { orderBy?: VideoProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoProgress model
   */
  readonly fields: VideoProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoProgress model
   */
  interface VideoProgressFieldRefs {
    readonly id: FieldRef<"VideoProgress", 'Int'>
    readonly studentId: FieldRef<"VideoProgress", 'Int'>
    readonly videoId: FieldRef<"VideoProgress", 'Int'>
    readonly finished: FieldRef<"VideoProgress", 'Boolean'>
    readonly progress: FieldRef<"VideoProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VideoProgress findUnique
   */
  export type VideoProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress findUniqueOrThrow
   */
  export type VideoProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress findFirst
   */
  export type VideoProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoProgresses.
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoProgresses.
     */
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * VideoProgress findFirstOrThrow
   */
  export type VideoProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoProgresses.
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoProgresses.
     */
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * VideoProgress findMany
   */
  export type VideoProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgresses to fetch.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoProgresses.
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * VideoProgress create
   */
  export type VideoProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoProgress.
     */
    data: XOR<VideoProgressCreateInput, VideoProgressUncheckedCreateInput>
  }

  /**
   * VideoProgress createMany
   */
  export type VideoProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoProgresses.
     */
    data: VideoProgressCreateManyInput | VideoProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoProgress createManyAndReturn
   */
  export type VideoProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * The data used to create many VideoProgresses.
     */
    data: VideoProgressCreateManyInput | VideoProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoProgress update
   */
  export type VideoProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoProgress.
     */
    data: XOR<VideoProgressUpdateInput, VideoProgressUncheckedUpdateInput>
    /**
     * Choose, which VideoProgress to update.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress updateMany
   */
  export type VideoProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoProgresses.
     */
    data: XOR<VideoProgressUpdateManyMutationInput, VideoProgressUncheckedUpdateManyInput>
    /**
     * Filter which VideoProgresses to update
     */
    where?: VideoProgressWhereInput
    /**
     * Limit how many VideoProgresses to update.
     */
    limit?: number
  }

  /**
   * VideoProgress updateManyAndReturn
   */
  export type VideoProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * The data used to update VideoProgresses.
     */
    data: XOR<VideoProgressUpdateManyMutationInput, VideoProgressUncheckedUpdateManyInput>
    /**
     * Filter which VideoProgresses to update
     */
    where?: VideoProgressWhereInput
    /**
     * Limit how many VideoProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoProgress upsert
   */
  export type VideoProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoProgress to update in case it exists.
     */
    where: VideoProgressWhereUniqueInput
    /**
     * In case the VideoProgress found by the `where` argument doesn't exist, create a new VideoProgress with this data.
     */
    create: XOR<VideoProgressCreateInput, VideoProgressUncheckedCreateInput>
    /**
     * In case the VideoProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoProgressUpdateInput, VideoProgressUncheckedUpdateInput>
  }

  /**
   * VideoProgress delete
   */
  export type VideoProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter which VideoProgress to delete.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress deleteMany
   */
  export type VideoProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoProgresses to delete
     */
    where?: VideoProgressWhereInput
    /**
     * Limit how many VideoProgresses to delete.
     */
    limit?: number
  }

  /**
   * VideoProgress without action
   */
  export type VideoProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
    concluded: boolean | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
    concluded: boolean | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    courseId: number
    studentId: number
    concluded: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    concluded?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    concluded?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    concluded?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    courseId: number
    studentId: number
    concluded: boolean
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    concluded?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    concluded?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    concluded?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    concluded?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "studentId" | "concluded", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      studentId: number
      concluded: boolean
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly courseId: FieldRef<"Enrollment", 'Int'>
    readonly studentId: FieldRef<"Enrollment", 'Int'>
    readonly concluded: FieldRef<"Enrollment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
    rating: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
    rating: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
    rating: number | null
    comment: string | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    studentId: number | null
    rating: number | null
    comment: string | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    courseId: number
    studentId: number
    rating: number
    comment: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    rating?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    rating?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    rating?: true
    comment?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    rating?: true
    comment?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    rating?: true
    comment?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    courseId: number
    studentId: number
    rating: number
    comment: string | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "studentId" | "rating" | "comment", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      studentId: number
      rating: number
      comment: string | null
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
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
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly courseId: FieldRef<"Rating", 'Int'>
    readonly studentId: FieldRef<"Rating", 'Int'>
    readonly rating: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
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
    type: 'type',
    name: 'name',
    cpf: 'cpf',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    categoryId: 'categoryId',
    teacherId: 'teacherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CourseCategoryScalarFieldEnum = (typeof CourseCategoryScalarFieldEnum)[keyof typeof CourseCategoryScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    courseId: 'courseId'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const ModuleProgressScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    moduleId: 'moduleId',
    finished: 'finished'
  };

  export type ModuleProgressScalarFieldEnum = (typeof ModuleProgressScalarFieldEnum)[keyof typeof ModuleProgressScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    url: 'url',
    duration: 'duration',
    moduleId: 'moduleId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const VideoProgressScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    videoId: 'videoId',
    finished: 'finished',
    progress: 'progress'
  };

  export type VideoProgressScalarFieldEnum = (typeof VideoProgressScalarFieldEnum)[keyof typeof VideoProgressScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    studentId: 'studentId',
    concluded: 'concluded'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    studentId: 'studentId',
    rating: 'rating',
    comment: 'comment'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


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
    type?: EnumTypeFilter<"User"> | $Enums.Type
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Courses?: CourseListRelationFilter
    ModuleProgress?: ModuleProgressListRelationFilter
    VideoProgress?: VideoProgressListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Rating?: RatingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
    Courses?: CourseOrderByRelationAggregateInput
    ModuleProgress?: ModuleProgressOrderByRelationAggregateInput
    VideoProgress?: VideoProgressOrderByRelationAggregateInput
    Enrollment?: EnrollmentOrderByRelationAggregateInput
    Rating?: RatingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    type?: EnumTypeFilter<"User"> | $Enums.Type
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Courses?: CourseListRelationFilter
    ModuleProgress?: ModuleProgressListRelationFilter
    VideoProgress?: VideoProgressListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Rating?: RatingListRelationFilter
  }, "id" | "cpf" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
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
    type?: EnumTypeWithAggregatesFilter<"User"> | $Enums.Type
    name?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    description?: StringFilter<"Course"> | string
    categoryId?: IntFilter<"Course"> | number
    teacherId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    category?: XOR<CourseCategoryScalarRelationFilter, CourseCategoryWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    Module?: ModuleListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Rating?: RatingListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CourseCategoryOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    Module?: ModuleOrderByRelationAggregateInput
    Enrollment?: EnrollmentOrderByRelationAggregateInput
    Rating?: RatingOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    description?: StringFilter<"Course"> | string
    categoryId?: IntFilter<"Course"> | number
    teacherId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    category?: XOR<CourseCategoryScalarRelationFilter, CourseCategoryWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    Module?: ModuleListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Rating?: RatingListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    name?: StringWithAggregatesFilter<"Course"> | string
    price?: IntWithAggregatesFilter<"Course"> | number
    description?: StringWithAggregatesFilter<"Course"> | string
    categoryId?: IntWithAggregatesFilter<"Course"> | number
    teacherId?: IntWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CourseCategoryWhereInput = {
    AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    OR?: CourseCategoryWhereInput[]
    NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    id?: IntFilter<"CourseCategory"> | number
    name?: StringFilter<"CourseCategory"> | string
    description?: StringFilter<"CourseCategory"> | string
    Courses?: CourseListRelationFilter
  }

  export type CourseCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    Courses?: CourseOrderByRelationAggregateInput
  }

  export type CourseCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    OR?: CourseCategoryWhereInput[]
    NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    name?: StringFilter<"CourseCategory"> | string
    description?: StringFilter<"CourseCategory"> | string
    Courses?: CourseListRelationFilter
  }, "id">

  export type CourseCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: CourseCategoryCountOrderByAggregateInput
    _avg?: CourseCategoryAvgOrderByAggregateInput
    _max?: CourseCategoryMaxOrderByAggregateInput
    _min?: CourseCategoryMinOrderByAggregateInput
    _sum?: CourseCategorySumOrderByAggregateInput
  }

  export type CourseCategoryScalarWhereWithAggregatesInput = {
    AND?: CourseCategoryScalarWhereWithAggregatesInput | CourseCategoryScalarWhereWithAggregatesInput[]
    OR?: CourseCategoryScalarWhereWithAggregatesInput[]
    NOT?: CourseCategoryScalarWhereWithAggregatesInput | CourseCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseCategory"> | number
    name?: StringWithAggregatesFilter<"CourseCategory"> | string
    description?: StringWithAggregatesFilter<"CourseCategory"> | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: IntFilter<"Module"> | number
    name?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    courseId?: IntFilter<"Module"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    ModuleProgress?: ModuleProgressListRelationFilter
    Video?: VideoListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    ModuleProgress?: ModuleProgressOrderByRelationAggregateInput
    Video?: VideoOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    name?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    courseId?: IntFilter<"Module"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    ModuleProgress?: ModuleProgressListRelationFilter
    Video?: VideoListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Module"> | number
    name?: StringWithAggregatesFilter<"Module"> | string
    description?: StringWithAggregatesFilter<"Module"> | string
    courseId?: IntWithAggregatesFilter<"Module"> | number
  }

  export type ModuleProgressWhereInput = {
    AND?: ModuleProgressWhereInput | ModuleProgressWhereInput[]
    OR?: ModuleProgressWhereInput[]
    NOT?: ModuleProgressWhereInput | ModuleProgressWhereInput[]
    id?: IntFilter<"ModuleProgress"> | number
    studentId?: IntFilter<"ModuleProgress"> | number
    moduleId?: IntFilter<"ModuleProgress"> | number
    finished?: BoolFilter<"ModuleProgress"> | boolean
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type ModuleProgressOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    finished?: SortOrder
    student?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type ModuleProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_moduleId?: ModuleProgressStudentIdModuleIdCompoundUniqueInput
    AND?: ModuleProgressWhereInput | ModuleProgressWhereInput[]
    OR?: ModuleProgressWhereInput[]
    NOT?: ModuleProgressWhereInput | ModuleProgressWhereInput[]
    studentId?: IntFilter<"ModuleProgress"> | number
    moduleId?: IntFilter<"ModuleProgress"> | number
    finished?: BoolFilter<"ModuleProgress"> | boolean
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "studentId_moduleId">

  export type ModuleProgressOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    finished?: SortOrder
    _count?: ModuleProgressCountOrderByAggregateInput
    _avg?: ModuleProgressAvgOrderByAggregateInput
    _max?: ModuleProgressMaxOrderByAggregateInput
    _min?: ModuleProgressMinOrderByAggregateInput
    _sum?: ModuleProgressSumOrderByAggregateInput
  }

  export type ModuleProgressScalarWhereWithAggregatesInput = {
    AND?: ModuleProgressScalarWhereWithAggregatesInput | ModuleProgressScalarWhereWithAggregatesInput[]
    OR?: ModuleProgressScalarWhereWithAggregatesInput[]
    NOT?: ModuleProgressScalarWhereWithAggregatesInput | ModuleProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModuleProgress"> | number
    studentId?: IntWithAggregatesFilter<"ModuleProgress"> | number
    moduleId?: IntWithAggregatesFilter<"ModuleProgress"> | number
    finished?: BoolWithAggregatesFilter<"ModuleProgress"> | boolean
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    name?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    duration?: IntFilter<"Video"> | number
    moduleId?: IntFilter<"Video"> | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    VideoProgress?: VideoProgressListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    moduleId?: SortOrder
    module?: ModuleOrderByWithRelationInput
    VideoProgress?: VideoProgressOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    name?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    duration?: IntFilter<"Video"> | number
    moduleId?: IntFilter<"Video"> | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    VideoProgress?: VideoProgressListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    moduleId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    name?: StringWithAggregatesFilter<"Video"> | string
    description?: StringWithAggregatesFilter<"Video"> | string
    url?: StringWithAggregatesFilter<"Video"> | string
    duration?: IntWithAggregatesFilter<"Video"> | number
    moduleId?: IntWithAggregatesFilter<"Video"> | number
  }

  export type VideoProgressWhereInput = {
    AND?: VideoProgressWhereInput | VideoProgressWhereInput[]
    OR?: VideoProgressWhereInput[]
    NOT?: VideoProgressWhereInput | VideoProgressWhereInput[]
    id?: IntFilter<"VideoProgress"> | number
    studentId?: IntFilter<"VideoProgress"> | number
    videoId?: IntFilter<"VideoProgress"> | number
    finished?: BoolFilter<"VideoProgress"> | boolean
    progress?: IntFilter<"VideoProgress"> | number
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type VideoProgressOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    videoId?: SortOrder
    finished?: SortOrder
    progress?: SortOrder
    student?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type VideoProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_videoId?: VideoProgressStudentIdVideoIdCompoundUniqueInput
    AND?: VideoProgressWhereInput | VideoProgressWhereInput[]
    OR?: VideoProgressWhereInput[]
    NOT?: VideoProgressWhereInput | VideoProgressWhereInput[]
    studentId?: IntFilter<"VideoProgress"> | number
    videoId?: IntFilter<"VideoProgress"> | number
    finished?: BoolFilter<"VideoProgress"> | boolean
    progress?: IntFilter<"VideoProgress"> | number
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "studentId_videoId">

  export type VideoProgressOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    videoId?: SortOrder
    finished?: SortOrder
    progress?: SortOrder
    _count?: VideoProgressCountOrderByAggregateInput
    _avg?: VideoProgressAvgOrderByAggregateInput
    _max?: VideoProgressMaxOrderByAggregateInput
    _min?: VideoProgressMinOrderByAggregateInput
    _sum?: VideoProgressSumOrderByAggregateInput
  }

  export type VideoProgressScalarWhereWithAggregatesInput = {
    AND?: VideoProgressScalarWhereWithAggregatesInput | VideoProgressScalarWhereWithAggregatesInput[]
    OR?: VideoProgressScalarWhereWithAggregatesInput[]
    NOT?: VideoProgressScalarWhereWithAggregatesInput | VideoProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VideoProgress"> | number
    studentId?: IntWithAggregatesFilter<"VideoProgress"> | number
    videoId?: IntWithAggregatesFilter<"VideoProgress"> | number
    finished?: BoolWithAggregatesFilter<"VideoProgress"> | boolean
    progress?: IntWithAggregatesFilter<"VideoProgress"> | number
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    courseId?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    concluded?: BoolFilter<"Enrollment"> | boolean
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    concluded?: SortOrder
    course?: CourseOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    courseId?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    concluded?: BoolFilter<"Enrollment"> | boolean
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    concluded?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    courseId?: IntWithAggregatesFilter<"Enrollment"> | number
    studentId?: IntWithAggregatesFilter<"Enrollment"> | number
    concluded?: BoolWithAggregatesFilter<"Enrollment"> | boolean
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    courseId?: IntFilter<"Rating"> | number
    studentId?: IntFilter<"Rating"> | number
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    course?: CourseOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    courseId?: IntFilter<"Rating"> | number
    studentId?: IntFilter<"Rating"> | number
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    courseId?: IntWithAggregatesFilter<"Rating"> | number
    studentId?: IntWithAggregatesFilter<"Rating"> | number
    rating?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
  }

  export type UserCreateInput = {
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Rating?: RatingCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Rating?: RatingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Rating?: RatingUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: UserCreateNestedOneWithoutCoursesInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
    Rating?: RatingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    description: string
    categoryId: number
    teacherId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    Rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: UserUpdateOneRequiredWithoutCoursesNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
    Rating?: RatingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    name: string
    price: number
    description: string
    categoryId: number
    teacherId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCategoryCreateInput = {
    name: string
    description: string
    Courses?: CourseCreateNestedManyWithoutCategoryInput
  }

  export type CourseCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    Courses?: CourseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CourseCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUpdateManyWithoutCategoryNestedInput
  }

  export type CourseCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CourseCategoryCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type CourseCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleCreateInput = {
    name: string
    description: string
    course: CourseCreateNestedOneWithoutModuleInput
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutModuleInput
    Video?: VideoCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    courseId: number
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutModuleInput
    Video?: VideoUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutModuleNestedInput
    ModuleProgress?: ModuleProgressUpdateManyWithoutModuleNestedInput
    Video?: VideoUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
    Video?: VideoUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: number
    name: string
    description: string
    courseId: number
  }

  export type ModuleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleProgressCreateInput = {
    finished?: boolean
    student: UserCreateNestedOneWithoutModuleProgressInput
    module: ModuleCreateNestedOneWithoutModuleProgressInput
  }

  export type ModuleProgressUncheckedCreateInput = {
    id?: number
    studentId: number
    moduleId: number
    finished?: boolean
  }

  export type ModuleProgressUpdateInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    student?: UserUpdateOneRequiredWithoutModuleProgressNestedInput
    module?: ModuleUpdateOneRequiredWithoutModuleProgressNestedInput
  }

  export type ModuleProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    moduleId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModuleProgressCreateManyInput = {
    id?: number
    studentId: number
    moduleId: number
    finished?: boolean
  }

  export type ModuleProgressUpdateManyMutationInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModuleProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    moduleId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoCreateInput = {
    name: string
    description: string
    url: string
    duration: number
    module: ModuleCreateNestedOneWithoutVideoInput
    VideoProgress?: VideoProgressCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    url: string
    duration: number
    moduleId: number
    VideoProgress?: VideoProgressUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutVideoNestedInput
    VideoProgress?: VideoProgressUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    moduleId?: IntFieldUpdateOperationsInput | number
    VideoProgress?: VideoProgressUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    name: string
    description: string
    url: string
    duration: number
    moduleId: number
  }

  export type VideoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    moduleId?: IntFieldUpdateOperationsInput | number
  }

  export type VideoProgressCreateInput = {
    finished?: boolean
    progress: number
    student: UserCreateNestedOneWithoutVideoProgressInput
    video: VideoCreateNestedOneWithoutVideoProgressInput
  }

  export type VideoProgressUncheckedCreateInput = {
    id?: number
    studentId: number
    videoId: number
    finished?: boolean
    progress: number
  }

  export type VideoProgressUpdateInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    student?: UserUpdateOneRequiredWithoutVideoProgressNestedInput
    video?: VideoUpdateOneRequiredWithoutVideoProgressNestedInput
  }

  export type VideoProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type VideoProgressCreateManyInput = {
    id?: number
    studentId: number
    videoId: number
    finished?: boolean
    progress: number
  }

  export type VideoProgressUpdateManyMutationInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type VideoProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateInput = {
    concluded?: boolean
    course: CourseCreateNestedOneWithoutEnrollmentInput
    student: UserCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    courseId: number
    studentId: number
    concluded?: boolean
  }

  export type EnrollmentUpdateInput = {
    concluded?: BoolFieldUpdateOperationsInput | boolean
    course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
    student?: UserUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    concluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    courseId: number
    studentId: number
    concluded?: boolean
  }

  export type EnrollmentUpdateManyMutationInput = {
    concluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    concluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingCreateInput = {
    rating: number
    comment?: string | null
    course: CourseCreateNestedOneWithoutRatingInput
    student: UserCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    courseId: number
    studentId: number
    rating: number
    comment?: string | null
  }

  export type RatingUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutRatingNestedInput
    student?: UserUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingCreateManyInput = {
    id?: number
    courseId: number
    studentId: number
    rating: number
    comment?: string | null
  }

  export type RatingUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
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

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type ModuleProgressListRelationFilter = {
    every?: ModuleProgressWhereInput
    some?: ModuleProgressWhereInput
    none?: ModuleProgressWhereInput
  }

  export type VideoProgressListRelationFilter = {
    every?: VideoProgressWhereInput
    some?: VideoProgressWhereInput
    none?: VideoProgressWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
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

  export type CourseCategoryScalarRelationFilter = {
    is?: CourseCategoryWhereInput
    isNot?: CourseCategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
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

  export type CourseCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CourseCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CourseCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CourseCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type ModuleProgressStudentIdModuleIdCompoundUniqueInput = {
    studentId: number
    moduleId: number
  }

  export type ModuleProgressCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    finished?: SortOrder
  }

  export type ModuleProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
  }

  export type ModuleProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    finished?: SortOrder
  }

  export type ModuleProgressMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    finished?: SortOrder
  }

  export type ModuleProgressSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type VideoProgressStudentIdVideoIdCompoundUniqueInput = {
    studentId: number
    videoId: number
  }

  export type VideoProgressCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    videoId?: SortOrder
    finished?: SortOrder
    progress?: SortOrder
  }

  export type VideoProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    videoId?: SortOrder
    progress?: SortOrder
  }

  export type VideoProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    videoId?: SortOrder
    finished?: SortOrder
    progress?: SortOrder
  }

  export type VideoProgressMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    videoId?: SortOrder
    finished?: SortOrder
    progress?: SortOrder
  }

  export type VideoProgressSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    videoId?: SortOrder
    progress?: SortOrder
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    concluded?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    concluded?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    concluded?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
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

  export type CourseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type ModuleProgressCreateNestedManyWithoutStudentInput = {
    create?: XOR<ModuleProgressCreateWithoutStudentInput, ModuleProgressUncheckedCreateWithoutStudentInput> | ModuleProgressCreateWithoutStudentInput[] | ModuleProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutStudentInput | ModuleProgressCreateOrConnectWithoutStudentInput[]
    createMany?: ModuleProgressCreateManyStudentInputEnvelope
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
  }

  export type VideoProgressCreateNestedManyWithoutStudentInput = {
    create?: XOR<VideoProgressCreateWithoutStudentInput, VideoProgressUncheckedCreateWithoutStudentInput> | VideoProgressCreateWithoutStudentInput[] | VideoProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutStudentInput | VideoProgressCreateOrConnectWithoutStudentInput[]
    createMany?: VideoProgressCreateManyStudentInputEnvelope
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutStudentInput = {
    create?: XOR<RatingCreateWithoutStudentInput, RatingUncheckedCreateWithoutStudentInput> | RatingCreateWithoutStudentInput[] | RatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStudentInput | RatingCreateOrConnectWithoutStudentInput[]
    createMany?: RatingCreateManyStudentInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type ModuleProgressUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ModuleProgressCreateWithoutStudentInput, ModuleProgressUncheckedCreateWithoutStudentInput> | ModuleProgressCreateWithoutStudentInput[] | ModuleProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutStudentInput | ModuleProgressCreateOrConnectWithoutStudentInput[]
    createMany?: ModuleProgressCreateManyStudentInputEnvelope
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
  }

  export type VideoProgressUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<VideoProgressCreateWithoutStudentInput, VideoProgressUncheckedCreateWithoutStudentInput> | VideoProgressCreateWithoutStudentInput[] | VideoProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutStudentInput | VideoProgressCreateOrConnectWithoutStudentInput[]
    createMany?: VideoProgressCreateManyStudentInputEnvelope
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<RatingCreateWithoutStudentInput, RatingUncheckedCreateWithoutStudentInput> | RatingCreateWithoutStudentInput[] | RatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStudentInput | RatingCreateOrConnectWithoutStudentInput[]
    createMany?: RatingCreateManyStudentInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CourseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type ModuleProgressUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ModuleProgressCreateWithoutStudentInput, ModuleProgressUncheckedCreateWithoutStudentInput> | ModuleProgressCreateWithoutStudentInput[] | ModuleProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutStudentInput | ModuleProgressCreateOrConnectWithoutStudentInput[]
    upsert?: ModuleProgressUpsertWithWhereUniqueWithoutStudentInput | ModuleProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ModuleProgressCreateManyStudentInputEnvelope
    set?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    disconnect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    delete?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    update?: ModuleProgressUpdateWithWhereUniqueWithoutStudentInput | ModuleProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ModuleProgressUpdateManyWithWhereWithoutStudentInput | ModuleProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ModuleProgressScalarWhereInput | ModuleProgressScalarWhereInput[]
  }

  export type VideoProgressUpdateManyWithoutStudentNestedInput = {
    create?: XOR<VideoProgressCreateWithoutStudentInput, VideoProgressUncheckedCreateWithoutStudentInput> | VideoProgressCreateWithoutStudentInput[] | VideoProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutStudentInput | VideoProgressCreateOrConnectWithoutStudentInput[]
    upsert?: VideoProgressUpsertWithWhereUniqueWithoutStudentInput | VideoProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: VideoProgressCreateManyStudentInputEnvelope
    set?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    disconnect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    delete?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    update?: VideoProgressUpdateWithWhereUniqueWithoutStudentInput | VideoProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: VideoProgressUpdateManyWithWhereWithoutStudentInput | VideoProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RatingCreateWithoutStudentInput, RatingUncheckedCreateWithoutStudentInput> | RatingCreateWithoutStudentInput[] | RatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStudentInput | RatingCreateOrConnectWithoutStudentInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutStudentInput | RatingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RatingCreateManyStudentInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutStudentInput | RatingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutStudentInput | RatingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type ModuleProgressUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ModuleProgressCreateWithoutStudentInput, ModuleProgressUncheckedCreateWithoutStudentInput> | ModuleProgressCreateWithoutStudentInput[] | ModuleProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutStudentInput | ModuleProgressCreateOrConnectWithoutStudentInput[]
    upsert?: ModuleProgressUpsertWithWhereUniqueWithoutStudentInput | ModuleProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ModuleProgressCreateManyStudentInputEnvelope
    set?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    disconnect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    delete?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    update?: ModuleProgressUpdateWithWhereUniqueWithoutStudentInput | ModuleProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ModuleProgressUpdateManyWithWhereWithoutStudentInput | ModuleProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ModuleProgressScalarWhereInput | ModuleProgressScalarWhereInput[]
  }

  export type VideoProgressUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<VideoProgressCreateWithoutStudentInput, VideoProgressUncheckedCreateWithoutStudentInput> | VideoProgressCreateWithoutStudentInput[] | VideoProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutStudentInput | VideoProgressCreateOrConnectWithoutStudentInput[]
    upsert?: VideoProgressUpsertWithWhereUniqueWithoutStudentInput | VideoProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: VideoProgressCreateManyStudentInputEnvelope
    set?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    disconnect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    delete?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    update?: VideoProgressUpdateWithWhereUniqueWithoutStudentInput | VideoProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: VideoProgressUpdateManyWithWhereWithoutStudentInput | VideoProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RatingCreateWithoutStudentInput, RatingUncheckedCreateWithoutStudentInput> | RatingCreateWithoutStudentInput[] | RatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStudentInput | RatingCreateOrConnectWithoutStudentInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutStudentInput | RatingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RatingCreateManyStudentInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutStudentInput | RatingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutStudentInput | RatingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CourseCategoryCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput
    connect?: CourseCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput
    upsert?: CourseCategoryUpsertWithoutCoursesInput
    connect?: CourseCategoryWhereUniqueInput
    update?: XOR<XOR<CourseCategoryUpdateToOneWithWhereWithoutCoursesInput, CourseCategoryUpdateWithoutCoursesInput>, CourseCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type ModuleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutCourseInput | RatingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutCourseInput | RatingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutCourseInput | RatingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutCourseInput | RatingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutCourseInput | RatingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutCourseInput | RatingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutModuleInput = {
    create?: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModuleInput
    connect?: CourseWhereUniqueInput
  }

  export type ModuleProgressCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleProgressCreateWithoutModuleInput, ModuleProgressUncheckedCreateWithoutModuleInput> | ModuleProgressCreateWithoutModuleInput[] | ModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutModuleInput | ModuleProgressCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleProgressCreateManyModuleInputEnvelope
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutModuleInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type ModuleProgressUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleProgressCreateWithoutModuleInput, ModuleProgressUncheckedCreateWithoutModuleInput> | ModuleProgressCreateWithoutModuleInput[] | ModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutModuleInput | ModuleProgressCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleProgressCreateManyModuleInputEnvelope
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutModuleNestedInput = {
    create?: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModuleInput
    upsert?: CourseUpsertWithoutModuleInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutModuleInput, CourseUpdateWithoutModuleInput>, CourseUncheckedUpdateWithoutModuleInput>
  }

  export type ModuleProgressUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleProgressCreateWithoutModuleInput, ModuleProgressUncheckedCreateWithoutModuleInput> | ModuleProgressCreateWithoutModuleInput[] | ModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutModuleInput | ModuleProgressCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleProgressUpsertWithWhereUniqueWithoutModuleInput | ModuleProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleProgressCreateManyModuleInputEnvelope
    set?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    disconnect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    delete?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    update?: ModuleProgressUpdateWithWhereUniqueWithoutModuleInput | ModuleProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleProgressUpdateManyWithWhereWithoutModuleInput | ModuleProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleProgressScalarWhereInput | ModuleProgressScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutModuleNestedInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuleInput | VideoUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuleInput | VideoUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuleInput | VideoUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ModuleProgressUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleProgressCreateWithoutModuleInput, ModuleProgressUncheckedCreateWithoutModuleInput> | ModuleProgressCreateWithoutModuleInput[] | ModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProgressCreateOrConnectWithoutModuleInput | ModuleProgressCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleProgressUpsertWithWhereUniqueWithoutModuleInput | ModuleProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleProgressCreateManyModuleInputEnvelope
    set?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    disconnect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    delete?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    connect?: ModuleProgressWhereUniqueInput | ModuleProgressWhereUniqueInput[]
    update?: ModuleProgressUpdateWithWhereUniqueWithoutModuleInput | ModuleProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleProgressUpdateManyWithWhereWithoutModuleInput | ModuleProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleProgressScalarWhereInput | ModuleProgressScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuleInput | VideoUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuleInput | VideoUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuleInput | VideoUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutModuleProgressInput = {
    create?: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleProgressInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutModuleProgressInput = {
    create?: XOR<ModuleCreateWithoutModuleProgressInput, ModuleUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleProgressInput
    connect?: ModuleWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutModuleProgressNestedInput = {
    create?: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleProgressInput
    upsert?: UserUpsertWithoutModuleProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModuleProgressInput, UserUpdateWithoutModuleProgressInput>, UserUncheckedUpdateWithoutModuleProgressInput>
  }

  export type ModuleUpdateOneRequiredWithoutModuleProgressNestedInput = {
    create?: XOR<ModuleCreateWithoutModuleProgressInput, ModuleUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleProgressInput
    upsert?: ModuleUpsertWithoutModuleProgressInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutModuleProgressInput, ModuleUpdateWithoutModuleProgressInput>, ModuleUncheckedUpdateWithoutModuleProgressInput>
  }

  export type ModuleCreateNestedOneWithoutVideoInput = {
    create?: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutVideoInput
    connect?: ModuleWhereUniqueInput
  }

  export type VideoProgressCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoProgressCreateWithoutVideoInput, VideoProgressUncheckedCreateWithoutVideoInput> | VideoProgressCreateWithoutVideoInput[] | VideoProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutVideoInput | VideoProgressCreateOrConnectWithoutVideoInput[]
    createMany?: VideoProgressCreateManyVideoInputEnvelope
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
  }

  export type VideoProgressUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoProgressCreateWithoutVideoInput, VideoProgressUncheckedCreateWithoutVideoInput> | VideoProgressCreateWithoutVideoInput[] | VideoProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutVideoInput | VideoProgressCreateOrConnectWithoutVideoInput[]
    createMany?: VideoProgressCreateManyVideoInputEnvelope
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
  }

  export type ModuleUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutVideoInput
    upsert?: ModuleUpsertWithoutVideoInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutVideoInput, ModuleUpdateWithoutVideoInput>, ModuleUncheckedUpdateWithoutVideoInput>
  }

  export type VideoProgressUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoProgressCreateWithoutVideoInput, VideoProgressUncheckedCreateWithoutVideoInput> | VideoProgressCreateWithoutVideoInput[] | VideoProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutVideoInput | VideoProgressCreateOrConnectWithoutVideoInput[]
    upsert?: VideoProgressUpsertWithWhereUniqueWithoutVideoInput | VideoProgressUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoProgressCreateManyVideoInputEnvelope
    set?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    disconnect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    delete?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    update?: VideoProgressUpdateWithWhereUniqueWithoutVideoInput | VideoProgressUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoProgressUpdateManyWithWhereWithoutVideoInput | VideoProgressUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
  }

  export type VideoProgressUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoProgressCreateWithoutVideoInput, VideoProgressUncheckedCreateWithoutVideoInput> | VideoProgressCreateWithoutVideoInput[] | VideoProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutVideoInput | VideoProgressCreateOrConnectWithoutVideoInput[]
    upsert?: VideoProgressUpsertWithWhereUniqueWithoutVideoInput | VideoProgressUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoProgressCreateManyVideoInputEnvelope
    set?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    disconnect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    delete?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    update?: VideoProgressUpdateWithWhereUniqueWithoutVideoInput | VideoProgressUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoProgressUpdateManyWithWhereWithoutVideoInput | VideoProgressUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVideoProgressInput = {
    create?: XOR<UserCreateWithoutVideoProgressInput, UserUncheckedCreateWithoutVideoProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoProgressInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutVideoProgressInput = {
    create?: XOR<VideoCreateWithoutVideoProgressInput, VideoUncheckedCreateWithoutVideoProgressInput>
    connectOrCreate?: VideoCreateOrConnectWithoutVideoProgressInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVideoProgressNestedInput = {
    create?: XOR<UserCreateWithoutVideoProgressInput, UserUncheckedCreateWithoutVideoProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoProgressInput
    upsert?: UserUpsertWithoutVideoProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideoProgressInput, UserUpdateWithoutVideoProgressInput>, UserUncheckedUpdateWithoutVideoProgressInput>
  }

  export type VideoUpdateOneRequiredWithoutVideoProgressNestedInput = {
    create?: XOR<VideoCreateWithoutVideoProgressInput, VideoUncheckedCreateWithoutVideoProgressInput>
    connectOrCreate?: VideoCreateOrConnectWithoutVideoProgressInput
    upsert?: VideoUpsertWithoutVideoProgressInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutVideoProgressInput, VideoUpdateWithoutVideoProgressInput>, VideoUncheckedUpdateWithoutVideoProgressInput>
  }

  export type CourseCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentInput
    connect?: UserWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentInput
    upsert?: CourseUpsertWithoutEnrollmentInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentInput, CourseUpdateWithoutEnrollmentInput>, CourseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type UserUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentInput
    upsert?: UserUpsertWithoutEnrollmentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentInput, UserUpdateWithoutEnrollmentInput>, UserUncheckedUpdateWithoutEnrollmentInput>
  }

  export type CourseCreateNestedOneWithoutRatingInput = {
    create?: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingInput = {
    create?: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CourseUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingInput
    upsert?: CourseUpsertWithoutRatingInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRatingInput, CourseUpdateWithoutRatingInput>, CourseUncheckedUpdateWithoutRatingInput>
  }

  export type UserUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingInput
    upsert?: UserUpsertWithoutRatingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingInput, UserUpdateWithoutRatingInput>, UserUncheckedUpdateWithoutRatingInput>
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

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
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

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
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

  export type CourseCreateWithoutTeacherInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
    Rating?: RatingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    price: number
    description: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    Rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseCreateManyTeacherInputEnvelope = {
    data: CourseCreateManyTeacherInput | CourseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ModuleProgressCreateWithoutStudentInput = {
    finished?: boolean
    module: ModuleCreateNestedOneWithoutModuleProgressInput
  }

  export type ModuleProgressUncheckedCreateWithoutStudentInput = {
    id?: number
    moduleId: number
    finished?: boolean
  }

  export type ModuleProgressCreateOrConnectWithoutStudentInput = {
    where: ModuleProgressWhereUniqueInput
    create: XOR<ModuleProgressCreateWithoutStudentInput, ModuleProgressUncheckedCreateWithoutStudentInput>
  }

  export type ModuleProgressCreateManyStudentInputEnvelope = {
    data: ModuleProgressCreateManyStudentInput | ModuleProgressCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type VideoProgressCreateWithoutStudentInput = {
    finished?: boolean
    progress: number
    video: VideoCreateNestedOneWithoutVideoProgressInput
  }

  export type VideoProgressUncheckedCreateWithoutStudentInput = {
    id?: number
    videoId: number
    finished?: boolean
    progress: number
  }

  export type VideoProgressCreateOrConnectWithoutStudentInput = {
    where: VideoProgressWhereUniqueInput
    create: XOR<VideoProgressCreateWithoutStudentInput, VideoProgressUncheckedCreateWithoutStudentInput>
  }

  export type VideoProgressCreateManyStudentInputEnvelope = {
    data: VideoProgressCreateManyStudentInput | VideoProgressCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentInput = {
    concluded?: boolean
    course: CourseCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: number
    courseId: number
    concluded?: boolean
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutStudentInput = {
    rating: number
    comment?: string | null
    course: CourseCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutStudentInput = {
    id?: number
    courseId: number
    rating: number
    comment?: string | null
  }

  export type RatingCreateOrConnectWithoutStudentInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutStudentInput, RatingUncheckedCreateWithoutStudentInput>
  }

  export type RatingCreateManyStudentInputEnvelope = {
    data: RatingCreateManyStudentInput | RatingCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
  }

  export type CourseUpdateManyWithWhereWithoutTeacherInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    description?: StringFilter<"Course"> | string
    categoryId?: IntFilter<"Course"> | number
    teacherId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type ModuleProgressUpsertWithWhereUniqueWithoutStudentInput = {
    where: ModuleProgressWhereUniqueInput
    update: XOR<ModuleProgressUpdateWithoutStudentInput, ModuleProgressUncheckedUpdateWithoutStudentInput>
    create: XOR<ModuleProgressCreateWithoutStudentInput, ModuleProgressUncheckedCreateWithoutStudentInput>
  }

  export type ModuleProgressUpdateWithWhereUniqueWithoutStudentInput = {
    where: ModuleProgressWhereUniqueInput
    data: XOR<ModuleProgressUpdateWithoutStudentInput, ModuleProgressUncheckedUpdateWithoutStudentInput>
  }

  export type ModuleProgressUpdateManyWithWhereWithoutStudentInput = {
    where: ModuleProgressScalarWhereInput
    data: XOR<ModuleProgressUpdateManyMutationInput, ModuleProgressUncheckedUpdateManyWithoutStudentInput>
  }

  export type ModuleProgressScalarWhereInput = {
    AND?: ModuleProgressScalarWhereInput | ModuleProgressScalarWhereInput[]
    OR?: ModuleProgressScalarWhereInput[]
    NOT?: ModuleProgressScalarWhereInput | ModuleProgressScalarWhereInput[]
    id?: IntFilter<"ModuleProgress"> | number
    studentId?: IntFilter<"ModuleProgress"> | number
    moduleId?: IntFilter<"ModuleProgress"> | number
    finished?: BoolFilter<"ModuleProgress"> | boolean
  }

  export type VideoProgressUpsertWithWhereUniqueWithoutStudentInput = {
    where: VideoProgressWhereUniqueInput
    update: XOR<VideoProgressUpdateWithoutStudentInput, VideoProgressUncheckedUpdateWithoutStudentInput>
    create: XOR<VideoProgressCreateWithoutStudentInput, VideoProgressUncheckedCreateWithoutStudentInput>
  }

  export type VideoProgressUpdateWithWhereUniqueWithoutStudentInput = {
    where: VideoProgressWhereUniqueInput
    data: XOR<VideoProgressUpdateWithoutStudentInput, VideoProgressUncheckedUpdateWithoutStudentInput>
  }

  export type VideoProgressUpdateManyWithWhereWithoutStudentInput = {
    where: VideoProgressScalarWhereInput
    data: XOR<VideoProgressUpdateManyMutationInput, VideoProgressUncheckedUpdateManyWithoutStudentInput>
  }

  export type VideoProgressScalarWhereInput = {
    AND?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
    OR?: VideoProgressScalarWhereInput[]
    NOT?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
    id?: IntFilter<"VideoProgress"> | number
    studentId?: IntFilter<"VideoProgress"> | number
    videoId?: IntFilter<"VideoProgress"> | number
    finished?: BoolFilter<"VideoProgress"> | boolean
    progress?: IntFilter<"VideoProgress"> | number
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    courseId?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    concluded?: BoolFilter<"Enrollment"> | boolean
  }

  export type RatingUpsertWithWhereUniqueWithoutStudentInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutStudentInput, RatingUncheckedUpdateWithoutStudentInput>
    create: XOR<RatingCreateWithoutStudentInput, RatingUncheckedCreateWithoutStudentInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutStudentInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutStudentInput, RatingUncheckedUpdateWithoutStudentInput>
  }

  export type RatingUpdateManyWithWhereWithoutStudentInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutStudentInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: IntFilter<"Rating"> | number
    courseId?: IntFilter<"Rating"> | number
    studentId?: IntFilter<"Rating"> | number
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
  }

  export type CourseCategoryCreateWithoutCoursesInput = {
    name: string
    description: string
  }

  export type CourseCategoryUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    description: string
  }

  export type CourseCategoryCreateOrConnectWithoutCoursesInput = {
    where: CourseCategoryWhereUniqueInput
    create: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
  }

  export type UserCreateWithoutCoursesInput = {
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Rating?: RatingCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: number
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Rating?: RatingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type ModuleCreateWithoutCourseInput = {
    name: string
    description: string
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutModuleInput
    Video?: VideoCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutCourseInput = {
    id?: number
    name: string
    description: string
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutModuleInput
    Video?: VideoUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleCreateManyCourseInputEnvelope = {
    data: ModuleCreateManyCourseInput | ModuleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutCourseInput = {
    concluded?: boolean
    student: UserCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: number
    studentId: number
    concluded?: boolean
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutCourseInput = {
    rating: number
    comment?: string | null
    student: UserCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutCourseInput = {
    id?: number
    studentId: number
    rating: number
    comment?: string | null
  }

  export type RatingCreateOrConnectWithoutCourseInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput>
  }

  export type RatingCreateManyCourseInputEnvelope = {
    data: RatingCreateManyCourseInput | RatingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseCategoryUpsertWithoutCoursesInput = {
    update: XOR<CourseCategoryUpdateWithoutCoursesInput, CourseCategoryUncheckedUpdateWithoutCoursesInput>
    create: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    where?: CourseCategoryWhereInput
  }

  export type CourseCategoryUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CourseCategoryWhereInput
    data: XOR<CourseCategoryUpdateWithoutCoursesInput, CourseCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseCategoryUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCategoryUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ModuleProgress?: ModuleProgressUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Rating?: RatingUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ModuleUpsertWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
  }

  export type ModuleUpdateManyWithWhereWithoutCourseInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutCourseInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: IntFilter<"Module"> | number
    name?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    courseId?: IntFilter<"Module"> | number
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutCourseInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutCourseInput, RatingUncheckedUpdateWithoutCourseInput>
    create: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutCourseInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutCourseInput, RatingUncheckedUpdateWithoutCourseInput>
  }

  export type RatingUpdateManyWithWhereWithoutCourseInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutCategoryInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutCoursesInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
    Rating?: RatingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    price: number
    description: string
    teacherId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    Rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseCreateManyCategoryInputEnvelope = {
    data: CourseCreateManyCategoryInput | CourseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
  }

  export type CourseUpdateManyWithWhereWithoutCategoryInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CourseCreateWithoutModuleInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: UserCreateNestedOneWithoutCoursesInput
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
    Rating?: RatingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutModuleInput = {
    id?: number
    name: string
    price: number
    description: string
    categoryId: number
    teacherId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    Rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutModuleInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
  }

  export type ModuleProgressCreateWithoutModuleInput = {
    finished?: boolean
    student: UserCreateNestedOneWithoutModuleProgressInput
  }

  export type ModuleProgressUncheckedCreateWithoutModuleInput = {
    id?: number
    studentId: number
    finished?: boolean
  }

  export type ModuleProgressCreateOrConnectWithoutModuleInput = {
    where: ModuleProgressWhereUniqueInput
    create: XOR<ModuleProgressCreateWithoutModuleInput, ModuleProgressUncheckedCreateWithoutModuleInput>
  }

  export type ModuleProgressCreateManyModuleInputEnvelope = {
    data: ModuleProgressCreateManyModuleInput | ModuleProgressCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutModuleInput = {
    name: string
    description: string
    url: string
    duration: number
    VideoProgress?: VideoProgressCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutModuleInput = {
    id?: number
    name: string
    description: string
    url: string
    duration: number
    VideoProgress?: VideoProgressUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutModuleInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput>
  }

  export type VideoCreateManyModuleInputEnvelope = {
    data: VideoCreateManyModuleInput | VideoCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutModuleInput = {
    update: XOR<CourseUpdateWithoutModuleInput, CourseUncheckedUpdateWithoutModuleInput>
    create: XOR<CourseCreateWithoutModuleInput, CourseUncheckedCreateWithoutModuleInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutModuleInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutModuleInput, CourseUncheckedUpdateWithoutModuleInput>
  }

  export type CourseUpdateWithoutModuleInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: UserUpdateOneRequiredWithoutCoursesNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
    Rating?: RatingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type ModuleProgressUpsertWithWhereUniqueWithoutModuleInput = {
    where: ModuleProgressWhereUniqueInput
    update: XOR<ModuleProgressUpdateWithoutModuleInput, ModuleProgressUncheckedUpdateWithoutModuleInput>
    create: XOR<ModuleProgressCreateWithoutModuleInput, ModuleProgressUncheckedCreateWithoutModuleInput>
  }

  export type ModuleProgressUpdateWithWhereUniqueWithoutModuleInput = {
    where: ModuleProgressWhereUniqueInput
    data: XOR<ModuleProgressUpdateWithoutModuleInput, ModuleProgressUncheckedUpdateWithoutModuleInput>
  }

  export type ModuleProgressUpdateManyWithWhereWithoutModuleInput = {
    where: ModuleProgressScalarWhereInput
    data: XOR<ModuleProgressUpdateManyMutationInput, ModuleProgressUncheckedUpdateManyWithoutModuleInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutModuleInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutModuleInput, VideoUncheckedUpdateWithoutModuleInput>
    create: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutModuleInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutModuleInput, VideoUncheckedUpdateWithoutModuleInput>
  }

  export type VideoUpdateManyWithWhereWithoutModuleInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutModuleInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    name?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    duration?: IntFilter<"Video"> | number
    moduleId?: IntFilter<"Video"> | number
  }

  export type UserCreateWithoutModuleProgressInput = {
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseCreateNestedManyWithoutTeacherInput
    VideoProgress?: VideoProgressCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Rating?: RatingCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutModuleProgressInput = {
    id?: number
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    VideoProgress?: VideoProgressUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Rating?: RatingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutModuleProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
  }

  export type ModuleCreateWithoutModuleProgressInput = {
    name: string
    description: string
    course: CourseCreateNestedOneWithoutModuleInput
    Video?: VideoCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutModuleProgressInput = {
    id?: number
    name: string
    description: string
    courseId: number
    Video?: VideoUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutModuleProgressInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutModuleProgressInput, ModuleUncheckedCreateWithoutModuleProgressInput>
  }

  export type UserUpsertWithoutModuleProgressInput = {
    update: XOR<UserUpdateWithoutModuleProgressInput, UserUncheckedUpdateWithoutModuleProgressInput>
    create: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModuleProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModuleProgressInput, UserUncheckedUpdateWithoutModuleProgressInput>
  }

  export type UserUpdateWithoutModuleProgressInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUpdateManyWithoutTeacherNestedInput
    VideoProgress?: VideoProgressUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Rating?: RatingUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutModuleProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    VideoProgress?: VideoProgressUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ModuleUpsertWithoutModuleProgressInput = {
    update: XOR<ModuleUpdateWithoutModuleProgressInput, ModuleUncheckedUpdateWithoutModuleProgressInput>
    create: XOR<ModuleCreateWithoutModuleProgressInput, ModuleUncheckedCreateWithoutModuleProgressInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutModuleProgressInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutModuleProgressInput, ModuleUncheckedUpdateWithoutModuleProgressInput>
  }

  export type ModuleUpdateWithoutModuleProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutModuleNestedInput
    Video?: VideoUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutModuleProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    Video?: VideoUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateWithoutVideoInput = {
    name: string
    description: string
    course: CourseCreateNestedOneWithoutModuleInput
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutVideoInput = {
    id?: number
    name: string
    description: string
    courseId: number
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutVideoInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
  }

  export type VideoProgressCreateWithoutVideoInput = {
    finished?: boolean
    progress: number
    student: UserCreateNestedOneWithoutVideoProgressInput
  }

  export type VideoProgressUncheckedCreateWithoutVideoInput = {
    id?: number
    studentId: number
    finished?: boolean
    progress: number
  }

  export type VideoProgressCreateOrConnectWithoutVideoInput = {
    where: VideoProgressWhereUniqueInput
    create: XOR<VideoProgressCreateWithoutVideoInput, VideoProgressUncheckedCreateWithoutVideoInput>
  }

  export type VideoProgressCreateManyVideoInputEnvelope = {
    data: VideoProgressCreateManyVideoInput | VideoProgressCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutVideoInput = {
    update: XOR<ModuleUpdateWithoutVideoInput, ModuleUncheckedUpdateWithoutVideoInput>
    create: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutVideoInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutVideoInput, ModuleUncheckedUpdateWithoutVideoInput>
  }

  export type ModuleUpdateWithoutVideoInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutModuleNestedInput
    ModuleProgress?: ModuleProgressUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type VideoProgressUpsertWithWhereUniqueWithoutVideoInput = {
    where: VideoProgressWhereUniqueInput
    update: XOR<VideoProgressUpdateWithoutVideoInput, VideoProgressUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoProgressCreateWithoutVideoInput, VideoProgressUncheckedCreateWithoutVideoInput>
  }

  export type VideoProgressUpdateWithWhereUniqueWithoutVideoInput = {
    where: VideoProgressWhereUniqueInput
    data: XOR<VideoProgressUpdateWithoutVideoInput, VideoProgressUncheckedUpdateWithoutVideoInput>
  }

  export type VideoProgressUpdateManyWithWhereWithoutVideoInput = {
    where: VideoProgressScalarWhereInput
    data: XOR<VideoProgressUpdateManyMutationInput, VideoProgressUncheckedUpdateManyWithoutVideoInput>
  }

  export type UserCreateWithoutVideoProgressInput = {
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Rating?: RatingCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutVideoProgressInput = {
    id?: number
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Rating?: RatingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutVideoProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideoProgressInput, UserUncheckedCreateWithoutVideoProgressInput>
  }

  export type VideoCreateWithoutVideoProgressInput = {
    name: string
    description: string
    url: string
    duration: number
    module: ModuleCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutVideoProgressInput = {
    id?: number
    name: string
    description: string
    url: string
    duration: number
    moduleId: number
  }

  export type VideoCreateOrConnectWithoutVideoProgressInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutVideoProgressInput, VideoUncheckedCreateWithoutVideoProgressInput>
  }

  export type UserUpsertWithoutVideoProgressInput = {
    update: XOR<UserUpdateWithoutVideoProgressInput, UserUncheckedUpdateWithoutVideoProgressInput>
    create: XOR<UserCreateWithoutVideoProgressInput, UserUncheckedCreateWithoutVideoProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideoProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideoProgressInput, UserUncheckedUpdateWithoutVideoProgressInput>
  }

  export type UserUpdateWithoutVideoProgressInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Rating?: RatingUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutVideoProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type VideoUpsertWithoutVideoProgressInput = {
    update: XOR<VideoUpdateWithoutVideoProgressInput, VideoUncheckedUpdateWithoutVideoProgressInput>
    create: XOR<VideoCreateWithoutVideoProgressInput, VideoUncheckedCreateWithoutVideoProgressInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutVideoProgressInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutVideoProgressInput, VideoUncheckedUpdateWithoutVideoProgressInput>
  }

  export type VideoUpdateWithoutVideoProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutVideoProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    moduleId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateWithoutEnrollmentInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: UserCreateNestedOneWithoutCoursesInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
    Rating?: RatingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    name: string
    price: number
    description: string
    categoryId: number
    teacherId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    Rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
  }

  export type UserCreateWithoutEnrollmentInput = {
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressCreateNestedManyWithoutStudentInput
    Rating?: RatingCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressUncheckedCreateNestedManyWithoutStudentInput
    Rating?: RatingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutEnrollmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
  }

  export type CourseUpsertWithoutEnrollmentInput = {
    update: XOR<CourseUpdateWithoutEnrollmentInput, CourseUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentInput, CourseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type CourseUpdateWithoutEnrollmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: UserUpdateOneRequiredWithoutCoursesNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
    Rating?: RatingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutEnrollmentInput = {
    update: XOR<UserUpdateWithoutEnrollmentInput, UserUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentInput, UserUncheckedUpdateWithoutEnrollmentInput>
  }

  export type UserUpdateWithoutEnrollmentInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUpdateManyWithoutStudentNestedInput
    Rating?: RatingUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUncheckedUpdateManyWithoutStudentNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseCreateWithoutRatingInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: UserCreateNestedOneWithoutCoursesInput
    Module?: ModuleCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRatingInput = {
    id?: number
    name: string
    price: number
    description: string
    categoryId: number
    teacherId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Module?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRatingInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
  }

  export type UserCreateWithoutRatingInput = {
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutRatingInput = {
    id?: number
    type?: $Enums.Type
    name: string
    cpf: string
    email: string
    password: string
    Courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    ModuleProgress?: ModuleProgressUncheckedCreateNestedManyWithoutStudentInput
    VideoProgress?: VideoProgressUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutRatingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
  }

  export type CourseUpsertWithoutRatingInput = {
    update: XOR<CourseUpdateWithoutRatingInput, CourseUncheckedUpdateWithoutRatingInput>
    create: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRatingInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRatingInput, CourseUncheckedUpdateWithoutRatingInput>
  }

  export type CourseUpdateWithoutRatingInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: UserUpdateOneRequiredWithoutCoursesNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRatingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutRatingInput = {
    update: XOR<UserUpdateWithoutRatingInput, UserUncheckedUpdateWithoutRatingInput>
    create: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingInput, UserUncheckedUpdateWithoutRatingInput>
  }

  export type UserUpdateWithoutRatingInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutStudentNestedInput
    VideoProgress?: VideoProgressUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseCreateManyTeacherInput = {
    id?: number
    name: string
    price: number
    description: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleProgressCreateManyStudentInput = {
    id?: number
    moduleId: number
    finished?: boolean
  }

  export type VideoProgressCreateManyStudentInput = {
    id?: number
    videoId: number
    finished?: boolean
    progress: number
  }

  export type EnrollmentCreateManyStudentInput = {
    id?: number
    courseId: number
    concluded?: boolean
  }

  export type RatingCreateManyStudentInput = {
    id?: number
    courseId: number
    rating: number
    comment?: string | null
  }

  export type CourseUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
    Rating?: RatingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleProgressUpdateWithoutStudentInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    module?: ModuleUpdateOneRequiredWithoutModuleProgressNestedInput
  }

  export type ModuleProgressUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduleId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModuleProgressUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduleId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressUpdateWithoutStudentInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    video?: VideoUpdateOneRequiredWithoutVideoProgressNestedInput
  }

  export type VideoProgressUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type VideoProgressUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    concluded?: BoolFieldUpdateOperationsInput | boolean
    course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    concluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    concluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingUpdateWithoutStudentInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModuleCreateManyCourseInput = {
    id?: number
    name: string
    description: string
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: number
    studentId: number
    concluded?: boolean
  }

  export type RatingCreateManyCourseInput = {
    id?: number
    studentId: number
    rating: number
    comment?: string | null
  }

  export type ModuleUpdateWithoutCourseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ModuleProgress?: ModuleProgressUpdateManyWithoutModuleNestedInput
    Video?: VideoUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ModuleProgress?: ModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
    Video?: VideoUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    concluded?: BoolFieldUpdateOperationsInput | boolean
    student?: UserUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    concluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    concluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingUpdateWithoutCourseInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    student?: UserUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateManyCategoryInput = {
    id?: number
    name: string
    price: number
    description: string
    teacherId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutCoursesNestedInput
    Module?: ModuleUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
    Rating?: RatingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Module?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleProgressCreateManyModuleInput = {
    id?: number
    studentId: number
    finished?: boolean
  }

  export type VideoCreateManyModuleInput = {
    id?: number
    name: string
    description: string
    url: string
    duration: number
  }

  export type ModuleProgressUpdateWithoutModuleInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    student?: UserUpdateOneRequiredWithoutModuleProgressNestedInput
  }

  export type ModuleProgressUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModuleProgressUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoUpdateWithoutModuleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    VideoProgress?: VideoProgressUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    VideoProgress?: VideoProgressUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type VideoProgressCreateManyVideoInput = {
    id?: number
    studentId: number
    finished?: boolean
    progress: number
  }

  export type VideoProgressUpdateWithoutVideoInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    student?: UserUpdateOneRequiredWithoutVideoProgressNestedInput
  }

  export type VideoProgressUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type VideoProgressUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
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