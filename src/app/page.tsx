import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Hello Home!</h1>
      <AddCompanyButton />
    </main>
  );
}
