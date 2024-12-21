import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Byte: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  CountryName: { input: any; output: any; }
  Cuid: { input: any; output: any; }
  Currency: { input: any; output: any; }
  DID: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeISO: { input: any; output: any; }
  DeweyDecimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  GUID: { input: any; output: any; }
  GeoJSON: { input: any; output: any; }
  HSL: { input: any; output: any; }
  HSLA: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  Hexadecimal: { input: any; output: any; }
  IBAN: { input: any; output: any; }
  IP: { input: any; output: any; }
  IPCPatent: { input: any; output: any; }
  IPv4: { input: any; output: any; }
  IPv6: { input: any; output: any; }
  ISBN: { input: any; output: any; }
  ISO8601Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JWT: { input: any; output: any; }
  LCCSubclass: { input: any; output: any; }
  Latitude: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
  LocalEndTime: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Long: { input: any; output: any; }
  Longitude: { input: any; output: any; }
  MAC: { input: any; output: any; }
  NegativeFloat: { input: any; output: any; }
  NegativeInt: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  NonPositiveFloat: { input: any; output: any; }
  NonPositiveInt: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Port: { input: any; output: any; }
  PositiveFloat: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  PostalCode: { input: any; output: any; }
  RGB: { input: any; output: any; }
  RGBA: { input: any; output: any; }
  RoutingNumber: { input: any; output: any; }
  SESSN: { input: any; output: any; }
  SafeInt: { input: any; output: any; }
  SemVer: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  URL: { input: any; output: any; }
  USCurrency: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UnsignedFloat: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type CreatePasserelleInput = {
  contributorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['String']['input']>;
  lng?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  validated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterType = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<FindOptionOrderValue>;
};

export enum FindOptionOrderValue {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Mutation = {
  __typename?: 'Mutation';
  createPasserelle?: Maybe<Passerelle>;
  updatePasserelle?: Maybe<Passerelle>;
};


export type MutationCreatePasserelleArgs = {
  data: CreatePasserelleInput;
};


export type MutationUpdatePasserelleArgs = {
  data: UpdatePasserelleInput;
};

export type Passerelle = {
  __typename?: 'Passerelle';
  contributor?: Maybe<Profile>;
  created_at?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  favorites?: Maybe<Array<Maybe<Profile>>>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lat: Scalars['String']['output'];
  lng: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  validated?: Maybe<Scalars['Boolean']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  contributions?: Maybe<Array<Maybe<Passerelle>>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  favorites?: Maybe<Array<Maybe<Passerelle>>>;
  id?: Maybe<Scalars['ID']['output']>;
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  user_id: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findPasserelle?: Maybe<Passerelle>;
  findProfileId?: Maybe<Profile>;
  passerelles?: Maybe<Array<Maybe<Passerelle>>>;
};


export type QueryFindPasserelleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindProfileIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPasserellesArgs = {
  filter?: InputMaybe<FilterType>;
};

export type UpdatePasserelleInput = {
  contributorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  favoritesIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image: Scalars['String']['input'];
  title: Scalars['String']['input'];
  validated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FindPasserelleQueryVariables = Exact<{
  findPasserelleId: Scalars['ID']['input'];
}>;


export type FindPasserelleQuery = { __typename?: 'Query', findPasserelle?: { __typename?: 'Passerelle', title?: string | null, image?: string | null, description?: string | null, lat: string, lng: string } | null };


export const FindPasserelleDocument = gql`
    query FindPasserelle($findPasserelleId: ID!) {
  findPasserelle(id: $findPasserelleId) {
    title
    image
    description
    lat
    lng
  }
}
    `;

/**
 * __useFindPasserelleQuery__
 *
 * To run a query within a React component, call `useFindPasserelleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPasserelleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPasserelleQuery({
 *   variables: {
 *      findPasserelleId: // value for 'findPasserelleId'
 *   },
 * });
 */
export function useFindPasserelleQuery(baseOptions: Apollo.QueryHookOptions<FindPasserelleQuery, FindPasserelleQueryVariables> & ({ variables: FindPasserelleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPasserelleQuery, FindPasserelleQueryVariables>(FindPasserelleDocument, options);
      }
export function useFindPasserelleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPasserelleQuery, FindPasserelleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPasserelleQuery, FindPasserelleQueryVariables>(FindPasserelleDocument, options);
        }
export function useFindPasserelleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindPasserelleQuery, FindPasserelleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPasserelleQuery, FindPasserelleQueryVariables>(FindPasserelleDocument, options);
        }
export type FindPasserelleQueryHookResult = ReturnType<typeof useFindPasserelleQuery>;
export type FindPasserelleLazyQueryHookResult = ReturnType<typeof useFindPasserelleLazyQuery>;
export type FindPasserelleSuspenseQueryHookResult = ReturnType<typeof useFindPasserelleSuspenseQuery>;
export type FindPasserelleQueryResult = Apollo.QueryResult<FindPasserelleQuery, FindPasserelleQueryVariables>;