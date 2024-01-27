import ActiveLabel from './components/active-lable';
import Button from './components/button';
import NotActiveLabel from './components/not-active-lable';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      {/* <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel> */}
      <StatusLabel status={Status.Active}>{'Active'}</StatusLabel>
      <StatusLabel status={Status.NotActive}>{'Not Active'}</StatusLabel>
      <StatusLabel status={Status.Suspended}>{'Suspended'}</StatusLabel>
      <StatusLabel status={Status.Pending}>{'Pending'}</StatusLabel>
      {/* <Button>{'Add company'}</Button> */}
    </main>
  );
}
