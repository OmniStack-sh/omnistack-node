// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

/**
 * Represents an individual API key in a project.
 */
export interface ProjectAPIKey {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the API key was created
   */
  created_at: number;

  /**
   * The name of the API key
   */
  name: string;

  /**
   * The object type, which is always `organization.project.api_key`
   */
  object: 'organization.project.api_key';

  owner: ProjectAPIKey.Owner;

  /**
   * The redacted value of the API key
   */
  redacted_value: string;
}

export namespace ProjectAPIKey {
  export interface Owner {
    /**
     * Represents an individual service account in a project.
     */
    service_account?: Shared.ProjectServiceAccount;

    /**
     * `user` or `service_account`
     */
    type?: 'user' | 'service_account';

    /**
     * Represents an individual user in a project.
     */
    user?: Shared.ProjectUser;
  }
}

/**
 * Represents an individual service account in a project.
 */
export interface ProjectServiceAccount {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the service account was created
   */
  created_at: number;

  /**
   * The name of the service account
   */
  name: string;

  /**
   * The object type, which is always `organization.project.service_account`
   */
  object: 'organization.project.service_account';

  /**
   * `owner` or `member`
   */
  role: 'owner' | 'member';
}

/**
 * Represents an individual user in a project.
 */
export interface ProjectUser {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the project was added.
   */
  added_at: number;

  /**
   * The email address of the user
   */
  email: string;

  /**
   * The name of the user
   */
  name: string;

  /**
   * The object type, which is always `organization.project.user`
   */
  object: 'organization.project.user';

  /**
   * `owner` or `member`
   */
  role: 'owner' | 'member';
}
