// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ServiceAccountsAPI from './service-accounts';

export class ServiceAccounts extends APIResource {
  /**
   * Deletes a service account from the project.
   */
  delete(
    projectId: string,
    serviceAccountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceAccountDeleteResponse> {
    return this._client.delete(
      `/organization/projects/${projectId}/service_accounts/${serviceAccountId}`,
      options,
    );
  }
}

export interface ServiceAccountDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'organization.project.service_account.deleted';
}

export namespace ServiceAccounts {
  export import ServiceAccountDeleteResponse = ServiceAccountsAPI.ServiceAccountDeleteResponse;
}
