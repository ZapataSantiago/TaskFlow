export const ROLES = ['super_admin', 'admin', 'empleado'] as const;

export type Role = (typeof ROLES)[number];
