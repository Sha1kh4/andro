import Header  from "@/components/header";
import { HeaderTabs } from "@/components/head-tabs";
import CategoryCards from "@/components/category-cards";
import CardsGrid from "@/components/cards-grid";
export default function Home() {
  return (
    <>
      <Header/>
      <HeaderTabs/>
      <CategoryCards/>
      <CardsGrid/>
    </>
  );
}
