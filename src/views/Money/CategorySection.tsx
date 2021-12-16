import styled from "styled-components";

const CategorySection = styled.section`
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
export { CategorySection }