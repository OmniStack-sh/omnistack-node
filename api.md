# Shared

Types:

- <code><a href="./src/resources/shared.ts">ProjectAPIKey</a></code>
- <code><a href="./src/resources/shared.ts">ProjectServiceAccount</a></code>
- <code><a href="./src/resources/shared.ts">ProjectUser</a></code>

# Chats

## Completions

Types:

- <code><a href="./src/resources/chats/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chats.completions.<a href="./src/resources/chats/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /completions">client.completions.<a href="./src/resources/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

# Images

Types:

- <code><a href="./src/resources/images/images.ts">ImageResponse</a></code>

## Generations

Methods:

- <code title="post /images/generations">client.images.generations.<a href="./src/resources/images/generations.ts">create</a>({ ...params }) -> ImageResponse</code>

## Edits

Methods:

- <code title="post /images/edits">client.images.edits.<a href="./src/resources/images/edits.ts">create</a>({ ...params }) -> ImageResponse</code>

## Variations

Methods:

- <code title="post /images/variations">client.images.variations.<a href="./src/resources/images/variations.ts">create</a>({ ...params }) -> ImageResponse</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingCreateResponse</a></code>

Methods:

- <code title="post /embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> EmbeddingCreateResponse</code>

# Audio

## Speech

Methods:

- <code title="post /audio/speech">client.audio.speech.<a href="./src/resources/audio/speech.ts">create</a>({ ...params }) -> Response</code>

## Transcriptions

Types:

- <code><a href="./src/resources/audio/transcriptions.ts">TranscriptionCreateResponse</a></code>

Methods:

- <code title="post /audio/transcriptions">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>

## Translations

Types:

- <code><a href="./src/resources/audio/translations.ts">TranslationCreateResponse</a></code>

Methods:

- <code title="post /audio/translations">client.audio.translations.<a href="./src/resources/audio/translations.ts">create</a>({ ...params }) -> TranslationCreateResponse</code>

# Files

Types:

- <code><a href="./src/resources/files/files.ts">OpenAIFile</a></code>
- <code><a href="./src/resources/files/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="post /files">client.files.<a href="./src/resources/files/files.ts">create</a>({ ...params }) -> OpenAIFile</code>
- <code title="get /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">retrieve</a>(fileId) -> OpenAIFile</code>
- <code title="get /files">client.files.<a href="./src/resources/files/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">delete</a>(fileId) -> FileDeleteResponse</code>

## Content

Types:

- <code><a href="./src/resources/files/content.ts">ContentRetrieveResponse</a></code>

Methods:

- <code title="get /files/{file_id}/content">client.files.content.<a href="./src/resources/files/content.ts">retrieve</a>(fileId) -> string</code>

# Uploads

Types:

- <code><a href="./src/resources/uploads/uploads.ts">Upload</a></code>
- <code><a href="./src/resources/uploads/uploads.ts">UploadPart</a></code>

Methods:

- <code title="post /uploads">client.uploads.<a href="./src/resources/uploads/uploads.ts">create</a>({ ...params }) -> Upload</code>
- <code title="post /uploads/{upload_id}/cancel">client.uploads.<a href="./src/resources/uploads/uploads.ts">cancel</a>(uploadId) -> Upload</code>
- <code title="post /uploads/{upload_id}/complete">client.uploads.<a href="./src/resources/uploads/uploads.ts">complete</a>(uploadId, { ...params }) -> Upload</code>

## Parts

Methods:

- <code title="post /uploads/{upload_id}/parts">client.uploads.parts.<a href="./src/resources/uploads/parts.ts">create</a>(uploadId, { ...params }) -> UploadPart</code>

# FineTuning

## Jobs

Types:

- <code><a href="./src/resources/fine-tuning/jobs/jobs.ts">FineTuningJob</a></code>
- <code><a href="./src/resources/fine-tuning/jobs/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="post /fine_tuning/jobs">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs/jobs.ts">create</a>({ ...params }) -> FineTuningJob</code>
- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs/jobs.ts">retrieve</a>(fineTuningJobId) -> FineTuningJob</code>
- <code title="get /fine_tuning/jobs">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /fine_tuning/jobs/{fine_tuning_job_id}/cancel">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs/jobs.ts">cancel</a>(fineTuningJobId) -> FineTuningJob</code>

### Events

Types:

- <code><a href="./src/resources/fine-tuning/jobs/events.ts">EventRetrieveResponse</a></code>

Methods:

- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}/events">client.fineTuning.jobs.events.<a href="./src/resources/fine-tuning/jobs/events.ts">retrieve</a>(fineTuningJobId, { ...params }) -> EventRetrieveResponse</code>

### Checkpoints

Types:

- <code><a href="./src/resources/fine-tuning/jobs/checkpoints.ts">CheckpointListResponse</a></code>

Methods:

- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}/checkpoints">client.fineTuning.jobs.checkpoints.<a href="./src/resources/fine-tuning/jobs/checkpoints.ts">list</a>(fineTuningJobId, { ...params }) -> CheckpointListResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelDeleteResponse</a></code>

Methods:

- <code title="get /models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> Model</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="delete /models/{model}">client.models.<a href="./src/resources/models.ts">delete</a>(model) -> ModelDeleteResponse</code>

# Moderations

Types:

- <code><a href="./src/resources/moderations.ts">ModerationCreateResponse</a></code>

Methods:

- <code title="post /moderations">client.moderations.<a href="./src/resources/moderations.ts">create</a>({ ...params }) -> ModerationCreateResponse</code>

# Assistants

Types:

- <code><a href="./src/resources/assistants/assistants.ts">AssistantObject</a></code>
- <code><a href="./src/resources/assistants/assistants.ts">AssistantListResponse</a></code>
- <code><a href="./src/resources/assistants/assistants.ts">AssistantDeleteResponse</a></code>

Methods:

- <code title="post /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants/assistants.ts">create</a>(assistantId, { ...params }) -> AssistantObject</code>
- <code title="get /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants/assistants.ts">retrieve</a>(assistantId) -> AssistantObject</code>
- <code title="get /assistants">client.assistants.<a href="./src/resources/assistants/assistants.ts">list</a>({ ...params }) -> AssistantListResponse</code>
- <code title="delete /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants/assistants.ts">delete</a>(assistantId) -> AssistantDeleteResponse</code>

## Threads

Types:

- <code><a href="./src/resources/assistants/threads.ts">MessageObject</a></code>
- <code><a href="./src/resources/assistants/threads.ts">RunObject</a></code>
- <code><a href="./src/resources/assistants/threads.ts">ThreadObject</a></code>

# Threads

Types:

- <code><a href="./src/resources/threads/threads.ts">ThreadDeleteResponse</a></code>

Methods:

- <code title="post /threads">client.threads.<a href="./src/resources/threads/threads.ts">create</a>({ ...params }) -> ThreadObject</code>
- <code title="get /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">retrieve</a>(threadId) -> ThreadObject</code>
- <code title="post /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">update</a>(threadId, { ...params }) -> ThreadObject</code>
- <code title="delete /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">delete</a>(threadId) -> ThreadDeleteResponse</code>

## Messages

Types:

- <code><a href="./src/resources/threads/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/threads/messages.ts">MessageDeleteResponse</a></code>

Methods:

- <code title="post /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages.ts">create</a>(threadId, messageId, { ...params }) -> MessageObject</code>
- <code title="get /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages.ts">retrieve</a>(threadId, messageId) -> MessageObject</code>
- <code title="get /threads/{thread_id}/messages">client.threads.messages.<a href="./src/resources/threads/messages.ts">list</a>(threadId, { ...params }) -> MessageListResponse</code>
- <code title="delete /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages.ts">delete</a>(threadId, messageId) -> MessageDeleteResponse</code>

## Runs

Types:

- <code><a href="./src/resources/threads/runs/runs.ts">RunListResponse</a></code>

Methods:

- <code title="post /threads/{thread_id}/runs/{run_id}">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">create</a>(threadId, runId, { ...params }) -> RunObject</code>
- <code title="get /threads/{thread_id}/runs/{run_id}">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">retrieve</a>(threadId, runId) -> RunObject</code>
- <code title="get /threads/{thread_id}/runs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">list</a>(threadId, { ...params }) -> RunListResponse</code>
- <code title="post /threads/{thread_id}/runs/{run_id}/cancel">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">cancel</a>(threadId, runId) -> RunObject</code>
- <code title="post /threads/{thread_id}/runs/{run_id}/submit_tool_outputs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">submitToolOutputs</a>(threadId, runId, { ...params }) -> RunObject</code>

### Steps

Types:

- <code><a href="./src/resources/threads/runs/steps.ts">RunStepObject</a></code>
- <code><a href="./src/resources/threads/runs/steps.ts">StepListResponse</a></code>

Methods:

