import * as jspb from "google-protobuf"

export class GenSeedRequest extends jspb.Message {
  getAezeedPassphrase(): Uint8Array | string;
  getAezeedPassphrase_asU8(): Uint8Array;
  getAezeedPassphrase_asB64(): string;
  setAezeedPassphrase(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenSeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenSeedRequest): GenSeedRequest.AsObject;
  static serializeBinaryToWriter(message: GenSeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenSeedRequest;
  static deserializeBinaryFromReader(message: GenSeedRequest, reader: jspb.BinaryReader): GenSeedRequest;
}

export namespace GenSeedRequest {
  export type AsObject = {
    aezeedPassphrase: Uint8Array | string,
  }
}

export class GenSeedResponse extends jspb.Message {
  getMnemonicList(): Array<string>;
  setMnemonicList(value: Array<string>): void;
  clearMnemonicList(): void;
  addMnemonic(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenSeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenSeedResponse): GenSeedResponse.AsObject;
  static serializeBinaryToWriter(message: GenSeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenSeedResponse;
  static deserializeBinaryFromReader(message: GenSeedResponse, reader: jspb.BinaryReader): GenSeedResponse;
}

export namespace GenSeedResponse {
  export type AsObject = {
    mnemonicList: Array<string>,
  }
}

export class InitProfileRequest extends jspb.Message {
  getWalletPassword(): Uint8Array | string;
  getWalletPassword_asU8(): Uint8Array;
  getWalletPassword_asB64(): string;
  setWalletPassword(value: Uint8Array | string): void;

  getMnemonicList(): Array<string>;
  setMnemonicList(value: Array<string>): void;
  clearMnemonicList(): void;
  addMnemonic(value: string, index?: number): void;

  getAezeedPassphrase(): Uint8Array | string;
  getAezeedPassphrase_asU8(): Uint8Array;
  getAezeedPassphrase_asB64(): string;
  setAezeedPassphrase(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitProfileRequest): InitProfileRequest.AsObject;
  static serializeBinaryToWriter(message: InitProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitProfileRequest;
  static deserializeBinaryFromReader(message: InitProfileRequest, reader: jspb.BinaryReader): InitProfileRequest;
}

export namespace InitProfileRequest {
  export type AsObject = {
    walletPassword: Uint8Array | string,
    mnemonicList: Array<string>,
    aezeedPassphrase: Uint8Array | string,
  }
}

export class InitProfileResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitProfileResponse): InitProfileResponse.AsObject;
  static serializeBinaryToWriter(message: InitProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitProfileResponse;
  static deserializeBinaryFromReader(message: InitProfileResponse, reader: jspb.BinaryReader): InitProfileResponse;
}

export namespace InitProfileResponse {
  export type AsObject = {
  }
}

export class UpdateProfileRequest extends jspb.Message {
  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    profile?: Profile.AsObject,
  }
}

export class UpdateProfileResponse extends jspb.Message {
  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileResponse): UpdateProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileResponse;
  static deserializeBinaryFromReader(message: UpdateProfileResponse, reader: jspb.BinaryReader): UpdateProfileResponse;
}

export namespace UpdateProfileResponse {
  export type AsObject = {
    profile?: Profile.AsObject,
  }
}

export class GetProfileRequest extends jspb.Message {
  getProfileId(): string;
  setProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
  static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
  export type AsObject = {
    profileId: string,
  }
}

export class GetProfileResponse extends jspb.Message {
  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  getConfig(): Config | undefined;
  setConfig(value?: Config): void;
  hasConfig(): boolean;
  clearConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileResponse): GetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileResponse;
  static deserializeBinaryFromReader(message: GetProfileResponse, reader: jspb.BinaryReader): GetProfileResponse;
}

export namespace GetProfileResponse {
  export type AsObject = {
    profile?: Profile.AsObject,
    config?: Config.AsObject,
  }
}

export class ListProfilesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProfilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProfilesRequest): ListProfilesRequest.AsObject;
  static serializeBinaryToWriter(message: ListProfilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProfilesRequest;
  static deserializeBinaryFromReader(message: ListProfilesRequest, reader: jspb.BinaryReader): ListProfilesRequest;
}

export namespace ListProfilesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListProfilesResponse extends jspb.Message {
  getProfilesList(): Array<Profile>;
  setProfilesList(value: Array<Profile>): void;
  clearProfilesList(): void;
  addProfiles(value?: Profile, index?: number): Profile;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProfilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProfilesResponse): ListProfilesResponse.AsObject;
  static serializeBinaryToWriter(message: ListProfilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProfilesResponse;
  static deserializeBinaryFromReader(message: ListProfilesResponse, reader: jspb.BinaryReader): ListProfilesResponse;
}

