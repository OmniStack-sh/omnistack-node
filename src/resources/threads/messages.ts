// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MessagesAPI from './messages';
import * as ThreadsAPI from '../assistants/threads';

export class Messages extends APIResource {
  /**
   * Modifies a message.
   */
  create(
    threadId: string,
    messageId: string,
    body: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadsAPI.MessageObject> {
    return this._client.post(`/threads/${threadId}/messages/${messageId}`, { body, ...options });
  }

  /**
   * Retrieve a message.
   */
  retrieve(
    threadId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadsAPI.MessageObject> {
    return this._client.get(`/threads/${threadId}/messages/${messageId}`, options);
  }

  /**
   * Returns a list of messages for a given thread.
   */
  list(
    threadId: string,
    query?: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListResponse>;
  list(threadId: string, options?: Core.RequestOptions): Core.APIPromise<MessageListResponse>;
  list(
    threadId: string,
    query: MessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListResponse> {
    if (isRequestOptions(query)) {
      return this.list(threadId, {}, query);
    }
    return this._client.get(`/threads/${threadId}/messages`, { query, ...options });
  }

  /**
   * Deletes a message.
   */
  delete(
    threadId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageDeleteResponse> {
    return this._client.delete(`/threads/${threadId}/messages/${messageId}`, options);
  }
}

export interface MessageListResponse {
  data: Array<ThreadsAPI.MessageObject>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface MessageDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'thread.message.deleted';
}

export interface MessageCreateParams {
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maximum of 512
   * characters long.
   */
  metadata?: unknown | null;
}

export interface MessageListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. `before` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include before=obj_foo in order to
   * fetch the previous page of the list.
   */
  before?: string;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;

  /**
   * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
   * order and `desc` for descending order.
   */
  order?: 'asc' | 'desc';

  /**
   * Filter messages by the run ID that generated them.
   */
  run_id?: string;
}

export namespace Messages {
  export import MessageListResponse = MessagesAPI.MessageListResponse;
  export import MessageDeleteResponse = MessagesAPI.MessageDeleteResponse;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
  export import MessageListParams = MessagesAPI.MessageListParams;
}
