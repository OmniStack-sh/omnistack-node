// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as APIKeysAPI from './api-keys';
import * as ServiceAccountsAPI from './service-accounts';

export class Projects extends APIResource {
  serviceAccounts: ServiceAccountsAPI.ServiceAccounts = new ServiceAccountsAPI.ServiceAccounts(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
}

export namespace Projects {
  export import ServiceAccounts = ServiceAccountsAPI.ServiceAccounts;
  export import ServiceAccountDeleteResponse = ServiceAccountsAPI.ServiceAccountDeleteResponse;
  export import APIKeys = APIKeysAPI.APIKeys;
  export import APIKeyListResponse = APIKeysAPI.APIKeyListResponse;
  export import APIKeyDeleteResponse = APIKeysAPI.APIKeyDeleteResponse;
  export import APIKeyListParams = APIKeysAPI.APIKeyListParams;
}
