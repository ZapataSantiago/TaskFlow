# TaskFlow

App de gestión de proyectos, tareas y empleados para escritorio y celular.

## Stack

- TypeScript en todo el proyecto
- Monorepo con pnpm workspaces + Turborepo
- apps/mobile: React Native con Expo (Expo Router)
- apps/desktop: React + Vite + Electron
- packages/shared: tipos, cliente de Supabase, validaciones (Zod) y permisos por rol
- Backend: Supabase (PostgreSQL, Auth, Row Level Security)

## Roles

- super_admin: Dashboard, Usuarios, Proyectos
- admin: Empleados, Proyectos, Horarios, Reportes, Tareas
- empleado: ve sus Proyectos asignados y la lista de tareas de cada uno

## Reglas

- Los permisos se validan SIEMPRE en la base de datos con RLS, no solo en la interfaz
- Toda la lógica compartida va en packages/shared, no se duplica entre apps
- Interfaz en español
- Código y nombres de variables en inglés
- Commits pequeños por funcionalidad
