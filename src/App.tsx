import RealTime from "./components/RealTime";
import Deal from "./components/Deal";
import Input from "./components/Input";
import Load from "./components/Load";
import useFetch from "./hook/useFetch";

const App = () => {
	const { isReady, eurInfo } = useFetch();

	return (
		<div className="App">
			{!isReady ? (
				<Load />
			) : (
				<div>
					{eurInfo && (
						<>
							<RealTime eurInfo={eurInfo} />
							<Deal eurInfo={eurInfo} />
							<hr />
							<Input eurInfo={eurInfo} />
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default App;
