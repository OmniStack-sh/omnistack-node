// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as RunsAPI from './runs';
import * as ThreadsAPI from '../../assistants/threads';
import * as StepsAPI from './steps';

export class Runs extends APIResource {
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);

  /**
   * Modifies a run.
   */
  create(
    threadId: string,
    runId: string,
    body: RunCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadsAPI.RunObject> {
    return this._client.post(`/threads/${threadId}/runs/${runId}`, { body, ...options });
  }

  /**
   * Retrieves a run.
   */
  retrieve(
    threadId: string,
    runId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadsAPI.RunObject> {
    return this._client.get(`/threads/${threadId}/runs/${runId}`, options);
  }

  /**
   * Returns a list of runs belonging to a thread.
   */
  list(
    threadId: string,
    query?: RunListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RunListResponse>;
  list(threadId: string, options?: Core.RequestOptions): Core.APIPromise<RunListResponse>;
  list(
    threadId: string,
    query: RunListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RunListResponse> {
    if (isRequestOptions(query)) {
      return this.list(threadId, {}, query);
    }
    return this._client.get(`/threads/${threadId}/runs`, { query, ...options });
  }

  /**
   * Cancels a run that is `in_progress`.
   */
  cancel(
    threadId: string,
    runId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadsAPI.RunObject> {
    return this._client.post(`/threads/${threadId}/runs/${runId}/cancel`, options);
  }

  /**
   * When a run has the `status: "requires_action"` and `required_action.type` is
   * `submit_tool_outputs`, this endpoint can be used to submit the outputs from the
   * tool calls once they're all completed. All outputs must be submitted in a single
   * request.
   */
  submitToolOutputs(
    threadId: string,
    runId: string,
    body: RunSubmitToolOutputsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadsAPI.RunObject> {
    return this._client.post(`/threads/${threadId}/runs/${runId}/submit_tool_outputs`, { body, ...options });
  }
}

export interface RunListResponse {
  data: Array<ThreadsAPI.RunObject>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface RunCreateParams {
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maximum of 512
   * characters long.
   */
  metadata?: unknown | null;
}

export interface RunListParams {
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
}

export interface RunSubmitToolOutputsParams {
  /**
   * A list of tools for which the outputs are being submitted.
   */
  tool_outputs: Array<RunSubmitToolOutputsParams.ToolOutput>;

  /**
   * If `true`, returns a stream of events that happen during the Run as server-sent
   * events, terminating when the Run enters a terminal state with a `data: [DONE]`
   * message.
   */
  stream?: boolean | null;
}

export namespace RunSubmitToolOutputsParams {
  export interface ToolOutput {
    /**
     * The output of the tool call to be submitted to continue the run.
     */
    output?: string;

    /**
     * The ID of the tool call in the `required_action` object within the run object
     * the output is being submitted for.
     */
    tool_call_id?: string;
  }
}

export namespace Runs {
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunCreateParams = RunsAPI.RunCreateParams;
  export import RunListParams = RunsAPI.RunListParams;
  export import RunSubmitToolOutputsParams = RunsAPI.RunSubmitToolOutputsParams;
  export import Steps = StepsAPI.Steps;
  export import RunStepObject = StepsAPI.RunStepObject;
  export import StepListResponse = StepsAPI.StepListResponse;
  export import StepRetrieveParams = StepsAPI.StepRetrieveParams;
  export import StepListParams = StepsAPI.StepListParams;
}
