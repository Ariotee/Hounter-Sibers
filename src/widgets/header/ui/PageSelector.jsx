import { PageButton } from '../../../shared/buttons'

export const PageSelector = ({ children }) => {
	return (
		<PageButton>
			<a
				href='#'
				className='flex justify-center items-center font-semibold text-sm text-first-white-color'
			>
				{children}
			</a>
		</PageButton>
	)
}
