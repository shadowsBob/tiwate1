function Desc({ name, desc, img, say }) {
  const clickHandle = () => {
    // console.log({ name });
    say(name);
  };
  return (
    <div className="Fuckboxcon">
      <h3>{name}</h3>
      <p>{desc}</p>
      <img src={img} alt="" />
      <button onClick={clickHandle}>完成</button>
      <button>删除</button>
    </div>
  );
}
