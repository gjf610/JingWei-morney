import React, { useState } from 'react'
import styled from "styled-components";

const Wrapper = styled.section`
font-size: 24px;
> ul{
  display: flex;
  background: #c4c4c4;
  >li{
    padding: 16px 0;
    width: 50%;
    text-align: center;
    position: relative;
    &.selected::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: #333;
    }
  }
}
`

const CategorySection: React.FC = () => {
  const categoryMap = { '-': '支出', '+': '收入' }
  type keys = keyof typeof categoryMap
  const [categoryList] = useState<keys[]>(['-', '+'])
  const [category, setCategory] = useState('-') // + 表示收入， - 表示支出

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
            key={c}
            onClick={() => setCategory(c)}>{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}
export { CategorySection }