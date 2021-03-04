import Header from './component/header/Header'
import SearchPanel from './component/searchPanel/SearchPanel'
import Content from './component/content/Content'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<hr />
				<div className="containter">
					<SearchPanel />
					<Content />
				</div>

			</header>
		</div>
	)
}

export default App
