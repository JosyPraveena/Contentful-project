import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/UI/theme";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./home";
import PageNotFound from "./404";
import CategoryPage from "./components/CategoryPage";
import BlogMain from "./components/BlogMain";
import BlogArticle from "./components/BlogArticle";
import BlogDetails from "./components/BlogDetails";
import Product from "./components/Product";
import Shoppingcart from "./components/Shoppingcart"

function App() {
	const [data, setData] = useState("");
	const [mugData, setMugData] = useState("");
	const [shirtData, setShirtData] = useState("");
	const [blogData, setBlogData] = useState("");
	const [count, setCount] = useState(0)
	const [cartItems, setCartItems] = useState([])
	const [qty,setQty] = useState(1)
	const [isStateEmpty,setIsStateEmpty] = useState(true)
 
	//const [addItems,setAddItems] = useState(null)

	const fetchData = async () => {

		try {
			const response = await fetch(
				"https://comicsawesome.herokuapp.com/shirt/"
			);
			const shirtData = await response.json();


			setShirtData(shirtData);
			//console.log(shirtData)
        } catch (err) {
            console.error(err.message);
		}
		try {

			const response = await fetch("https://comicsawesome.herokuapp.com/mug/");
			const mugData = await response.json();


			setMugData(mugData);
			//console.log(mugData)
        } catch (err) {
            console.error(err.message);
		}
		try {

			const response = await fetch("https://comicsawesome.herokuapp.com/book/");
			const data = await response.json();


			setData(data);
			//console.log(data)
        } catch (err) {
            console.error(err.message);
		}
		try {

			const response = await fetch("https://comicsawesome.herokuapp.com/blog/");
			const blogData = await response.json();


			setBlogData(blogData);
			//console.log(blogData)
        } catch (err) {
            console.error(err.message);
        }
	};
	
	useEffect(() => {
		fetchData();
	}, []);


	const { items } = blogData;
	
	const addShoppingcart = (currentItem) =>{
		let item_present = false
		if(cartItems.length > 0){
			setCartItems(cartItems.map(each => { if(each.title === currentItem.title){
				if(each.quantity < 5)	{each.quantity = each.quantity + 1 
					setCount(count+1)	
					setIsStateEmpty(true)}
					else{
						setIsStateEmpty(false)
					  }
					item_present =  true
				}
				return each
				}))
		}
		if(cartItems.length <= 0 || !item_present){
		setCartItems([...cartItems,currentItem])
		setCount(count+1)
	}
		
		}

  const addItems = (id,title) =>{
	
  let item = cartItems.filter(each => id === each.productid && title ===each.title)[0]
  if(item.quantity < 5){
	item.quantity = item.quantity+1
	setCount(count+1)
	setIsStateEmpty(true)
	
  }
  else{
	setIsStateEmpty(false)
  }
  }
  

const reduceItems = (id,title) =>{
	let items = cartItems.filter(each => id === each.productid && title ===each.title)
	if(items.length > 0 )
	{
		let item = items[0]
		if (item.quantity > 1){
			item.quantity = item.quantity-1
			setIsStateEmpty(true)
			setCount(count-1)
		}
	}
}

const deleteItems = (item,quantity)=>{
	setCount(count- quantity)
	setCartItems(cartItems.filter(each => each.title !== item))
	
  }
	

	return (
		<ThemeProvider theme={theme}>
			{items !== undefined &&
				items.map((item) =>
					console.log(item.fields.blogContent.content[0].content[0].value)
				)}
			<Navbar count={count} />
			<Switch>
				<Route path={"/category/shoppingcart"} render={(props) => (<Shoppingcart count={count} 
				cartItems={cartItems} 
				deleteItems={deleteItems}
				addItems={addItems}
				reduceItems={reduceItems} 
				isStateEmpty={isStateEmpty}
				/>)}/>
                <Route
                    path={"/category/:id/:product"}
                    render={(props) => (
                        <Product
                            data={data}
                            mugData={mugData}
							shirtData={shirtData}
							category={{"book":data, "shirt": shirtData, "mug":mugData}}
							{...props}
							addShoppingcart={addShoppingcart}
                        />
                    )}
                />
                <Route
                    path={"/category/:id"}
                    render={(props) => (
                        <CategoryPage
                            data={data}
                            mugData={mugData}
							shirtData={shirtData}
                            {...props}
                        />
                    )}
                />
        		<Route
					path={"/blog/:id"}
					render={(props) => <BlogDetails blogData={blogData} {...props} />}
				/>
				<Route path='/blog/' render={(props) => <BlogMain blogData={blogData} {...props} />}/>
                <Route exact
                    path='/'
                    render={(props) => (
                        
						<HomePage  
                            data={data}
                            mugData={mugData}
                            shirtData={shirtData}
                            {...props}
                        />
                    )}
                />
				
                <Route component={PageNotFound} />
            </Switch>
		</ThemeProvider>
	);
}

export default App;