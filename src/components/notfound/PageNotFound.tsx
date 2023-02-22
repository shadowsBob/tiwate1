import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h1>PageNotFound</h1>
      <Link to="/">回到首页</Link>
    </div>
  );
}

export default PageNotFound;