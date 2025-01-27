import React from 'react'
import MiniDeal from '../components/MiniDeal'
import '../style/pages/deals.css'

const Deals = () => {
  return (
    <div className="deals">
      <div className="topDel">
        <h4>deals</h4>
        <h4>home &gt;&gt; deals</h4>
      </div>
      <div className="container">
        <h1>Deals Of The Day</h1>
        <MiniDeal />
      </div>
    </div>
  );
}

export default Deals
