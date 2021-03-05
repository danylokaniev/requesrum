import { Provider } from 'react-redux'
import store from './redux/store'


import Header from './component/header/Header'
import SearchPanel from './component/searchPanel/SearchPanel'
import Blocks from './component/Blocks/Blocks'
import Pagination from './component/pagination/Pagination'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<Header />
					<hr />
					<div className="containter">
						<SearchPanel />
						<div className="content">
							<Blocks />
							<Pagination />
						</div>
					</div>

				</header>
			</div>
		</Provider>

	)
}

export default App
