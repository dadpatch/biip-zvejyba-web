import { RoleTypes, ToolTypeType } from './constants';

export type ProfileId = 'personal' | string;
export interface Profile {
  id: ProfileId;
  name: string;
  code?: string;
  email?: string;
  role: RoleTypes;
  phone: string;
}
export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: RoleTypes;
  phone?: string;
  error?: string;
  profiles?: Profile[];
  freelancer: boolean;
}

export interface TenantUser {
  id?: string;
  user?: User;
  role: RoleTypes;
}

export interface Tenant {
  id: number;
}

export interface UpdateTokenProps {
  token?: string;
  error?: string;
  message?: string;
  refreshToken?: string;
}

export interface ResponseProps {
  endpoint: () => Promise<any>;
  onSuccess: (data: any) => void;
  onError?: (data: any) => void;
  onOffline?: () => void;
}

export type FileProps = {
  url: string;
  name: string;
  size: number;
  main?: boolean;
};

export interface ToolType {
  id: number;
  label: string;
  type: ToolTypeType;
}

export interface BuiltTool {
  buildEvent: {
    id: string;
    data: any;
    geom: any;
    location: Location;
  };
  weightEvent: {
    id: string;
    data: { [key: string | number]: string | number };
  };
  type: string;
  tools: Tool[];
}

export interface Location {
  id: string;
  name: string;
  municipality: string;
}

export interface Tool {
  id: number;
  sealNr: string;
  data: {
    eyeSize: number;
    eyeSize2: number;
    eyeSize3: number;
    netLength: number;
  };
  toolType: ToolType;
  toolGroup: ToolGroup['id'];
  tenant: Tenant['id'];
  user: User['id'];
}

export interface Tool {
  id: number;
  sealNr: string;
  data: {
    eyeSize: number;
    eyeSize2: number;
    eyeSize3: number;
    netLength: number;
  };
  toolType: ToolType;
  toolGroup: ToolGroup['id'];
  tenant: Tenant['id'];
  user: User['id'];
}

export interface ToolFormProps {
  toolType?: ToolType;
  sealNr?: string;
  data: {
    eyeSize?: string;
    eyeSize2?: string;
    eyeSize3?: string;
    netLength?: string;
  };
}

export interface ToolGroup {
  id: number;
  tools: any[];
  startDate: Date;
  startFishing: Fishing['id'];
  endDate: Date;
  endFishing: Fishing['id'];
  geom: any;
  locationType: string;
  locationId: number;
  locationName: string;
  tenant: Tenant['id'];
  user: User['id'];
}

export interface Fishing {
  id: number;
  startDate: Date;
  endDate: Date;
  skipDate: Date;
  geom: any;
  type: FishType['id'];
  tenant: Tenant['id'];
  user: User['id'];
}

export interface FishType {
  id: number;
  label: string;
}

export interface DeleteInfoProps {
  deleteButtonText?: string;
  deleteDescriptionFirstPart?: string;
  deleteDescriptionSecondPart?: string;
  deleteTitle?: string;
  deleteName?: string;
  handleDelete?: (props?: any) => void;
}
