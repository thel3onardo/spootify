
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>
/**
 * Model TrackOnCollection
 * 
 */
export type TrackOnCollection = $Result.DefaultSelection<Prisma.$TrackOnCollectionPayload>
/**
 * Model TrackAudio
 * 
 */
export type TrackAudio = $Result.DefaultSelection<Prisma.$TrackAudioPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Key
 * 
 */
export type Key = $Result.DefaultSelection<Prisma.$KeyPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs>;

  /**
   * `prisma.trackOnCollection`: Exposes CRUD operations for the **TrackOnCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackOnCollections
    * const trackOnCollections = await prisma.trackOnCollection.findMany()
    * ```
    */
  get trackOnCollection(): Prisma.TrackOnCollectionDelegate<ExtArgs>;

  /**
   * `prisma.trackAudio`: Exposes CRUD operations for the **TrackAudio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackAudios
    * const trackAudios = await prisma.trackAudio.findMany()
    * ```
    */
  get trackAudio(): Prisma.TrackAudioDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.key`: Exposes CRUD operations for the **Key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keys
    * const keys = await prisma.key.findMany()
    * ```
    */
  get key(): Prisma.KeyDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.4.2
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Artist: 'Artist',
    Collection: 'Collection',
    Track: 'Track',
    TrackOnCollection: 'TrackOnCollection',
    TrackAudio: 'TrackAudio',
    Session: 'Session',
    Key: 'Key'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'artist' | 'collection' | 'track' | 'trackOnCollection' | 'trackAudio' | 'session' | 'key'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>,
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
          }
        }
      }
      TrackOnCollection: {
        payload: Prisma.$TrackOnCollectionPayload<ExtArgs>
        fields: Prisma.TrackOnCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackOnCollectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackOnCollectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload>
          }
          findFirst: {
            args: Prisma.TrackOnCollectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackOnCollectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload>
          }
          findMany: {
            args: Prisma.TrackOnCollectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload>[]
          }
          create: {
            args: Prisma.TrackOnCollectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload>
          }
          createMany: {
            args: Prisma.TrackOnCollectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrackOnCollectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload>
          }
          update: {
            args: Prisma.TrackOnCollectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload>
          }
          deleteMany: {
            args: Prisma.TrackOnCollectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackOnCollectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackOnCollectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackOnCollectionPayload>
          }
          aggregate: {
            args: Prisma.TrackOnCollectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrackOnCollection>
          }
          groupBy: {
            args: Prisma.TrackOnCollectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackOnCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackOnCollectionCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackOnCollectionCountAggregateOutputType> | number
          }
        }
      }
      TrackAudio: {
        payload: Prisma.$TrackAudioPayload<ExtArgs>
        fields: Prisma.TrackAudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackAudioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackAudioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload>
          }
          findFirst: {
            args: Prisma.TrackAudioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackAudioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload>
          }
          findMany: {
            args: Prisma.TrackAudioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload>[]
          }
          create: {
            args: Prisma.TrackAudioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload>
          }
          createMany: {
            args: Prisma.TrackAudioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrackAudioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload>
          }
          update: {
            args: Prisma.TrackAudioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload>
          }
          deleteMany: {
            args: Prisma.TrackAudioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackAudioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackAudioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackAudioPayload>
          }
          aggregate: {
            args: Prisma.TrackAudioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrackAudio>
          }
          groupBy: {
            args: Prisma.TrackAudioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackAudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackAudioCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackAudioCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Key: {
        payload: Prisma.$KeyPayload<ExtArgs>
        fields: Prisma.KeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findFirst: {
            args: Prisma.KeyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findMany: {
            args: Prisma.KeyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          create: {
            args: Prisma.KeyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          createMany: {
            args: Prisma.KeyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KeyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          update: {
            args: Prisma.KeyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          deleteMany: {
            args: Prisma.KeyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KeyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KeyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          aggregate: {
            args: Prisma.KeyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKey>
          }
          groupBy: {
            args: Prisma.KeyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyCountArgs<ExtArgs>,
            result: $Utils.Optional<KeyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    collections: number
    tracks: number
    Session: number
    Key: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
    tracks?: boolean | UserCountOutputTypeCountTracksArgs
    Session?: boolean | UserCountOutputTypeCountSessionArgs
    Key?: boolean | UserCountOutputTypeCountKeyArgs
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
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyWhereInput
  }



  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    tracks: number
    TrackOnCollection: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | CollectionCountOutputTypeCountTracksArgs
    TrackOnCollection?: boolean | CollectionCountOutputTypeCountTrackOnCollectionArgs
  }

  // Custom InputTypes

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountTrackOnCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackOnCollectionWhereInput
  }



  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    collections: number
    TrackOnCollection: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | TrackCountOutputTypeCountCollectionsArgs
    TrackOnCollection?: boolean | TrackCountOutputTypeCountTrackOnCollectionArgs
  }

  // Custom InputTypes

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountTrackOnCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackOnCollectionWhereInput
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
    email: string | null
    passwordHash: string | null
    name: string | null
    coverImage: string | null
    profileImage: string | null
    artist: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    name: string | null
    coverImage: string | null
    profileImage: string | null
    artist: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    coverImage: number
    profileImage: number
    artist: number
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
    email?: true
    passwordHash?: true
    name?: true
    coverImage?: true
    profileImage?: true
    artist?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    coverImage?: true
    profileImage?: true
    artist?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    coverImage?: true
    profileImage?: true
    artist?: true
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
    email: string
    passwordHash: string
    name: string | null
    coverImage: string | null
    profileImage: string | null
    artist: boolean
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
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    coverImage?: boolean
    profileImage?: boolean
    artist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collections?: boolean | User$collectionsArgs<ExtArgs>
    tracks?: boolean | User$tracksArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Key?: boolean | User$KeyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    coverImage?: boolean
    profileImage?: boolean
    artist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | User$collectionsArgs<ExtArgs>
    tracks?: boolean | User$tracksArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Key?: boolean | User$KeyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      collections: Prisma.$CollectionPayload<ExtArgs>[]
      tracks: Prisma.$TrackPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
      Key: Prisma.$KeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      name: string | null
      coverImage: string | null
      profileImage: string | null
      artist: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    tracks<T extends User$tracksArgs<ExtArgs> = {}>(args?: Subset<T, User$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findMany'> | Null>;

    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Key<T extends User$KeyArgs<ExtArgs> = {}>(args?: Subset<T, User$KeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly coverImage: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly artist: FieldRef<"User", 'Boolean'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * User.tracks
   */
  export type User$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.Key
   */
  export type User$KeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    where?: KeyWhereInput
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    cursor?: KeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }


  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }


  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistFindManyArgs, 'select' | 'include'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
    **/
    create<T extends ArtistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artist = await prisma.artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
    **/
    delete<T extends ArtistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artist model
   */ 
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'Int'>
    readonly email: FieldRef<"Artist", 'String'>
    readonly password: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }


  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }


  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
  }



  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    authorId: number | null
  }

  export type CollectionSumAggregateOutputType = {
    authorId: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    coverImage: string | null
    description: string | null
    authorId: number | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    coverImage: string | null
    description: string | null
    authorId: number | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    name: number
    coverImage: number
    description: number
    authorId: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    authorId?: true
  }

  export type CollectionSumAggregateInputType = {
    authorId?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    name?: true
    coverImage?: true
    description?: true
    authorId?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    name?: true
    coverImage?: true
    description?: true
    authorId?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    name?: true
    coverImage?: true
    description?: true
    authorId?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    name: string
    coverImage: string
    description: string | null
    authorId: number
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coverImage?: boolean
    description?: boolean
    authorId?: boolean
    tracks?: boolean | Collection$tracksArgs<ExtArgs>
    TrackOnCollection?: boolean | Collection$TrackOnCollectionArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    name?: boolean
    coverImage?: boolean
    description?: boolean
    authorId?: boolean
  }

  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | Collection$tracksArgs<ExtArgs>
    TrackOnCollection?: boolean | Collection$TrackOnCollectionArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      tracks: Prisma.$TrackPayload<ExtArgs>[]
      TrackOnCollection: Prisma.$TrackOnCollectionPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      coverImage: string
      description: string | null
      authorId: number
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }


  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollectionFindManyArgs, 'select' | 'include'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CollectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Collection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CollectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CollectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
    **/
    create<T extends CollectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Collections.
     *     @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     *     @example
     *     // Create many Collections
     *     const collection = await prisma.collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CollectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
    **/
    delete<T extends CollectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CollectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CollectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CollectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
    **/
    upsert<T extends CollectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tracks<T extends Collection$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Collection$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findMany'> | Null>;

    TrackOnCollection<T extends Collection$TrackOnCollectionArgs<ExtArgs> = {}>(args?: Subset<T, Collection$TrackOnCollectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Collection model
   */ 
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly coverImage: FieldRef<"Collection", 'String'>
    readonly description: FieldRef<"Collection", 'String'>
    readonly authorId: FieldRef<"Collection", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }


  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
  }


  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }


  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
  }


  /**
   * Collection.tracks
   */
  export type Collection$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Collection.TrackOnCollection
   */
  export type Collection$TrackOnCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    where?: TrackOnCollectionWhereInput
    orderBy?: TrackOnCollectionOrderByWithRelationInput | TrackOnCollectionOrderByWithRelationInput[]
    cursor?: TrackOnCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackOnCollectionScalarFieldEnum | TrackOnCollectionScalarFieldEnum[]
  }


  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
  }



  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type TrackSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: number | null
    name: string | null
    coverImage: string | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackMaxAggregateOutputType = {
    id: number | null
    name: string | null
    coverImage: string | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    name: number
    coverImage: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type TrackSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    name?: true
    coverImage?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    name?: true
    coverImage?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    name?: true
    coverImage?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: number
    name: string
    coverImage: string
    authorId: number
    createdAt: Date
    updatedAt: Date
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coverImage?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TrackAudio?: boolean | Track$TrackAudioArgs<ExtArgs>
    collections?: boolean | Track$collectionsArgs<ExtArgs>
    TrackOnCollection?: boolean | Track$TrackOnCollectionArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    name?: boolean
    coverImage?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrackAudio?: boolean | Track$TrackAudioArgs<ExtArgs>
    collections?: boolean | Track$collectionsArgs<ExtArgs>
    TrackOnCollection?: boolean | Track$TrackOnCollectionArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      TrackAudio: Prisma.$TrackAudioPayload<ExtArgs> | null
      collections: Prisma.$CollectionPayload<ExtArgs>[]
      TrackOnCollection: Prisma.$TrackOnCollectionPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      coverImage: string
      authorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["track"]>
    composites: {}
  }


  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackFindManyArgs, 'select' | 'include'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Track that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
    **/
    create<T extends TrackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackCreateArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tracks.
     *     @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const track = await prisma.track.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
    **/
    delete<T extends TrackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
    **/
    upsert<T extends TrackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
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
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TrackAudio<T extends Track$TrackAudioArgs<ExtArgs> = {}>(args?: Subset<T, Track$TrackAudioArgs<ExtArgs>>): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    collections<T extends Track$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Track$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    TrackOnCollection<T extends Track$TrackOnCollectionArgs<ExtArgs> = {}>(args?: Subset<T, Track$TrackOnCollectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Track model
   */ 
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'Int'>
    readonly name: FieldRef<"Track", 'String'>
    readonly coverImage: FieldRef<"Track", 'String'>
    readonly authorId: FieldRef<"Track", 'Int'>
    readonly createdAt: FieldRef<"Track", 'DateTime'>
    readonly updatedAt: FieldRef<"Track", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }


  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }


  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }


  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }


  /**
   * Track.TrackAudio
   */
  export type Track$TrackAudioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    where?: TrackAudioWhereInput
  }


  /**
   * Track.collections
   */
  export type Track$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * Track.TrackOnCollection
   */
  export type Track$TrackOnCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    where?: TrackOnCollectionWhereInput
    orderBy?: TrackOnCollectionOrderByWithRelationInput | TrackOnCollectionOrderByWithRelationInput[]
    cursor?: TrackOnCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackOnCollectionScalarFieldEnum | TrackOnCollectionScalarFieldEnum[]
  }


  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
  }



  /**
   * Model TrackOnCollection
   */

  export type AggregateTrackOnCollection = {
    _count: TrackOnCollectionCountAggregateOutputType | null
    _avg: TrackOnCollectionAvgAggregateOutputType | null
    _sum: TrackOnCollectionSumAggregateOutputType | null
    _min: TrackOnCollectionMinAggregateOutputType | null
    _max: TrackOnCollectionMaxAggregateOutputType | null
  }

  export type TrackOnCollectionAvgAggregateOutputType = {
    trackId: number | null
  }

  export type TrackOnCollectionSumAggregateOutputType = {
    trackId: number | null
  }

  export type TrackOnCollectionMinAggregateOutputType = {
    trackId: number | null
    collectionId: string | null
    addedAt: Date | null
  }

  export type TrackOnCollectionMaxAggregateOutputType = {
    trackId: number | null
    collectionId: string | null
    addedAt: Date | null
  }

  export type TrackOnCollectionCountAggregateOutputType = {
    trackId: number
    collectionId: number
    addedAt: number
    _all: number
  }


  export type TrackOnCollectionAvgAggregateInputType = {
    trackId?: true
  }

  export type TrackOnCollectionSumAggregateInputType = {
    trackId?: true
  }

  export type TrackOnCollectionMinAggregateInputType = {
    trackId?: true
    collectionId?: true
    addedAt?: true
  }

  export type TrackOnCollectionMaxAggregateInputType = {
    trackId?: true
    collectionId?: true
    addedAt?: true
  }

  export type TrackOnCollectionCountAggregateInputType = {
    trackId?: true
    collectionId?: true
    addedAt?: true
    _all?: true
  }

  export type TrackOnCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackOnCollection to aggregate.
     */
    where?: TrackOnCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackOnCollections to fetch.
     */
    orderBy?: TrackOnCollectionOrderByWithRelationInput | TrackOnCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackOnCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackOnCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackOnCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackOnCollections
    **/
    _count?: true | TrackOnCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackOnCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackOnCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackOnCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackOnCollectionMaxAggregateInputType
  }

  export type GetTrackOnCollectionAggregateType<T extends TrackOnCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackOnCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackOnCollection[P]>
      : GetScalarType<T[P], AggregateTrackOnCollection[P]>
  }




  export type TrackOnCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackOnCollectionWhereInput
    orderBy?: TrackOnCollectionOrderByWithAggregationInput | TrackOnCollectionOrderByWithAggregationInput[]
    by: TrackOnCollectionScalarFieldEnum[] | TrackOnCollectionScalarFieldEnum
    having?: TrackOnCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackOnCollectionCountAggregateInputType | true
    _avg?: TrackOnCollectionAvgAggregateInputType
    _sum?: TrackOnCollectionSumAggregateInputType
    _min?: TrackOnCollectionMinAggregateInputType
    _max?: TrackOnCollectionMaxAggregateInputType
  }

  export type TrackOnCollectionGroupByOutputType = {
    trackId: number
    collectionId: string
    addedAt: Date
    _count: TrackOnCollectionCountAggregateOutputType | null
    _avg: TrackOnCollectionAvgAggregateOutputType | null
    _sum: TrackOnCollectionSumAggregateOutputType | null
    _min: TrackOnCollectionMinAggregateOutputType | null
    _max: TrackOnCollectionMaxAggregateOutputType | null
  }

  type GetTrackOnCollectionGroupByPayload<T extends TrackOnCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackOnCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackOnCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackOnCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], TrackOnCollectionGroupByOutputType[P]>
        }
      >
    >


  export type TrackOnCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trackId?: boolean
    collectionId?: boolean
    addedAt?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackOnCollection"]>

  export type TrackOnCollectionSelectScalar = {
    trackId?: boolean
    collectionId?: boolean
    addedAt?: boolean
  }

  export type TrackOnCollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }


  export type $TrackOnCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackOnCollection"
    objects: {
      track: Prisma.$TrackPayload<ExtArgs>
      collection: Prisma.$CollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      trackId: number
      collectionId: string
      addedAt: Date
    }, ExtArgs["result"]["trackOnCollection"]>
    composites: {}
  }


  type TrackOnCollectionGetPayload<S extends boolean | null | undefined | TrackOnCollectionDefaultArgs> = $Result.GetResult<Prisma.$TrackOnCollectionPayload, S>

  type TrackOnCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackOnCollectionFindManyArgs, 'select' | 'include'> & {
      select?: TrackOnCollectionCountAggregateInputType | true
    }

  export interface TrackOnCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackOnCollection'], meta: { name: 'TrackOnCollection' } }
    /**
     * Find zero or one TrackOnCollection that matches the filter.
     * @param {TrackOnCollectionFindUniqueArgs} args - Arguments to find a TrackOnCollection
     * @example
     * // Get one TrackOnCollection
     * const trackOnCollection = await prisma.trackOnCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackOnCollectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackOnCollectionFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrackOnCollection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackOnCollectionFindUniqueOrThrowArgs} args - Arguments to find a TrackOnCollection
     * @example
     * // Get one TrackOnCollection
     * const trackOnCollection = await prisma.trackOnCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackOnCollectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackOnCollectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrackOnCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackOnCollectionFindFirstArgs} args - Arguments to find a TrackOnCollection
     * @example
     * // Get one TrackOnCollection
     * const trackOnCollection = await prisma.trackOnCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackOnCollectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackOnCollectionFindFirstArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrackOnCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackOnCollectionFindFirstOrThrowArgs} args - Arguments to find a TrackOnCollection
     * @example
     * // Get one TrackOnCollection
     * const trackOnCollection = await prisma.trackOnCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackOnCollectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackOnCollectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrackOnCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackOnCollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackOnCollections
     * const trackOnCollections = await prisma.trackOnCollection.findMany()
     * 
     * // Get first 10 TrackOnCollections
     * const trackOnCollections = await prisma.trackOnCollection.findMany({ take: 10 })
     * 
     * // Only select the `trackId`
     * const trackOnCollectionWithTrackIdOnly = await prisma.trackOnCollection.findMany({ select: { trackId: true } })
     * 
    **/
    findMany<T extends TrackOnCollectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackOnCollectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrackOnCollection.
     * @param {TrackOnCollectionCreateArgs} args - Arguments to create a TrackOnCollection.
     * @example
     * // Create one TrackOnCollection
     * const TrackOnCollection = await prisma.trackOnCollection.create({
     *   data: {
     *     // ... data to create a TrackOnCollection
     *   }
     * })
     * 
    **/
    create<T extends TrackOnCollectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackOnCollectionCreateArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrackOnCollections.
     *     @param {TrackOnCollectionCreateManyArgs} args - Arguments to create many TrackOnCollections.
     *     @example
     *     // Create many TrackOnCollections
     *     const trackOnCollection = await prisma.trackOnCollection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackOnCollectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackOnCollectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrackOnCollection.
     * @param {TrackOnCollectionDeleteArgs} args - Arguments to delete one TrackOnCollection.
     * @example
     * // Delete one TrackOnCollection
     * const TrackOnCollection = await prisma.trackOnCollection.delete({
     *   where: {
     *     // ... filter to delete one TrackOnCollection
     *   }
     * })
     * 
    **/
    delete<T extends TrackOnCollectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackOnCollectionDeleteArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrackOnCollection.
     * @param {TrackOnCollectionUpdateArgs} args - Arguments to update one TrackOnCollection.
     * @example
     * // Update one TrackOnCollection
     * const trackOnCollection = await prisma.trackOnCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackOnCollectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackOnCollectionUpdateArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrackOnCollections.
     * @param {TrackOnCollectionDeleteManyArgs} args - Arguments to filter TrackOnCollections to delete.
     * @example
     * // Delete a few TrackOnCollections
     * const { count } = await prisma.trackOnCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackOnCollectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackOnCollectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackOnCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackOnCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackOnCollections
     * const trackOnCollection = await prisma.trackOnCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackOnCollectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackOnCollectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackOnCollection.
     * @param {TrackOnCollectionUpsertArgs} args - Arguments to update or create a TrackOnCollection.
     * @example
     * // Update or create a TrackOnCollection
     * const trackOnCollection = await prisma.trackOnCollection.upsert({
     *   create: {
     *     // ... data to create a TrackOnCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackOnCollection we want to update
     *   }
     * })
    **/
    upsert<T extends TrackOnCollectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackOnCollectionUpsertArgs<ExtArgs>>
    ): Prisma__TrackOnCollectionClient<$Result.GetResult<Prisma.$TrackOnCollectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrackOnCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackOnCollectionCountArgs} args - Arguments to filter TrackOnCollections to count.
     * @example
     * // Count the number of TrackOnCollections
     * const count = await prisma.trackOnCollection.count({
     *   where: {
     *     // ... the filter for the TrackOnCollections we want to count
     *   }
     * })
    **/
    count<T extends TrackOnCollectionCountArgs>(
      args?: Subset<T, TrackOnCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackOnCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackOnCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackOnCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackOnCollectionAggregateArgs>(args: Subset<T, TrackOnCollectionAggregateArgs>): Prisma.PrismaPromise<GetTrackOnCollectionAggregateType<T>>

    /**
     * Group by TrackOnCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackOnCollectionGroupByArgs} args - Group by arguments.
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
      T extends TrackOnCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackOnCollectionGroupByArgs['orderBy'] }
        : { orderBy?: TrackOnCollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackOnCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackOnCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackOnCollection model
   */
  readonly fields: TrackOnCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackOnCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackOnCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrackOnCollection model
   */ 
  interface TrackOnCollectionFieldRefs {
    readonly trackId: FieldRef<"TrackOnCollection", 'Int'>
    readonly collectionId: FieldRef<"TrackOnCollection", 'String'>
    readonly addedAt: FieldRef<"TrackOnCollection", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TrackOnCollection findUnique
   */
  export type TrackOnCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TrackOnCollection to fetch.
     */
    where: TrackOnCollectionWhereUniqueInput
  }


  /**
   * TrackOnCollection findUniqueOrThrow
   */
  export type TrackOnCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TrackOnCollection to fetch.
     */
    where: TrackOnCollectionWhereUniqueInput
  }


  /**
   * TrackOnCollection findFirst
   */
  export type TrackOnCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TrackOnCollection to fetch.
     */
    where?: TrackOnCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackOnCollections to fetch.
     */
    orderBy?: TrackOnCollectionOrderByWithRelationInput | TrackOnCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackOnCollections.
     */
    cursor?: TrackOnCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackOnCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackOnCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackOnCollections.
     */
    distinct?: TrackOnCollectionScalarFieldEnum | TrackOnCollectionScalarFieldEnum[]
  }


  /**
   * TrackOnCollection findFirstOrThrow
   */
  export type TrackOnCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TrackOnCollection to fetch.
     */
    where?: TrackOnCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackOnCollections to fetch.
     */
    orderBy?: TrackOnCollectionOrderByWithRelationInput | TrackOnCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackOnCollections.
     */
    cursor?: TrackOnCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackOnCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackOnCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackOnCollections.
     */
    distinct?: TrackOnCollectionScalarFieldEnum | TrackOnCollectionScalarFieldEnum[]
  }


  /**
   * TrackOnCollection findMany
   */
  export type TrackOnCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TrackOnCollections to fetch.
     */
    where?: TrackOnCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackOnCollections to fetch.
     */
    orderBy?: TrackOnCollectionOrderByWithRelationInput | TrackOnCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackOnCollections.
     */
    cursor?: TrackOnCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackOnCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackOnCollections.
     */
    skip?: number
    distinct?: TrackOnCollectionScalarFieldEnum | TrackOnCollectionScalarFieldEnum[]
  }


  /**
   * TrackOnCollection create
   */
  export type TrackOnCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackOnCollection.
     */
    data: XOR<TrackOnCollectionCreateInput, TrackOnCollectionUncheckedCreateInput>
  }


  /**
   * TrackOnCollection createMany
   */
  export type TrackOnCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackOnCollections.
     */
    data: TrackOnCollectionCreateManyInput | TrackOnCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrackOnCollection update
   */
  export type TrackOnCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackOnCollection.
     */
    data: XOR<TrackOnCollectionUpdateInput, TrackOnCollectionUncheckedUpdateInput>
    /**
     * Choose, which TrackOnCollection to update.
     */
    where: TrackOnCollectionWhereUniqueInput
  }


  /**
   * TrackOnCollection updateMany
   */
  export type TrackOnCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackOnCollections.
     */
    data: XOR<TrackOnCollectionUpdateManyMutationInput, TrackOnCollectionUncheckedUpdateManyInput>
    /**
     * Filter which TrackOnCollections to update
     */
    where?: TrackOnCollectionWhereInput
  }


  /**
   * TrackOnCollection upsert
   */
  export type TrackOnCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackOnCollection to update in case it exists.
     */
    where: TrackOnCollectionWhereUniqueInput
    /**
     * In case the TrackOnCollection found by the `where` argument doesn't exist, create a new TrackOnCollection with this data.
     */
    create: XOR<TrackOnCollectionCreateInput, TrackOnCollectionUncheckedCreateInput>
    /**
     * In case the TrackOnCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackOnCollectionUpdateInput, TrackOnCollectionUncheckedUpdateInput>
  }


  /**
   * TrackOnCollection delete
   */
  export type TrackOnCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
    /**
     * Filter which TrackOnCollection to delete.
     */
    where: TrackOnCollectionWhereUniqueInput
  }


  /**
   * TrackOnCollection deleteMany
   */
  export type TrackOnCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackOnCollections to delete
     */
    where?: TrackOnCollectionWhereInput
  }


  /**
   * TrackOnCollection without action
   */
  export type TrackOnCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackOnCollection
     */
    select?: TrackOnCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackOnCollectionInclude<ExtArgs> | null
  }



  /**
   * Model TrackAudio
   */

  export type AggregateTrackAudio = {
    _count: TrackAudioCountAggregateOutputType | null
    _avg: TrackAudioAvgAggregateOutputType | null
    _sum: TrackAudioSumAggregateOutputType | null
    _min: TrackAudioMinAggregateOutputType | null
    _max: TrackAudioMaxAggregateOutputType | null
  }

  export type TrackAudioAvgAggregateOutputType = {
    id: number | null
    trackId: number | null
    duration: number | null
  }

  export type TrackAudioSumAggregateOutputType = {
    id: number | null
    trackId: number | null
    duration: number | null
  }

  export type TrackAudioMinAggregateOutputType = {
    id: number | null
    trackId: number | null
    audioUrl: string | null
    duration: number | null
  }

  export type TrackAudioMaxAggregateOutputType = {
    id: number | null
    trackId: number | null
    audioUrl: string | null
    duration: number | null
  }

  export type TrackAudioCountAggregateOutputType = {
    id: number
    trackId: number
    audioUrl: number
    duration: number
    _all: number
  }


  export type TrackAudioAvgAggregateInputType = {
    id?: true
    trackId?: true
    duration?: true
  }

  export type TrackAudioSumAggregateInputType = {
    id?: true
    trackId?: true
    duration?: true
  }

  export type TrackAudioMinAggregateInputType = {
    id?: true
    trackId?: true
    audioUrl?: true
    duration?: true
  }

  export type TrackAudioMaxAggregateInputType = {
    id?: true
    trackId?: true
    audioUrl?: true
    duration?: true
  }

  export type TrackAudioCountAggregateInputType = {
    id?: true
    trackId?: true
    audioUrl?: true
    duration?: true
    _all?: true
  }

  export type TrackAudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackAudio to aggregate.
     */
    where?: TrackAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackAudios to fetch.
     */
    orderBy?: TrackAudioOrderByWithRelationInput | TrackAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackAudios
    **/
    _count?: true | TrackAudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackAudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackAudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackAudioMaxAggregateInputType
  }

  export type GetTrackAudioAggregateType<T extends TrackAudioAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackAudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackAudio[P]>
      : GetScalarType<T[P], AggregateTrackAudio[P]>
  }




  export type TrackAudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackAudioWhereInput
    orderBy?: TrackAudioOrderByWithAggregationInput | TrackAudioOrderByWithAggregationInput[]
    by: TrackAudioScalarFieldEnum[] | TrackAudioScalarFieldEnum
    having?: TrackAudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackAudioCountAggregateInputType | true
    _avg?: TrackAudioAvgAggregateInputType
    _sum?: TrackAudioSumAggregateInputType
    _min?: TrackAudioMinAggregateInputType
    _max?: TrackAudioMaxAggregateInputType
  }

  export type TrackAudioGroupByOutputType = {
    id: number
    trackId: number
    audioUrl: string
    duration: number
    _count: TrackAudioCountAggregateOutputType | null
    _avg: TrackAudioAvgAggregateOutputType | null
    _sum: TrackAudioSumAggregateOutputType | null
    _min: TrackAudioMinAggregateOutputType | null
    _max: TrackAudioMaxAggregateOutputType | null
  }

  type GetTrackAudioGroupByPayload<T extends TrackAudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackAudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackAudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackAudioGroupByOutputType[P]>
            : GetScalarType<T[P], TrackAudioGroupByOutputType[P]>
        }
      >
    >


  export type TrackAudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackId?: boolean
    audioUrl?: boolean
    duration?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackAudio"]>

  export type TrackAudioSelectScalar = {
    id?: boolean
    trackId?: boolean
    audioUrl?: boolean
    duration?: boolean
  }

  export type TrackAudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }


  export type $TrackAudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackAudio"
    objects: {
      track: Prisma.$TrackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trackId: number
      audioUrl: string
      duration: number
    }, ExtArgs["result"]["trackAudio"]>
    composites: {}
  }


  type TrackAudioGetPayload<S extends boolean | null | undefined | TrackAudioDefaultArgs> = $Result.GetResult<Prisma.$TrackAudioPayload, S>

  type TrackAudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackAudioFindManyArgs, 'select' | 'include'> & {
      select?: TrackAudioCountAggregateInputType | true
    }

  export interface TrackAudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackAudio'], meta: { name: 'TrackAudio' } }
    /**
     * Find zero or one TrackAudio that matches the filter.
     * @param {TrackAudioFindUniqueArgs} args - Arguments to find a TrackAudio
     * @example
     * // Get one TrackAudio
     * const trackAudio = await prisma.trackAudio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackAudioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackAudioFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrackAudio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackAudioFindUniqueOrThrowArgs} args - Arguments to find a TrackAudio
     * @example
     * // Get one TrackAudio
     * const trackAudio = await prisma.trackAudio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackAudioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackAudioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrackAudio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAudioFindFirstArgs} args - Arguments to find a TrackAudio
     * @example
     * // Get one TrackAudio
     * const trackAudio = await prisma.trackAudio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackAudioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackAudioFindFirstArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrackAudio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAudioFindFirstOrThrowArgs} args - Arguments to find a TrackAudio
     * @example
     * // Get one TrackAudio
     * const trackAudio = await prisma.trackAudio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackAudioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackAudioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrackAudios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAudioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackAudios
     * const trackAudios = await prisma.trackAudio.findMany()
     * 
     * // Get first 10 TrackAudios
     * const trackAudios = await prisma.trackAudio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackAudioWithIdOnly = await prisma.trackAudio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackAudioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackAudioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrackAudio.
     * @param {TrackAudioCreateArgs} args - Arguments to create a TrackAudio.
     * @example
     * // Create one TrackAudio
     * const TrackAudio = await prisma.trackAudio.create({
     *   data: {
     *     // ... data to create a TrackAudio
     *   }
     * })
     * 
    **/
    create<T extends TrackAudioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackAudioCreateArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrackAudios.
     *     @param {TrackAudioCreateManyArgs} args - Arguments to create many TrackAudios.
     *     @example
     *     // Create many TrackAudios
     *     const trackAudio = await prisma.trackAudio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackAudioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackAudioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrackAudio.
     * @param {TrackAudioDeleteArgs} args - Arguments to delete one TrackAudio.
     * @example
     * // Delete one TrackAudio
     * const TrackAudio = await prisma.trackAudio.delete({
     *   where: {
     *     // ... filter to delete one TrackAudio
     *   }
     * })
     * 
    **/
    delete<T extends TrackAudioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackAudioDeleteArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrackAudio.
     * @param {TrackAudioUpdateArgs} args - Arguments to update one TrackAudio.
     * @example
     * // Update one TrackAudio
     * const trackAudio = await prisma.trackAudio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackAudioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackAudioUpdateArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrackAudios.
     * @param {TrackAudioDeleteManyArgs} args - Arguments to filter TrackAudios to delete.
     * @example
     * // Delete a few TrackAudios
     * const { count } = await prisma.trackAudio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackAudioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackAudioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackAudios
     * const trackAudio = await prisma.trackAudio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackAudioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackAudioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackAudio.
     * @param {TrackAudioUpsertArgs} args - Arguments to update or create a TrackAudio.
     * @example
     * // Update or create a TrackAudio
     * const trackAudio = await prisma.trackAudio.upsert({
     *   create: {
     *     // ... data to create a TrackAudio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackAudio we want to update
     *   }
     * })
    **/
    upsert<T extends TrackAudioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackAudioUpsertArgs<ExtArgs>>
    ): Prisma__TrackAudioClient<$Result.GetResult<Prisma.$TrackAudioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrackAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAudioCountArgs} args - Arguments to filter TrackAudios to count.
     * @example
     * // Count the number of TrackAudios
     * const count = await prisma.trackAudio.count({
     *   where: {
     *     // ... the filter for the TrackAudios we want to count
     *   }
     * })
    **/
    count<T extends TrackAudioCountArgs>(
      args?: Subset<T, TrackAudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackAudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackAudioAggregateArgs>(args: Subset<T, TrackAudioAggregateArgs>): Prisma.PrismaPromise<GetTrackAudioAggregateType<T>>

    /**
     * Group by TrackAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAudioGroupByArgs} args - Group by arguments.
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
      T extends TrackAudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackAudioGroupByArgs['orderBy'] }
        : { orderBy?: TrackAudioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackAudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackAudio model
   */
  readonly fields: TrackAudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackAudio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackAudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrackAudio model
   */ 
  interface TrackAudioFieldRefs {
    readonly id: FieldRef<"TrackAudio", 'Int'>
    readonly trackId: FieldRef<"TrackAudio", 'Int'>
    readonly audioUrl: FieldRef<"TrackAudio", 'String'>
    readonly duration: FieldRef<"TrackAudio", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * TrackAudio findUnique
   */
  export type TrackAudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * Filter, which TrackAudio to fetch.
     */
    where: TrackAudioWhereUniqueInput
  }


  /**
   * TrackAudio findUniqueOrThrow
   */
  export type TrackAudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * Filter, which TrackAudio to fetch.
     */
    where: TrackAudioWhereUniqueInput
  }


  /**
   * TrackAudio findFirst
   */
  export type TrackAudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * Filter, which TrackAudio to fetch.
     */
    where?: TrackAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackAudios to fetch.
     */
    orderBy?: TrackAudioOrderByWithRelationInput | TrackAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackAudios.
     */
    cursor?: TrackAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackAudios.
     */
    distinct?: TrackAudioScalarFieldEnum | TrackAudioScalarFieldEnum[]
  }


  /**
   * TrackAudio findFirstOrThrow
   */
  export type TrackAudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * Filter, which TrackAudio to fetch.
     */
    where?: TrackAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackAudios to fetch.
     */
    orderBy?: TrackAudioOrderByWithRelationInput | TrackAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackAudios.
     */
    cursor?: TrackAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackAudios.
     */
    distinct?: TrackAudioScalarFieldEnum | TrackAudioScalarFieldEnum[]
  }


  /**
   * TrackAudio findMany
   */
  export type TrackAudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * Filter, which TrackAudios to fetch.
     */
    where?: TrackAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackAudios to fetch.
     */
    orderBy?: TrackAudioOrderByWithRelationInput | TrackAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackAudios.
     */
    cursor?: TrackAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackAudios.
     */
    skip?: number
    distinct?: TrackAudioScalarFieldEnum | TrackAudioScalarFieldEnum[]
  }


  /**
   * TrackAudio create
   */
  export type TrackAudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackAudio.
     */
    data: XOR<TrackAudioCreateInput, TrackAudioUncheckedCreateInput>
  }


  /**
   * TrackAudio createMany
   */
  export type TrackAudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackAudios.
     */
    data: TrackAudioCreateManyInput | TrackAudioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrackAudio update
   */
  export type TrackAudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackAudio.
     */
    data: XOR<TrackAudioUpdateInput, TrackAudioUncheckedUpdateInput>
    /**
     * Choose, which TrackAudio to update.
     */
    where: TrackAudioWhereUniqueInput
  }


  /**
   * TrackAudio updateMany
   */
  export type TrackAudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackAudios.
     */
    data: XOR<TrackAudioUpdateManyMutationInput, TrackAudioUncheckedUpdateManyInput>
    /**
     * Filter which TrackAudios to update
     */
    where?: TrackAudioWhereInput
  }


  /**
   * TrackAudio upsert
   */
  export type TrackAudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackAudio to update in case it exists.
     */
    where: TrackAudioWhereUniqueInput
    /**
     * In case the TrackAudio found by the `where` argument doesn't exist, create a new TrackAudio with this data.
     */
    create: XOR<TrackAudioCreateInput, TrackAudioUncheckedCreateInput>
    /**
     * In case the TrackAudio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackAudioUpdateInput, TrackAudioUncheckedUpdateInput>
  }


  /**
   * TrackAudio delete
   */
  export type TrackAudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
    /**
     * Filter which TrackAudio to delete.
     */
    where: TrackAudioWhereUniqueInput
  }


  /**
   * TrackAudio deleteMany
   */
  export type TrackAudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackAudios to delete
     */
    where?: TrackAudioWhereInput
  }


  /**
   * TrackAudio without action
   */
  export type TrackAudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackAudio
     */
    select?: TrackAudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackAudioInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    user_id: number | null
    active_expires: number | null
    idle_expires: number | null
  }

  export type SessionSumAggregateOutputType = {
    user_id: number | null
    active_expires: bigint | null
    idle_expires: bigint | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    user_id: number | null
    active_expires: bigint | null
    idle_expires: bigint | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    user_id: number | null
    active_expires: bigint | null
    idle_expires: bigint | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    user_id: number
    active_expires: number
    idle_expires: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    user_id?: true
    active_expires?: true
    idle_expires?: true
  }

  export type SessionSumAggregateInputType = {
    user_id?: true
    active_expires?: true
    idle_expires?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    user_id?: true
    active_expires?: true
    idle_expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    user_id?: true
    active_expires?: true
    idle_expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    user_id?: true
    active_expires?: true
    idle_expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    user_id: number
    active_expires: bigint
    idle_expires: bigint
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    active_expires?: boolean
    idle_expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    user_id?: boolean
    active_expires?: boolean
    idle_expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: number
      active_expires: bigint
      idle_expires: bigint
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly user_id: FieldRef<"Session", 'Int'>
    readonly active_expires: FieldRef<"Session", 'BigInt'>
    readonly idle_expires: FieldRef<"Session", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model Key
   */

  export type AggregateKey = {
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  export type KeyAvgAggregateOutputType = {
    user_id: number | null
  }

  export type KeySumAggregateOutputType = {
    user_id: number | null
  }

  export type KeyMinAggregateOutputType = {
    id: string | null
    hashed_password: string | null
    user_id: number | null
  }

  export type KeyMaxAggregateOutputType = {
    id: string | null
    hashed_password: string | null
    user_id: number | null
  }

  export type KeyCountAggregateOutputType = {
    id: number
    hashed_password: number
    user_id: number
    _all: number
  }


  export type KeyAvgAggregateInputType = {
    user_id?: true
  }

  export type KeySumAggregateInputType = {
    user_id?: true
  }

  export type KeyMinAggregateInputType = {
    id?: true
    hashed_password?: true
    user_id?: true
  }

  export type KeyMaxAggregateInputType = {
    id?: true
    hashed_password?: true
    user_id?: true
  }

  export type KeyCountAggregateInputType = {
    id?: true
    hashed_password?: true
    user_id?: true
    _all?: true
  }

  export type KeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Key to aggregate.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keys
    **/
    _count?: true | KeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyMaxAggregateInputType
  }

  export type GetKeyAggregateType<T extends KeyAggregateArgs> = {
        [P in keyof T & keyof AggregateKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKey[P]>
      : GetScalarType<T[P], AggregateKey[P]>
  }




  export type KeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyWhereInput
    orderBy?: KeyOrderByWithAggregationInput | KeyOrderByWithAggregationInput[]
    by: KeyScalarFieldEnum[] | KeyScalarFieldEnum
    having?: KeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyCountAggregateInputType | true
    _avg?: KeyAvgAggregateInputType
    _sum?: KeySumAggregateInputType
    _min?: KeyMinAggregateInputType
    _max?: KeyMaxAggregateInputType
  }

  export type KeyGroupByOutputType = {
    id: string
    hashed_password: string | null
    user_id: number
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  type GetKeyGroupByPayload<T extends KeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyGroupByOutputType[P]>
            : GetScalarType<T[P], KeyGroupByOutputType[P]>
        }
      >
    >


  export type KeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashed_password?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["key"]>

  export type KeySelectScalar = {
    id?: boolean
    hashed_password?: boolean
    user_id?: boolean
  }

  export type KeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $KeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Key"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hashed_password: string | null
      user_id: number
    }, ExtArgs["result"]["key"]>
    composites: {}
  }


  type KeyGetPayload<S extends boolean | null | undefined | KeyDefaultArgs> = $Result.GetResult<Prisma.$KeyPayload, S>

  type KeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KeyFindManyArgs, 'select' | 'include'> & {
      select?: KeyCountAggregateInputType | true
    }

  export interface KeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Key'], meta: { name: 'Key' } }
    /**
     * Find zero or one Key that matches the filter.
     * @param {KeyFindUniqueArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KeyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KeyFindUniqueArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Key that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KeyFindUniqueOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KeyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KeyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindFirstArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Key that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KeyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keys
     * const keys = await prisma.key.findMany()
     * 
     * // Get first 10 Keys
     * const keys = await prisma.key.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyWithIdOnly = await prisma.key.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KeyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Key.
     * @param {KeyCreateArgs} args - Arguments to create a Key.
     * @example
     * // Create one Key
     * const Key = await prisma.key.create({
     *   data: {
     *     // ... data to create a Key
     *   }
     * })
     * 
    **/
    create<T extends KeyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KeyCreateArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Keys.
     *     @param {KeyCreateManyArgs} args - Arguments to create many Keys.
     *     @example
     *     // Create many Keys
     *     const key = await prisma.key.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KeyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Key.
     * @param {KeyDeleteArgs} args - Arguments to delete one Key.
     * @example
     * // Delete one Key
     * const Key = await prisma.key.delete({
     *   where: {
     *     // ... filter to delete one Key
     *   }
     * })
     * 
    **/
    delete<T extends KeyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KeyDeleteArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Key.
     * @param {KeyUpdateArgs} args - Arguments to update one Key.
     * @example
     * // Update one Key
     * const key = await prisma.key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KeyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KeyUpdateArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Keys.
     * @param {KeyDeleteManyArgs} args - Arguments to filter Keys to delete.
     * @example
     * // Delete a few Keys
     * const { count } = await prisma.key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KeyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keys
     * const key = await prisma.key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KeyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KeyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Key.
     * @param {KeyUpsertArgs} args - Arguments to update or create a Key.
     * @example
     * // Update or create a Key
     * const key = await prisma.key.upsert({
     *   create: {
     *     // ... data to create a Key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Key we want to update
     *   }
     * })
    **/
    upsert<T extends KeyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KeyUpsertArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyCountArgs} args - Arguments to filter Keys to count.
     * @example
     * // Count the number of Keys
     * const count = await prisma.key.count({
     *   where: {
     *     // ... the filter for the Keys we want to count
     *   }
     * })
    **/
    count<T extends KeyCountArgs>(
      args?: Subset<T, KeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeyAggregateArgs>(args: Subset<T, KeyAggregateArgs>): Prisma.PrismaPromise<GetKeyAggregateType<T>>

    /**
     * Group by Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyGroupByArgs} args - Group by arguments.
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
      T extends KeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyGroupByArgs['orderBy'] }
        : { orderBy?: KeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Key model
   */
  readonly fields: KeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Key model
   */ 
  interface KeyFieldRefs {
    readonly id: FieldRef<"Key", 'String'>
    readonly hashed_password: FieldRef<"Key", 'String'>
    readonly user_id: FieldRef<"Key", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Key findUnique
   */
  export type KeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }


  /**
   * Key findUniqueOrThrow
   */
  export type KeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }


  /**
   * Key findFirst
   */
  export type KeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }


  /**
   * Key findFirstOrThrow
   */
  export type KeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }


  /**
   * Key findMany
   */
  export type KeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }


  /**
   * Key create
   */
  export type KeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The data needed to create a Key.
     */
    data: XOR<KeyCreateInput, KeyUncheckedCreateInput>
  }


  /**
   * Key createMany
   */
  export type KeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keys.
     */
    data: KeyCreateManyInput | KeyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Key update
   */
  export type KeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The data needed to update a Key.
     */
    data: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
    /**
     * Choose, which Key to update.
     */
    where: KeyWhereUniqueInput
  }


  /**
   * Key updateMany
   */
  export type KeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keys.
     */
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeyWhereInput
  }


  /**
   * Key upsert
   */
  export type KeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The filter to search for the Key to update in case it exists.
     */
    where: KeyWhereUniqueInput
    /**
     * In case the Key found by the `where` argument doesn't exist, create a new Key with this data.
     */
    create: XOR<KeyCreateInput, KeyUncheckedCreateInput>
    /**
     * In case the Key was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
  }


  /**
   * Key delete
   */
  export type KeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter which Key to delete.
     */
    where: KeyWhereUniqueInput
  }


  /**
   * Key deleteMany
   */
  export type KeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to delete
     */
    where?: KeyWhereInput
  }


  /**
   * Key without action
   */
  export type KeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
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
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    coverImage: 'coverImage',
    profileImage: 'profileImage',
    artist: 'artist',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coverImage: 'coverImage',
    description: 'description',
    authorId: 'authorId'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coverImage: 'coverImage',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const TrackOnCollectionScalarFieldEnum: {
    trackId: 'trackId',
    collectionId: 'collectionId',
    addedAt: 'addedAt'
  };

  export type TrackOnCollectionScalarFieldEnum = (typeof TrackOnCollectionScalarFieldEnum)[keyof typeof TrackOnCollectionScalarFieldEnum]


  export const TrackAudioScalarFieldEnum: {
    id: 'id',
    trackId: 'trackId',
    audioUrl: 'audioUrl',
    duration: 'duration'
  };

  export type TrackAudioScalarFieldEnum = (typeof TrackAudioScalarFieldEnum)[keyof typeof TrackAudioScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    active_expires: 'active_expires',
    idle_expires: 'idle_expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const KeyScalarFieldEnum: {
    id: 'id',
    hashed_password: 'hashed_password',
    user_id: 'user_id'
  };

  export type KeyScalarFieldEnum = (typeof KeyScalarFieldEnum)[keyof typeof KeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    artist?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    collections?: CollectionListRelationFilter
    tracks?: TrackListRelationFilter
    Session?: SessionListRelationFilter
    Key?: KeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    artist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collections?: CollectionOrderByRelationAggregateInput
    tracks?: TrackOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
    Key?: KeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    artist?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    collections?: CollectionListRelationFilter
    tracks?: TrackListRelationFilter
    Session?: SessionListRelationFilter
    Key?: KeyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    artist?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    artist?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: IntFilter<"Artist"> | number
    email?: StringFilter<"Artist"> | string
    password?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    password?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
  }, "id" | "id" | "email">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artist"> | number
    email?: StringWithAggregatesFilter<"Artist"> | string
    password?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    coverImage?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    authorId?: IntFilter<"Collection"> | number
    tracks?: TrackListRelationFilter
    TrackOnCollection?: TrackOnCollectionListRelationFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    description?: SortOrderInput | SortOrder
    authorId?: SortOrder
    tracks?: TrackOrderByRelationAggregateInput
    TrackOnCollection?: TrackOnCollectionOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    name?: StringFilter<"Collection"> | string
    coverImage?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    authorId?: IntFilter<"Collection"> | number
    tracks?: TrackListRelationFilter
    TrackOnCollection?: TrackOnCollectionListRelationFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    description?: SortOrderInput | SortOrder
    authorId?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    name?: StringWithAggregatesFilter<"Collection"> | string
    coverImage?: StringWithAggregatesFilter<"Collection"> | string
    description?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    authorId?: IntWithAggregatesFilter<"Collection"> | number
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: IntFilter<"Track"> | number
    name?: StringFilter<"Track"> | string
    coverImage?: StringFilter<"Track"> | string
    authorId?: IntFilter<"Track"> | number
    createdAt?: DateTimeFilter<"Track"> | Date | string
    updatedAt?: DateTimeFilter<"Track"> | Date | string
    TrackAudio?: XOR<TrackAudioNullableRelationFilter, TrackAudioWhereInput> | null
    collections?: CollectionListRelationFilter
    TrackOnCollection?: TrackOnCollectionListRelationFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TrackAudio?: TrackAudioOrderByWithRelationInput
    collections?: CollectionOrderByRelationAggregateInput
    TrackOnCollection?: TrackOnCollectionOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    name?: StringFilter<"Track"> | string
    coverImage?: StringFilter<"Track"> | string
    authorId?: IntFilter<"Track"> | number
    createdAt?: DateTimeFilter<"Track"> | Date | string
    updatedAt?: DateTimeFilter<"Track"> | Date | string
    TrackAudio?: XOR<TrackAudioNullableRelationFilter, TrackAudioWhereInput> | null
    collections?: CollectionListRelationFilter
    TrackOnCollection?: TrackOnCollectionListRelationFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Track"> | number
    name?: StringWithAggregatesFilter<"Track"> | string
    coverImage?: StringWithAggregatesFilter<"Track"> | string
    authorId?: IntWithAggregatesFilter<"Track"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Track"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Track"> | Date | string
  }

  export type TrackOnCollectionWhereInput = {
    AND?: TrackOnCollectionWhereInput | TrackOnCollectionWhereInput[]
    OR?: TrackOnCollectionWhereInput[]
    NOT?: TrackOnCollectionWhereInput | TrackOnCollectionWhereInput[]
    trackId?: IntFilter<"TrackOnCollection"> | number
    collectionId?: StringFilter<"TrackOnCollection"> | string
    addedAt?: DateTimeFilter<"TrackOnCollection"> | Date | string
    track?: XOR<TrackRelationFilter, TrackWhereInput>
    collection?: XOR<CollectionRelationFilter, CollectionWhereInput>
  }

  export type TrackOnCollectionOrderByWithRelationInput = {
    trackId?: SortOrder
    collectionId?: SortOrder
    addedAt?: SortOrder
    track?: TrackOrderByWithRelationInput
    collection?: CollectionOrderByWithRelationInput
  }

  export type TrackOnCollectionWhereUniqueInput = Prisma.AtLeast<{
    trackId_collectionId?: TrackOnCollectionTrackIdCollectionIdCompoundUniqueInput
    AND?: TrackOnCollectionWhereInput | TrackOnCollectionWhereInput[]
    OR?: TrackOnCollectionWhereInput[]
    NOT?: TrackOnCollectionWhereInput | TrackOnCollectionWhereInput[]
    trackId?: IntFilter<"TrackOnCollection"> | number
    collectionId?: StringFilter<"TrackOnCollection"> | string
    addedAt?: DateTimeFilter<"TrackOnCollection"> | Date | string
    track?: XOR<TrackRelationFilter, TrackWhereInput>
    collection?: XOR<CollectionRelationFilter, CollectionWhereInput>
  }, "trackId_collectionId">

  export type TrackOnCollectionOrderByWithAggregationInput = {
    trackId?: SortOrder
    collectionId?: SortOrder
    addedAt?: SortOrder
    _count?: TrackOnCollectionCountOrderByAggregateInput
    _avg?: TrackOnCollectionAvgOrderByAggregateInput
    _max?: TrackOnCollectionMaxOrderByAggregateInput
    _min?: TrackOnCollectionMinOrderByAggregateInput
    _sum?: TrackOnCollectionSumOrderByAggregateInput
  }

  export type TrackOnCollectionScalarWhereWithAggregatesInput = {
    AND?: TrackOnCollectionScalarWhereWithAggregatesInput | TrackOnCollectionScalarWhereWithAggregatesInput[]
    OR?: TrackOnCollectionScalarWhereWithAggregatesInput[]
    NOT?: TrackOnCollectionScalarWhereWithAggregatesInput | TrackOnCollectionScalarWhereWithAggregatesInput[]
    trackId?: IntWithAggregatesFilter<"TrackOnCollection"> | number
    collectionId?: StringWithAggregatesFilter<"TrackOnCollection"> | string
    addedAt?: DateTimeWithAggregatesFilter<"TrackOnCollection"> | Date | string
  }

  export type TrackAudioWhereInput = {
    AND?: TrackAudioWhereInput | TrackAudioWhereInput[]
    OR?: TrackAudioWhereInput[]
    NOT?: TrackAudioWhereInput | TrackAudioWhereInput[]
    id?: IntFilter<"TrackAudio"> | number
    trackId?: IntFilter<"TrackAudio"> | number
    audioUrl?: StringFilter<"TrackAudio"> | string
    duration?: IntFilter<"TrackAudio"> | number
    track?: XOR<TrackRelationFilter, TrackWhereInput>
  }

  export type TrackAudioOrderByWithRelationInput = {
    id?: SortOrder
    trackId?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    track?: TrackOrderByWithRelationInput
  }

  export type TrackAudioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trackId?: number
    AND?: TrackAudioWhereInput | TrackAudioWhereInput[]
    OR?: TrackAudioWhereInput[]
    NOT?: TrackAudioWhereInput | TrackAudioWhereInput[]
    audioUrl?: StringFilter<"TrackAudio"> | string
    duration?: IntFilter<"TrackAudio"> | number
    track?: XOR<TrackRelationFilter, TrackWhereInput>
  }, "id" | "trackId">

  export type TrackAudioOrderByWithAggregationInput = {
    id?: SortOrder
    trackId?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    _count?: TrackAudioCountOrderByAggregateInput
    _avg?: TrackAudioAvgOrderByAggregateInput
    _max?: TrackAudioMaxOrderByAggregateInput
    _min?: TrackAudioMinOrderByAggregateInput
    _sum?: TrackAudioSumOrderByAggregateInput
  }

  export type TrackAudioScalarWhereWithAggregatesInput = {
    AND?: TrackAudioScalarWhereWithAggregatesInput | TrackAudioScalarWhereWithAggregatesInput[]
    OR?: TrackAudioScalarWhereWithAggregatesInput[]
    NOT?: TrackAudioScalarWhereWithAggregatesInput | TrackAudioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrackAudio"> | number
    trackId?: IntWithAggregatesFilter<"TrackAudio"> | number
    audioUrl?: StringWithAggregatesFilter<"TrackAudio"> | string
    duration?: IntWithAggregatesFilter<"TrackAudio"> | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    user_id?: IntFilter<"Session"> | number
    active_expires?: BigIntFilter<"Session"> | bigint | number
    idle_expires?: BigIntFilter<"Session"> | bigint | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    active_expires?: SortOrder
    idle_expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    user_id?: IntFilter<"Session"> | number
    active_expires?: BigIntFilter<"Session"> | bigint | number
    idle_expires?: BigIntFilter<"Session"> | bigint | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    active_expires?: SortOrder
    idle_expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    user_id?: IntWithAggregatesFilter<"Session"> | number
    active_expires?: BigIntWithAggregatesFilter<"Session"> | bigint | number
    idle_expires?: BigIntWithAggregatesFilter<"Session"> | bigint | number
  }

  export type KeyWhereInput = {
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    id?: StringFilter<"Key"> | string
    hashed_password?: StringNullableFilter<"Key"> | string | null
    user_id?: IntFilter<"Key"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type KeyOrderByWithRelationInput = {
    id?: SortOrder
    hashed_password?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    hashed_password?: StringNullableFilter<"Key"> | string | null
    user_id?: IntFilter<"Key"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type KeyOrderByWithAggregationInput = {
    id?: SortOrder
    hashed_password?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: KeyCountOrderByAggregateInput
    _avg?: KeyAvgOrderByAggregateInput
    _max?: KeyMaxOrderByAggregateInput
    _min?: KeyMinOrderByAggregateInput
    _sum?: KeySumOrderByAggregateInput
  }

  export type KeyScalarWhereWithAggregatesInput = {
    AND?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    OR?: KeyScalarWhereWithAggregatesInput[]
    NOT?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Key"> | string
    hashed_password?: StringNullableWithAggregatesFilter<"Key"> | string | null
    user_id?: IntWithAggregatesFilter<"Key"> | number
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    tracks?: TrackCreateNestedManyWithoutAuthorInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Key?: KeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    tracks?: TrackUncheckedCreateNestedManyWithoutAuthorInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Key?: KeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    tracks?: TrackUpdateManyWithoutAuthorNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Key?: KeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutAuthorNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Key?: KeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistCreateInput = {
    email: string
    password: string
    name: string
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type ArtistUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type ArtistUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionCreateInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    tracks?: TrackCreateNestedManyWithoutCollectionsInput
    TrackOnCollection?: TrackOnCollectionCreateNestedManyWithoutCollectionInput
    author: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    authorId: number
    tracks?: TrackUncheckedCreateNestedManyWithoutCollectionsInput
    TrackOnCollection?: TrackOnCollectionUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TrackUpdateManyWithoutCollectionsNestedInput
    TrackOnCollection?: TrackOnCollectionUpdateManyWithoutCollectionNestedInput
    author?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    tracks?: TrackUncheckedUpdateManyWithoutCollectionsNestedInput
    TrackOnCollection?: TrackOnCollectionUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    authorId: number
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackCreateInput = {
    name: string
    coverImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioCreateNestedOneWithoutTrackInput
    collections?: CollectionCreateNestedManyWithoutTracksInput
    TrackOnCollection?: TrackOnCollectionCreateNestedManyWithoutTrackInput
    author: UserCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateInput = {
    id?: number
    name: string
    coverImage: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioUncheckedCreateNestedOneWithoutTrackInput
    collections?: CollectionUncheckedCreateNestedManyWithoutTracksInput
    TrackOnCollection?: TrackOnCollectionUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUpdateOneWithoutTrackNestedInput
    collections?: CollectionUpdateManyWithoutTracksNestedInput
    TrackOnCollection?: TrackOnCollectionUpdateManyWithoutTrackNestedInput
    author?: UserUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUncheckedUpdateOneWithoutTrackNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutTracksNestedInput
    TrackOnCollection?: TrackOnCollectionUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: number
    name: string
    coverImage: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackOnCollectionCreateInput = {
    addedAt?: Date | string
    track: TrackCreateNestedOneWithoutTrackOnCollectionInput
    collection: CollectionCreateNestedOneWithoutTrackOnCollectionInput
  }

  export type TrackOnCollectionUncheckedCreateInput = {
    trackId: number
    collectionId: string
    addedAt?: Date | string
  }

  export type TrackOnCollectionUpdateInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TrackUpdateOneRequiredWithoutTrackOnCollectionNestedInput
    collection?: CollectionUpdateOneRequiredWithoutTrackOnCollectionNestedInput
  }

  export type TrackOnCollectionUncheckedUpdateInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    collectionId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackOnCollectionCreateManyInput = {
    trackId: number
    collectionId: string
    addedAt?: Date | string
  }

  export type TrackOnCollectionUpdateManyMutationInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackOnCollectionUncheckedUpdateManyInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    collectionId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackAudioCreateInput = {
    audioUrl: string
    duration: number
    track: TrackCreateNestedOneWithoutTrackAudioInput
  }

  export type TrackAudioUncheckedCreateInput = {
    id?: number
    trackId: number
    audioUrl: string
    duration: number
  }

  export type TrackAudioUpdateInput = {
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    track?: TrackUpdateOneRequiredWithoutTrackAudioNestedInput
  }

  export type TrackAudioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type TrackAudioCreateManyInput = {
    id?: number
    trackId: number
    audioUrl: string
    duration: number
  }

  export type TrackAudioUpdateManyMutationInput = {
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type TrackAudioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateInput = {
    id: string
    active_expires: bigint | number
    idle_expires: bigint | number
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    user_id: number
    active_expires: bigint | number
    idle_expires: bigint | number
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    idle_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    active_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    idle_expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionCreateManyInput = {
    id: string
    user_id: number
    active_expires: bigint | number
    idle_expires: bigint | number
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    active_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    idle_expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    active_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    idle_expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type KeyCreateInput = {
    id: string
    hashed_password?: string | null
    user: UserCreateNestedOneWithoutKeyInput
  }

  export type KeyUncheckedCreateInput = {
    id: string
    hashed_password?: string | null
    user_id: number
  }

  export type KeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashed_password?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutKeyNestedInput
  }

  export type KeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashed_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type KeyCreateManyInput = {
    id: string
    hashed_password?: string | null
    user_id: number
  }

  export type KeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashed_password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashed_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type KeyListRelationFilter = {
    every?: KeyWhereInput
    some?: KeyWhereInput
    none?: KeyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    profileImage?: SortOrder
    artist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    profileImage?: SortOrder
    artist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    profileImage?: SortOrder
    artist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrackOnCollectionListRelationFilter = {
    every?: TrackOnCollectionWhereInput
    some?: TrackOnCollectionWhereInput
    none?: TrackOnCollectionWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TrackOnCollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    authorId?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    authorId?: SortOrder
  }

  export type TrackAudioNullableRelationFilter = {
    is?: TrackAudioWhereInput | null
    isNot?: TrackAudioWhereInput | null
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type TrackRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type CollectionRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type TrackOnCollectionTrackIdCollectionIdCompoundUniqueInput = {
    trackId: number
    collectionId: string
  }

  export type TrackOnCollectionCountOrderByAggregateInput = {
    trackId?: SortOrder
    collectionId?: SortOrder
    addedAt?: SortOrder
  }

  export type TrackOnCollectionAvgOrderByAggregateInput = {
    trackId?: SortOrder
  }

  export type TrackOnCollectionMaxOrderByAggregateInput = {
    trackId?: SortOrder
    collectionId?: SortOrder
    addedAt?: SortOrder
  }

  export type TrackOnCollectionMinOrderByAggregateInput = {
    trackId?: SortOrder
    collectionId?: SortOrder
    addedAt?: SortOrder
  }

  export type TrackOnCollectionSumOrderByAggregateInput = {
    trackId?: SortOrder
  }

  export type TrackAudioCountOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
  }

  export type TrackAudioAvgOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    duration?: SortOrder
  }

  export type TrackAudioMaxOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
  }

  export type TrackAudioMinOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
  }

  export type TrackAudioSumOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    duration?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active_expires?: SortOrder
    idle_expires?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    user_id?: SortOrder
    active_expires?: SortOrder
    idle_expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active_expires?: SortOrder
    idle_expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active_expires?: SortOrder
    idle_expires?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    user_id?: SortOrder
    active_expires?: SortOrder
    idle_expires?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type KeyCountOrderByAggregateInput = {
    id?: SortOrder
    hashed_password?: SortOrder
    user_id?: SortOrder
  }

  export type KeyAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type KeyMaxOrderByAggregateInput = {
    id?: SortOrder
    hashed_password?: SortOrder
    user_id?: SortOrder
  }

  export type KeyMinOrderByAggregateInput = {
    id?: SortOrder
    hashed_password?: SortOrder
    user_id?: SortOrder
  }

  export type KeySumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type CollectionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type TrackCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TrackCreateWithoutAuthorInput, TrackUncheckedCreateWithoutAuthorInput> | TrackCreateWithoutAuthorInput[] | TrackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAuthorInput | TrackCreateOrConnectWithoutAuthorInput[]
    createMany?: TrackCreateManyAuthorInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type KeyCreateNestedManyWithoutUserInput = {
    create?: XOR<KeyCreateWithoutUserInput, KeyUncheckedCreateWithoutUserInput> | KeyCreateWithoutUserInput[] | KeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutUserInput | KeyCreateOrConnectWithoutUserInput[]
    createMany?: KeyCreateManyUserInputEnvelope
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TrackCreateWithoutAuthorInput, TrackUncheckedCreateWithoutAuthorInput> | TrackCreateWithoutAuthorInput[] | TrackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAuthorInput | TrackCreateOrConnectWithoutAuthorInput[]
    createMany?: TrackCreateManyAuthorInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type KeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KeyCreateWithoutUserInput, KeyUncheckedCreateWithoutUserInput> | KeyCreateWithoutUserInput[] | KeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutUserInput | KeyCreateOrConnectWithoutUserInput[]
    createMany?: KeyCreateManyUserInputEnvelope
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CollectionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutAuthorInput | CollectionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutAuthorInput | CollectionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutAuthorInput | CollectionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type TrackUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TrackCreateWithoutAuthorInput, TrackUncheckedCreateWithoutAuthorInput> | TrackCreateWithoutAuthorInput[] | TrackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAuthorInput | TrackCreateOrConnectWithoutAuthorInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAuthorInput | TrackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TrackCreateManyAuthorInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAuthorInput | TrackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAuthorInput | TrackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type KeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<KeyCreateWithoutUserInput, KeyUncheckedCreateWithoutUserInput> | KeyCreateWithoutUserInput[] | KeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutUserInput | KeyCreateOrConnectWithoutUserInput[]
    upsert?: KeyUpsertWithWhereUniqueWithoutUserInput | KeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KeyCreateManyUserInputEnvelope
    set?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    disconnect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    delete?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    update?: KeyUpdateWithWhereUniqueWithoutUserInput | KeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KeyUpdateManyWithWhereWithoutUserInput | KeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KeyScalarWhereInput | KeyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollectionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutAuthorInput | CollectionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutAuthorInput | CollectionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutAuthorInput | CollectionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TrackCreateWithoutAuthorInput, TrackUncheckedCreateWithoutAuthorInput> | TrackCreateWithoutAuthorInput[] | TrackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAuthorInput | TrackCreateOrConnectWithoutAuthorInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAuthorInput | TrackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TrackCreateManyAuthorInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAuthorInput | TrackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAuthorInput | TrackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type KeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KeyCreateWithoutUserInput, KeyUncheckedCreateWithoutUserInput> | KeyCreateWithoutUserInput[] | KeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutUserInput | KeyCreateOrConnectWithoutUserInput[]
    upsert?: KeyUpsertWithWhereUniqueWithoutUserInput | KeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KeyCreateManyUserInputEnvelope
    set?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    disconnect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    delete?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    update?: KeyUpdateWithWhereUniqueWithoutUserInput | KeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KeyUpdateManyWithWhereWithoutUserInput | KeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KeyScalarWhereInput | KeyScalarWhereInput[]
  }

  export type TrackCreateNestedManyWithoutCollectionsInput = {
    create?: XOR<TrackCreateWithoutCollectionsInput, TrackUncheckedCreateWithoutCollectionsInput> | TrackCreateWithoutCollectionsInput[] | TrackUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutCollectionsInput | TrackCreateOrConnectWithoutCollectionsInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackOnCollectionCreateNestedManyWithoutCollectionInput = {
    create?: XOR<TrackOnCollectionCreateWithoutCollectionInput, TrackOnCollectionUncheckedCreateWithoutCollectionInput> | TrackOnCollectionCreateWithoutCollectionInput[] | TrackOnCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutCollectionInput | TrackOnCollectionCreateOrConnectWithoutCollectionInput[]
    createMany?: TrackOnCollectionCreateManyCollectionInputEnvelope
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type TrackUncheckedCreateNestedManyWithoutCollectionsInput = {
    create?: XOR<TrackCreateWithoutCollectionsInput, TrackUncheckedCreateWithoutCollectionsInput> | TrackCreateWithoutCollectionsInput[] | TrackUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutCollectionsInput | TrackCreateOrConnectWithoutCollectionsInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackOnCollectionUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<TrackOnCollectionCreateWithoutCollectionInput, TrackOnCollectionUncheckedCreateWithoutCollectionInput> | TrackOnCollectionCreateWithoutCollectionInput[] | TrackOnCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutCollectionInput | TrackOnCollectionCreateOrConnectWithoutCollectionInput[]
    createMany?: TrackOnCollectionCreateManyCollectionInputEnvelope
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
  }

  export type TrackUpdateManyWithoutCollectionsNestedInput = {
    create?: XOR<TrackCreateWithoutCollectionsInput, TrackUncheckedCreateWithoutCollectionsInput> | TrackCreateWithoutCollectionsInput[] | TrackUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutCollectionsInput | TrackCreateOrConnectWithoutCollectionsInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutCollectionsInput | TrackUpsertWithWhereUniqueWithoutCollectionsInput[]
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutCollectionsInput | TrackUpdateWithWhereUniqueWithoutCollectionsInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutCollectionsInput | TrackUpdateManyWithWhereWithoutCollectionsInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type TrackOnCollectionUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<TrackOnCollectionCreateWithoutCollectionInput, TrackOnCollectionUncheckedCreateWithoutCollectionInput> | TrackOnCollectionCreateWithoutCollectionInput[] | TrackOnCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutCollectionInput | TrackOnCollectionCreateOrConnectWithoutCollectionInput[]
    upsert?: TrackOnCollectionUpsertWithWhereUniqueWithoutCollectionInput | TrackOnCollectionUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: TrackOnCollectionCreateManyCollectionInputEnvelope
    set?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    disconnect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    delete?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    update?: TrackOnCollectionUpdateWithWhereUniqueWithoutCollectionInput | TrackOnCollectionUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: TrackOnCollectionUpdateManyWithWhereWithoutCollectionInput | TrackOnCollectionUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: TrackOnCollectionScalarWhereInput | TrackOnCollectionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type TrackUncheckedUpdateManyWithoutCollectionsNestedInput = {
    create?: XOR<TrackCreateWithoutCollectionsInput, TrackUncheckedCreateWithoutCollectionsInput> | TrackCreateWithoutCollectionsInput[] | TrackUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutCollectionsInput | TrackCreateOrConnectWithoutCollectionsInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutCollectionsInput | TrackUpsertWithWhereUniqueWithoutCollectionsInput[]
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutCollectionsInput | TrackUpdateWithWhereUniqueWithoutCollectionsInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutCollectionsInput | TrackUpdateManyWithWhereWithoutCollectionsInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type TrackOnCollectionUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<TrackOnCollectionCreateWithoutCollectionInput, TrackOnCollectionUncheckedCreateWithoutCollectionInput> | TrackOnCollectionCreateWithoutCollectionInput[] | TrackOnCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutCollectionInput | TrackOnCollectionCreateOrConnectWithoutCollectionInput[]
    upsert?: TrackOnCollectionUpsertWithWhereUniqueWithoutCollectionInput | TrackOnCollectionUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: TrackOnCollectionCreateManyCollectionInputEnvelope
    set?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    disconnect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    delete?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    update?: TrackOnCollectionUpdateWithWhereUniqueWithoutCollectionInput | TrackOnCollectionUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: TrackOnCollectionUpdateManyWithWhereWithoutCollectionInput | TrackOnCollectionUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: TrackOnCollectionScalarWhereInput | TrackOnCollectionScalarWhereInput[]
  }

  export type TrackAudioCreateNestedOneWithoutTrackInput = {
    create?: XOR<TrackAudioCreateWithoutTrackInput, TrackAudioUncheckedCreateWithoutTrackInput>
    connectOrCreate?: TrackAudioCreateOrConnectWithoutTrackInput
    connect?: TrackAudioWhereUniqueInput
  }

  export type CollectionCreateNestedManyWithoutTracksInput = {
    create?: XOR<CollectionCreateWithoutTracksInput, CollectionUncheckedCreateWithoutTracksInput> | CollectionCreateWithoutTracksInput[] | CollectionUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutTracksInput | CollectionCreateOrConnectWithoutTracksInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type TrackOnCollectionCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackOnCollectionCreateWithoutTrackInput, TrackOnCollectionUncheckedCreateWithoutTrackInput> | TrackOnCollectionCreateWithoutTrackInput[] | TrackOnCollectionUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutTrackInput | TrackOnCollectionCreateOrConnectWithoutTrackInput[]
    createMany?: TrackOnCollectionCreateManyTrackInputEnvelope
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTracksInput = {
    create?: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTracksInput
    connect?: UserWhereUniqueInput
  }

  export type TrackAudioUncheckedCreateNestedOneWithoutTrackInput = {
    create?: XOR<TrackAudioCreateWithoutTrackInput, TrackAudioUncheckedCreateWithoutTrackInput>
    connectOrCreate?: TrackAudioCreateOrConnectWithoutTrackInput
    connect?: TrackAudioWhereUniqueInput
  }

  export type CollectionUncheckedCreateNestedManyWithoutTracksInput = {
    create?: XOR<CollectionCreateWithoutTracksInput, CollectionUncheckedCreateWithoutTracksInput> | CollectionCreateWithoutTracksInput[] | CollectionUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutTracksInput | CollectionCreateOrConnectWithoutTracksInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type TrackOnCollectionUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackOnCollectionCreateWithoutTrackInput, TrackOnCollectionUncheckedCreateWithoutTrackInput> | TrackOnCollectionCreateWithoutTrackInput[] | TrackOnCollectionUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutTrackInput | TrackOnCollectionCreateOrConnectWithoutTrackInput[]
    createMany?: TrackOnCollectionCreateManyTrackInputEnvelope
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
  }

  export type TrackAudioUpdateOneWithoutTrackNestedInput = {
    create?: XOR<TrackAudioCreateWithoutTrackInput, TrackAudioUncheckedCreateWithoutTrackInput>
    connectOrCreate?: TrackAudioCreateOrConnectWithoutTrackInput
    upsert?: TrackAudioUpsertWithoutTrackInput
    disconnect?: TrackAudioWhereInput | boolean
    delete?: TrackAudioWhereInput | boolean
    connect?: TrackAudioWhereUniqueInput
    update?: XOR<XOR<TrackAudioUpdateToOneWithWhereWithoutTrackInput, TrackAudioUpdateWithoutTrackInput>, TrackAudioUncheckedUpdateWithoutTrackInput>
  }

  export type CollectionUpdateManyWithoutTracksNestedInput = {
    create?: XOR<CollectionCreateWithoutTracksInput, CollectionUncheckedCreateWithoutTracksInput> | CollectionCreateWithoutTracksInput[] | CollectionUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutTracksInput | CollectionCreateOrConnectWithoutTracksInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutTracksInput | CollectionUpsertWithWhereUniqueWithoutTracksInput[]
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutTracksInput | CollectionUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutTracksInput | CollectionUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type TrackOnCollectionUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackOnCollectionCreateWithoutTrackInput, TrackOnCollectionUncheckedCreateWithoutTrackInput> | TrackOnCollectionCreateWithoutTrackInput[] | TrackOnCollectionUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutTrackInput | TrackOnCollectionCreateOrConnectWithoutTrackInput[]
    upsert?: TrackOnCollectionUpsertWithWhereUniqueWithoutTrackInput | TrackOnCollectionUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackOnCollectionCreateManyTrackInputEnvelope
    set?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    disconnect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    delete?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    update?: TrackOnCollectionUpdateWithWhereUniqueWithoutTrackInput | TrackOnCollectionUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackOnCollectionUpdateManyWithWhereWithoutTrackInput | TrackOnCollectionUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackOnCollectionScalarWhereInput | TrackOnCollectionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTracksInput
    upsert?: UserUpsertWithoutTracksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTracksInput, UserUpdateWithoutTracksInput>, UserUncheckedUpdateWithoutTracksInput>
  }

  export type TrackAudioUncheckedUpdateOneWithoutTrackNestedInput = {
    create?: XOR<TrackAudioCreateWithoutTrackInput, TrackAudioUncheckedCreateWithoutTrackInput>
    connectOrCreate?: TrackAudioCreateOrConnectWithoutTrackInput
    upsert?: TrackAudioUpsertWithoutTrackInput
    disconnect?: TrackAudioWhereInput | boolean
    delete?: TrackAudioWhereInput | boolean
    connect?: TrackAudioWhereUniqueInput
    update?: XOR<XOR<TrackAudioUpdateToOneWithWhereWithoutTrackInput, TrackAudioUpdateWithoutTrackInput>, TrackAudioUncheckedUpdateWithoutTrackInput>
  }

  export type CollectionUncheckedUpdateManyWithoutTracksNestedInput = {
    create?: XOR<CollectionCreateWithoutTracksInput, CollectionUncheckedCreateWithoutTracksInput> | CollectionCreateWithoutTracksInput[] | CollectionUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutTracksInput | CollectionCreateOrConnectWithoutTracksInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutTracksInput | CollectionUpsertWithWhereUniqueWithoutTracksInput[]
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutTracksInput | CollectionUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutTracksInput | CollectionUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type TrackOnCollectionUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackOnCollectionCreateWithoutTrackInput, TrackOnCollectionUncheckedCreateWithoutTrackInput> | TrackOnCollectionCreateWithoutTrackInput[] | TrackOnCollectionUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackOnCollectionCreateOrConnectWithoutTrackInput | TrackOnCollectionCreateOrConnectWithoutTrackInput[]
    upsert?: TrackOnCollectionUpsertWithWhereUniqueWithoutTrackInput | TrackOnCollectionUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackOnCollectionCreateManyTrackInputEnvelope
    set?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    disconnect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    delete?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    connect?: TrackOnCollectionWhereUniqueInput | TrackOnCollectionWhereUniqueInput[]
    update?: TrackOnCollectionUpdateWithWhereUniqueWithoutTrackInput | TrackOnCollectionUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackOnCollectionUpdateManyWithWhereWithoutTrackInput | TrackOnCollectionUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackOnCollectionScalarWhereInput | TrackOnCollectionScalarWhereInput[]
  }

  export type TrackCreateNestedOneWithoutTrackOnCollectionInput = {
    create?: XOR<TrackCreateWithoutTrackOnCollectionInput, TrackUncheckedCreateWithoutTrackOnCollectionInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackOnCollectionInput
    connect?: TrackWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutTrackOnCollectionInput = {
    create?: XOR<CollectionCreateWithoutTrackOnCollectionInput, CollectionUncheckedCreateWithoutTrackOnCollectionInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutTrackOnCollectionInput
    connect?: CollectionWhereUniqueInput
  }

  export type TrackUpdateOneRequiredWithoutTrackOnCollectionNestedInput = {
    create?: XOR<TrackCreateWithoutTrackOnCollectionInput, TrackUncheckedCreateWithoutTrackOnCollectionInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackOnCollectionInput
    upsert?: TrackUpsertWithoutTrackOnCollectionInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutTrackOnCollectionInput, TrackUpdateWithoutTrackOnCollectionInput>, TrackUncheckedUpdateWithoutTrackOnCollectionInput>
  }

  export type CollectionUpdateOneRequiredWithoutTrackOnCollectionNestedInput = {
    create?: XOR<CollectionCreateWithoutTrackOnCollectionInput, CollectionUncheckedCreateWithoutTrackOnCollectionInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutTrackOnCollectionInput
    upsert?: CollectionUpsertWithoutTrackOnCollectionInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutTrackOnCollectionInput, CollectionUpdateWithoutTrackOnCollectionInput>, CollectionUncheckedUpdateWithoutTrackOnCollectionInput>
  }

  export type TrackCreateNestedOneWithoutTrackAudioInput = {
    create?: XOR<TrackCreateWithoutTrackAudioInput, TrackUncheckedCreateWithoutTrackAudioInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackAudioInput
    connect?: TrackWhereUniqueInput
  }

  export type TrackUpdateOneRequiredWithoutTrackAudioNestedInput = {
    create?: XOR<TrackCreateWithoutTrackAudioInput, TrackUncheckedCreateWithoutTrackAudioInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackAudioInput
    upsert?: TrackUpsertWithoutTrackAudioInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutTrackAudioInput, TrackUpdateWithoutTrackAudioInput>, TrackUncheckedUpdateWithoutTrackAudioInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutKeyInput = {
    create?: XOR<UserCreateWithoutKeyInput, UserUncheckedCreateWithoutKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutKeyNestedInput = {
    create?: XOR<UserCreateWithoutKeyInput, UserUncheckedCreateWithoutKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyInput
    upsert?: UserUpsertWithoutKeyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKeyInput, UserUpdateWithoutKeyInput>, UserUncheckedUpdateWithoutKeyInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type CollectionCreateWithoutAuthorInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    tracks?: TrackCreateNestedManyWithoutCollectionsInput
    TrackOnCollection?: TrackOnCollectionCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutAuthorInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    tracks?: TrackUncheckedCreateNestedManyWithoutCollectionsInput
    TrackOnCollection?: TrackOnCollectionUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutAuthorInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput>
  }

  export type CollectionCreateManyAuthorInputEnvelope = {
    data: CollectionCreateManyAuthorInput | CollectionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TrackCreateWithoutAuthorInput = {
    name: string
    coverImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioCreateNestedOneWithoutTrackInput
    collections?: CollectionCreateNestedManyWithoutTracksInput
    TrackOnCollection?: TrackOnCollectionCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutAuthorInput = {
    id?: number
    name: string
    coverImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioUncheckedCreateNestedOneWithoutTrackInput
    collections?: CollectionUncheckedCreateNestedManyWithoutTracksInput
    TrackOnCollection?: TrackOnCollectionUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutAuthorInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutAuthorInput, TrackUncheckedCreateWithoutAuthorInput>
  }

  export type TrackCreateManyAuthorInputEnvelope = {
    data: TrackCreateManyAuthorInput | TrackCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    active_expires: bigint | number
    idle_expires: bigint | number
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    active_expires: bigint | number
    idle_expires: bigint | number
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KeyCreateWithoutUserInput = {
    id: string
    hashed_password?: string | null
  }

  export type KeyUncheckedCreateWithoutUserInput = {
    id: string
    hashed_password?: string | null
  }

  export type KeyCreateOrConnectWithoutUserInput = {
    where: KeyWhereUniqueInput
    create: XOR<KeyCreateWithoutUserInput, KeyUncheckedCreateWithoutUserInput>
  }

  export type KeyCreateManyUserInputEnvelope = {
    data: KeyCreateManyUserInput | KeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CollectionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutAuthorInput, CollectionUncheckedUpdateWithoutAuthorInput>
    create: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutAuthorInput, CollectionUncheckedUpdateWithoutAuthorInput>
  }

  export type CollectionUpdateManyWithWhereWithoutAuthorInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    coverImage?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    authorId?: IntFilter<"Collection"> | number
  }

  export type TrackUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutAuthorInput, TrackUncheckedUpdateWithoutAuthorInput>
    create: XOR<TrackCreateWithoutAuthorInput, TrackUncheckedCreateWithoutAuthorInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutAuthorInput, TrackUncheckedUpdateWithoutAuthorInput>
  }

  export type TrackUpdateManyWithWhereWithoutAuthorInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    id?: IntFilter<"Track"> | number
    name?: StringFilter<"Track"> | string
    coverImage?: StringFilter<"Track"> | string
    authorId?: IntFilter<"Track"> | number
    createdAt?: DateTimeFilter<"Track"> | Date | string
    updatedAt?: DateTimeFilter<"Track"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    user_id?: IntFilter<"Session"> | number
    active_expires?: BigIntFilter<"Session"> | bigint | number
    idle_expires?: BigIntFilter<"Session"> | bigint | number
  }

  export type KeyUpsertWithWhereUniqueWithoutUserInput = {
    where: KeyWhereUniqueInput
    update: XOR<KeyUpdateWithoutUserInput, KeyUncheckedUpdateWithoutUserInput>
    create: XOR<KeyCreateWithoutUserInput, KeyUncheckedCreateWithoutUserInput>
  }

  export type KeyUpdateWithWhereUniqueWithoutUserInput = {
    where: KeyWhereUniqueInput
    data: XOR<KeyUpdateWithoutUserInput, KeyUncheckedUpdateWithoutUserInput>
  }

  export type KeyUpdateManyWithWhereWithoutUserInput = {
    where: KeyScalarWhereInput
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyWithoutUserInput>
  }

  export type KeyScalarWhereInput = {
    AND?: KeyScalarWhereInput | KeyScalarWhereInput[]
    OR?: KeyScalarWhereInput[]
    NOT?: KeyScalarWhereInput | KeyScalarWhereInput[]
    id?: StringFilter<"Key"> | string
    hashed_password?: StringNullableFilter<"Key"> | string | null
    user_id?: IntFilter<"Key"> | number
  }

  export type TrackCreateWithoutCollectionsInput = {
    name: string
    coverImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioCreateNestedOneWithoutTrackInput
    TrackOnCollection?: TrackOnCollectionCreateNestedManyWithoutTrackInput
    author: UserCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutCollectionsInput = {
    id?: number
    name: string
    coverImage: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioUncheckedCreateNestedOneWithoutTrackInput
    TrackOnCollection?: TrackOnCollectionUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutCollectionsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutCollectionsInput, TrackUncheckedCreateWithoutCollectionsInput>
  }

  export type TrackOnCollectionCreateWithoutCollectionInput = {
    addedAt?: Date | string
    track: TrackCreateNestedOneWithoutTrackOnCollectionInput
  }

  export type TrackOnCollectionUncheckedCreateWithoutCollectionInput = {
    trackId: number
    addedAt?: Date | string
  }

  export type TrackOnCollectionCreateOrConnectWithoutCollectionInput = {
    where: TrackOnCollectionWhereUniqueInput
    create: XOR<TrackOnCollectionCreateWithoutCollectionInput, TrackOnCollectionUncheckedCreateWithoutCollectionInput>
  }

  export type TrackOnCollectionCreateManyCollectionInputEnvelope = {
    data: TrackOnCollectionCreateManyCollectionInput | TrackOnCollectionCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCollectionsInput = {
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackCreateNestedManyWithoutAuthorInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Key?: KeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackUncheckedCreateNestedManyWithoutAuthorInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Key?: KeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type TrackUpsertWithWhereUniqueWithoutCollectionsInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutCollectionsInput, TrackUncheckedUpdateWithoutCollectionsInput>
    create: XOR<TrackCreateWithoutCollectionsInput, TrackUncheckedCreateWithoutCollectionsInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutCollectionsInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutCollectionsInput, TrackUncheckedUpdateWithoutCollectionsInput>
  }

  export type TrackUpdateManyWithWhereWithoutCollectionsInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutCollectionsInput>
  }

  export type TrackOnCollectionUpsertWithWhereUniqueWithoutCollectionInput = {
    where: TrackOnCollectionWhereUniqueInput
    update: XOR<TrackOnCollectionUpdateWithoutCollectionInput, TrackOnCollectionUncheckedUpdateWithoutCollectionInput>
    create: XOR<TrackOnCollectionCreateWithoutCollectionInput, TrackOnCollectionUncheckedCreateWithoutCollectionInput>
  }

  export type TrackOnCollectionUpdateWithWhereUniqueWithoutCollectionInput = {
    where: TrackOnCollectionWhereUniqueInput
    data: XOR<TrackOnCollectionUpdateWithoutCollectionInput, TrackOnCollectionUncheckedUpdateWithoutCollectionInput>
  }

  export type TrackOnCollectionUpdateManyWithWhereWithoutCollectionInput = {
    where: TrackOnCollectionScalarWhereInput
    data: XOR<TrackOnCollectionUpdateManyMutationInput, TrackOnCollectionUncheckedUpdateManyWithoutCollectionInput>
  }

  export type TrackOnCollectionScalarWhereInput = {
    AND?: TrackOnCollectionScalarWhereInput | TrackOnCollectionScalarWhereInput[]
    OR?: TrackOnCollectionScalarWhereInput[]
    NOT?: TrackOnCollectionScalarWhereInput | TrackOnCollectionScalarWhereInput[]
    trackId?: IntFilter<"TrackOnCollection"> | number
    collectionId?: StringFilter<"TrackOnCollection"> | string
    addedAt?: DateTimeFilter<"TrackOnCollection"> | Date | string
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUpdateManyWithoutAuthorNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Key?: KeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUncheckedUpdateManyWithoutAuthorNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Key?: KeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrackAudioCreateWithoutTrackInput = {
    audioUrl: string
    duration: number
  }

  export type TrackAudioUncheckedCreateWithoutTrackInput = {
    id?: number
    audioUrl: string
    duration: number
  }

  export type TrackAudioCreateOrConnectWithoutTrackInput = {
    where: TrackAudioWhereUniqueInput
    create: XOR<TrackAudioCreateWithoutTrackInput, TrackAudioUncheckedCreateWithoutTrackInput>
  }

  export type CollectionCreateWithoutTracksInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    TrackOnCollection?: TrackOnCollectionCreateNestedManyWithoutCollectionInput
    author: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    authorId: number
    TrackOnCollection?: TrackOnCollectionUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutTracksInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutTracksInput, CollectionUncheckedCreateWithoutTracksInput>
  }

  export type TrackOnCollectionCreateWithoutTrackInput = {
    addedAt?: Date | string
    collection: CollectionCreateNestedOneWithoutTrackOnCollectionInput
  }

  export type TrackOnCollectionUncheckedCreateWithoutTrackInput = {
    collectionId: string
    addedAt?: Date | string
  }

  export type TrackOnCollectionCreateOrConnectWithoutTrackInput = {
    where: TrackOnCollectionWhereUniqueInput
    create: XOR<TrackOnCollectionCreateWithoutTrackInput, TrackOnCollectionUncheckedCreateWithoutTrackInput>
  }

  export type TrackOnCollectionCreateManyTrackInputEnvelope = {
    data: TrackOnCollectionCreateManyTrackInput | TrackOnCollectionCreateManyTrackInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTracksInput = {
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Key?: KeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTracksInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Key?: KeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTracksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
  }

  export type TrackAudioUpsertWithoutTrackInput = {
    update: XOR<TrackAudioUpdateWithoutTrackInput, TrackAudioUncheckedUpdateWithoutTrackInput>
    create: XOR<TrackAudioCreateWithoutTrackInput, TrackAudioUncheckedCreateWithoutTrackInput>
    where?: TrackAudioWhereInput
  }

  export type TrackAudioUpdateToOneWithWhereWithoutTrackInput = {
    where?: TrackAudioWhereInput
    data: XOR<TrackAudioUpdateWithoutTrackInput, TrackAudioUncheckedUpdateWithoutTrackInput>
  }

  export type TrackAudioUpdateWithoutTrackInput = {
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type TrackAudioUncheckedUpdateWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionUpsertWithWhereUniqueWithoutTracksInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutTracksInput, CollectionUncheckedUpdateWithoutTracksInput>
    create: XOR<CollectionCreateWithoutTracksInput, CollectionUncheckedCreateWithoutTracksInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutTracksInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutTracksInput, CollectionUncheckedUpdateWithoutTracksInput>
  }

  export type CollectionUpdateManyWithWhereWithoutTracksInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutTracksInput>
  }

  export type TrackOnCollectionUpsertWithWhereUniqueWithoutTrackInput = {
    where: TrackOnCollectionWhereUniqueInput
    update: XOR<TrackOnCollectionUpdateWithoutTrackInput, TrackOnCollectionUncheckedUpdateWithoutTrackInput>
    create: XOR<TrackOnCollectionCreateWithoutTrackInput, TrackOnCollectionUncheckedCreateWithoutTrackInput>
  }

  export type TrackOnCollectionUpdateWithWhereUniqueWithoutTrackInput = {
    where: TrackOnCollectionWhereUniqueInput
    data: XOR<TrackOnCollectionUpdateWithoutTrackInput, TrackOnCollectionUncheckedUpdateWithoutTrackInput>
  }

  export type TrackOnCollectionUpdateManyWithWhereWithoutTrackInput = {
    where: TrackOnCollectionScalarWhereInput
    data: XOR<TrackOnCollectionUpdateManyMutationInput, TrackOnCollectionUncheckedUpdateManyWithoutTrackInput>
  }

  export type UserUpsertWithoutTracksInput = {
    update: XOR<UserUpdateWithoutTracksInput, UserUncheckedUpdateWithoutTracksInput>
    create: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTracksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTracksInput, UserUncheckedUpdateWithoutTracksInput>
  }

  export type UserUpdateWithoutTracksInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Key?: KeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Key?: KeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrackCreateWithoutTrackOnCollectionInput = {
    name: string
    coverImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioCreateNestedOneWithoutTrackInput
    collections?: CollectionCreateNestedManyWithoutTracksInput
    author: UserCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutTrackOnCollectionInput = {
    id?: number
    name: string
    coverImage: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TrackAudio?: TrackAudioUncheckedCreateNestedOneWithoutTrackInput
    collections?: CollectionUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TrackCreateOrConnectWithoutTrackOnCollectionInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutTrackOnCollectionInput, TrackUncheckedCreateWithoutTrackOnCollectionInput>
  }

  export type CollectionCreateWithoutTrackOnCollectionInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    tracks?: TrackCreateNestedManyWithoutCollectionsInput
    author: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutTrackOnCollectionInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
    authorId: number
    tracks?: TrackUncheckedCreateNestedManyWithoutCollectionsInput
  }

  export type CollectionCreateOrConnectWithoutTrackOnCollectionInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutTrackOnCollectionInput, CollectionUncheckedCreateWithoutTrackOnCollectionInput>
  }

  export type TrackUpsertWithoutTrackOnCollectionInput = {
    update: XOR<TrackUpdateWithoutTrackOnCollectionInput, TrackUncheckedUpdateWithoutTrackOnCollectionInput>
    create: XOR<TrackCreateWithoutTrackOnCollectionInput, TrackUncheckedCreateWithoutTrackOnCollectionInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutTrackOnCollectionInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutTrackOnCollectionInput, TrackUncheckedUpdateWithoutTrackOnCollectionInput>
  }

  export type TrackUpdateWithoutTrackOnCollectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUpdateOneWithoutTrackNestedInput
    collections?: CollectionUpdateManyWithoutTracksNestedInput
    author?: UserUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutTrackOnCollectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUncheckedUpdateOneWithoutTrackNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type CollectionUpsertWithoutTrackOnCollectionInput = {
    update: XOR<CollectionUpdateWithoutTrackOnCollectionInput, CollectionUncheckedUpdateWithoutTrackOnCollectionInput>
    create: XOR<CollectionCreateWithoutTrackOnCollectionInput, CollectionUncheckedCreateWithoutTrackOnCollectionInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutTrackOnCollectionInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutTrackOnCollectionInput, CollectionUncheckedUpdateWithoutTrackOnCollectionInput>
  }

  export type CollectionUpdateWithoutTrackOnCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TrackUpdateManyWithoutCollectionsNestedInput
    author?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutTrackOnCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    tracks?: TrackUncheckedUpdateManyWithoutCollectionsNestedInput
  }

  export type TrackCreateWithoutTrackAudioInput = {
    name: string
    coverImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionCreateNestedManyWithoutTracksInput
    TrackOnCollection?: TrackOnCollectionCreateNestedManyWithoutTrackInput
    author: UserCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutTrackAudioInput = {
    id?: number
    name: string
    coverImage: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionUncheckedCreateNestedManyWithoutTracksInput
    TrackOnCollection?: TrackOnCollectionUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutTrackAudioInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutTrackAudioInput, TrackUncheckedCreateWithoutTrackAudioInput>
  }

  export type TrackUpsertWithoutTrackAudioInput = {
    update: XOR<TrackUpdateWithoutTrackAudioInput, TrackUncheckedUpdateWithoutTrackAudioInput>
    create: XOR<TrackCreateWithoutTrackAudioInput, TrackUncheckedCreateWithoutTrackAudioInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutTrackAudioInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutTrackAudioInput, TrackUncheckedUpdateWithoutTrackAudioInput>
  }

  export type TrackUpdateWithoutTrackAudioInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUpdateManyWithoutTracksNestedInput
    TrackOnCollection?: TrackOnCollectionUpdateManyWithoutTrackNestedInput
    author?: UserUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutTrackAudioInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUncheckedUpdateManyWithoutTracksNestedInput
    TrackOnCollection?: TrackOnCollectionUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    tracks?: TrackCreateNestedManyWithoutAuthorInput
    Key?: KeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    tracks?: TrackUncheckedCreateNestedManyWithoutAuthorInput
    Key?: KeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    tracks?: TrackUpdateManyWithoutAuthorNestedInput
    Key?: KeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutAuthorNestedInput
    Key?: KeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutKeyInput = {
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    tracks?: TrackCreateNestedManyWithoutAuthorInput
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKeyInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    coverImage?: string | null
    profileImage?: string | null
    artist: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    tracks?: TrackUncheckedCreateNestedManyWithoutAuthorInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKeyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKeyInput, UserUncheckedCreateWithoutKeyInput>
  }

  export type UserUpsertWithoutKeyInput = {
    update: XOR<UserUpdateWithoutKeyInput, UserUncheckedUpdateWithoutKeyInput>
    create: XOR<UserCreateWithoutKeyInput, UserUncheckedCreateWithoutKeyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKeyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKeyInput, UserUncheckedUpdateWithoutKeyInput>
  }

  export type UserUpdateWithoutKeyInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    tracks?: TrackUpdateManyWithoutAuthorNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutAuthorNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionCreateManyAuthorInput = {
    id?: string
    name: string
    coverImage: string
    description?: string | null
  }

  export type TrackCreateManyAuthorInput = {
    id?: number
    name: string
    coverImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    active_expires: bigint | number
    idle_expires: bigint | number
  }

  export type KeyCreateManyUserInput = {
    id: string
    hashed_password?: string | null
  }

  export type CollectionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TrackUpdateManyWithoutCollectionsNestedInput
    TrackOnCollection?: TrackOnCollectionUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TrackUncheckedUpdateManyWithoutCollectionsNestedInput
    TrackOnCollection?: TrackOnCollectionUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUpdateOneWithoutTrackNestedInput
    collections?: CollectionUpdateManyWithoutTracksNestedInput
    TrackOnCollection?: TrackOnCollectionUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUncheckedUpdateOneWithoutTrackNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutTracksNestedInput
    TrackOnCollection?: TrackOnCollectionUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    idle_expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    idle_expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active_expires?: BigIntFieldUpdateOperationsInput | bigint | number
    idle_expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type KeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashed_password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashed_password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashed_password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackOnCollectionCreateManyCollectionInput = {
    trackId: number
    addedAt?: Date | string
  }

  export type TrackUpdateWithoutCollectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUpdateOneWithoutTrackNestedInput
    TrackOnCollection?: TrackOnCollectionUpdateManyWithoutTrackNestedInput
    author?: UserUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrackAudio?: TrackAudioUncheckedUpdateOneWithoutTrackNestedInput
    TrackOnCollection?: TrackOnCollectionUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackOnCollectionUpdateWithoutCollectionInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TrackUpdateOneRequiredWithoutTrackOnCollectionNestedInput
  }

  export type TrackOnCollectionUncheckedUpdateWithoutCollectionInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackOnCollectionUncheckedUpdateManyWithoutCollectionInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackOnCollectionCreateManyTrackInput = {
    collectionId: string
    addedAt?: Date | string
  }

  export type CollectionUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    TrackOnCollection?: TrackOnCollectionUpdateManyWithoutCollectionNestedInput
    author?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    TrackOnCollection?: TrackOnCollectionUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackOnCollectionUpdateWithoutTrackInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutTrackOnCollectionNestedInput
  }

  export type TrackOnCollectionUncheckedUpdateWithoutTrackInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackOnCollectionUncheckedUpdateManyWithoutTrackInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionCountOutputTypeDefaultArgs instead
     */
    export type CollectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackCountOutputTypeDefaultArgs instead
     */
    export type TrackCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistDefaultArgs instead
     */
    export type ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionDefaultArgs instead
     */
    export type CollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackDefaultArgs instead
     */
    export type TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackOnCollectionDefaultArgs instead
     */
    export type TrackOnCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackOnCollectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackAudioDefaultArgs instead
     */
    export type TrackAudioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackAudioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KeyDefaultArgs instead
     */
    export type KeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KeyDefaultArgs<ExtArgs>

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