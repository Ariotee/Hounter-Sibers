import { PageSelector } from './PageSelector'

import ArrowDown from '../images/arrow_down.svg'

export const PageList = () => {
	return (
		<ul className='flex items-center justify-center'>
			<PageSelector>About Us</PageSelector>
			<PageSelector>Article</PageSelector>
			<PageSelector>
				Property <img className='ml-[10px]' src={ArrowDown} alt='ArrowDown' />
			</PageSelector>
		</ul>
	)
}
