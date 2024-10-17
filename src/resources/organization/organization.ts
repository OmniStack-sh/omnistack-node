// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuditLogsAPI from './audit-logs';
import * as InvitesAPI from './invites';
import * as UsersAPI from './users';
import * as ProjectsAPI from './projects/projects';

export class Organization extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

export namespace Organization {
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export import AuditLogListResponse = AuditLogsAPI.AuditLogListResponse;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
  export import Invites = InvitesAPI.Invites;
  export import Invite = InvitesAPI.Invite;
  export import InviteListResponse = InvitesAPI.InviteListResponse;
  export import InviteDeleteResponse = InvitesAPI.InviteDeleteResponse;
  export import InviteCreateParams = InvitesAPI.InviteCreateParams;
  export import InviteListParams = InvitesAPI.InviteListParams;
  export import Users = UsersAPI.Users;
  export import User = UsersAPI.User;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import Projects = ProjectsAPI.Projects;
  export import Project = ProjectsAPI.Project;
  export import ProjectListResponse = ProjectsAPI.ProjectListResponse;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectListParams = ProjectsAPI.ProjectListParams;
}
