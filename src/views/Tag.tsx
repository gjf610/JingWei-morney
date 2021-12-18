import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTags } from "../hooks/useTags";
import styled from "styled-components";
import Layout from "../components/Layout";
import SvgIcon from "../components/SvgIcon";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Center } from "../components/Center";
import { Space } from "../components/Space";
type Params = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
  >.icon {
    width: 18px;
    height: 18px;
  }
`
const InputWrapper = styled.div`
  background: #fff;
  margin-top: 8px;
  padding: 0 16px;
`
const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags()
  const { id: idString } = useParams<Params>()
  const tag = findTag(parseInt(idString))

  const tagContent = (tag: { id: number; name: string }) => (
    <>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名"
          value={tag.name} onChange={(e) => {
            updateTag(tag.id, { name: e.target.value })
          }} />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </>
  )
  const history = useHistory()
  const onClickBack = () => {
    history.goBack()
  }
  return (
    <Layout>
      <Topbar>
        <SvgIcon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <SvgIcon />
      </Topbar>
      {tag ? tagContent(tag) :
        <Center>
          <Space />
          <Space />
          tag 不存在
        </Center>
      }
    </Layout>
  )
}

export { Tag }