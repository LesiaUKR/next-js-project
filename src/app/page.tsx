// import ActiveLabel from './components/active-lable';

import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';

// import Button from './components/button';
// import NotActiveLabel from './components/not-active-lable';
// import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
