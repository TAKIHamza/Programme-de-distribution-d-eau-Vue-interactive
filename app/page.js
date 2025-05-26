// app/page.js

import NavBar from '@/components/NavBar';
import TableauProgramme from '@/components/TableauProgramme';
import ItemSelector from '@/components/ItemSelector';

export default function Home() {
  return (
    <div className="p-8 mx-auto">
      <NavBar />
      <ItemSelector/>
      <TableauProgramme />
    </div>
  );
}
