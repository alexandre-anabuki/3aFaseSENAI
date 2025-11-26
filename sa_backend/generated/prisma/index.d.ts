
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model Inventario
 * 
 */
export type Inventario = $Result.DefaultSelection<Prisma.$InventarioPayload>
/**
 * Model Movimentacao
 * 
 */
export type Movimentacao = $Result.DefaultSelection<Prisma.$MovimentacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventario`: Exposes CRUD operations for the **Inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarios
    * const inventarios = await prisma.inventario.findMany()
    * ```
    */
  get inventario(): Prisma.InventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacao`: Exposes CRUD operations for the **Movimentacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimentacaos
    * const movimentacaos = await prisma.movimentacao.findMany()
    * ```
    */
  get movimentacao(): Prisma.MovimentacaoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Endereco: 'Endereco',
    Inventario: 'Inventario',
    Movimentacao: 'Movimentacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "endereco" | "inventario" | "movimentacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      Inventario: {
        payload: Prisma.$InventarioPayload<ExtArgs>
        fields: Prisma.InventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findFirst: {
            args: Prisma.InventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findMany: {
            args: Prisma.InventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          create: {
            args: Prisma.InventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          createMany: {
            args: Prisma.InventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          delete: {
            args: Prisma.InventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          update: {
            args: Prisma.InventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          deleteMany: {
            args: Prisma.InventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          upsert: {
            args: Prisma.InventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          aggregate: {
            args: Prisma.InventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario>
          }
          groupBy: {
            args: Prisma.InventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventarioCountArgs<ExtArgs>
            result: $Utils.Optional<InventarioCountAggregateOutputType> | number
          }
        }
      }
      Movimentacao: {
        payload: Prisma.$MovimentacaoPayload<ExtArgs>
        fields: Prisma.MovimentacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          update: {
            args: Prisma.MovimentacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimentacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          upsert: {
            args: Prisma.MovimentacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacao>
          }
          groupBy: {
            args: Prisma.MovimentacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoCountAggregateOutputType> | number
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    usuario?: UsuarioOmit
    endereco?: EnderecoOmit
    inventario?: InventarioOmit
    movimentacao?: MovimentacaoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    endereco: number
    movimentacao: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | UsuarioCountOutputTypeCountEnderecoArgs
    movimentacao?: boolean | UsuarioCountOutputTypeCountMovimentacaoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEnderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMovimentacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }


  /**
   * Count Type InventarioCountOutputType
   */

  export type InventarioCountOutputType = {
    movimentacao: number
  }

  export type InventarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacao?: boolean | InventarioCountOutputTypeCountMovimentacaoArgs
  }

  // Custom InputTypes
  /**
   * InventarioCountOutputType without action
   */
  export type InventarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventarioCountOutputType
     */
    select?: InventarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventarioCountOutputType without action
   */
  export type InventarioCountOutputTypeCountMovimentacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    data_nascimento: string | null
    cpf: string | null
    rg: string | null
    telefone: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    data_nascimento: string | null
    cpf: string | null
    rg: string | null
    telefone: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    password: number
    data_nascimento: number
    cpf: number
    rg: number
    telefone: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    data_nascimento?: true
    cpf?: true
    rg?: true
    telefone?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    data_nascimento?: true
    cpf?: true
    rg?: true
    telefone?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    data_nascimento?: true
    cpf?: true
    rg?: true
    telefone?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    data_nascimento?: boolean
    cpf?: boolean
    rg?: boolean
    telefone?: boolean
    endereco?: boolean | Usuario$enderecoArgs<ExtArgs>
    movimentacao?: boolean | Usuario$movimentacaoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    data_nascimento?: boolean
    cpf?: boolean
    rg?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    data_nascimento?: boolean
    cpf?: boolean
    rg?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    data_nascimento?: boolean
    cpf?: boolean
    rg?: boolean
    telefone?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "password" | "data_nascimento" | "cpf" | "rg" | "telefone", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | Usuario$enderecoArgs<ExtArgs>
    movimentacao?: boolean | Usuario$movimentacaoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      endereco: Prisma.$EnderecoPayload<ExtArgs>[]
      movimentacao: Prisma.$MovimentacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      password: string
      data_nascimento: string
      cpf: string
      rg: string
      telefone: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endereco<T extends Usuario$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$enderecoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacao<T extends Usuario$movimentacaoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$movimentacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly data_nascimento: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly rg: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.endereco
   */
  export type Usuario$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    cursor?: EnderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Usuario.movimentacao
   */
  export type Usuario$movimentacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    cep: string | null
    cidade: string | null
    estado: string | null
    rua: string | null
    numero: string | null
    complemeto: string | null
    bairro: string | null
    referencia: string | null
    usuario_id: number | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    cidade: string | null
    estado: string | null
    rua: string | null
    numero: string | null
    complemeto: string | null
    bairro: string | null
    referencia: string | null
    usuario_id: number | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    cep: number
    cidade: number
    estado: number
    rua: number
    numero: number
    complemeto: number
    bairro: number
    referencia: number
    usuario_id: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    cep?: true
    cidade?: true
    estado?: true
    rua?: true
    numero?: true
    complemeto?: true
    bairro?: true
    referencia?: true
    usuario_id?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    cep?: true
    cidade?: true
    estado?: true
    rua?: true
    numero?: true
    complemeto?: true
    bairro?: true
    referencia?: true
    usuario_id?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    cep?: true
    cidade?: true
    estado?: true
    rua?: true
    numero?: true
    complemeto?: true
    bairro?: true
    referencia?: true
    usuario_id?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: number
    cep: string
    cidade: string
    estado: string
    rua: string
    numero: string
    complemeto: string
    bairro: string
    referencia: string
    usuario_id: number
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    rua?: boolean
    numero?: boolean
    complemeto?: boolean
    bairro?: boolean
    referencia?: boolean
    usuario_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    rua?: boolean
    numero?: boolean
    complemeto?: boolean
    bairro?: boolean
    referencia?: boolean
    usuario_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    rua?: boolean
    numero?: boolean
    complemeto?: boolean
    bairro?: boolean
    referencia?: boolean
    usuario_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectScalar = {
    id?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    rua?: boolean
    numero?: boolean
    complemeto?: boolean
    bairro?: boolean
    referencia?: boolean
    usuario_id?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "cidade" | "estado" | "rua" | "numero" | "complemeto" | "bairro" | "referencia" | "usuario_id", ExtArgs["result"]["endereco"]>
  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EnderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EnderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cep: string
      cidade: string
      estado: string
      rua: string
      numero: string
      complemeto: string
      bairro: string
      referencia: string
      usuario_id: number
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {EnderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {EnderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'Int'>
    readonly cep: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly estado: FieldRef<"Endereco", 'String'>
    readonly rua: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'String'>
    readonly complemeto: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly referencia: FieldRef<"Endereco", 'String'>
    readonly usuario_id: FieldRef<"Endereco", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco createManyAndReturn
   */
  export type EnderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco updateManyAndReturn
   */
  export type EnderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to delete.
     */
    limit?: number
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
  }


  /**
   * Model Inventario
   */

  export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  export type InventarioAvgAggregateOutputType = {
    id: number | null
    estoque: number | null
    patrimonio: number | null
  }

  export type InventarioSumAggregateOutputType = {
    id: number | null
    estoque: number | null
    patrimonio: number | null
  }

  export type InventarioMinAggregateOutputType = {
    id: number | null
    nome_item: string | null
    estoque: number | null
    patrimonio: number | null
    preco_unitario: string | null
    preco_total: string | null
  }

  export type InventarioMaxAggregateOutputType = {
    id: number | null
    nome_item: string | null
    estoque: number | null
    patrimonio: number | null
    preco_unitario: string | null
    preco_total: string | null
  }

  export type InventarioCountAggregateOutputType = {
    id: number
    nome_item: number
    estoque: number
    patrimonio: number
    preco_unitario: number
    preco_total: number
    _all: number
  }


  export type InventarioAvgAggregateInputType = {
    id?: true
    estoque?: true
    patrimonio?: true
  }

  export type InventarioSumAggregateInputType = {
    id?: true
    estoque?: true
    patrimonio?: true
  }

  export type InventarioMinAggregateInputType = {
    id?: true
    nome_item?: true
    estoque?: true
    patrimonio?: true
    preco_unitario?: true
    preco_total?: true
  }

  export type InventarioMaxAggregateInputType = {
    id?: true
    nome_item?: true
    estoque?: true
    patrimonio?: true
    preco_unitario?: true
    preco_total?: true
  }

  export type InventarioCountAggregateInputType = {
    id?: true
    nome_item?: true
    estoque?: true
    patrimonio?: true
    preco_unitario?: true
    preco_total?: true
    _all?: true
  }

  export type InventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventario to aggregate.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventarios
    **/
    _count?: true | InventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarioMaxAggregateInputType
  }

  export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario[P]>
      : GetScalarType<T[P], AggregateInventario[P]>
  }




  export type InventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithAggregationInput | InventarioOrderByWithAggregationInput[]
    by: InventarioScalarFieldEnum[] | InventarioScalarFieldEnum
    having?: InventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarioCountAggregateInputType | true
    _avg?: InventarioAvgAggregateInputType
    _sum?: InventarioSumAggregateInputType
    _min?: InventarioMinAggregateInputType
    _max?: InventarioMaxAggregateInputType
  }

  export type InventarioGroupByOutputType = {
    id: number
    nome_item: string
    estoque: number
    patrimonio: number
    preco_unitario: string
    preco_total: string
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventarioGroupByOutputType[P]>
            : GetScalarType<T[P], InventarioGroupByOutputType[P]>
        }
      >
    >


  export type InventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_item?: boolean
    estoque?: boolean
    patrimonio?: boolean
    preco_unitario?: boolean
    preco_total?: boolean
    movimentacao?: boolean | Inventario$movimentacaoArgs<ExtArgs>
    _count?: boolean | InventarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>

  export type InventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_item?: boolean
    estoque?: boolean
    patrimonio?: boolean
    preco_unitario?: boolean
    preco_total?: boolean
  }, ExtArgs["result"]["inventario"]>

  export type InventarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_item?: boolean
    estoque?: boolean
    patrimonio?: boolean
    preco_unitario?: boolean
    preco_total?: boolean
  }, ExtArgs["result"]["inventario"]>

  export type InventarioSelectScalar = {
    id?: boolean
    nome_item?: boolean
    estoque?: boolean
    patrimonio?: boolean
    preco_unitario?: boolean
    preco_total?: boolean
  }

  export type InventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_item" | "estoque" | "patrimonio" | "preco_unitario" | "preco_total", ExtArgs["result"]["inventario"]>
  export type InventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacao?: boolean | Inventario$movimentacaoArgs<ExtArgs>
    _count?: boolean | InventarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InventarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventario"
    objects: {
      movimentacao: Prisma.$MovimentacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_item: string
      estoque: number
      patrimonio: number
      preco_unitario: string
      preco_total: string
    }, ExtArgs["result"]["inventario"]>
    composites: {}
  }

  type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = $Result.GetResult<Prisma.$InventarioPayload, S>

  type InventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventarioCountAggregateInputType | true
    }

  export interface InventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventario'], meta: { name: 'Inventario' } }
    /**
     * Find zero or one Inventario that matches the filter.
     * @param {InventarioFindUniqueArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventarioFindUniqueArgs>(args: SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventarioFindUniqueOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventarioFindFirstArgs>(args?: SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarios
     * const inventarios = await prisma.inventario.findMany()
     * 
     * // Get first 10 Inventarios
     * const inventarios = await prisma.inventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventarioWithIdOnly = await prisma.inventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventarioFindManyArgs>(args?: SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario.
     * @param {InventarioCreateArgs} args - Arguments to create a Inventario.
     * @example
     * // Create one Inventario
     * const Inventario = await prisma.inventario.create({
     *   data: {
     *     // ... data to create a Inventario
     *   }
     * })
     * 
     */
    create<T extends InventarioCreateArgs>(args: SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventarios.
     * @param {InventarioCreateManyArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventarioCreateManyArgs>(args?: SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventarios and returns the data saved in the database.
     * @param {InventarioCreateManyAndReturnArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventarios and only return the `id`
     * const inventarioWithIdOnly = await prisma.inventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, InventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventario.
     * @param {InventarioDeleteArgs} args - Arguments to delete one Inventario.
     * @example
     * // Delete one Inventario
     * const Inventario = await prisma.inventario.delete({
     *   where: {
     *     // ... filter to delete one Inventario
     *   }
     * })
     * 
     */
    delete<T extends InventarioDeleteArgs>(args: SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario.
     * @param {InventarioUpdateArgs} args - Arguments to update one Inventario.
     * @example
     * // Update one Inventario
     * const inventario = await prisma.inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventarioUpdateArgs>(args: SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventarios.
     * @param {InventarioDeleteManyArgs} args - Arguments to filter Inventarios to delete.
     * @example
     * // Delete a few Inventarios
     * const { count } = await prisma.inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventarioDeleteManyArgs>(args?: SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventarioUpdateManyArgs>(args: SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios and returns the data updated in the database.
     * @param {InventarioUpdateManyAndReturnArgs} args - Arguments to update many Inventarios.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventarios and only return the `id`
     * const inventarioWithIdOnly = await prisma.inventario.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventarioUpdateManyAndReturnArgs>(args: SelectSubset<T, InventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventario.
     * @param {InventarioUpsertArgs} args - Arguments to update or create a Inventario.
     * @example
     * // Update or create a Inventario
     * const inventario = await prisma.inventario.upsert({
     *   create: {
     *     // ... data to create a Inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario we want to update
     *   }
     * })
     */
    upsert<T extends InventarioUpsertArgs>(args: SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioCountArgs} args - Arguments to filter Inventarios to count.
     * @example
     * // Count the number of Inventarios
     * const count = await prisma.inventario.count({
     *   where: {
     *     // ... the filter for the Inventarios we want to count
     *   }
     * })
    **/
    count<T extends InventarioCountArgs>(
      args?: Subset<T, InventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventarioAggregateArgs>(args: Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>

    /**
     * Group by Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioGroupByArgs} args - Group by arguments.
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
      T extends InventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventarioGroupByArgs['orderBy'] }
        : { orderBy?: InventarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventario model
   */
  readonly fields: InventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimentacao<T extends Inventario$movimentacaoArgs<ExtArgs> = {}>(args?: Subset<T, Inventario$movimentacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Inventario model
   */
  interface InventarioFieldRefs {
    readonly id: FieldRef<"Inventario", 'Int'>
    readonly nome_item: FieldRef<"Inventario", 'String'>
    readonly estoque: FieldRef<"Inventario", 'Int'>
    readonly patrimonio: FieldRef<"Inventario", 'Int'>
    readonly preco_unitario: FieldRef<"Inventario", 'String'>
    readonly preco_total: FieldRef<"Inventario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventario findUnique
   */
  export type InventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findUniqueOrThrow
   */
  export type InventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findFirst
   */
  export type InventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findFirstOrThrow
   */
  export type InventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findMany
   */
  export type InventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventarios to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario create
   */
  export type InventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventario.
     */
    data: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
  }

  /**
   * Inventario createMany
   */
  export type InventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventario createManyAndReturn
   */
  export type InventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventario update
   */
  export type InventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventario.
     */
    data: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
    /**
     * Choose, which Inventario to update.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario updateMany
   */
  export type InventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to update.
     */
    limit?: number
  }

  /**
   * Inventario updateManyAndReturn
   */
  export type InventarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to update.
     */
    limit?: number
  }

  /**
   * Inventario upsert
   */
  export type InventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventario to update in case it exists.
     */
    where: InventarioWhereUniqueInput
    /**
     * In case the Inventario found by the `where` argument doesn't exist, create a new Inventario with this data.
     */
    create: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
    /**
     * In case the Inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
  }

  /**
   * Inventario delete
   */
  export type InventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter which Inventario to delete.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario deleteMany
   */
  export type InventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventarios to delete
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to delete.
     */
    limit?: number
  }

  /**
   * Inventario.movimentacao
   */
  export type Inventario$movimentacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Inventario without action
   */
  export type InventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
  }


  /**
   * Model Movimentacao
   */

  export type AggregateMovimentacao = {
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  export type MovimentacaoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    inventario_id: number | null
    usuario_id: number | null
  }

  export type MovimentacaoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    inventario_id: number | null
    usuario_id: number | null
  }

  export type MovimentacaoMinAggregateOutputType = {
    id: number | null
    data_movimento: Date | null
    tipo_movimento: string | null
    nome_cliente: string | null
    item: string | null
    quantidade: number | null
    custo_total: string | null
    inventario_id: number | null
    usuario_id: number | null
  }

  export type MovimentacaoMaxAggregateOutputType = {
    id: number | null
    data_movimento: Date | null
    tipo_movimento: string | null
    nome_cliente: string | null
    item: string | null
    quantidade: number | null
    custo_total: string | null
    inventario_id: number | null
    usuario_id: number | null
  }

  export type MovimentacaoCountAggregateOutputType = {
    id: number
    data_movimento: number
    tipo_movimento: number
    nome_cliente: number
    item: number
    quantidade: number
    custo_total: number
    inventario_id: number
    usuario_id: number
    _all: number
  }


  export type MovimentacaoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    inventario_id?: true
    usuario_id?: true
  }

  export type MovimentacaoSumAggregateInputType = {
    id?: true
    quantidade?: true
    inventario_id?: true
    usuario_id?: true
  }

  export type MovimentacaoMinAggregateInputType = {
    id?: true
    data_movimento?: true
    tipo_movimento?: true
    nome_cliente?: true
    item?: true
    quantidade?: true
    custo_total?: true
    inventario_id?: true
    usuario_id?: true
  }

  export type MovimentacaoMaxAggregateInputType = {
    id?: true
    data_movimento?: true
    tipo_movimento?: true
    nome_cliente?: true
    item?: true
    quantidade?: true
    custo_total?: true
    inventario_id?: true
    usuario_id?: true
  }

  export type MovimentacaoCountAggregateInputType = {
    id?: true
    data_movimento?: true
    tipo_movimento?: true
    nome_cliente?: true
    item?: true
    quantidade?: true
    custo_total?: true
    inventario_id?: true
    usuario_id?: true
    _all?: true
  }

  export type MovimentacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacao to aggregate.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movimentacaos
    **/
    _count?: true | MovimentacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type GetMovimentacaoAggregateType<T extends MovimentacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacao[P]>
      : GetScalarType<T[P], AggregateMovimentacao[P]>
  }




  export type MovimentacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithAggregationInput | MovimentacaoOrderByWithAggregationInput[]
    by: MovimentacaoScalarFieldEnum[] | MovimentacaoScalarFieldEnum
    having?: MovimentacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoCountAggregateInputType | true
    _avg?: MovimentacaoAvgAggregateInputType
    _sum?: MovimentacaoSumAggregateInputType
    _min?: MovimentacaoMinAggregateInputType
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type MovimentacaoGroupByOutputType = {
    id: number
    data_movimento: Date
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    inventario_id: number
    usuario_id: number
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  type GetMovimentacaoGroupByPayload<T extends MovimentacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_movimento?: boolean
    tipo_movimento?: boolean
    nome_cliente?: boolean
    item?: boolean
    quantidade?: boolean
    custo_total?: boolean
    inventario_id?: boolean
    usuario_id?: boolean
    inventario?: boolean | InventarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_movimento?: boolean
    tipo_movimento?: boolean
    nome_cliente?: boolean
    item?: boolean
    quantidade?: boolean
    custo_total?: boolean
    inventario_id?: boolean
    usuario_id?: boolean
    inventario?: boolean | InventarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_movimento?: boolean
    tipo_movimento?: boolean
    nome_cliente?: boolean
    item?: boolean
    quantidade?: boolean
    custo_total?: boolean
    inventario_id?: boolean
    usuario_id?: boolean
    inventario?: boolean | InventarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectScalar = {
    id?: boolean
    data_movimento?: boolean
    tipo_movimento?: boolean
    nome_cliente?: boolean
    item?: boolean
    quantidade?: boolean
    custo_total?: boolean
    inventario_id?: boolean
    usuario_id?: boolean
  }

  export type MovimentacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_movimento" | "tipo_movimento" | "nome_cliente" | "item" | "quantidade" | "custo_total" | "inventario_id" | "usuario_id", ExtArgs["result"]["movimentacao"]>
  export type MovimentacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario?: boolean | InventarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MovimentacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario?: boolean | InventarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MovimentacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario?: boolean | InventarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MovimentacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movimentacao"
    objects: {
      inventario: Prisma.$InventarioPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_movimento: Date
      tipo_movimento: string
      nome_cliente: string
      item: string
      quantidade: number
      custo_total: string
      inventario_id: number
      usuario_id: number
    }, ExtArgs["result"]["movimentacao"]>
    composites: {}
  }

  type MovimentacaoGetPayload<S extends boolean | null | undefined | MovimentacaoDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoPayload, S>

  type MovimentacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoCountAggregateInputType | true
    }

  export interface MovimentacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movimentacao'], meta: { name: 'Movimentacao' } }
    /**
     * Find zero or one Movimentacao that matches the filter.
     * @param {MovimentacaoFindUniqueArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoFindUniqueArgs>(args: SelectSubset<T, MovimentacaoFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimentacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoFindUniqueOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoFindFirstArgs>(args?: SelectSubset<T, MovimentacaoFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimentacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany()
     * 
     * // Get first 10 Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoFindManyArgs>(args?: SelectSubset<T, MovimentacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimentacao.
     * @param {MovimentacaoCreateArgs} args - Arguments to create a Movimentacao.
     * @example
     * // Create one Movimentacao
     * const Movimentacao = await prisma.movimentacao.create({
     *   data: {
     *     // ... data to create a Movimentacao
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoCreateArgs>(args: SelectSubset<T, MovimentacaoCreateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimentacaos.
     * @param {MovimentacaoCreateManyArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoCreateManyArgs>(args?: SelectSubset<T, MovimentacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimentacaos and returns the data saved in the database.
     * @param {MovimentacaoCreateManyAndReturnArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimentacaos and only return the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimentacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimentacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movimentacao.
     * @param {MovimentacaoDeleteArgs} args - Arguments to delete one Movimentacao.
     * @example
     * // Delete one Movimentacao
     * const Movimentacao = await prisma.movimentacao.delete({
     *   where: {
     *     // ... filter to delete one Movimentacao
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoDeleteArgs>(args: SelectSubset<T, MovimentacaoDeleteArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimentacao.
     * @param {MovimentacaoUpdateArgs} args - Arguments to update one Movimentacao.
     * @example
     * // Update one Movimentacao
     * const movimentacao = await prisma.movimentacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoUpdateArgs>(args: SelectSubset<T, MovimentacaoUpdateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimentacaos.
     * @param {MovimentacaoDeleteManyArgs} args - Arguments to filter Movimentacaos to delete.
     * @example
     * // Delete a few Movimentacaos
     * const { count } = await prisma.movimentacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoUpdateManyArgs>(args: SelectSubset<T, MovimentacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos and returns the data updated in the database.
     * @param {MovimentacaoUpdateManyAndReturnArgs} args - Arguments to update many Movimentacaos.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movimentacaos and only return the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimentacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimentacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movimentacao.
     * @param {MovimentacaoUpsertArgs} args - Arguments to update or create a Movimentacao.
     * @example
     * // Update or create a Movimentacao
     * const movimentacao = await prisma.movimentacao.upsert({
     *   create: {
     *     // ... data to create a Movimentacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimentacao we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoUpsertArgs>(args: SelectSubset<T, MovimentacaoUpsertArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCountArgs} args - Arguments to filter Movimentacaos to count.
     * @example
     * // Count the number of Movimentacaos
     * const count = await prisma.movimentacao.count({
     *   where: {
     *     // ... the filter for the Movimentacaos we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoCountArgs>(
      args?: Subset<T, MovimentacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacaoAggregateArgs>(args: Subset<T, MovimentacaoAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoAggregateType<T>>

    /**
     * Group by Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoGroupByArgs} args - Group by arguments.
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
      T extends MovimentacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimentacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movimentacao model
   */
  readonly fields: MovimentacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movimentacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventario<T extends InventarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventarioDefaultArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movimentacao model
   */
  interface MovimentacaoFieldRefs {
    readonly id: FieldRef<"Movimentacao", 'Int'>
    readonly data_movimento: FieldRef<"Movimentacao", 'DateTime'>
    readonly tipo_movimento: FieldRef<"Movimentacao", 'String'>
    readonly nome_cliente: FieldRef<"Movimentacao", 'String'>
    readonly item: FieldRef<"Movimentacao", 'String'>
    readonly quantidade: FieldRef<"Movimentacao", 'Int'>
    readonly custo_total: FieldRef<"Movimentacao", 'String'>
    readonly inventario_id: FieldRef<"Movimentacao", 'Int'>
    readonly usuario_id: FieldRef<"Movimentacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Movimentacao findUnique
   */
  export type MovimentacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findUniqueOrThrow
   */
  export type MovimentacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findFirst
   */
  export type MovimentacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findFirstOrThrow
   */
  export type MovimentacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findMany
   */
  export type MovimentacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacaos to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao create
   */
  export type MovimentacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Movimentacao.
     */
    data: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
  }

  /**
   * Movimentacao createMany
   */
  export type MovimentacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movimentacao createManyAndReturn
   */
  export type MovimentacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimentacao update
   */
  export type MovimentacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Movimentacao.
     */
    data: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
    /**
     * Choose, which Movimentacao to update.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao updateMany
   */
  export type MovimentacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
  }

  /**
   * Movimentacao updateManyAndReturn
   */
  export type MovimentacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimentacao upsert
   */
  export type MovimentacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Movimentacao to update in case it exists.
     */
    where: MovimentacaoWhereUniqueInput
    /**
     * In case the Movimentacao found by the `where` argument doesn't exist, create a new Movimentacao with this data.
     */
    create: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
    /**
     * In case the Movimentacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
  }

  /**
   * Movimentacao delete
   */
  export type MovimentacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter which Movimentacao to delete.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao deleteMany
   */
  export type MovimentacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacaos to delete
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to delete.
     */
    limit?: number
  }

  /**
   * Movimentacao without action
   */
  export type MovimentacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    password: 'password',
    data_nascimento: 'data_nascimento',
    cpf: 'cpf',
    rg: 'rg',
    telefone: 'telefone'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    cidade: 'cidade',
    estado: 'estado',
    rua: 'rua',
    numero: 'numero',
    complemeto: 'complemeto',
    bairro: 'bairro',
    referencia: 'referencia',
    usuario_id: 'usuario_id'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const InventarioScalarFieldEnum: {
    id: 'id',
    nome_item: 'nome_item',
    estoque: 'estoque',
    patrimonio: 'patrimonio',
    preco_unitario: 'preco_unitario',
    preco_total: 'preco_total'
  };

  export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum]


  export const MovimentacaoScalarFieldEnum: {
    id: 'id',
    data_movimento: 'data_movimento',
    tipo_movimento: 'tipo_movimento',
    nome_cliente: 'nome_cliente',
    item: 'item',
    quantidade: 'quantidade',
    custo_total: 'custo_total',
    inventario_id: 'inventario_id',
    usuario_id: 'usuario_id'
  };

  export type MovimentacaoScalarFieldEnum = (typeof MovimentacaoScalarFieldEnum)[keyof typeof MovimentacaoScalarFieldEnum]


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    data_nascimento?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    rg?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    endereco?: EnderecoListRelationFilter
    movimentacao?: MovimentacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    telefone?: SortOrder
    endereco?: EnderecoOrderByRelationAggregateInput
    movimentacao?: MovimentacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    data_nascimento?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    rg?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    endereco?: EnderecoListRelationFilter
    movimentacao?: MovimentacaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    telefone?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    data_nascimento?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    rg?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: IntFilter<"Endereco"> | number
    cep?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    rua?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    complemeto?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    referencia?: StringFilter<"Endereco"> | string
    usuario_id?: IntFilter<"Endereco"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemeto?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
    usuario_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    cep?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    rua?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    complemeto?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    referencia?: StringFilter<"Endereco"> | string
    usuario_id?: IntFilter<"Endereco"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemeto?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
    usuario_id?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Endereco"> | number
    cep?: StringWithAggregatesFilter<"Endereco"> | string
    cidade?: StringWithAggregatesFilter<"Endereco"> | string
    estado?: StringWithAggregatesFilter<"Endereco"> | string
    rua?: StringWithAggregatesFilter<"Endereco"> | string
    numero?: StringWithAggregatesFilter<"Endereco"> | string
    complemeto?: StringWithAggregatesFilter<"Endereco"> | string
    bairro?: StringWithAggregatesFilter<"Endereco"> | string
    referencia?: StringWithAggregatesFilter<"Endereco"> | string
    usuario_id?: IntWithAggregatesFilter<"Endereco"> | number
  }

  export type InventarioWhereInput = {
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    id?: IntFilter<"Inventario"> | number
    nome_item?: StringFilter<"Inventario"> | string
    estoque?: IntFilter<"Inventario"> | number
    patrimonio?: IntFilter<"Inventario"> | number
    preco_unitario?: StringFilter<"Inventario"> | string
    preco_total?: StringFilter<"Inventario"> | string
    movimentacao?: MovimentacaoListRelationFilter
  }

  export type InventarioOrderByWithRelationInput = {
    id?: SortOrder
    nome_item?: SortOrder
    estoque?: SortOrder
    patrimonio?: SortOrder
    preco_unitario?: SortOrder
    preco_total?: SortOrder
    movimentacao?: MovimentacaoOrderByRelationAggregateInput
  }

  export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    nome_item?: StringFilter<"Inventario"> | string
    estoque?: IntFilter<"Inventario"> | number
    patrimonio?: IntFilter<"Inventario"> | number
    preco_unitario?: StringFilter<"Inventario"> | string
    preco_total?: StringFilter<"Inventario"> | string
    movimentacao?: MovimentacaoListRelationFilter
  }, "id">

  export type InventarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome_item?: SortOrder
    estoque?: SortOrder
    patrimonio?: SortOrder
    preco_unitario?: SortOrder
    preco_total?: SortOrder
    _count?: InventarioCountOrderByAggregateInput
    _avg?: InventarioAvgOrderByAggregateInput
    _max?: InventarioMaxOrderByAggregateInput
    _min?: InventarioMinOrderByAggregateInput
    _sum?: InventarioSumOrderByAggregateInput
  }

  export type InventarioScalarWhereWithAggregatesInput = {
    AND?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    OR?: InventarioScalarWhereWithAggregatesInput[]
    NOT?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventario"> | number
    nome_item?: StringWithAggregatesFilter<"Inventario"> | string
    estoque?: IntWithAggregatesFilter<"Inventario"> | number
    patrimonio?: IntWithAggregatesFilter<"Inventario"> | number
    preco_unitario?: StringWithAggregatesFilter<"Inventario"> | string
    preco_total?: StringWithAggregatesFilter<"Inventario"> | string
  }

  export type MovimentacaoWhereInput = {
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    data_movimento?: DateTimeFilter<"Movimentacao"> | Date | string
    tipo_movimento?: StringFilter<"Movimentacao"> | string
    nome_cliente?: StringFilter<"Movimentacao"> | string
    item?: StringFilter<"Movimentacao"> | string
    quantidade?: IntFilter<"Movimentacao"> | number
    custo_total?: StringFilter<"Movimentacao"> | string
    inventario_id?: IntFilter<"Movimentacao"> | number
    usuario_id?: IntFilter<"Movimentacao"> | number
    inventario?: XOR<InventarioScalarRelationFilter, InventarioWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MovimentacaoOrderByWithRelationInput = {
    id?: SortOrder
    data_movimento?: SortOrder
    tipo_movimento?: SortOrder
    nome_cliente?: SortOrder
    item?: SortOrder
    quantidade?: SortOrder
    custo_total?: SortOrder
    inventario_id?: SortOrder
    usuario_id?: SortOrder
    inventario?: InventarioOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type MovimentacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    data_movimento?: DateTimeFilter<"Movimentacao"> | Date | string
    tipo_movimento?: StringFilter<"Movimentacao"> | string
    nome_cliente?: StringFilter<"Movimentacao"> | string
    item?: StringFilter<"Movimentacao"> | string
    quantidade?: IntFilter<"Movimentacao"> | number
    custo_total?: StringFilter<"Movimentacao"> | string
    inventario_id?: IntFilter<"Movimentacao"> | number
    usuario_id?: IntFilter<"Movimentacao"> | number
    inventario?: XOR<InventarioScalarRelationFilter, InventarioWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MovimentacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data_movimento?: SortOrder
    tipo_movimento?: SortOrder
    nome_cliente?: SortOrder
    item?: SortOrder
    quantidade?: SortOrder
    custo_total?: SortOrder
    inventario_id?: SortOrder
    usuario_id?: SortOrder
    _count?: MovimentacaoCountOrderByAggregateInput
    _avg?: MovimentacaoAvgOrderByAggregateInput
    _max?: MovimentacaoMaxOrderByAggregateInput
    _min?: MovimentacaoMinOrderByAggregateInput
    _sum?: MovimentacaoSumOrderByAggregateInput
  }

  export type MovimentacaoScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movimentacao"> | number
    data_movimento?: DateTimeWithAggregatesFilter<"Movimentacao"> | Date | string
    tipo_movimento?: StringWithAggregatesFilter<"Movimentacao"> | string
    nome_cliente?: StringWithAggregatesFilter<"Movimentacao"> | string
    item?: StringWithAggregatesFilter<"Movimentacao"> | string
    quantidade?: IntWithAggregatesFilter<"Movimentacao"> | number
    custo_total?: StringWithAggregatesFilter<"Movimentacao"> | string
    inventario_id?: IntWithAggregatesFilter<"Movimentacao"> | number
    usuario_id?: IntWithAggregatesFilter<"Movimentacao"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
    endereco?: EnderecoCreateNestedManyWithoutUsuarioInput
    movimentacao?: MovimentacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
    endereco?: EnderecoUncheckedCreateNestedManyWithoutUsuarioInput
    movimentacao?: MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUpdateManyWithoutUsuarioNestedInput
    movimentacao?: MovimentacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    movimentacao?: MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoCreateInput = {
    cep: string
    cidade: string
    estado: string
    rua: string
    numero: string
    complemeto: string
    bairro: string
    referencia: string
    usuario: UsuarioCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: number
    cep: string
    cidade: string
    estado: string
    rua: string
    numero: string
    complemeto: string
    bairro: string
    referencia: string
    usuario_id: number
  }

  export type EnderecoUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemeto?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemeto?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnderecoCreateManyInput = {
    id?: number
    cep: string
    cidade: string
    estado: string
    rua: string
    numero: string
    complemeto: string
    bairro: string
    referencia: string
    usuario_id: number
  }

  export type EnderecoUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemeto?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemeto?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventarioCreateInput = {
    nome_item: string
    estoque: number
    patrimonio: number
    preco_unitario: string
    preco_total: string
    movimentacao?: MovimentacaoCreateNestedManyWithoutInventarioInput
  }

  export type InventarioUncheckedCreateInput = {
    id?: number
    nome_item: string
    estoque: number
    patrimonio: number
    preco_unitario: string
    preco_total: string
    movimentacao?: MovimentacaoUncheckedCreateNestedManyWithoutInventarioInput
  }

  export type InventarioUpdateInput = {
    nome_item?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    patrimonio?: IntFieldUpdateOperationsInput | number
    preco_unitario?: StringFieldUpdateOperationsInput | string
    preco_total?: StringFieldUpdateOperationsInput | string
    movimentacao?: MovimentacaoUpdateManyWithoutInventarioNestedInput
  }

  export type InventarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_item?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    patrimonio?: IntFieldUpdateOperationsInput | number
    preco_unitario?: StringFieldUpdateOperationsInput | string
    preco_total?: StringFieldUpdateOperationsInput | string
    movimentacao?: MovimentacaoUncheckedUpdateManyWithoutInventarioNestedInput
  }

  export type InventarioCreateManyInput = {
    id?: number
    nome_item: string
    estoque: number
    patrimonio: number
    preco_unitario: string
    preco_total: string
  }

  export type InventarioUpdateManyMutationInput = {
    nome_item?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    patrimonio?: IntFieldUpdateOperationsInput | number
    preco_unitario?: StringFieldUpdateOperationsInput | string
    preco_total?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_item?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    patrimonio?: IntFieldUpdateOperationsInput | number
    preco_unitario?: StringFieldUpdateOperationsInput | string
    preco_total?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCreateInput = {
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    inventario: InventarioCreateNestedOneWithoutMovimentacaoInput
    usuario: UsuarioCreateNestedOneWithoutMovimentacaoInput
  }

  export type MovimentacaoUncheckedCreateInput = {
    id?: number
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    inventario_id: number
    usuario_id: number
  }

  export type MovimentacaoUpdateInput = {
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    inventario?: InventarioUpdateOneRequiredWithoutMovimentacaoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMovimentacaoNestedInput
  }

  export type MovimentacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    inventario_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoCreateManyInput = {
    id?: number
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    inventario_id: number
    usuario_id: number
  }

  export type MovimentacaoUpdateManyMutationInput = {
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    inventario_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
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

  export type EnderecoListRelationFilter = {
    every?: EnderecoWhereInput
    some?: EnderecoWhereInput
    none?: EnderecoWhereInput
  }

  export type MovimentacaoListRelationFilter = {
    every?: MovimentacaoWhereInput
    some?: MovimentacaoWhereInput
    none?: MovimentacaoWhereInput
  }

  export type EnderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    telefone?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    telefone?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    telefone?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemeto?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
    usuario_id?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemeto?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
    usuario_id?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemeto?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
    usuario_id?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type InventarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome_item?: SortOrder
    estoque?: SortOrder
    patrimonio?: SortOrder
    preco_unitario?: SortOrder
    preco_total?: SortOrder
  }

  export type InventarioAvgOrderByAggregateInput = {
    id?: SortOrder
    estoque?: SortOrder
    patrimonio?: SortOrder
  }

  export type InventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_item?: SortOrder
    estoque?: SortOrder
    patrimonio?: SortOrder
    preco_unitario?: SortOrder
    preco_total?: SortOrder
  }

  export type InventarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome_item?: SortOrder
    estoque?: SortOrder
    patrimonio?: SortOrder
    preco_unitario?: SortOrder
    preco_total?: SortOrder
  }

  export type InventarioSumOrderByAggregateInput = {
    id?: SortOrder
    estoque?: SortOrder
    patrimonio?: SortOrder
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

  export type InventarioScalarRelationFilter = {
    is?: InventarioWhereInput
    isNot?: InventarioWhereInput
  }

  export type MovimentacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data_movimento?: SortOrder
    tipo_movimento?: SortOrder
    nome_cliente?: SortOrder
    item?: SortOrder
    quantidade?: SortOrder
    custo_total?: SortOrder
    inventario_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type MovimentacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    inventario_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type MovimentacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data_movimento?: SortOrder
    tipo_movimento?: SortOrder
    nome_cliente?: SortOrder
    item?: SortOrder
    quantidade?: SortOrder
    custo_total?: SortOrder
    inventario_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type MovimentacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data_movimento?: SortOrder
    tipo_movimento?: SortOrder
    nome_cliente?: SortOrder
    item?: SortOrder
    quantidade?: SortOrder
    custo_total?: SortOrder
    inventario_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type MovimentacaoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    inventario_id?: SortOrder
    usuario_id?: SortOrder
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

  export type EnderecoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type MovimentacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnderecoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutUsuarioInput | EnderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutUsuarioInput | EnderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutUsuarioInput | EnderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type MovimentacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutUsuarioInput | MovimentacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnderecoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutUsuarioInput | EnderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutUsuarioInput | EnderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutUsuarioInput | EnderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput> | MovimentacaoCreateWithoutUsuarioInput[] | MovimentacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutUsuarioInput | MovimentacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MovimentacaoCreateManyUsuarioInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput | MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutUsuarioInput | MovimentacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutEnderecoNestedInput = {
    create?: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecoInput
    upsert?: UsuarioUpsertWithoutEnderecoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEnderecoInput, UsuarioUpdateWithoutEnderecoInput>, UsuarioUncheckedUpdateWithoutEnderecoInput>
  }

  export type MovimentacaoCreateNestedManyWithoutInventarioInput = {
    create?: XOR<MovimentacaoCreateWithoutInventarioInput, MovimentacaoUncheckedCreateWithoutInventarioInput> | MovimentacaoCreateWithoutInventarioInput[] | MovimentacaoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInventarioInput | MovimentacaoCreateOrConnectWithoutInventarioInput[]
    createMany?: MovimentacaoCreateManyInventarioInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutInventarioInput = {
    create?: XOR<MovimentacaoCreateWithoutInventarioInput, MovimentacaoUncheckedCreateWithoutInventarioInput> | MovimentacaoCreateWithoutInventarioInput[] | MovimentacaoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInventarioInput | MovimentacaoCreateOrConnectWithoutInventarioInput[]
    createMany?: MovimentacaoCreateManyInventarioInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type MovimentacaoUpdateManyWithoutInventarioNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutInventarioInput, MovimentacaoUncheckedCreateWithoutInventarioInput> | MovimentacaoCreateWithoutInventarioInput[] | MovimentacaoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInventarioInput | MovimentacaoCreateOrConnectWithoutInventarioInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutInventarioInput | MovimentacaoUpsertWithWhereUniqueWithoutInventarioInput[]
    createMany?: MovimentacaoCreateManyInventarioInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutInventarioInput | MovimentacaoUpdateWithWhereUniqueWithoutInventarioInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutInventarioInput | MovimentacaoUpdateManyWithWhereWithoutInventarioInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutInventarioNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutInventarioInput, MovimentacaoUncheckedCreateWithoutInventarioInput> | MovimentacaoCreateWithoutInventarioInput[] | MovimentacaoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInventarioInput | MovimentacaoCreateOrConnectWithoutInventarioInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutInventarioInput | MovimentacaoUpsertWithWhereUniqueWithoutInventarioInput[]
    createMany?: MovimentacaoCreateManyInventarioInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutInventarioInput | MovimentacaoUpdateWithWhereUniqueWithoutInventarioInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutInventarioInput | MovimentacaoUpdateManyWithWhereWithoutInventarioInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type InventarioCreateNestedOneWithoutMovimentacaoInput = {
    create?: XOR<InventarioCreateWithoutMovimentacaoInput, InventarioUncheckedCreateWithoutMovimentacaoInput>
    connectOrCreate?: InventarioCreateOrConnectWithoutMovimentacaoInput
    connect?: InventarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMovimentacaoInput = {
    create?: XOR<UsuarioCreateWithoutMovimentacaoInput, UsuarioUncheckedCreateWithoutMovimentacaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimentacaoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventarioUpdateOneRequiredWithoutMovimentacaoNestedInput = {
    create?: XOR<InventarioCreateWithoutMovimentacaoInput, InventarioUncheckedCreateWithoutMovimentacaoInput>
    connectOrCreate?: InventarioCreateOrConnectWithoutMovimentacaoInput
    upsert?: InventarioUpsertWithoutMovimentacaoInput
    connect?: InventarioWhereUniqueInput
    update?: XOR<XOR<InventarioUpdateToOneWithWhereWithoutMovimentacaoInput, InventarioUpdateWithoutMovimentacaoInput>, InventarioUncheckedUpdateWithoutMovimentacaoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMovimentacaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutMovimentacaoInput, UsuarioUncheckedCreateWithoutMovimentacaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimentacaoInput
    upsert?: UsuarioUpsertWithoutMovimentacaoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMovimentacaoInput, UsuarioUpdateWithoutMovimentacaoInput>, UsuarioUncheckedUpdateWithoutMovimentacaoInput>
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

  export type EnderecoCreateWithoutUsuarioInput = {
    cep: string
    cidade: string
    estado: string
    rua: string
    numero: string
    complemeto: string
    bairro: string
    referencia: string
  }

  export type EnderecoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cep: string
    cidade: string
    estado: string
    rua: string
    numero: string
    complemeto: string
    bairro: string
    referencia: string
  }

  export type EnderecoCreateOrConnectWithoutUsuarioInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type EnderecoCreateManyUsuarioInputEnvelope = {
    data: EnderecoCreateManyUsuarioInput | EnderecoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoCreateWithoutUsuarioInput = {
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    inventario: InventarioCreateNestedOneWithoutMovimentacaoInput
  }

  export type MovimentacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    inventario_id: number
  }

  export type MovimentacaoCreateOrConnectWithoutUsuarioInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type MovimentacaoCreateManyUsuarioInputEnvelope = {
    data: MovimentacaoCreateManyUsuarioInput | MovimentacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EnderecoWhereUniqueInput
    update: XOR<EnderecoUpdateWithoutUsuarioInput, EnderecoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type EnderecoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EnderecoWhereUniqueInput
    data: XOR<EnderecoUpdateWithoutUsuarioInput, EnderecoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EnderecoUpdateManyWithWhereWithoutUsuarioInput = {
    where: EnderecoScalarWhereInput
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EnderecoScalarWhereInput = {
    AND?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    OR?: EnderecoScalarWhereInput[]
    NOT?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    id?: IntFilter<"Endereco"> | number
    cep?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    rua?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    complemeto?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    referencia?: StringFilter<"Endereco"> | string
    usuario_id?: IntFilter<"Endereco"> | number
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutUsuarioInput, MovimentacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MovimentacaoCreateWithoutUsuarioInput, MovimentacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutUsuarioInput, MovimentacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MovimentacaoScalarWhereInput = {
    AND?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    OR?: MovimentacaoScalarWhereInput[]
    NOT?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    data_movimento?: DateTimeFilter<"Movimentacao"> | Date | string
    tipo_movimento?: StringFilter<"Movimentacao"> | string
    nome_cliente?: StringFilter<"Movimentacao"> | string
    item?: StringFilter<"Movimentacao"> | string
    quantidade?: IntFilter<"Movimentacao"> | number
    custo_total?: StringFilter<"Movimentacao"> | string
    inventario_id?: IntFilter<"Movimentacao"> | number
    usuario_id?: IntFilter<"Movimentacao"> | number
  }

  export type UsuarioCreateWithoutEnderecoInput = {
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
    movimentacao?: MovimentacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEnderecoInput = {
    id?: number
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
    movimentacao?: MovimentacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEnderecoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
  }

  export type UsuarioUpsertWithoutEnderecoInput = {
    update: XOR<UsuarioUpdateWithoutEnderecoInput, UsuarioUncheckedUpdateWithoutEnderecoInput>
    create: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEnderecoInput, UsuarioUncheckedUpdateWithoutEnderecoInput>
  }

  export type UsuarioUpdateWithoutEnderecoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    movimentacao?: MovimentacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    movimentacao?: MovimentacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MovimentacaoCreateWithoutInventarioInput = {
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    usuario: UsuarioCreateNestedOneWithoutMovimentacaoInput
  }

  export type MovimentacaoUncheckedCreateWithoutInventarioInput = {
    id?: number
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    usuario_id: number
  }

  export type MovimentacaoCreateOrConnectWithoutInventarioInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutInventarioInput, MovimentacaoUncheckedCreateWithoutInventarioInput>
  }

  export type MovimentacaoCreateManyInventarioInputEnvelope = {
    data: MovimentacaoCreateManyInventarioInput | MovimentacaoCreateManyInventarioInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutInventarioInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutInventarioInput, MovimentacaoUncheckedUpdateWithoutInventarioInput>
    create: XOR<MovimentacaoCreateWithoutInventarioInput, MovimentacaoUncheckedCreateWithoutInventarioInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutInventarioInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutInventarioInput, MovimentacaoUncheckedUpdateWithoutInventarioInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutInventarioInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutInventarioInput>
  }

  export type InventarioCreateWithoutMovimentacaoInput = {
    nome_item: string
    estoque: number
    patrimonio: number
    preco_unitario: string
    preco_total: string
  }

  export type InventarioUncheckedCreateWithoutMovimentacaoInput = {
    id?: number
    nome_item: string
    estoque: number
    patrimonio: number
    preco_unitario: string
    preco_total: string
  }

  export type InventarioCreateOrConnectWithoutMovimentacaoInput = {
    where: InventarioWhereUniqueInput
    create: XOR<InventarioCreateWithoutMovimentacaoInput, InventarioUncheckedCreateWithoutMovimentacaoInput>
  }

  export type UsuarioCreateWithoutMovimentacaoInput = {
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
    endereco?: EnderecoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMovimentacaoInput = {
    id?: number
    nome: string
    email: string
    password: string
    data_nascimento: string
    cpf: string
    rg: string
    telefone: string
    endereco?: EnderecoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMovimentacaoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMovimentacaoInput, UsuarioUncheckedCreateWithoutMovimentacaoInput>
  }

  export type InventarioUpsertWithoutMovimentacaoInput = {
    update: XOR<InventarioUpdateWithoutMovimentacaoInput, InventarioUncheckedUpdateWithoutMovimentacaoInput>
    create: XOR<InventarioCreateWithoutMovimentacaoInput, InventarioUncheckedCreateWithoutMovimentacaoInput>
    where?: InventarioWhereInput
  }

  export type InventarioUpdateToOneWithWhereWithoutMovimentacaoInput = {
    where?: InventarioWhereInput
    data: XOR<InventarioUpdateWithoutMovimentacaoInput, InventarioUncheckedUpdateWithoutMovimentacaoInput>
  }

  export type InventarioUpdateWithoutMovimentacaoInput = {
    nome_item?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    patrimonio?: IntFieldUpdateOperationsInput | number
    preco_unitario?: StringFieldUpdateOperationsInput | string
    preco_total?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioUncheckedUpdateWithoutMovimentacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_item?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    patrimonio?: IntFieldUpdateOperationsInput | number
    preco_unitario?: StringFieldUpdateOperationsInput | string
    preco_total?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutMovimentacaoInput = {
    update: XOR<UsuarioUpdateWithoutMovimentacaoInput, UsuarioUncheckedUpdateWithoutMovimentacaoInput>
    create: XOR<UsuarioCreateWithoutMovimentacaoInput, UsuarioUncheckedCreateWithoutMovimentacaoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMovimentacaoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMovimentacaoInput, UsuarioUncheckedUpdateWithoutMovimentacaoInput>
  }

  export type UsuarioUpdateWithoutMovimentacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMovimentacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EnderecoCreateManyUsuarioInput = {
    id?: number
    cep: string
    cidade: string
    estado: string
    rua: string
    numero: string
    complemeto: string
    bairro: string
    referencia: string
  }

  export type MovimentacaoCreateManyUsuarioInput = {
    id?: number
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    inventario_id: number
  }

  export type EnderecoUpdateWithoutUsuarioInput = {
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemeto?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemeto?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemeto?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoUpdateWithoutUsuarioInput = {
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    inventario?: InventarioUpdateOneRequiredWithoutMovimentacaoNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    inventario_id?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    inventario_id?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoCreateManyInventarioInput = {
    id?: number
    data_movimento?: Date | string
    tipo_movimento: string
    nome_cliente: string
    item: string
    quantidade: number
    custo_total: string
    usuario_id: number
  }

  export type MovimentacaoUpdateWithoutInventarioInput = {
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutMovimentacaoNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutInventarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoUncheckedUpdateManyWithoutInventarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_movimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    nome_cliente?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    custo_total?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
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