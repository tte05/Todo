import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>			
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// old synt
//<BrowserRouter>
//<Header />
//<Routes>
//<Route path='/' element={<HomePage todos={todos} />} />
//<Route path='/list/:id' element={<ItemDetails todos={todos} />} />
//<Route path='/todo' element={<ToDoListPage />} />
//<Route path='*' element={<NotFound />} />
//</Routes>
//</BrowserRouter>;