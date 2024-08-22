import Dashboard from "./components/dashboard/Dashboard";
import SideBar from "./components/Sidebar";

const App = () => {
	return (
		<div style={{ display: "flex" }}>
			<SideBar />
			<Dashboard />
		</div>
	);
};

export default App;
