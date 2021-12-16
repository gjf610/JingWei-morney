import styled from "styled-components";
import Layout from "../components/Layout";

import { TagsSection } from "./Money/TagsSection";
import { NotesSection } from "./Money/NotesSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";

const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
function Money() {
  return (
    <MoneyLayout>
      <TagsSection>

      </TagsSection>
      <NotesSection>
        <label >
          <span>备注</span>
          <input type="text" placeholder="这里添加备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <output >100</output>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="OK">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>

        </div>
      </NumberPadSection>
    </MoneyLayout>
  );
}

export default Money