import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/home";
import Navbar from "./page/NavBar/Navbar";
import Portfolio from "./page/portfolio/Portfolio";
import Activity from "./page/activity/Activity";
import Wallet from "./page/wallet/Wallet";
import Withdrawal from "./page/withdrawal/Withdrawal";
import PaymentDetails from "./page/paymentDetails/PaymentDetails";
import StockDetails from "./page/stockDetails/StockDetails";
import WatchList from "./page/watchList/WatchList";
import Profile from "./page/profile/Profile";
import SearchCoin from "./page/searchCoin/SearchCoin";
import NotFound from "./page/notFound/NotFound";
import Auth from "./page/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./state/Auth/Action";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("auth", auth);

  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);

  return (
    <>
      {auth.user ? (
        <div>
          <Navbar></Navbar>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/market/:id" element={<StockDetails />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchCoin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}

      {/* <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/market/:id" element={<StockDetails />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchCoin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div> */}
    </>
  );
}

export default App;
