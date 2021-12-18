import { useState } from "react";
import styled from "styled-components";
import day from "dayjs";
import Layout from "../components/Layout";
import { CategorySection } from "./Money/CategorySection";
import { useRecords } from "../hooks/useRecord";
import { useTags } from "../hooks/useTags";

const CategoryWrapper = styled.div`
  background: #fff;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getName } = useTags()
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={(value) => setCategory(value)} />
      </CategoryWrapper>
      <div>
        {records.map(r => {
          return (<Item>
            <div className="tags">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">{r.note}</div>}
            <div className="amount">
              ￥{r.amount}
            </div>
            {/* <div className="day">
              {day(r.createdAt).format('YYYY-MM-DD')}
            </div> */}
          </Item>)
        })}
      </div>
    </Layout>
  );
}
export default Statistics