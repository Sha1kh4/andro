import Header  from "@/components/header";
import { HeaderTabs } from "@/components/head-tabs";
import CardsGrid from "@/components/cards-grid";
export default function Home() {
  return (
    <main className="flex flex-col gap-6 pb-10">
      <Header/>
      <HeaderTabs/>
      <CardsGrid/>
    </main>
  );
}
