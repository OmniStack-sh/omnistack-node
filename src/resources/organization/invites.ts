// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as InvitesAPI from './invites';

export class Invites extends APIResource {
  /**
   * Create an invite for a user to the organization. The invite must be accepted by
   * the user before they have access to the organization.
   */
  create(body: InviteCreateParams, options?: Core.RequestOptions): Core.APIPromise<Invite> {
    return this._client.post('/organization/invites', { body, ...options });
  }

  /**
   * Retrieves an invite.
   */
  retrieve(inviteId: string, options?: Core.RequestOptions): Core.APIPromise<Invite> {
    return this._client.get(`/organization/invites/${inviteId}`, options);
  }

  /**
   * Returns a list of invites in the organization.
   */
  list(query?: InviteListParams, options?: Core.RequestOptions): Core.APIPromise<InviteListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<InviteListResponse>;
  list(
    query: InviteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/organization/invites', { query, ...options });
  }

  /**
   * Delete an invite. If the invite has already been accepted, it cannot be deleted.
   */
  delete(inviteId: string, options?: Core.RequestOptions): Core.APIPromise<InviteDeleteResponse> {
    return this._client.delete(`/organization/invites/${inviteId}`, options);
  }
}

/**
 * Represents an individual `invite` to the organization.
 */
export interface Invite {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The email address of the individual to whom the invite was sent
   */
  email: string;

  /**
   * The Unix timestamp (in seconds) of when the invite expires.
   */
  expires_at: number;

  /**
   * The Unix timestamp (in seconds) of when the invite was sent.
   */
  invited_at: number;

  /**
   * The object type, which is always `organization.invite`
   */
  object: 'organization.invite';

  /**
   * `owner` or `reader`
   */
  role: 'owner' | 'reader';

  /**
   * `accepted`,`expired`, or `pending`
   */
  status: 'accepted' | 'expired' | 'pending';

  /**
   * The Unix timestamp (in seconds) of when the invite was accepted.
   */
  accepted_at?: number;
}

export interface InviteListResponse {
  data: Array<Invite>;

  /**
   * The object type, which is always `list`
   */
  object: 'list';

  /**
   * The first `invite_id` in the retrieved `list`
   */
  first_id?: string;

  /**
   * The `has_more` property is used for pagination to indicate there are additional
   * results.
   */
  has_more?: boolean;

  /**
   * The last `invite_id` in the retrieved `list`
   */
  last_id?: string;
}

export interface InviteDeleteResponse {
  id: string;

  deleted: boolean;

  /**
   * The object type, which is always `organization.invite.deleted`
   */
  object: 'organization.invite.deleted';
}

export interface InviteCreateParams {
  /**
   * Send an email to this address
   */
  email: string;

  /**
   * `owner` or `reader`
   */
  role: 'reader' | 'owner';
}

export interface InviteListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;
}

export namespace Invites {
  export import Invite = InvitesAPI.Invite;
  export import InviteListResponse = InvitesAPI.InviteListResponse;
  export import InviteDeleteResponse = InvitesAPI.InviteDeleteResponse;
  export import InviteCreateParams = InvitesAPI.InviteCreateParams;
  export import InviteListParams = InvitesAPI.InviteListParams;
}
