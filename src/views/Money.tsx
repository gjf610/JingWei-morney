import styled from "styled-components";
import Layout from "../components/Layout";

import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";

const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
function Money() {
  return (
    <MoneyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MoneyLayout>
  );
}

export default Money