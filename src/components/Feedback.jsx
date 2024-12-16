import React from 'react';
import LottieReact1 from './LottieReact1';
import { Fade } from 'react-awesome-reveal';

import feedback from '../assets/feedback-2044700_1280.jpg'

const Feedback = () => {
    return (
        <div>
<section>
	<div className="bg-slate-700 text-white py-20 rounded-xl flex md:flex-row flex-col items-center justify-between gap-5 md:p-4 p-2">
		{/* <LottieReact1></LottieReact1> */}
		<div className='md:w-1/2 '>
			<img className='rounded-md' src={feedback} alt="" />
		</div>
		<div className=" border rounded-md mx-auto flex flex-col items-center my-6 md:my-24">
		<Fade direction='right'>
		<div className="flex flex-col w-full  p-8">
				<p className=" text-yellow-300 text-lg uppercase tracking-loose text-">REVIEW</p>
				<p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Leave us a feedback!</p>
				<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
					Please provide your valuable feedback and something something ...
				</p>
			</div>
	    	</Fade>
			<div className="flex flex-col w-full justify-center">
				<div className="w-full ">
					<div className="flex flex-wrap justify-center">
						<div className="w-full md:px-10 px-2">
							<div
								className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
								<div className="flex-auto p-5 lg:p-10">
									<h4 className="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
									<form id="feedbackForm" action="" method="">
										<div className="relative w-full mb-3">
											<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email">Email</label><input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                        required />
                    </div>
											<div className="relative w-full mb-3">
												<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message">Message</label><textarea maxlength="300" name="feedback" id="feedback" rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder="" required></textarea>
											</div>
											<div className="text-center mt-6">
												<button id="feedbackBtn"
                        className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit" 
                        >Submit
                      </button>
											</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> 
        </div>
    );
};

export default Feedback;