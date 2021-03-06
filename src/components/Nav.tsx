import { NavLink } from "react-router-dom"
import styled from "styled-components"
import SvgIcon from './SvgIcon';

const NavWrapper = styled.nav`
  background: #fff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  > ul{
    display: flex;
    > li {
        width: 33.33%;
        text-align: center;
        >a{
            padding: 4px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            >.icon{
                width: 24px;
                height: 24px;;
            }
            &.selected {
                color: red;
                .icon {
                    fill: red;
                }
            }       
        }
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <SvgIcon name="tag" />标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <SvgIcon name="money" />记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <SvgIcon name="chart" />统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav