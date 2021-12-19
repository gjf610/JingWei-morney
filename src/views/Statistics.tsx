import { ReactNode, useState } from "react";
import styled from "styled-components";
import day from "dayjs";
import Layout from "../components/Layout";
import { CategorySection } from "./Money/CategorySection";
import { RecordItem, useRecords } from "../hooks/useRecord";
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getName } = useTags()
  const hash: { [K: string]: RecordItem[] } = {}
  const selectedRecord = records.filter(r => r.category === category)
  selectedRecord.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  })
  console.log(array)
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={(value) => setCategory(value)} />
      </CategoryWrapper>
      {array.map(([date, record]) =>
        <div>
          <Header>{date}</Header>
          {record.map(r => {
            return (<Item >
              <div className="tags oneLine">
                {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                  .reduce((result, span, index, arr) =>
                    result.concat(index < arr.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                }
              </div>
              {r.note && <div className="note">{r.note}</div>}
              <div className="amount">
                ￥{r.amount}
              </div>
            </Item>)
          })}
        </div>
      )}
    </Layout>
  );
}
export default Statistics