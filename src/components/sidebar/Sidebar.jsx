import dashboardIcon from "/src/assets/dashboard.svg";
import statsIcon from "/src/assets/stats.svg";

import calenderIcon from "/src/assets/calender.svg";
import logOutIcon from "/src/assets/logout.svg";

const SideBar = () => {
	return (
		<div className="container-sidebar">
			<ul className="items">
				<li>
					<img className="icon-img" src={dashboardIcon} alt="Dashboard icon" />
					<span>Dashboard</span>
				</li>
				<li>
					<img className="icon-img" src={statsIcon} alt="Statistics icon" />
					<span>Stats</span>
				</li>

				<li>
					<img className="icon-img" src={calenderIcon} alt="Calender icon" />
					<span>Calender</span>
				</li>
			</ul>

			<div className="logout-wrapper">
				<span>Logout</span>
				<img className="icon-img" src={logOutIcon} alt="Logging out icon" />
			</div>
		</div>
	);
};

export default SideBar;
