import { Avatar, Icon } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineSharp';

function ChannelRow({image, Channel, Verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo" alt={Channel} src={image}/>
            <div className="channelRow_text">
                <h4>
                  {Channel} {Verified && <VerifiedIcon/>}
                </h4>                              
                   <p>{subs} Subscribers . {noOfVideos} Videos</p>
                   <p>{description}</p>              
            </div>           
        </div>
    )
}

export default ChannelRow
