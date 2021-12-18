import React from "react";
import { useTags } from "../useTags";
import Layout from "../components/Layout";
import { Button } from "../components/Button";
import styled from "styled-components";
import SvgIcon from "../components/SvgIcon";
import { Center } from "../components/Center";
import { Space } from "../components/Space";
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

function Tags() {
  const { tags, addTag } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <SvgIcon name="right" />
            </Link>
          </li>)}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={addTag}>新增标签</Button>
        <Space />
      </Center>
    </Layout>
  );
}

export default Tags