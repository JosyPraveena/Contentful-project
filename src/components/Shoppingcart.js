import React, { useState, useEffect } from "react";

import { Route, Link, useParams } from "react-router-dom";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Checkout from "../components/Checkout";
import MiniSpidey from "../img/mini_spidey.png";
import MiniHulk from "../img/mini_hulk.png";
import MiniBatman from "../img/mini_batman.png";
import MiniYoda from "../img/mini_yoda.png";
import MiniIronman from "../img/mini_ironman.png";
import MiniDarth from "../img/mini_darth.png";
import ErrorMessage from "./ErrorMessage";
import parse from "html-react-parser";
import Popover from "@material-ui/core/Popover";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
	cartTotal: {
		fontWeight: "bold",
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles((theme) => ({
	popover: {
		pointerEvents: "none",
	},
	paper: {
		padding: theme.spacing(1),
	},
	tableContainer: {
		minWidth: "350px",
	},
	title: {
		fontFamily: "Bangers",
		fontSize: "3rem",
		textDecoration: "none",
	},
	cartDel: {
		fontFamily: "Montserrat",
		fontSize: "0.5 rem",
		textDecoration: "none",
		backgroundColor: "#f00",
		color: "#fff",
		fontWeight: "bold",
	},
}));

const Shoppingcart = (props) => {
	const [popOverDesc, setPopOverDesc] = useState(null);
	const [targetPopover, setTargetPopover] = useState(0);
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	let { cartItems } = props;

	console.log("Cart Items : ", cartItems);

	const [totalCost, setTotalCost] = useState(0);

	useEffect(() => {
		if (cartItems.length > 0) {
			setTotalCost(
				cartItems
					.map((each) => each.price * each.quantity)
					.reduce((accumulator, currentValue) => accumulator + currentValue)
			);
		}
	}, [props.count, cartItems]);

	useEffect(() => {
		if (cartItems.length > 0) {
			const descriptions = cartItems.map((item, index) => {
				return { id: index, desc: item.description };
			});

			// console.log(descriptions)
			setPopOverDesc(descriptions);
		}
	}, [props.count, cartItems]);

	if (cartItems.length > 0) {
		return (
			<>
				<div id='cartWrapper'>
					{props.isStateEmpty === false ? <ErrorMessage /> : null} <br />
					<br /> <br />
					<div className={classes.title} id='cartTitle'>
						FEED THE CART - IT'S STILL HUNGRY
					</div>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label='customized table'>
							<TableHead>
								<TableRow>
									<StyledTableCell>PRODUCT</StyledTableCell>
									<StyledTableCell align='right'>PRICE</StyledTableCell>
									<StyledTableCell align='right'>QTY</StyledTableCell>
									<StyledTableCell align='right'>TOTAL</StyledTableCell>
									<StyledTableCell align='right' />
								</TableRow>
							</TableHead>
							<TableBody>
								{cartItems.map((each, index) => {
									return (
										<StyledTableRow key={each.title}>
											<StyledTableCell component='th' scope='row'>
												<div id='cartImageProduct'>
													<img
														src={each.image}
														style={{ height: "45px" }}
														ALT={each.title}
													/>
													<div
														aria-owns={open ? "mouse-over-popover" : undefined}
														aria-haspopup='true'
														onMouseEnter={(e) => {
															setTargetPopover(index);
															handlePopoverOpen(e);
														}}
														onMouseLeave={handlePopoverClose}
														// component={Link}
														// to={`/blog/${blogData.blog_id}`}
														// key={blogData.blog_id}
													>
														{each.title}
													</div>
												</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<div className='cartPrice'>{each.price} $</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<div id='cartQuantityWrapper'>
													<div
														className='cartChangeQuantity'
														onClick={() =>
															props.addItems(each.productid, each.title)
														}
													>
														+
													</div>
													<div className='cartQuantity'>{each.quantity}</div>
													<div
														className='cartChangeQuantity'
														onClick={() =>
															props.reduceItems(each.productid, each.title)
														}
													>
														–
													</div>
												</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<div className='cartPrice'>
													{Number.parseFloat(
														each.price * each.quantity
													).toFixed(2)}{" "}
													$
												</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<Chip
													onClick={() =>
														props.deleteItems(each.title, each.quantity)
													}
													size='small'
													label='X'
													className={classes.cartDel}
												/>
											</StyledTableCell>
										</StyledTableRow>
									);
								})}
								{popOverDesc && (
									<Popover
										style={{ width: "800px" }}
										id='mouse-over-popover'
										className={classes.popover}
										classes={{
											paper: classes.paper,
										}}
										open={open}
										anchorEl={anchorEl}
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "left",
										}}
										transformOrigin={{
											vertical: "top",
											horizontal: "left",
										}}
										onClose={handlePopoverClose}
										disableRestoreFocus
									>
										<div>{parse(popOverDesc[targetPopover].desc)}</div>
									</Popover>
								)}
								<TableRow>
									<StyledTableCell className='cartTotal'></StyledTableCell>
									<StyledTableCell
										className='cartTotal'
										align='right'
									></StyledTableCell>
									<StyledTableCell
										className='cartTotal'
										align='right'
									></StyledTableCell>
									<StyledTableCell className='cartTotal' align='right'>
										<b>{totalCost.toFixed(2) + " $"}</b>
									</StyledTableCell>
									<StyledTableCell className='cartTotal' align='right' />
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<div id='cartButtons'>
						<div className='cartButton1'>
							<div>
								<img src={MiniDarth} ALT='Mini Darth' />
							</div>
							<div>
								<Button
									style={{ textDecoration: "none" }}
									component={Link}
									to={`/`}
									variant='contained'
								>
									BUY MORE
								</Button>
							</div>
						</div>
						<div className='cartButton2'>
							<div>
								<img src={MiniYoda} ALT='Mini Yoda' />
							</div>
							<div>
								<Button
									style={{ textDecoration: "none" }}
									component={Link}
									to={`/checkout`}
									variant='contained'
								>
									CHECKOUT
								</Button>
							</div>
						</div>
					</div>
				</div>
				<Route
					path='/checkout/'
					render={(props) => (
						<Checkout totalCost={`${totalCost.toFixed(2)}`} {...props} />
					)}
				/>
			</>
		);
	} else {
		return (
			<>
				<div id='cartWrapper'>
					<div id='cartEmptyCharsTop'>
						<div id='cartEmptyCharTop1'>
							<img src={MiniBatman} ALT='Mini Batman' />
						</div>
						<div id='cartEmptyCharTop2'>
							<img src={MiniHulk} ALT='Mini Hulk' />
						</div>
					</div>
					<div id='cartEmpty' className={classes.title}>
						YOUR CART IS EMPTY
						<br /> <br />
						IT'S HUNGRY ... FEED IT !
					</div>
					<div id='cartEmptyCharBottom'>
						<img src={MiniSpidey} ALT='Mini Spidey' />
					</div>
				</div>
			</>
		);
	}
};

export default Shoppingcart;
