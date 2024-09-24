import { PageList } from './ui/PageList'
import { AccentBtn } from '../../shared/buttons'
import { TophAccent } from '../../shared/textarea'

import Logotype from './images/logo.svg'

import './style.css'

export const Header = () => {
	return (
		<header className='pt-10 sticky'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<div className='flex justify-center items-center'>
						<img src={Logotype} alt='LogoIcon' />
						<div className='font-bold text-base text-logo-color ml-3'>
							Hounter
						</div>
					</div>
					<div className='flex items-center justify-between w-[507px]'>
						<nav className=''>
							<PageList />
						</nav>
						<AccentBtn>
							<TophAccent>
								<a href='#'>Sign Up!</a>
							</TophAccent>
						</AccentBtn>
					</div>
				</div>
			</div>
		</header>
	)
}
