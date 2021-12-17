import React from "react";
import { generateOutput } from "./NumberPadSection/generateOutput";
import { Wrapper } from "./NumberPadSection/Wrapper";

type Props = {
  value: number,
  onChange: (value: number) => void;
  onOK?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString()
  const setOutput = (output: string) => {
    let value
    if (output.length > 16) {
      value = parseFloat(output.slice(0, 16))
    } else if (output.length === 0) {
      value = 0
    } else {
      value = parseFloat(output)
    }
    props.onChange(value)
  }
  const onClickButtonWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLDivElement).textContent

    if (text === null) { return }
    if (text === 'OK') {
      if (props.onOK) props.onOK()
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output))
    }
  }
  return (
    <Wrapper>
      <output >{output}</output>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
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
    </Wrapper>
  )
}
export { NumberPadSection }