// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as EventsAPI from './events';

export class Events extends APIResource {
  /**
   * Get status updates for a fine-tuning job.
   */
  retrieve(
    fineTuningJobId: string,
    query?: EventRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventRetrieveResponse>;
  retrieve(fineTuningJobId: string, options?: Core.RequestOptions): Core.APIPromise<EventRetrieveResponse>;
  retrieve(
    fineTuningJobId: string,
    query: EventRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(fineTuningJobId, {}, query);
    }
    return this._client.get(`/fine_tuning/jobs/${fineTuningJobId}/events`, { query, ...options });
  }
}

export interface EventRetrieveResponse {
  data: Array<EventRetrieveResponse.Data>;

  object: 'list';
}

export namespace EventRetrieveResponse {
  /**
   * Fine-tuning job event object
   */
  export interface Data {
    id: string;

    created_at: number;

    level: 'info' | 'warn' | 'error';

    message: string;

    object: 'fine_tuning.job.event';
  }
}

export interface EventRetrieveParams {
  /**
   * Identifier for the last event from the previous pagination request.
   */
  after?: string;

  /**
   * Number of events to retrieve.
   */
  limit?: number;
}

export namespace Events {
  export import EventRetrieveResponse = EventsAPI.EventRetrieveResponse;
  export import EventRetrieveParams = EventsAPI.EventRetrieveParams;
}
