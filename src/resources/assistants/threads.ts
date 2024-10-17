// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ThreadsAPI from './threads';

export class Threads extends APIResource {}

/**
 * Represents a message within a [thread](/docs/api-reference/threads).
 */
export interface MessageObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * If applicable, the ID of the [assistant](/docs/api-reference/assistants) that
   * authored this message.
   */
  assistant_id: string | null;

  /**
   * A list of files attached to the message, and the tools they were added to.
   */
  attachments: Array<MessageObject.Attachment> | null;

  /**
   * The Unix timestamp (in seconds) for when the message was completed.
   */
  completed_at: number | null;

  /**
   * The content of the message in array of text and/or images.
   */
  content: Array<
    | MessageObject.MessageContentImageFileObject
    | MessageObject.MessageContentImageURLObject
    | MessageObject.MessageContentTextObject
    | MessageObject.MessageContentRefusalObject
  >;

  /**
   * The Unix timestamp (in seconds) for when the message was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the message was marked as incomplete.
   */
  incomplete_at: number | null;

  /**
   * On an incomplete message, details about why the message is incomplete.
   */
  incomplete_details: MessageObject.IncompleteDetails | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maximum of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * The object type, which is always `thread.message`.
   */
  object: 'thread.message';

  /**
   * The entity that produced the message. One of `user` or `assistant`.
   */
  role: 'user' | 'assistant';

  /**
   * The ID of the [run](/docs/api-reference/runs) associated with the creation of
   * this message. Value is `null` when messages are created manually using the
   * create message or create thread endpoints.
   */
  run_id: string | null;

  /**
   * The status of the message, which can be either `in_progress`, `incomplete`, or
   * `completed`.
   */
  status: 'in_progress' | 'incomplete' | 'completed';

  /**
   * The [thread](/docs/api-reference/threads) ID that this message belongs to.
   */
  thread_id: string;
}

export namespace MessageObject {
  export interface Attachment {
    /**
     * The ID of the file to attach to the message.
     */
    file_id?: string;

    /**
     * The tools to add this file to.
     */
    tools?: Array<Attachment.AssistantToolsCode | Attachment.AssistantToolsFileSearchTypeOnly>;
  }

  export namespace Attachment {
    export interface AssistantToolsCode {
      /**
       * The type of tool being defined: `code_interpreter`
       */
      type: 'code_interpreter';
    }

    export interface AssistantToolsFileSearchTypeOnly {
      /**
       * The type of tool being defined: `file_search`
       */
      type: 'file_search';
    }
  }

  /**
   * References an image [File](/docs/api-reference/files) in the content of a
   * message.
   */
  export interface MessageContentImageFileObject {
    image_file: MessageContentImageFileObject.ImageFile;

    /**
     * Always `image_file`.
     */
    type: 'image_file';
  }

  export namespace MessageContentImageFileObject {
    export interface ImageFile {
      /**
       * The [File](/docs/api-reference/files) ID of the image in the message content.
       * Set `purpose="vision"` when uploading the File if you need to later display the
       * file content.
       */
      file_id: string;

      /**
       * Specifies the detail level of the image if specified by the user. `low` uses
       * fewer tokens, you can opt in to high resolution using `high`.
       */
      detail?: 'auto' | 'low' | 'high';
    }
  }

  /**
   * References an image URL in the content of a message.
   */
  export interface MessageContentImageURLObject {
    image_url: MessageContentImageURLObject.ImageURL;

    /**
     * The type of the content part.
     */
    type: 'image_url';
  }

  export namespace MessageContentImageURLObject {
    export interface ImageURL {
      /**
       * The external URL of the image, must be a supported image types: jpeg, jpg, png,
       * gif, webp.
       */
      url: string;

      /**
       * Specifies the detail level of the image. `low` uses fewer tokens, you can opt in
       * to high resolution using `high`. Default value is `auto`
       */
      detail?: 'auto' | 'low' | 'high';
    }
  }

