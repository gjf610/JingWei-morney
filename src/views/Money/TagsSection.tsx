import styled from "styled-components";
const TagsSection = styled.section`
  background: #ffffff; padding: 12px 16px;
  flex-grow: 1;
  display: flex; flex-direction: column;
  justify-content: flex-end;align-items: flex-start;
  >ol{ margin: 0 -12px;
    >li{
      display: inline-block; margin: 8px 12px; padding: 3px 18px;
      font-size: 14px; background: #D9D9D9; border-radius: 18px;
    }
  }
  > button{ background: none; border: none;
    padding: 2px 4px; margin-top: 8px;
    border-bottom: 1px solid #333; color:#666;
  }
`
export { TagsSection };