- <code title="get /threads/{thread_id}/runs/{run_id}/steps/{step_id}">client.threads.runs.steps.<a href="./src/resources/threads/runs/steps.ts">retrieve</a>(threadId, runId, stepId, { ...params }) -> RunStepObject</code>
- <code title="get /threads/{thread_id}/runs/{run_id}/steps">client.threads.runs.steps.<a href="./src/resources/threads/runs/steps.ts">list</a>(threadId, runId, { ...params }) -> StepListResponse</code>

# VectorStores

Types:

- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreObject</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreListResponse</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreDeleteResponse</a></code>

Methods:

- <code title="post /vector_stores">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">create</a>({ ...params }) -> VectorStoreObject</code>
- <code title="get /vector_stores/{vector_store_id}">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">retrieve</a>(vectorStoreId) -> VectorStoreObject</code>
- <code title="post /vector_stores/{vector_store_id}">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">update</a>(vectorStoreId, { ...params }) -> VectorStoreObject</code>
- <code title="get /vector_stores">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">list</a>({ ...params }) -> VectorStoreListResponse</code>
- <code title="delete /vector_stores/{vector_store_id}">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">delete</a>(vectorStoreId) -> VectorStoreDeleteResponse</code>

## Files

Types:

- <code><a href="./src/resources/vector-stores/files.ts">VectorStoreFileObject</a></code>
- <code><a href="./src/resources/vector-stores/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/vector-stores/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="post /vector_stores/{vector_store_id}/files">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">create</a>(vectorStoreId, { ...params }) -> VectorStoreFileObject</code>
- <code title="get /vector_stores/{vector_store_id}/files/{file_id}">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">retrieve</a>(vectorStoreId, fileId) -> VectorStoreFileObject</code>
- <code title="get /vector_stores/{vector_store_id}/files">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">list</a>(vectorStoreId, { ...params }) -> FileListResponse</code>
- <code title="delete /vector_stores/{vector_store_id}/files/{file_id}">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">delete</a>(vectorStoreId, fileId) -> FileDeleteResponse</code>

## FileBatches

Types:

- <code><a href="./src/resources/vector-stores/file-batches/file-batches.ts">VectorStoreFileBatchObject</a></code>

Methods:

- <code title="post /vector_stores/{vector_store_id}/file_batches">client.vectorStores.fileBatches.<a href="./src/resources/vector-stores/file-batches/file-batches.ts">create</a>(vectorStoreId, { ...params }) -> VectorStoreFileBatchObject</code>
- <code title="get /vector_stores/{vector_store_id}/file_batches/{batch_id}">client.vectorStores.fileBatches.<a href="./src/resources/vector-stores/file-batches/file-batches.ts">retrieve</a>(vectorStoreId, batchId) -> VectorStoreFileBatchObject</code>
- <code title="post /vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel">client.vectorStores.fileBatches.<a href="./src/resources/vector-stores/file-batches/file-batches.ts">cancel</a>(vectorStoreId, batchId) -> VectorStoreFileBatchObject</code>

### Files

Types:

- <code><a href="./src/resources/vector-stores/file-batches/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /vector_stores/{vector_store_id}/file_batches/{batch_id}/files">client.vectorStores.fileBatches.files.<a href="./src/resources/vector-stores/file-batches/files.ts">list</a>(vectorStoreId, batchId, { ...params }) -> FileListResponse</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">Batch</a></code>
- <code><a href="./src/resources/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /batches">client.batches.<a href="./src/resources/batches.ts">create</a>({ ...params }) -> Batch</code>
- <code title="get /batches/{batch_id}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(batchId) -> Batch</code>
- <code title="get /batches">client.batches.<a href="./src/resources/batches.ts">list</a>({ ...params }) -> BatchListResponse</code>
- <code title="post /batches/{batch_id}/cancel">client.batches.<a href="./src/resources/batches.ts">cancel</a>(batchId) -> Batch</code>

# Organization

## AuditLogs

Types:

- <code><a href="./src/resources/organization/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /organization/audit_logs">client.organization.auditLogs.<a href="./src/resources/organization/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponse</code>

## Invites

Types:

- <code><a href="./src/resources/organization/invites.ts">Invite</a></code>
- <code><a href="./src/resources/organization/invites.ts">InviteListResponse</a></code>
- <code><a href="./src/resources/organization/invites.ts">InviteDeleteResponse</a></code>

Methods:

