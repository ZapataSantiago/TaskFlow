import { ROLES } from '@taskflow/shared';

export default function App() {
  return (
    <main>
      <h1>TaskFlow</h1>
      <p>Roles: {ROLES.join(', ')}</p>
    </main>
  );
}
