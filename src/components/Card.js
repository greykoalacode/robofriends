import React from 'react';
const Card = ({name , email, id}) => {

	return (
    <div className='cardd tc bg-spec dib br3 pa3 ma2 grow bw2 shadow-5'>
    	<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
    	<div >
    		<h2 className='dataN'>{name}</h2>
    		<p className='dataE'>{email}</p>
    	</div>
    </div>
	);
}
export default Card;