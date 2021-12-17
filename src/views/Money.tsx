import styled from "styled-components";
import Layout from "../components/Layout";

import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { useState } from "react";

const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
type Category = '-' | '+'
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0,
  })
  return (
    <MoneyLayout>
      {selected.tags}
      <hr />
      {selected.note}
      <hr />
      {selected.category}
      <hr />
      {selected.amount}
      <TagsSection value={selected.tags}
        onChange={(tags) => setSelected({ ...selected, tags })} />
      <NoteSection value={selected.note}
        onChange={(note) => setSelected({ ...selected, note })} />
      <CategorySection value={selected.category}
        onChange={(category) => setSelected({ ...selected, category })} />
      <NumberPadSection value={selected.amount}
        onChange={(amount) => setSelected({ ...selected, amount })}
        onOK={() => { }}
      />
    </MoneyLayout>
  );
}

export default Money