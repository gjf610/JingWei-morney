import React from "react";
import { useTags } from "../useTags";
import Layout from "../components/Layout";
import styled from "styled-components";
import SvgIcon from "../components/SvgIcon";
import { Link } from "react-router-dom";

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li{
    /* //#E5E5E7 */
    margin:0 16px;
    border-bottom: 1px solid #D5D5D9;
    line-height: 20px;
    >a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
          width: 20px;
          height: 20px;;
      }      
    }

  }
`
const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 18px;
  color: #fff;
  background: #767676;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Space = styled.div`
  height: 16px;
`
function Tags() {
  const { tags, setTags } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <Link to={'/tags/' + tag}>
              <span className="oneLine">{tag}</span>
              <SvgIcon name="right" />
            </Link>
          </li>)}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新增标签</Button>
        <Space />
      </Center>
    </Layout>
  );
}

export default Tags