import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Costumes from './pages/Costumes'
import Accessories from './pages/Accessories'
import Toys from './pages/Toys'
import Towers from './pages/Towers'
import Signup from './pages/Signup'
import Login from './pages/Login'
// import Account from './pages/Account'
import Footer from './components/Footer';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div>
		<ApolloProvider client={client}>
			<div>
				<StoreProvider>
				<header>
				<Navbar />
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/costumes" element={<Costumes />} />
							<Route path="/accessories" element={<Accessories />} />
							<Route path="/toys" element={<Toys />} />
							<Route path="/towers" element={<Towers />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							{/* <Route pathh="/account" element={<Account />} */}
						</Routes>
					</Router>
				</header>
				<Footer/>
				</StoreProvider>
			</div>
		</ApolloProvider>
    </div>
  );
}

export default App;
