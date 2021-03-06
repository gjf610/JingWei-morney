import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { useRecords } from "../hooks/useRecord";

const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`
type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const { addRecordItem } = useRecords()
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const submit = () => {
    if (addRecordItem(selected)) {
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }
  return (
    <MoneyLayout scrollTop={9999}>
      <TagsSection value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })} />
      <NoteSection value={selected.note}
        onChange={(note) => onChange({ note })} />
      <CategoryWrapper>
        <CategorySection value={selected.category}
          onChange={(category) => onChange({ category })} />
      </CategoryWrapper>

      <NumberPadSection value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={submit} />
    </MoneyLayout>
  );
}

export default Money