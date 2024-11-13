import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className='hero-bg relative'>
			{/* Navbar */}
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
				<img src='/cine.png' alt='Logo' className='w-32 md:w-52' />
				<Link to={"/login"} className='text-white bg-custom-purple py-1 px-2 rounded'>
					Sign In
				</Link>
			</header>

			{/* hero section */}
			<div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>Watch it all. Watch it now.</h1>
				<p className='text-lg mb-4'>Everything you love, all in one place.</p>
				<p className='mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>

				<form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
					<input
						type='email'
						placeholder='Email address'
						className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='bg-custom-purple text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					</button>
				</form>
			</div>


			{/* separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 1 section */}

			<div className='flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-custom-purple to-black'>
				<h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>GET MOVIE SUBSCRIPTION TODAY</h2>
				<button 
				onClick={() => navigate("/signup")}
				className='text-white font-bold border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition'>
					SUBSCRIBE NOW
				</button>
			</div>


			{/* separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 2nd section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 relative'>
						<div className='relative'>
							<img src='/got_phone.png' alt='Game of Thrones img' className='mt-4' />

							<div
								className='flex items-center gap-2 absolute bottom-12 left-1/2 -translate-x-[45%] bg-black
              w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2
              '
							>
								<img src='/got_small.png' alt='image' className='h-full' />
								<div className=' flex justify-between items-center w-full'>
									<div className='flex flex-col gap-0'>
										<span className='text-md lg:text-lg font-bold'>Game of Thrones</span>
										<span className='text-sm text-blue-500'>Downloading...</span>
									</div>

									<img src='/download-icon.gif' alt='' className='h-12' />
								</div>
							</div>
						</div>
					</div>
					{/* right side */}

					<div className='flex-1 md:text-left text-center'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
							Download options to watch offline
						</h2>
						<p className='text-lg md:text-xl'>
							Save your favorites and always have something to watch.
						</p>
					</div>
				</div>
			</div>

			{/* separator */}

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 3rd section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch everywhere</h2>
						<p className='text-lg md:text-xl'>
							Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
						</p>
					</div>

					{/* right side */}
					<div className='flex-1 relative overflow-hidden'>
						<img src='/device-pile.png' alt='Device image' className='mt-4 z-20 relative' />
						<video
							className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10
               max-w-[63%] 
              '
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source src='/video-devices.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			{/* separator */}

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 4 section */}
			<div className='flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-black to-custom-purple'>
				<h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>INDULGE YOURSELF WITH MOVIE</h2>
				<button 
				onClick={() => navigate("/signup")}
				className='text-white font-bold border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition'>
					SUBSCRIBE NOW
				</button>
			</div>

				{/* separator */}

				<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 5 section */}

					{/* <div className="relative min-h-screen text-white"> */}

			{/* Background Image */}
			{/* <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: "url('/movie_exp.png')" }}></div> */}

			{/* Content Container */}
				{/* <div className="absolute top-[20%] left-[15%] max-w-6xl space-y-6">
				<div className="text-5sm font-semibold tracking-wide uppercase"> Subscribe today and ...</div>
				<h1 className="text-5xl font-bold">Get a Movie Theatre Experience!</h1>
				<p className="text-lg">
				All Your Favorites, All in One Place! Stream New Releases, Timeless Classics, and Top TV Shows. Anytime!
				</p>
			</div>
			</div> */}

			{/* 5 section ends*/}

					<div className="relative min-h-screen text-white">
			{/* Background Image */}
			<div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: "url('/movie_exp.png')" }}></div>

			{/* Content Container */}
			<div className="absolute top-[20%] left-[5%] md:left-[15%] max-w-6xl space-y-4 px-4 md:px-0">
				<div className="text-xs md:text-sm font-semibold tracking-wide uppercase">
				Subscribe today and ...
				</div>
				<h1 className="text-3xl md:text-5xl font-bold">
				Get a Movie Theater Experience!
				</h1>
				<p className="text-sm md:text-lg">
				All Your Favorites, All in One Place! Stream New Releases, Timeless Classics, and Top TV Shows. Anytime!
				</p>
			</div>
			</div>


			

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />
		</div>
	);
};
export default AuthScreen;