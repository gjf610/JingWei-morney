import React from "react";
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
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MoneyLayout>
      <TagsSection value={selected.tags}
        onChange={(tags) => onChange({ tags })} />
      <NoteSection value={selected.note}
        onChange={(note) => onChange({ note })} />
      <CategorySection value={selected.category}
        onChange={(category) => onChange({ category })} />
      <NumberPadSection value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={() => { }} />
    </MoneyLayout>
  );
}

export default Money