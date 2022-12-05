import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import './layout.scss'
export const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="page">
        {/* <span className="top-tags"> &lt;html&gt; </span> */}
        {/* <span className="tags top-tags"> &lt;body&gt; </span> */}

        <Outlet />
        <span className="tags bottom-tags">
          {/* &lt;/body&gt; */}
          <br />
          {/* <span className="bottom-tag-html"> &lt;/html&gt; </span> */}
        </span>
      </div>
    </div>
  )
}