  /**
   * The text content that is part of a message.
   */
  export interface MessageContentTextObject {
    text: MessageContentTextObject.Text;

    /**
     * Always `text`.
     */
    type: 'text';
  }

  export namespace MessageContentTextObject {
    export interface Text {
      annotations: Array<
        | Text.MessageContentTextAnnotationsFileCitationObject
        | Text.MessageContentTextAnnotationsFilePathObject
      >;

      /**
       * The data that makes up the text.
       */
      value: string;
    }

    export namespace Text {
      /**
       * A citation within the message that points to a specific quote from a specific
       * File associated with the assistant or the message. Generated when the assistant
       * uses the "file_search" tool to search files.
       */
      export interface MessageContentTextAnnotationsFileCitationObject {
        end_index: number;

        file_citation: MessageContentTextAnnotationsFileCitationObject.FileCitation;

        start_index: number;

        /**
         * The text in the message content that needs to be replaced.
         */
        text: string;

        /**
         * Always `file_citation`.
         */
        type: 'file_citation';
      }

      export namespace MessageContentTextAnnotationsFileCitationObject {
        export interface FileCitation {
          /**
           * The ID of the specific File the citation is from.
           */
          file_id: string;
        }
      }

      /**
       * A URL for the file that's generated when the assistant used the
       * `code_interpreter` tool to generate a file.
       */
      export interface MessageContentTextAnnotationsFilePathObject {
        end_index: number;

        file_path: MessageContentTextAnnotationsFilePathObject.FilePath;

        start_index: number;

        /**
         * The text in the message content that needs to be replaced.
         */
        text: string;

        /**
         * Always `file_path`.
         */
        type: 'file_path';
      }

      export namespace MessageContentTextAnnotationsFilePathObject {
        export interface FilePath {
          /**
           * The ID of the file that was generated.
           */
          file_id: string;
        }
      }
    }
  }

  /**
   * The refusal content generated by the assistant.
   */
  export interface MessageContentRefusalObject {
    refusal: string;

    /**
     * Always `refusal`.
     */
    type: 'refusal';
  }

  /**
   * On an incomplete message, details about why the message is incomplete.
   */
  export interface IncompleteDetails {
    /**
     * The reason the message is incomplete.
     */
    reason: 'content_filter' | 'max_tokens' | 'run_cancelled' | 'run_expired' | 'run_failed';
  }
}

/**
 * Represents an execution run on a [thread](/docs/api-reference/threads).
 */
export interface RunObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The ID of the [assistant](/docs/api-reference/assistants) used for execution of
   * this run.
   */
  assistant_id: string;

  /**
   * The Unix timestamp (in seconds) for when the run was cancelled.
   */
  cancelled_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run was completed.
   */
  completed_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the run will expire.
   */
  expires_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run failed.
   */
  failed_at: number | null;

  /**
   * Details on why the run is incomplete. Will be `null` if the run is not
   * incomplete.
   */
  incomplete_details: RunObject.IncompleteDetails | null;

  /**
   * The instructions that the [assistant](/docs/api-reference/assistants) used for
   * this run.
   */
  instructions: string;

  /**
   * The last error associated with this run. Will be `null` if there are no errors.
   */
  last_error: RunObject.LastError | null;

  /**
   * The maximum number of completion tokens specified to have been used over the
   * course of the run.
   */
  max_completion_tokens: number | null;

  /**
   * The maximum number of prompt tokens specified to have been used over the course
   * of the run.
   */
  max_prompt_tokens: number | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maximum of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * The model that the [assistant](/docs/api-reference/assistants) used for this
   * run.
   */
  model: string;

  /**
   * The object type, which is always `thread.run`.
   */
  object: 'thread.run';

  /**
   * Whether to enable
   * [parallel function calling](/docs/guides/function-calling/parallel-function-calling)
   * during tool use.
   */
  parallel_tool_calls: boolean;

  /**
   * Details on the action required to continue the run. Will be `null` if no action
   * is required.
   */
  required_action: RunObject.RequiredAction | null;

  /**
   * Specifies the format that the model must output. Compatible with
   * [GPT-4o](/docs/models/gpt-4o),
   * [GPT-4 Turbo](/docs/models/gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models
   * since `gpt-3.5-turbo-1106`.
   *
   * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured
   * Outputs which ensures the model will match your supplied JSON schema. Learn more
   * in the [Structured Outputs guide](/docs/guides/structured-outputs).
   *
   * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the
   * message the model generates is valid JSON.
   *
   * **Important:** when using JSON mode, you **must** also instruct the model to
   * produce JSON yourself via a system or user message. Without this, the model may
   * generate an unending stream of whitespace until the generation reaches the token
   * limit, resulting in a long-running and seemingly "stuck" request. Also note that
   * the message content may be partially cut off if `finish_reason="length"`, which
   * indicates the generation exceeded `max_tokens` or the conversation exceeded the
   * max context length.
   */
  response_format:
    | 'auto'
    | RunObject.ResponseFormatText
    | RunObject.ResponseFormatJsonObject
    | RunObject.ResponseFormatJsonSchema
    | null;

  /**
   * The Unix timestamp (in seconds) for when the run was started.
   */
  started_at: number | null;

  /**
   * The status of the run, which can be either `queued`, `in_progress`,
   * `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`,
   * `incomplete`, or `expired`.
   */
  status:
    | 'queued'
    | 'in_progress'
    | 'requires_action'
    | 'cancelling'
    | 'cancelled'
    | 'failed'
    | 'completed'
    | 'incomplete'
    | 'expired';

  /**
   * The ID of the [thread](/docs/api-reference/threads) that was executed on as a
   * part of this run.
   */
  thread_id: string;

  /**
   * Controls which (if any) tool is called by the model. `none` means the model will
   * not call any tools and instead generates a message. `auto` is the default value
   * and means the model can pick between generating a message or calling one or more
   * tools. `required` means the model must call one or more tools before responding
   * to the user. Specifying a particular tool like `{"type": "file_search"}` or
   * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
   * call that tool.
   */
  tool_choice: 'none' | 'auto' | 'required' | RunObject.AssistantsNamedToolChoice | null;

  /**
   * The list of tools that the [assistant](/docs/api-reference/assistants) used for
   * this run.
   */
  tools: Array<
    RunObject.AssistantToolsCode | RunObject.AssistantToolsFileSearch | RunObject.AssistantToolsFunction
  >;

  /**
   * Controls for how a thread will be truncated prior to the run. Use this to
   * control the intial context window of the run.
   */
  truncation_strategy: RunObject.TruncationStrategy | null;

  /**
   * Usage statistics related to the run. This value will be `null` if the run is not
   * in a terminal state (i.e. `in_progress`, `queued`, etc.).
   */
  usage: RunObject.Usage | null;

  /**
   * The sampling temperature used for this run. If not set, defaults to 1.
   */
  temperature?: number | null;

  /**
   * The nucleus sampling value used for this run. If not set, defaults to 1.
   */
  top_p?: number | null;
}

export namespace RunObject {
  /**
   * Details on why the run is incomplete. Will be `null` if the run is not
   * incomplete.
   */
  export interface IncompleteDetails {
    /**
     * The reason why the run is incomplete. This will point to which specific token
     * limit was reached over the course of the run.
     */
    reason?: 'max_completion_tokens' | 'max_prompt_tokens';
  }

  /**
   * The last error associated with this run. Will be `null` if there are no errors.
   */
  export interface LastError {
    /**
     * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
     */
    code: 'server_error' | 'rate_limit_exceeded' | 'invalid_prompt';

    /**
     * A human-readable description of the error.
     */
    message: string;
  }

  /**
   * Details on the action required to continue the run. Will be `null` if no action
   * is required.
   */
  export interface RequiredAction {
    /**
     * Details on the tool outputs needed for this run to continue.
     */
    submit_tool_outputs: RequiredAction.SubmitToolOutputs;

