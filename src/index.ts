// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * The bearer token required for authorization
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['OMNISTACK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Omnistack API.
 */
export class Omnistack extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Omnistack API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['BEARER_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['OMNISTACK_BASE_URL'] ?? https://api.openai.com/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('OMNISTACK_BASE_URL'),
    bearerToken = Core.readEnv('BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.OmnistackError(
        "The BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Omnistack client with an bearerToken option, like new Omnistack({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://api.openai.com/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  chats: API.Chats = new API.Chats(this);
  completions: API.Completions = new API.Completions(this);
  images: API.Images = new API.Images(this);
  embeddings: API.Embeddings = new API.Embeddings(this);
  audio: API.Audio = new API.Audio(this);
  files: API.Files = new API.Files(this);
  uploads: API.Uploads = new API.Uploads(this);
  fineTuning: API.FineTuning = new API.FineTuning(this);
  models: API.Models = new API.Models(this);
  moderations: API.Moderations = new API.Moderations(this);
  assistants: API.Assistants = new API.Assistants(this);
  threads: API.Threads = new API.Threads(this);
  vectorStores: API.VectorStores = new API.VectorStores(this);
  batches: API.Batches = new API.Batches(this);
  organization: API.Organization = new API.Organization(this);
  projects: API.Projects = new API.Projects(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Omnistack = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static OmnistackError = Errors.OmnistackError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  OmnistackError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Omnistack {
  export import RequestOptions = Core.RequestOptions;

  export import Chats = API.Chats;

  export import Completions = API.Completions;
  export import CompletionCreateResponse = API.CompletionCreateResponse;
  export import CompletionCreateParams = API.CompletionCreateParams;

  export import Images = API.Images;
  export import ImageResponse = API.ImageResponse;

  export import Embeddings = API.Embeddings;
  export import EmbeddingCreateResponse = API.EmbeddingCreateResponse;
  export import EmbeddingCreateParams = API.EmbeddingCreateParams;

  export import Audio = API.Audio;

  export import Files = API.Files;
  export import OpenAIFile = API.OpenAIFile;
  export import FileListResponse = API.FileListResponse;
  export import FileDeleteResponse = API.FileDeleteResponse;
  export import FileCreateParams = API.FileCreateParams;
  export import FileListParams = API.FileListParams;

  export import Uploads = API.Uploads;
  export import Upload = API.Upload;
  export import UploadPart = API.UploadPart;
  export import UploadCreateParams = API.UploadCreateParams;
  export import UploadCompleteParams = API.UploadCompleteParams;

  export import FineTuning = API.FineTuning;

  export import Models = API.Models;
  export import Model = API.Model;
  export import ModelListResponse = API.ModelListResponse;
  export import ModelDeleteResponse = API.ModelDeleteResponse;

  export import Moderations = API.Moderations;
  export import ModerationCreateResponse = API.ModerationCreateResponse;
  export import ModerationCreateParams = API.ModerationCreateParams;

  export import Assistants = API.Assistants;
  export import AssistantObject = API.AssistantObject;
  export import AssistantListResponse = API.AssistantListResponse;
  export import AssistantDeleteResponse = API.AssistantDeleteResponse;
  export import AssistantCreateParams = API.AssistantCreateParams;
  export import AssistantListParams = API.AssistantListParams;

  export import Threads = API.Threads;
  export import ThreadDeleteResponse = API.ThreadDeleteResponse;
  export import ThreadCreateParams = API.ThreadCreateParams;
  export import ThreadUpdateParams = API.ThreadUpdateParams;

  export import VectorStores = API.VectorStores;
  export import VectorStoreObject = API.VectorStoreObject;
  export import VectorStoreListResponse = API.VectorStoreListResponse;
  export import VectorStoreDeleteResponse = API.VectorStoreDeleteResponse;
  export import VectorStoreCreateParams = API.VectorStoreCreateParams;
  export import VectorStoreUpdateParams = API.VectorStoreUpdateParams;
  export import VectorStoreListParams = API.VectorStoreListParams;

  export import Batches = API.Batches;
  export import Batch = API.Batch;
  export import BatchListResponse = API.BatchListResponse;
  export import BatchCreateParams = API.BatchCreateParams;
  export import BatchListParams = API.BatchListParams;

  export import Organization = API.Organization;

  export import Projects = API.Projects;

  export import ProjectAPIKey = API.ProjectAPIKey;
  export import ProjectServiceAccount = API.ProjectServiceAccount;
  export import ProjectUser = API.ProjectUser;
}

export default Omnistack;
