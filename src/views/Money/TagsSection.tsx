import React from "react";
import styled from "styled-components";
import { useTags } from "../../useTags";


const Wrapper = styled.section`
  background: #ffffff; padding: 12px 16px;
  flex-grow: 1;
  display: flex; flex-direction: column;
  justify-content: flex-end;align-items: flex-start;
  >ol{ margin: 0 -12px;
    >li{
      display: inline-block; margin: 8px 12px; padding: 3px 18px;
      font-size: 14px; background: #D9D9D9; border-radius: 18px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button{ background: none; border: none;
    padding: 2px 4px; margin-top: 8px;
    border-bottom: 1px solid #333; color:#666;
  }
`
type Props = {
  value: string[];
  onChange: (value: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const selectedTags = props.value
  const { tags, setTags } = useTags()

  const onAndTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      setTags([...tags, tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if (index >= 0) {
      // 如果 tag 已被选中，就赋值所有没有被选中的 tag，作为新的 selectedTags
      props.onChange(selectedTags.filter(t => t !== tag))
    } else {
      props.onChange([...selectedTags, tag])
    }
  }
  const selected = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => (
          <li className={selected(tag)} key={tag}
            onClick={() => onToggleTag(tag)}>{tag}</li>
        ))}
      </ol>
      <button onClick={onAndTag}>新增标签</button>
    </Wrapper>
  )
}
export { TagsSection };