    /**
     * For now, this is always `submit_tool_outputs`.
     */
    type: 'submit_tool_outputs';
  }

  export namespace RequiredAction {
    /**
     * Details on the tool outputs needed for this run to continue.
     */
    export interface SubmitToolOutputs {
      /**
       * A list of the relevant tool calls.
       */
      tool_calls: Array<SubmitToolOutputs.ToolCall>;
    }

    export namespace SubmitToolOutputs {
      /**
       * Tool call objects
       */
      export interface ToolCall {
        /**
         * The ID of the tool call. This ID must be referenced when you submit the tool
         * outputs in using the
         * [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs)
         * endpoint.
         */
        id: string;

        /**
         * The function definition.
         */
        function: ToolCall.Function;

        /**
         * The type of tool call the output is required for. For now, this is always
         * `function`.
         */
        type: 'function';
      }

      export namespace ToolCall {
        /**
         * The function definition.
         */
        export interface Function {
          /**
           * The arguments that the model expects you to pass to the function.
           */
          arguments: string;

          /**
           * The name of the function.
           */
          name: string;
        }
      }
    }
  }

  export interface ResponseFormatText {
    /**
     * The type of response format being defined: `text`
     */
    type: 'text';
  }

  export interface ResponseFormatJsonObject {
    /**
     * The type of response format being defined: `json_object`
     */
    type: 'json_object';
  }

  export interface ResponseFormatJsonSchema {
    json_schema: ResponseFormatJsonSchema.JsonSchema;

    /**
     * The type of response format being defined: `json_schema`
     */
    type: 'json_schema';
  }

  export namespace ResponseFormatJsonSchema {
    export interface JsonSchema {
      /**
       * The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores
       * and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the response format is for, used by the model to determine
       * how to respond in the format.
       */
      description?: string;

      /**
       * The schema for the response format, described as a JSON Schema object.
       */
      schema?: Record<string, unknown>;

      /**
       * Whether to enable strict schema adherence when generating the output. If set to
       * true, the model will always follow the exact schema defined in the `schema`
       * field. Only a subset of JSON Schema is supported when `strict` is `true`. To
       * learn more, read the
       * [Structured Outputs guide](/docs/guides/structured-outputs).
       */
      strict?: boolean | null;
    }
  }

  /**
   * Specifies a tool the model should use. Use to force the model to call a specific
   * tool.
   */
  export interface AssistantsNamedToolChoice {
    /**
     * The type of the tool. If type is `function`, the function name must be set
     */
    type: 'function' | 'code_interpreter' | 'file_search';

    function?: AssistantsNamedToolChoice.Function;
  }

  export namespace AssistantsNamedToolChoice {
    export interface Function {
      /**
       * The name of the function to call.
       */
      name: string;
    }
  }

  export interface AssistantToolsCode {
    /**
     * The type of tool being defined: `code_interpreter`
     */
    type: 'code_interpreter';
  }

  export interface AssistantToolsFileSearch {
    /**
     * The type of tool being defined: `file_search`
     */
    type: 'file_search';

    /**
     * Overrides for the file search tool.
     */
    file_search?: AssistantToolsFileSearch.FileSearch;
  }

  export namespace AssistantToolsFileSearch {
    /**
     * Overrides for the file search tool.
     */
    export interface FileSearch {
      /**
       * The maximum number of results the file search tool should output. The default is
       * 20 for `gpt-4*` models and 5 for `gpt-3.5-turbo`. This number should be between
       * 1 and 50 inclusive.
       *
       * Note that the file search tool may output fewer than `max_num_results` results.
       * See the
       * [file search tool documentation](/docs/assistants/tools/file-search/customizing-file-search-settings)
       * for more information.
       */
      max_num_results?: number;

      /**
       * The ranking options for the file search. If not specified, the file search tool
       * will use the `auto` ranker and a score_threshold of 0.
       *
       * See the
       * [file search tool documentation](/docs/assistants/tools/file-search/customizing-file-search-settings)
       * for more information.
       */
      ranking_options?: FileSearch.RankingOptions;
    }

