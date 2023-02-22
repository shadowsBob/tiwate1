import { useLocation,useParams}  from 'react-router-dom'

function Detail() {
  const location = useLocation();
  const params = useParams();

  console.log(location);
  console.log(params);

  //转换url中search里的一个参数为key value的形式
  //可以直接使用get获取，也可以用下面这个方法转换成对象形式
  const searchParams = new URLSearchParams(location.search);
  console.log(Object.fromEntries(searchParams));
  
  return (
    <div>Detail</div>
  )
}

export default Detail