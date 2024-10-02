const Title = () => {
  return (
    <div className="mx-[40px] mt-[40px] h-[56px] w-auto border-b border-white border-opacity-20 text-white flex">
      <div className="text-4xl font-normal flex gap-[8px] w-[180px]">
        <div className="flex-none mt-[12px]">{/* chat icon goes here */}</div>
        <span>取引価格</span>
      </div>
      <span className="ml-[59px] mt-[19px]">※取引面積1㎡あたり</span>
    </div>
  );
};

export default Title;
