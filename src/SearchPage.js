import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            
            <div className="searchPage_filter">
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
             image="https://i.ytimg.com/vi/Mc_h53sIL_s/hqdefault.jpg"
             Channel="JaspreetSingh"
             Verified
             subs="151"
             noOfVideos={4}
             description="You can find awesome Tutorial here"
            />
            <hr/>
            <VideoRow
                title="Amritsar Shahi Turban"
                channel="Jaspreet Singh"
                subs="174 Subscribers"
                views="5.9K"
                timestamp="1 year ago" 
                descriptions="Turban Tutorial"
               
                
               
                image="https://i.ytimg.com/vi/Mc_h53sIL_s/hqdefault.jpg"
            />
        </div>
    )
}

export default SearchPage