- <code title="post /organization/invites">client.organization.invites.<a href="./src/resources/organization/invites.ts">create</a>({ ...params }) -> Invite</code>
- <code title="get /organization/invites/{invite_id}">client.organization.invites.<a href="./src/resources/organization/invites.ts">retrieve</a>(inviteId) -> Invite</code>
- <code title="get /organization/invites">client.organization.invites.<a href="./src/resources/organization/invites.ts">list</a>({ ...params }) -> InviteListResponse</code>
- <code title="delete /organization/invites/{invite_id}">client.organization.invites.<a href="./src/resources/organization/invites.ts">delete</a>(inviteId) -> InviteDeleteResponse</code>

## Users

Types:

- <code><a href="./src/resources/organization/users.ts">User</a></code>
- <code><a href="./src/resources/organization/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/organization/users.ts">UserDeleteResponse</a></code>

Methods:

- <code title="post /organization/users/{user_id}">client.organization.users.<a href="./src/resources/organization/users.ts">create</a>(userId, { ...params }) -> User</code>
- <code title="get /organization/users/{user_id}">client.organization.users.<a href="./src/resources/organization/users.ts">retrieve</a>(userId) -> User</code>
- <code title="get /organization/users">client.organization.users.<a href="./src/resources/organization/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /organization/users/{user_id}">client.organization.users.<a href="./src/resources/organization/users.ts">delete</a>(userId) -> UserDeleteResponse</code>

## Projects

Types:

- <code><a href="./src/resources/organization/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/organization/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /organization/projects/{project_id}">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">create</a>(projectId, { ...params }) -> Project</code>
- <code title="get /organization/projects/{project_id}">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">retrieve</a>(projectId) -> Project</code>
- <code title="get /organization/projects">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="post /organization/projects/{project_id}/archive">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">archive</a>(projectId) -> Project</code>

### Users

Types:

- <code><a href="./src/resources/organization/projects/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/organization/projects/users.ts">UserDeleteResponse</a></code>

Methods:

- <code title="post /organization/projects/{project_id}/users/{user_id}">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">create</a>(projectId, userId, { ...params }) -> ProjectUser</code>
- <code title="get /organization/projects/{project_id}/users/{user_id}">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">retrieve</a>(projectId, userId) -> ProjectUser</code>
- <code title="get /organization/projects/{project_id}/users">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">list</a>(projectId, { ...params }) -> UserListResponse</code>
- <code title="delete /organization/projects/{project_id}/users/{user_id}">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">delete</a>(projectId, userId) -> UserDeleteResponse</code>

### ServiceAccounts

Types:

- <code><a href="./src/resources/organization/projects/service-accounts.ts">ServiceAccountCreateResponse</a></code>
- <code><a href="./src/resources/organization/projects/service-accounts.ts">ServiceAccountListResponse</a></code>

Methods:

- <code title="post /organization/projects/{project_id}/service_accounts">client.organization.projects.serviceAccounts.<a href="./src/resources/organization/projects/service-accounts.ts">create</a>(projectId, { ...params }) -> ServiceAccountCreateResponse</code>
- <code title="get /organization/projects/{project_id}/service_accounts/{service_account_id}">client.organization.projects.serviceAccounts.<a href="./src/resources/organization/projects/service-accounts.ts">retrieve</a>(projectId, serviceAccountId) -> ProjectServiceAccount</code>
- <code title="get /organization/projects/{project_id}/service_accounts">client.organization.projects.serviceAccounts.<a href="./src/resources/organization/projects/service-accounts.ts">list</a>(projectId, { ...params }) -> ServiceAccountListResponse</code>

### APIKeys

# Projects

## ServiceAccounts

Types:

- <code><a href="./src/resources/projects/service-accounts.ts">ServiceAccountDeleteResponse</a></code>

Methods:

- <code title="delete /organization/projects/{project_id}/service_accounts/{service_account_id}">client.projects.serviceAccounts.<a href="./src/resources/projects/service-accounts.ts">delete</a>(projectId, serviceAccountId) -> ServiceAccountDeleteResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/projects/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/projects/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="get /organization/projects/{project_id}/api_keys/{key_id}">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">retrieve</a>(projectId, keyId) -> ProjectAPIKey</code>
- <code title="get /organization/projects/{project_id}/api_keys">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">list</a>(projectId, { ...params }) -> APIKeyListResponse</code>
- <code title="delete /organization/projects/{project_id}/api_keys/{key_id}">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">delete</a>(projectId, keyId) -> APIKeyDeleteResponse</code>
