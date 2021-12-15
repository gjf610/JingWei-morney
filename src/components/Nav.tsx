import { Link } from "react-router-dom"
import styled from "styled-components"
import SvgIcon from './SvgIcon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  > ul{
    display: flex;

    > li {
      width: 33.33%;
      text-align: center;
      padding: 16px; 
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags"><SvgIcon name="tag" width="30" height="30"></SvgIcon></Link>
                </li>
                <li>
                    <Link to="/money"><SvgIcon name="money" width="30" height="30"></SvgIcon></Link>
                </li>
                <li>
                    <Link to="/statistics"><SvgIcon name="chart" width="30" height="30"></SvgIcon></Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav