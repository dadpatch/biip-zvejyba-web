export enum Resources {
  FISHINGS = 'fishings',
  USERS = 'users',
  ME = 'users/me',
}

export enum ServerErrors {
  USER_NOT_FOUND = `Email not found.`,
  WRONG_PASSWORD = 'Wrong password.',
  NOT_FOUND = 'NOT_FOUND',
  NO_PERMISSION = 'NO_PERMISSION',
}

export enum RolesTypes {
  USER = 'USER',
  USER_ADMIN = 'USER_ADMIN',
  OWNER = 'OWNER',
}

export enum LOCATION_ERRORS {
  NO_ERROR = 0,
  POINT_NOT_FOUND = 1,
  WATER_BODY_NOT_FOUND = 2,
  API_ERROR = 3,
  GEOLOCATION_NOT_SUPPORTE = 4,
  PERMISSION_REQUIRED = 5,
  OTHER = 6,
}

export enum LocationType {
  ESTUARY = 'ESTUARY',
  POLDERS = 'POLDERS',
  INLAND_WATERS = 'INLAND_WATERS',
}
export enum ToolType {
  NET = 'NET',
  CATCHER = 'CATCHER',
}

export enum FishingToolsType {
  GROUP = 'GROUP',
  SINGLE = 'SINGLE',
}