    export namespace FileSearch {
      /**
       * The ranking options for the file search. If not specified, the file search tool
       * will use the `auto` ranker and a score_threshold of 0.
       *
       * See the
       * [file search tool documentation](/docs/assistants/tools/file-search/customizing-file-search-settings)
       * for more information.
       */
      export interface RankingOptions {
        /**
         * The score threshold for the file search. All values must be a floating point
         * number between 0 and 1.
         */
        score_threshold: number;

        /**
         * The ranker to use for the file search. If not specified will use the `auto`
         * ranker.
         */
        ranker?: 'auto' | 'default_2024_08_21';
      }
    }
  }

  export interface AssistantToolsFunction {
    function: AssistantToolsFunction.Function;

    /**
     * The type of tool being defined: `function`
     */
    type: 'function';
  }

  export namespace AssistantToolsFunction {
    export interface Function {
      /**
       * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
       * underscores and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the function does, used by the model to choose when and
       * how to call the function.
       */
      description?: string;

      /**
       * The parameters the functions accepts, described as a JSON Schema object. See the
       * [guide](/docs/guides/function-calling) for examples, and the
       * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
       * documentation about the format.
       *
       * Omitting `parameters` defines a function with an empty parameter list.
       */
      parameters?: Record<string, unknown>;

      /**
       * Whether to enable strict schema adherence when generating the function call. If
       * set to true, the model will follow the exact schema defined in the `parameters`
       * field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn
       * more about Structured Outputs in the
       * [function calling guide](docs/guides/function-calling).
       */
      strict?: boolean | null;
    }
  }

  /**
   * Controls for how a thread will be truncated prior to the run. Use this to
   * control the intial context window of the run.
   */
  export interface TruncationStrategy {
    /**
     * The truncation strategy to use for the thread. The default is `auto`. If set to
     * `last_messages`, the thread will be truncated to the n most recent messages in
     * the thread. When set to `auto`, messages in the middle of the thread will be
     * dropped to fit the context length of the model, `max_prompt_tokens`.
     */
    type: 'auto' | 'last_messages';

    /**
     * The number of most recent messages from the thread when constructing the context
     * for the run.
     */
    last_messages?: number | null;
  }

  /**
   * Usage statistics related to the run. This value will be `null` if the run is not
   * in a terminal state (i.e. `in_progress`, `queued`, etc.).
   */
  export interface Usage {
    /**
     * Number of completion tokens used over the course of the run.
     */
    completion_tokens: number;

    /**
     * Number of prompt tokens used over the course of the run.
     */
    prompt_tokens: number;

    /**
     * Total number of tokens used (prompt + completion).
     */
    total_tokens: number;
  }
}

/**
 * Represents a thread that contains [messages](/docs/api-reference/messages).
 */
export interface ThreadObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the thread was created.
   */
  created_at: number;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maximum of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * The object type, which is always `thread`.
   */
  object: 'thread';

  /**
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  tool_resources: ThreadObject.ToolResources | null;
}

export namespace ThreadObject {
  /**
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  export interface ToolResources {
    code_interpreter?: ToolResources.CodeInterpreter;

    file_search?: ToolResources.FileSearch;
  }

  export namespace ToolResources {
    export interface CodeInterpreter {
      /**
       * A list of [file](/docs/api-reference/files) IDs made available to the
       * `code_interpreter` tool. There can be a maximum of 20 files associated with the
       * tool.
       */
      file_ids?: Array<string>;
    }

    export interface FileSearch {
      /**
       * The [vector store](/docs/api-reference/vector-stores/object) attached to this
       * thread. There can be a maximum of 1 vector store attached to the thread.
       */
      vector_store_ids?: Array<string>;
    }
  }
}

export namespace Threads {
  export import MessageObject = ThreadsAPI.MessageObject;
  export import RunObject = ThreadsAPI.RunObject;
  export import ThreadObject = ThreadsAPI.ThreadObject;
}
