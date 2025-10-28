import TaskforgeLogoSvg from "./assets/svgs/taskforge-logo";

function App() {
  return (
    <div className="h-full w-full bg-[#F8F9FA]">
      <div className="px-10 py-20">
        <div className="max-w-[650px] w-full mx-auto">
          <div className="border border-[#D5D9EB] rounded-lg pb-4 bg-white">
            <div className="min-h-[200px]">
              <TaskforgeLogoSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
