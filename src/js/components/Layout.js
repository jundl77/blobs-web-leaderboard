import React from "react";
import Background from "./Background";
import LeaderboardTable from "./LeaderboardTable";

var rankings = [{}];

export function setRankings(rankingsLocal) {
    console.log("set")
    console.log(rankingsLocal)
    rankings = rankingsLocal
}

const Layout = () => (
    <div>
        <div className="title">Blobs World Wide Leaderboard</div>
        <LeaderboardTable rankings={rankings}/>
        <Background/>
    </div>
)

export default Layout