export namespace ListProfilesResponse {
  export type AsObject = {
    profilesList: Array<Profile.AsObject>,
    nextPageToken: string,
  }
}

export class ListSuggestedProfilesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSuggestedProfilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSuggestedProfilesRequest): ListSuggestedProfilesRequest.AsObject;
  static serializeBinaryToWriter(message: ListSuggestedProfilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSuggestedProfilesRequest;
  static deserializeBinaryFromReader(message: ListSuggestedProfilesRequest, reader: jspb.BinaryReader): ListSuggestedProfilesRequest;
}

export namespace ListSuggestedProfilesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListSuggestedProfilesResponse extends jspb.Message {
  getProfilesList(): Array<SuggestedProfile>;
  setProfilesList(value: Array<SuggestedProfile>): void;
  clearProfilesList(): void;
  addProfiles(value?: SuggestedProfile, index?: number): SuggestedProfile;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSuggestedProfilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSuggestedProfilesResponse): ListSuggestedProfilesResponse.AsObject;
  static serializeBinaryToWriter(message: ListSuggestedProfilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSuggestedProfilesResponse;
  static deserializeBinaryFromReader(message: ListSuggestedProfilesResponse, reader: jspb.BinaryReader): ListSuggestedProfilesResponse;
}

export namespace ListSuggestedProfilesResponse {
  export type AsObject = {
    profilesList: Array<SuggestedProfile.AsObject>,
    nextPageToken: string,
  }
}

export class GetProfileAddrsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileAddrsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileAddrsRequest): GetProfileAddrsRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileAddrsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileAddrsRequest;
  static deserializeBinaryFromReader(message: GetProfileAddrsRequest, reader: jspb.BinaryReader): GetProfileAddrsRequest;
}

export namespace GetProfileAddrsRequest {
  export type AsObject = {
  }
}

export class GetProfileAddrsResponse extends jspb.Message {
  getAddrsList(): Array<string>;
  setAddrsList(value: Array<string>): void;
  clearAddrsList(): void;
  addAddrs(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileAddrsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileAddrsResponse): GetProfileAddrsResponse.AsObject;
  static serializeBinaryToWriter(message: GetProfileAddrsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileAddrsResponse;
  static deserializeBinaryFromReader(message: GetProfileAddrsResponse, reader: jspb.BinaryReader): GetProfileAddrsResponse;
}

export namespace GetProfileAddrsResponse {
  export type AsObject = {
    addrsList: Array<string>,
  }
}

export class ConnectToPeerRequest extends jspb.Message {
  getAddrsList(): Array<string>;
  setAddrsList(value: Array<string>): void;
  clearAddrsList(): void;
  addAddrs(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectToPeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectToPeerRequest): ConnectToPeerRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectToPeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectToPeerRequest;
  static deserializeBinaryFromReader(message: ConnectToPeerRequest, reader: jspb.BinaryReader): ConnectToPeerRequest;
}

export namespace ConnectToPeerRequest {
  export type AsObject = {
    addrsList: Array<string>,
  }
}

export class ConnectToPeerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectToPeerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectToPeerResponse): ConnectToPeerResponse.AsObject;
  static serializeBinaryToWriter(message: ConnectToPeerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectToPeerResponse;
  static deserializeBinaryFromReader(message: ConnectToPeerResponse, reader: jspb.BinaryReader): ConnectToPeerResponse;
}

export namespace ConnectToPeerResponse {
  export type AsObject = {
  }
}

export class Profile extends jspb.Message {
  getPeerId(): string;
  setPeerId(value: string): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getBio(): string;
  setBio(value: string): void;

  getConnectionStatus(): ConnectionStatus;
  setConnectionStatus(value: ConnectionStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    peerId: string,
    accountId: string,
    username: string,
    email: string,
    bio: string,
    connectionStatus: ConnectionStatus,
  }
}

export class SuggestedProfile extends jspb.Message {
  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  getAddrsList(): Array<string>;
  setAddrsList(value: Array<string>): void;
  clearAddrsList(): void;
  addAddrs(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestedProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestedProfile): SuggestedProfile.AsObject;
  static serializeBinaryToWriter(message: SuggestedProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestedProfile;
  static deserializeBinaryFromReader(message: SuggestedProfile, reader: jspb.BinaryReader): SuggestedProfile;
}

export namespace SuggestedProfile {
  export type AsObject = {
    profile?: Profile.AsObject,
    addrsList: Array<string>,
  }
}

export class Config extends jspb.Message {
  getLogoUri(): string;
  setLogoUri(value: string): void;

  getHomePageUri(): string;
  setHomePageUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    logoUri: string,
    homePageUri: string,
  }
}

export enum ConnectionStatus { 
  NOT_CONNECTED = 0,
  CONNECTED = 1,
  CAN_CONNECT = 2,
  CANNOT_CONNECT = 3,
}
